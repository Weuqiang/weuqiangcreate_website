// check-internal-links.js
// 端到端校验 build/ 下所有 HTML 的内部链接是否都指向真实存在的资源，并兜底三类
// onBrokenLinks 静态分析抓不到的回归：
//   1) 构建期注入的死链（如中文侧边栏 category 链接被插入 \x00 字节）；
//   2) 源文件存在、但产物页根本没生成 / 路径被污染（如单个中文路径页在 CI 上
//      因 null 字节导致路由缺失，而恰好没有别的页链接指向它 → 传统链接校验发现不了）；
//   3) build 内任何目录或文件路径含 \x00（路由会被污染，Docusaurus 中文路径已知 bug）；
//   4) 含 _category_.json 的分类目录缺落地页（无 index 文件且未声明 generated-index 链接）
//      → 该分类裸 URL 及子页面面包屑链接线上 404（如「深度学习」曾集体 404）。
// 退出码：发现坏链 / 空字节 / 源产物缺失 / 路径空字节 / 分类缺落地页 → 1；全通过 → 0。

const fs = require("fs");
const path = require("path");

const ROOT = path.join(process.cwd(), "build");
const BASE = "/weuqiangcreate_website/"; // 与 docusaurus.config.js baseUrl 一致

// 两个 content-docs 插件：源目录 → build 子目录（routeBasePath）
const SOURCE_CONFIG = [
  { src: path.join(process.cwd(), "docs", "docs"), buildSub: "docs" },
  { src: path.join(process.cwd(), "docs", "read"), buildSub: "read" },
];

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, out);
    else if (ent.name.endsWith(".html")) out.push(full);
  }
  return out;
}

// 收集 build 下所有目录与文件路径
function walkAll(dir, dirs = [], files = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      dirs.push(full);
      walkAll(full, dirs, files);
    } else files.push(full);
  }
  return { dirs, files };
}

// Docusaurus 路由归一化：剥掉每段前导数字前缀（10-bom → bom、01-basic → basic），
// index 页的路由落在所在目录（故 isIndex 时丢弃末尾 index 段）。
function normalizeRouteSegs(relNoExt, isIndex) {
  let segs = relNoExt.split(path.sep);
  if (isIndex) segs = segs.slice(0, -1);
  return segs.map((s) => s.replace(/^\d+-/, ""));
}

// 由 build 实际产物反推「真实存在的路由集合」（比自行推算 slug 更可靠）
function buildRouteSet() {
  const set = new Set();
  for (const cfg of SOURCE_CONFIG) {
    const base = path.join(ROOT, cfg.buildSub);
    if (!fs.existsSync(base)) continue;
    const { dirs } = walkAll(base);
    dirs.push(base); // 根目录自身（含根 index.html，对应源 index.mdx）
    for (const d of dirs) {
      if (fs.existsSync(path.join(d, "index.html"))) {
        const rel = path.relative(base, d);
        set.add(normalizeRouteSegs(rel, false).join("/"));
      }
    }
  }
  return set;
}

// 判断一个内部链接目标在 build 中是否真实存在
function targetExists(targetAbs) {
  if (fs.existsSync(targetAbs)) {
    if (fs.statSync(targetAbs).isDirectory())
      return fs.existsSync(path.join(targetAbs, "index.html"));
    return true;
  }
  if (!path.extname(targetAbs)) {
    if (fs.existsSync(targetAbs + ".html")) return true;
    if (fs.existsSync(path.join(targetAbs, "index.html"))) return true;
  }
  return false;
}

// 源→产物完整性：每个源 .md/.mdx 都应能在 build 路由集合中找到对应项；缺页即回归。
function checkSourceCompleteness() {
  const routeSet = buildRouteSet();
  const missing = [];
  for (const cfg of SOURCE_CONFIG) {
    const srcDir = cfg.src;
    if (!fs.existsSync(srcDir)) continue;
    for (const ent of walkAll(srcDir).files) {
      const rel = path.relative(srcDir, ent);
      if (path.basename(rel).startsWith("_")) continue; // 局部组件 / _category_
      if (!/\.mdx?$/.test(rel)) continue;
      const noExt = rel.replace(/\.mdx?$/, "");
      const isIndex = path.basename(noExt) === "index";
      const key = normalizeRouteSegs(noExt, isIndex).join("/");
      if (!routeSet.has(key)) {
        missing.push({ src: path.relative(process.cwd(), ent), route: key || "(根 index)" });
      }
    }
  }
  return missing;
}

// build 内任何目录或文件路径含 \x00 → 路由会被污染
function checkBuildPathNulls() {
  const { dirs, files } = walkAll(ROOT);
  const bad = [];
  for (const p of [...dirs, ...files]) if (p.includes("\x00")) bad.push(p);
  return bad;
}

// 分类索引完整性（源侧校验，无需 build）：任何含 _category_.json 的分类目录，
// 必须自身有 index.md/index.mdx，或其 _category_.json 声明了 generated-index 链接；
// 否则该分类的裸 URL（及子页面面包屑指向它的链接）线上会 404。
// 这正是「深度学习」等分类曾集体 404 的根因——Docusaurus 不会为无落地页的分类生成页面。
function checkCategoryIndexCompleteness() {
  const gaps = [];
  for (const cfg of SOURCE_CONFIG) {
    const srcDir = cfg.src;
    if (!fs.existsSync(srcDir)) continue;
    for (const ent of walkAll(srcDir).dirs) {
      const cat = path.join(ent, "_category_.json");
      if (!fs.existsSync(cat)) continue;
      const files = fs.readdirSync(ent);
      const hasIndex = files.some((f) => /^index\.mdx?$/.test(f));
      let hasGen = false;
      try {
        const d = JSON.parse(fs.readFileSync(cat, "utf8"));
        hasGen = d.link && d.link.type === "generated-index";
      } catch (_) {}
      if (!hasIndex && !hasGen) {
        gaps.push(path.relative(process.cwd(), ent));
      }
    }
  }
  return gaps;
}

// 统计源页面总数（用于报告）
function countSourcePages() {
  let n = 0;
  for (const cfg of SOURCE_CONFIG) {
    const srcDir = cfg.src;
    if (!fs.existsSync(srcDir)) continue;
    for (const ent of walkAll(srcDir).files) {
      const rel = path.relative(srcDir, ent);
      if (path.basename(rel).startsWith("_")) continue;
      if (/\.mdx?$/.test(rel)) n++;
    }
  }
  return n;
}

function main() {
  // 源侧分类索引完整性校验（不依赖 build，先跑，能独立拦住「缺落地页」类回归）
  const catGaps = checkCategoryIndexCompleteness();

  if (!fs.existsSync(ROOT)) {
    if (catGaps.length > 0) {
      console.error(
        `[check-links] ❌ 分类缺落地页 ${catGaps.length} 个（无 index 文件且未声明 generated-index）：`
      );
      for (const g of catGaps) console.error(`  CATEGORY-NO-INDEX: ${g}`);
      process.exit(1);
    }
    console.error("[check-links] 找不到 build/ 目录，请先 npm run build");
    process.exit(1);
  }

  const htmls = walk(ROOT);
  const hrefRe = /href="([^"]*)"/g;
  const broken = new Map(); // url -> [files]
  let nullHits = 0;

  for (const file of htmls) {
    const html = fs.readFileSync(file, "utf8");
    let m;
    while ((m = hrefRe.exec(html))) {
      const href = m[1];
      if (
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("data:") ||
        href.startsWith("#")
      )
        continue;
      const SITE_ORIGINS = [
        "https://weuqiang.github.io",
        "http://weuqiang.github.io",
        "http://localhost:3000",
      ];
      let clean = href.split("#")[0].split("?")[0];
      for (const o of SITE_ORIGINS) {
        if (clean.startsWith(o)) {
          clean = clean.slice(o.length);
          break;
        }
      }
      if (/^https?:\/\//i.test(clean)) continue; // 真外部链接

      if (href.includes("\x00")) {
        nullHits++;
        const key = "[NULL-BYTE] " + href;
        if (!broken.has(key)) broken.set(key, []);
        broken.get(key).push(path.relative(ROOT, file));
        continue;
      }

      let targetAbs;
      if (clean.startsWith(BASE)) {
        targetAbs = path.join(ROOT, clean.slice(BASE.length));
      } else if (clean.startsWith("/")) {
        targetAbs = path.join(ROOT, clean);
      } else {
        targetAbs = path.resolve(path.dirname(file), clean);
      }

      if (!targetExists(targetAbs)) {
        const key = clean;
        if (!broken.has(key)) broken.set(key, []);
        broken.get(key).push(path.relative(ROOT, file));
      }
    }
  }

  // 额外兜底：源→产物完整性 + build 路径空字节
  const missing = checkSourceCompleteness();
  const pathNulls = checkBuildPathNulls();

  const ok =
    broken.size === 0 &&
    nullHits === 0 &&
    missing.length === 0 &&
    pathNulls.length === 0 &&
    catGaps.length === 0;

  if (ok) {
    console.log(
      `[check-links] ✅ 通过：扫描 ${htmls.length} 个 HTML，内部链接全部有效，` +
        `源→产物 ${countSourcePages()} 页齐全，分类落地页齐全，无空字节残留`
    );
    process.exit(0);
  }

  console.error(
    `[check-links] ❌ 坏链 ${broken.size} 个 / 空字节 ${nullHits} 处 / 缺产物页 ${missing.length} 个 / 路径空字节 ${pathNulls.length} 处 / 分类缺落地页 ${catGaps.length} 个`
  );
  for (const [url, files] of broken) {
    console.error(`  BROKEN: ${url}`);
    console.error(`    出现在 ${files.length} 个文件，例如: ${files.slice(0, 3).join(", ")}`);
  }
  for (const m of missing) {
    console.error(`  MISSING-PAGE: 源 ${m.src} → 归一化路由 ${m.route} 在产物中不存在`);
  }
  for (const p of pathNulls) {
    console.error(`  NULL-PATH: ${p}`);
  }
  for (const g of catGaps) {
    console.error(`  CATEGORY-NO-INDEX: ${g}`);
  }
  process.exit(1);
}

main();
