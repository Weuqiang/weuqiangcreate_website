/**
 * 内容健康度审计：扫描 docs/docs / docs/read / blog 下的 .md/.mdx，
 * 输出按目录统计的文章数、短文（< 200 字正文，潜在占位）、占位/未完成标记
 * (TODO/TBD/待完善/占位) 的文件名清单，以及图片无 alt 的样本（限各 5 个）。
 *
 * 运行：node scripts/content-audit.js
 */
const fs = require("fs");
const path = require("path");

const ROOTS = [
  { label: "docs/docs", root: path.join(__dirname, "..", "docs", "docs") },
  { label: "docs/read", root: path.join(__dirname, "..", "docs", "read") },
  { label: "blog", root: path.join(__dirname, "..", "blog") },
];

function parseFrontmatter(raw) {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) return { fm: {}, body: raw };
  return { fm: m[1], body: raw.slice(m[0].length) };
}

function bodyWordCount(body) {
  // 近似字数（中文按字符计+英文按空格分词，简化取混合长度）
  const stripped = body
    .replace(/```[\s\S]*?```/g, "")           // 剥离代码块
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")     // 剥离图片
    .replace(/\[[^\]]*\]\([^)]*\)/g, (m) => m.match(/\[[^\]]*\]/)[0]) // 链接保留文本
    .replace(/[#>*_`\-]/g, "");
  const cjk = (stripped.match(/[\u4e00-\u9fa5]/g) || []).length;
  const latin = stripped.replace(/[\u4e00-\u9fa5]/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return cjk + latin;
}

function walk(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir)) {
    const p = path.join(dir, e);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) out.push(...walk(p));
    else if (/\.(mdx?|MDX?)$/.test(e)) out.push(p);
  }
  return out;
}

const stats = { roots: [], total: 0, stubMarkers: [], short: [], noAlt: [] };

for (const r of ROOTS) {
  const files = walk(r.root);
  const summary = { label: r.label, total: files.length, byDir: {} };
  for (const f of files) {
    const raw = fs.readFileSync(f, "utf8");
    const { body } = parseFrontmatter(raw);
    const words = bodyWordCount(body);
    const rel = path.relative(path.join(__dirname, ".."), f).replace(/\\/g, "/");
    summary.byDir[rel.split("/")[0]] = (summary.byDir[rel.split("/")[0]] || 0) + 1;
    stats.total += 1;
    if (words < 200) stats.short.push({ file: rel, words });
    if (/(^|\s)(TODO|TBD|待完善|占位|未完成)(?=\s|$|，|。)/m.test(body)) stats.stubMarkers.push(rel);
    const imgs = [...body.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)];
    for (const im of imgs) {
      const alt = im[0].match(/!\[(.*?)\]/)[1].trim();
      const src = im[1];
      if (!alt) stats.noAlt.push({ file: rel, src: src.slice(0, 60) });
    }
  }
  summary.byDir = Object.entries(summary.byDir).map(([k, v]) => `${k}:${v}`).join("  ");
  stats.roots.push(summary);
}

const fmt = (n, total) => (total ? `${n}（${((n / total) * 100).toFixed(1)}%）` : `${n}`);

console.log("\n=== 内容健康度审计 ===");
for (const s of stats.roots) console.log(`· ${s.label}: ${s.total} 篇  ${s.byDir ? "— " + s.byDir : ""}`);
console.log(`\n总文章数：${stats.total}`);
console.log(`潜在占位（正文<200字）：${stats.short.length}  ${fmt(stats.short.length, stats.total)}`);
console.log(`含 TODO/占位/待完善 标记：${stats.stubMarkers.length}  ${fmt(stats.stubMarkers.length, stats.total)}`);
console.log(`图片无 alt 文本：${stats.noAlt.length}  ${fmt(stats.noAlt.length, stats.total)}`);

if (stats.short.length) {
  console.log("\n-- 短文 Top 10 --");
  stats.short.sort((a, b) => a.words - b.words).slice(0, 10).forEach((x) => console.log(`  ${x.words.toString().padStart(4)} 字  ${x.file}`));
}
if (stats.stubMarkers.length) {
  console.log("\n-- 含未完成标记（全部）--");
  stats.stubMarkers.slice(0, 20).forEach((f) => console.log("  " + f));
}
if (stats.noAlt.length) {
  console.log("\n-- 图片无 alt（最多 10）--");
  stats.noAlt.slice(0, 10).forEach((x) => console.log(`  ${x.file}  ${x.src}`));
}
console.log("");
