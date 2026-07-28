// blog-digest.js
// 每日自动生成一篇「博文回顾」新博文并发布到 /blog：
//   - 基于「已总结博文集合」(scripts/.digested.json) 判断真正新增的博文并总结（增量）
//   - 首次运行（集合为空）生成一篇「全站近期精选」种子回顾（最近 10 篇），并把全部博文标记为已处理
//   - 若长期无新增且距上次发文超过 30 天，再生成一篇种子回顾，避免刷屏
//   - 同日幂等：若今天已生成过回顾博文则跳过
//
// 设计要点：
//   - 不依赖 git diff-filter（避免把「补摘要」等编辑误判为新增）
//   - 纯 Node 内置，零依赖，确定性可复现

const fs = require("fs");
const path = require("path");

const REPO = process.cwd();
const BLOG_DIR = path.join(REPO, "blog");
const DATA = path.join(REPO, "src", "data", "blog-summary.json");
const DIGESTED = path.join(REPO, "scripts", ".digested.json");

const DIGEST_PREFIX = "blog-digest"; // 回顾博文文件名前缀，用于排除自身
const SEED_GAP_DAYS = 30; // 距上次发文超过该天数才再生成种子回顾
const SEED_COUNT = 10; // 种子回顾取最近 N 篇

function todayStr(d = new Date()) {
  return d.toISOString().slice(0, 10);
}
function daysBetween(a, b) {
  const ms = new Date(b + "T00:00:00Z") - new Date(a + "T00:00:00Z");
  return Math.floor(ms / 86400000);
}

function readSummary() {
  try {
    return JSON.parse(fs.readFileSync(DATA, "utf8"));
  } catch {
    return null;
  }
}
function loadDigested() {
  try {
    return JSON.parse(fs.readFileSync(DIGESTED, "utf8"));
  } catch {
    return { posts: [], lastDate: "" };
  }
}
function saveDigested(o) {
  fs.writeFileSync(DIGESTED, JSON.stringify(o) + "\n", "utf8");
}

// 当前全部博文（排除回顾博文自身，避免自我总结）
function allPosts(data) {
  return data.years
    .flatMap((y) => y.posts)
    .filter((p) => p.file && !p.file.startsWith(DIGEST_PREFIX));
}

function recentN(posts, n) {
  return [...posts]
    .filter((p) => p.date)
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
    .slice(0, n);
}

// 构造回顾博文正文
function buildPost(picks, dateStr, isSeed) {
  const title = isSeed
    ? `博客更新回顾 · ${dateStr}`
    : `博文回顾 · ${dateStr}`;
  const desc = isSeed
    ? `全站近期精选的 ${picks.length} 篇博文一览与摘要（自动生成）。`
    : `近期更新的 ${picks.length} 篇博文一览与摘要（自动生成）。`;

  const tagSet = new Map();
  for (const p of picks) for (const t of p.tags || []) if (t) tagSet.set(t, true);
  const tags = [...tagSet.keys()].slice(0, 6);
  const fmTags = tags.length
    ? "tags:\n" + tags.map((t) => `  - ${JSON.stringify(t)}`).join("\n")
    : "tags: []";

  const lines = [];
  lines.push("---");
  lines.push(`title: ${JSON.stringify(title)}`);
  lines.push(`date: ${dateStr}`);
  lines.push(`slug: ${DIGEST_PREFIX}-${dateStr}`);
  lines.push(`description: ${JSON.stringify(desc)}`);
  lines.push(fmTags);
  lines.push("---");
  lines.push("");
  lines.push(
    "> 本篇由「每日博文总结」工具自动生成，汇总近期更新或发布的博文，便于快速回顾。"
  );
  lines.push("");
  lines.push(isSeed ? "## 全站近期精选" : "## 近期更新");
  lines.push("");

  for (const p of picks) {
    const meta = [p.date, p.category].filter(Boolean).join(" · ");
    lines.push(`### [${p.title}](${p.url})`);
    if (meta) lines.push(`*${meta}*`);
    lines.push("");
    lines.push(p.summary || "（暂无摘要）");
    lines.push("");
    lines.push("---");
    lines.push("");
  }

  return lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
}

function main() {
  const data = readSummary();
  if (!data) {
    console.log("[blog-digest] 未找到 blog-summary.json，请先运行 blog-summary.js");
    return;
  }

  const dateStr = todayStr();
  const outFile = path.join(BLOG_DIR, `${dateStr}-${DIGEST_PREFIX}.md`);
  if (fs.existsSync(outFile)) {
    console.log("[blog-digest] 今日回顾已存在，跳过：", path.basename(outFile));
    return;
  }

  const posts = allPosts(data);
  const st = loadDigested();
  let picks = [];
  let isSeed = false;

  if (st.posts.length === 0) {
    // 首次：种子精选（最近 N 篇），并把全部博文标记为已处理
    picks = recentN(posts, SEED_COUNT);
    isSeed = true;
    st.posts = posts.map((p) => p.file);
    st.lastDate = dateStr;
    saveDigested(st);
  } else {
    const set = new Set(st.posts);
    const candidates = posts.filter((p) => !set.has(p.file));
    if (candidates.length) {
      // 增量：仅总结真正新增的博文
      picks = candidates;
      isSeed = false;
      st.posts.push(...candidates.map((p) => p.file));
      st.lastDate = dateStr;
      saveDigested(st);
    } else {
      const gap = st.lastDate ? daysBetween(st.lastDate, dateStr) : SEED_GAP_DAYS + 1;
      if (gap > SEED_GAP_DAYS) {
        picks = recentN(posts, SEED_COUNT);
        isSeed = true;
        st.lastDate = dateStr;
        saveDigested(st);
      } else {
        console.log(
          `[blog-digest] 无新增博文，距上次发文 ${gap} 天（<${SEED_GAP_DAYS}），跳过`
        );
        return;
      }
    }
  }

  if (!picks.length) {
    console.log("[blog-digest] 无可用博文，跳过");
    return;
  }

  const content = buildPost(picks, dateStr, isSeed);
  fs.writeFileSync(outFile, content, "utf8");
  console.log(
    `[blog-digest] 已生成${isSeed ? "种子" : "增量"}回顾博文：${path.basename(
      outFile
    )}（${picks.length} 篇）`
  );
}

main();
