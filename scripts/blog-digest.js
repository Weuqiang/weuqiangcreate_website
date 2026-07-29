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
    // 保留英文原标题：机器翻译容易翻车（如把标题译成乱码），直接读原文更干净
    out.push({ title: it.title, url, desc: "" });
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

// ---------- 拟人化文案 ----------
function hashStr(s) {
  let h = 0;
  for (const c of s) h = (h + c.charCodeAt(0)) % 100000;
  return h;
}
function weekdayCN(dateStr) {
  const d = new Date(`${dateStr}T00:00:00`);
  return ["周日", "周一", "周二", "周三", "周四", "周五", "周六"][d.getDay()];
}
const INTROS = [
  (wd) => `今天（${wd}）照例刷了一圈国内外科技动态，挑几件我觉得值得记一笔的聊聊。`,
  (wd) => `${wd}好。例行扫了一眼今天的科技新闻，有几条想顺手记下来。`,
  (wd) => `又到${wd}，把今天刷到的科技动态里值得一看的，挑出来摆这儿。`,
  (wd) =>
    `又是平常一日。照旧把国内外科技圈今天冒出来的动静，筛一遍记在这儿。`,
];
const MUSINGS = [
  "做日报久了有个体会：真正改变行业的，往往不是当天最热闹的那条，而是某篇安静讲「我们换了个思路」的文章。",
  "信息越来越多，判断力反而越来越贵。挑着看，比全看强。",
  "技术新闻看多了会发现，很多「突破」过两周就没人提了；能留下来的，都是解决了真问题的。",
  "今天这几条里，我最感兴趣的往往不是大厂发的，而是某个小团队折腾出来的怪东西。",
];
function introLine(dateStr) {
  return INTROS[hashStr(dateStr) % INTROS.length](weekdayCN(dateStr));
}
function musingLine(dateStr) {
  return MUSINGS[hashStr(dateStr) % MUSINGS.length];
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
  lines.push(introLine(date));
  lines.push("");
  lines.push("> 国际源标题保留英文原文——机器翻译容易翻车，不如直接读。");
  lines.push("");
  lines.push("## 🌐 国际科技");
  lines.push("");
  if (intl.length === 0) {
    lines.push("_（今日国际源暂未抓取到内容）_");
  } else {
    for (const it of intl) {
      lines.push(`- [${it.title}](${it.url})`);
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
  lines.push("## 今日碎念");
  lines.push("");
  lines.push(musingLine(date));
  lines.push("");
  lines.push("---");
  lines.push(
    "*以上由脚本自动汇总公开来源（Hacker News / 36氪 RSS），链接与内容请自行甄别。*"
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
