/**
 * 构建期生成「最近更新」数据：扫描 blog/*.md 的 frontmatter，
 * 按 date 降序取前 5 篇，写入 src/data/recent-posts.json。
 * 首页直接 import 该 JSON 渲染，避免依赖 Docusaurus 版本相关的博客 hook。
 */
const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(__dirname, "..", "blog");
const OUT = path.join(__dirname, "..", "src", "data", "recent-posts.json");

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return {};
  const fm = {};
  for (const line of m[1].split(/\r?\n/)) {
    const mm = line.match(/^([A-Za-z_]+):\s*(.*)$/);
    if (mm) fm[mm[1]] = mm[2].trim();
  }
  return fm;
}

const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
const posts = [];
for (const f of files) {
  const raw = fs.readFileSync(path.join(BLOG_DIR, f), "utf8");
  const fm = parseFrontmatter(raw);
  if (!fm.title || !fm.slug || !fm.date) continue;
  posts.push({
    title: fm.title,
    permalink: `/blog/${fm.slug}`,
    date: fm.date,
  });
}

posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
const recent = posts.slice(0, 5);

fs.writeFileSync(OUT, JSON.stringify(recent, null, 2) + "\n");
console.log(`[gen-recent] wrote ${recent.length} recent posts -> ${path.relative(process.cwd(), OUT)}`);
