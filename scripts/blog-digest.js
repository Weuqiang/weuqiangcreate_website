#!/usr/bin/env node
/**
 * 每日科技日报生成器（免密钥、确定性）
 * --------------------------------------------------
 * 抓取「当日最新科技消息」，自动翻译为中文，组装成一篇当日博文：
 *   - 国际：Hacker News 头条（EN→ZH，机器翻译，MyMemory 免密钥 API）
 *   - 国内：36kr RSS（中文，直接引用）
 * 输出：blog/YYYY-MM-DD-tech-daily.md
 *
 * 设计要点：
 *   - 仅用 Node 内置模块，零依赖，可在 GitHub Actions 直接运行。
 *   - 同日幂等：今天已生成则跳过，避免重复博文。
 *   - 健壮性：任一来源失败不影响另一来源；两源皆空则跳过（不生成空博文）。
 *   - 本地验证：设 DIGEST_MOCK=1 走内置样例数据，无需联网。
 *
 * 用法：node scripts/blog-digest.js
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const BLOG_DIR = path.join(__dirname, "..", "blog");
const HN_COUNT = 10; // 国际头条条数
const DOMESTIC_COUNT = 6; // 国内条数
const DOMESTIC_RSS = process.env.DOMESTIC_RSS || "https://36kr.com/feed";
const DESC_LEN = 90; // 描述截断长度

// ---------- 日期 ----------
function todayStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// ---------- HTTP 工具 ----------
function getJson(url) {
  return getText(url).then((t) => JSON.parse(t));
}
function getText(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(
      url,
      { headers: { "User-Agent": "Mozilla/5.0 (tech-daily-bot)" } },
      (res) => {
        if (res.statusCode !== 200) {
          res.resume();
          return reject(new Error(`${url} -> HTTP ${res.statusCode}`));
        }
        let data = "";
        res.setEncoding("utf8");
        res.on("data", (c) => (data += c));
        res.on("end", () => resolve(data));
      }
    );
    req.on("error", reject);
    req.setTimeout(15000, () => req.destroy(new Error(`${url} 超时`)));
  });
}

// ---------- 文本清洗 ----------
function decodeEntities(s) {
  if (!s) return "";
  return s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#0*39;/g, "'")
    .replace(/&#0*34;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) =>
      String.fromCodePoint(parseInt(h, 16))
    )
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)))
    .replace(/&amp;/g, "&");
}
function stripHtml(s) {
  if (!s) return "";
  return decodeEntities(
    s.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim()
  );
}
// 去除 RSS 常见的 <![CDATA[ ... ]]> 包裹
function stripCdata(s) {
  if (!s) return "";
  return s.replace(/^\s*<!\[CDATA\[/, "").replace(/\]\]>\s*$/, "");
}

// ---------- 翻译（MyMemory 免密钥） ----------
async function translate(text) {
  if (!text) return "";
  try {
    const q = text.slice(0, 500);
    const url = `https://api.mymemory.translated.net/get?langpair=en|zh-CN&q=${encodeURIComponent(
      q
    )}`;
    const r = await getJson(url);
    const t = r && r.responseData && r.responseData.translatedText;
    return t ? t.trim() : text;
  } catch (e) {
    return text; // 翻译失败降级为原文
  }
}

// ---------- 国际：Hacker News ----------
async function fetchInternational() {
  const ids = await getJson(
    "https://hacker-news.firebaseio.com/v0/topstories.json"
  );
  const top = ids.slice(0, HN_COUNT);
  const items = await Promise.all(
    top.map((id) =>
      getJson(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).catch(
        () => null
      )
    )
  );
  const out = [];
  for (const it of items) {
    if (!it || !it.title) continue;
    const url = it.url || `https://news.ycombinator.com/item?id=${it.id}`;
    const desc = it.text ? stripHtml(it.text).slice(0, DESC_LEN) : "";
    const zh = await translate(it.title);
    out.push({ title: zh || it.title, url, desc });
  }
  return out;
}

// ---------- 国内：36kr RSS ----------
async function fetchDomestic() {
  try {
    const xml = await getText(DOMESTIC_RSS);
    const out = [];
    const re = /<item>([\s\S]*?)<\/item>/g;
    let m;
    while ((m = re.exec(xml)) && out.length < DOMESTIC_COUNT) {
      const block = m[1];
      const title = stripCdata(
        decodeEntities(
          (block.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || ""
        )
      ).trim();
      const link = stripCdata(
        decodeEntities(
          (block.match(/<link>([\s\S]*?)<\/link>/) || [])[1] || ""
        )
      ).trim();
      const descRaw = (block.match(/<description>([\s\S]*?)<\/description>/) ||
        [])[1] || "";
      const desc = stripHtml(descRaw).slice(0, DESC_LEN);
      if (title && link) out.push({ title, url: link, desc });
    }
    return out;
  } catch (e) {
    console.error("[domestic] 抓取失败，跳过国内源：", e.message);
    return [];
  }
}

// ---------- 组装 Markdown ----------
function renderMarkdown(date, intl, dom) {
  const lines = [];
  lines.push("---");
  lines.push(`title: 科技日报 · ${date}`);
  lines.push(`date: ${date}`);
  lines.push("tags: [科技日报, 每日资讯, 科技要闻]");
  lines.push("category: 科技资讯");
  lines.push("---");
  lines.push("");
  lines.push(
    "> 本篇由自动化脚本每日汇总当日科技要闻：国际来源经机器翻译为中文，国内来源直接引用。内容来自公开 RSS / API，仅供参考。"
  );
  lines.push("");

  lines.push("## 🌐 国际科技");
  lines.push("");
  if (intl.length === 0) {
    lines.push("_（今日国际源暂未抓取到内容）_");
  } else {
    for (const it of intl) {
      const extra = it.desc ? ` — ${it.desc}` : "";
      lines.push(`- [${it.title}](${it.url})${extra}`);
    }
  }
  lines.push("");

  lines.push("## 🇨🇳 国内科技");
  lines.push("");
  if (dom.length === 0) {
    lines.push("_（今日国内源暂未抓取到内容）_");
  } else {
    for (const it of dom) {
      const extra = it.desc ? ` — ${it.desc}` : "";
      lines.push(`- [${it.title}](${it.url})${extra}`);
    }
  }
  lines.push("");
  lines.push("---");
  lines.push(
    `*由每日自动化脚本于 ${date} 生成 · 共 ${intl.length + dom.length} 条*`
  );
  lines.push("");
  return lines.join("\n");
}

// ---------- 本地验证用样例 ----------
function mockData() {
  return {
    intl: [
      {
        title: "大型语言模型推理成本一年下降约 280 倍",
        url: "https://example.com/a",
        desc: "新一代推理优化使单位 token 成本大幅降低。",
      },
      {
        title: "开源向量数据库发布 2.0，查询延迟减半",
        url: "https://example.com/b",
        desc: "",
      },
    ],
    dom: [
      {
        title: "国内某厂商发布新一代智能体开发框架",
        url: "https://36kr.com/p/example",
        desc: "面向多模态任务的可视化编排能力成为亮点。",
      },
    ],
  };
}

// ---------- 主流程 ----------
async function main() {
  const date = todayStr();
  const outFile = path.join(BLOG_DIR, `${date}-tech-daily.md`);

  // 同日幂等：已存在则跳过
  if (fs.existsSync(outFile)) {
    console.log(`[digest] 今日(${date})科技日报已存在，跳过：${outFile}`);
    return;
  }

  let intl = [];
  let dom = [];
  if (process.env.DIGEST_MOCK) {
    const mock = mockData();
    intl = mock.intl;
    dom = mock.dom;
    console.log("[digest] DIGEST_MOCK=1，使用内置样例数据");
  } else {
    console.log("[digest] 抓取国际科技（Hacker News）…");
    intl = await fetchInternational().catch((e) => {
      console.error("[intl] 失败：", e.message);
      return [];
    });
    console.log(`[digest] 国际 ${intl.length} 条；抓取国内科技（${DOMESTIC_RSS}）…`);
    dom = await fetchDomestic();
    console.log(`[digest] 国内 ${dom.length} 条`);
  }

  if (intl.length === 0 && dom.length === 0) {
    console.log("[digest] 两源皆为空，今天不生成博文（避免空文）");
    return;
  }

  const md = renderMarkdown(date, intl, dom);
  fs.writeFileSync(outFile, md, "utf8");
  console.log(`[digest] 已生成科技日报：${outFile}（${intl.length + dom.length} 条）`);
}

main().catch((e) => {
  console.error("[digest] 运行出错：", e);
  process.exit(1);
});
