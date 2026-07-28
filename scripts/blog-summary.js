// blog-summary.js
// 每日自动总结更新历史博文：
//   1) 递归扫描 blog/ 下所有 .md/.mdx 博文
//   2) 轻量解析 frontmatter（title/date/slug），不依赖 js-yaml，纯 Node 内置
//   3) 每篇的「摘要」优先取 frontmatter 的 description；缺失时从正文提取
//      （优先取 <!-- truncate --> 之前的内容，否则取首个段落），并剥离 markdown 噪声
//   4) 始终生成 src/data/blog-summary.json（按年份分组、年份与日期倒序），供总览页渲染
//   5) 传入 --fill 时，把缺失的 description 写回 frontmatter（用 JSON.stringify 保证 YAML 安全）
//
// 设计要点：
//   - 默认只生成 JSON（prebuild 调用），不在本地构建时改动源文件，避免无谓 diff
//   - --fill 由每日 CI 调用，负责把摘要持久化进源 frontmatter（一次性补齐，之后幂等）
//   - 提取逻辑确定性、可复现，不会产生每日随机 diff

const fs = require("fs");
const path = require("path");

const BLOG_DIR = path.join(process.cwd(), "blog");
const OUT_JSON = path.join(process.cwd(), "src", "data", "blog-summary.json");
const FILL = process.argv.includes("--fill");

/* ---------- 工具 ---------- */
function unquote(s) {
  if (!s) return s;
  if (
    (s.startsWith('"') && s.endsWith('"')) ||
    (s.startsWith("'") && s.endsWith("'"))
  ) {
    return s.slice(1, -1);
  }
  return s;
}

// 取 frontmatter 里某个顶层标量字段（支持双/单引号包裹）
function fmGet(fm, key) {
  const m = fm.match(new RegExp("^" + key + ":\\s*(.*)$", "m"));
  return m ? unquote(m[1].trim()) : "";
}

// 从正文提取摘要
function extractSummary(body) {
  let intro = body;

  // 1) 优先取 <!-- truncate --> 之前（Docusaurus 约定的预览区）
  const tIdx = intro.indexOf("<!-- truncate -->");
  if (tIdx !== -1) {
    intro = intro.slice(0, tIdx);
  } else {
    // 2) 否则取首个非空段落
    const parts = intro.split(/\n\s*\n/);
    intro = (parts.find((p) => p.trim()) || "").trim();
  }

  // 3) 剥离 markdown / 噪声
  let text = intro;
  text = text.replace(/<!--[\s\S]*?-->/g, ""); // html 注释
  text = text.replace(/\[\^[^\]]+\]/g, ""); // 脚注引用 [^1]
  text = text.replace(/!\[[^\]]*\]\([^)]*\)/g, ""); // 图片 ![alt](url)
  text = text.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1"); // 链接 [text](url) -> text
  text = text.replace(/^#{1,6}\s+/gm, ""); // 标题 #
  text = text.replace(/[*_`~]+/g, ""); // 强调/代码符号
  text = text.replace(/\s+/g, " ").trim(); // 合并空白

  const MAX = 120;
  if (text.length > MAX) text = text.slice(0, MAX).trimEnd() + "…";
  return text;
}

/* ---------- 主流程 ---------- */
function collectPosts() {
  const posts = [];
  if (!fs.existsSync(BLOG_DIR)) return posts;

  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (/\.(md|mdx)$/.test(entry.name) && entry.name !== "authors.yml") {
        posts.push(full);
      }
    }
  };
  walk(BLOG_DIR);
  return posts;
}

function processPost(file) {
  let raw = fs.readFileSync(file, "utf8").replace(/^\uFEFF/, "");
  const eol = raw.includes("\r\n") ? "\r\n" : "\n";
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) {
    // 无 frontmatter，整篇当正文
    const summary = extractSummary(raw);
    const base = path.basename(file, path.extname(file));
    const stripped = base.replace(/^\d{4}-\d{1,2}-\d{1,2}-?/, "");
    const slugFallback = stripped || base.slice(0, 4);
    return {
      title: slugFallback,
      date: "",
      year: "",
      url: `/blog/${slugFallback}/`,
      summary,
      _fm: "",
      _body: raw,
      _eol: eol,
      _file: file,
      _needsFill: false,
    };
  }

  const fm = m[1];
  const body = m[2];

  const title = fmGet(fm, "title") || path.basename(file, path.extname(file));
  let date = fmGet(fm, "date");
  if (!date) {
    const dm = path.basename(file).match(/^(\d{4}-\d{1,2}-\d{1,2})/);
    if (dm) date = dm[1];
  }
  const year = (date || "").slice(0, 4);

  let slug = fmGet(fm, "slug");
  let url;
  if (slug) {
    url = `/blog/${slug}/`;
  } else {
    const base = path.basename(file, path.extname(file));
    // 解析前置日期（兼容零补与非零补）；含标题后缀则后缀作 slug，
    // 纯日期文件名（无后缀）→ 路由 /blog/YYYY/MM/DD/（组件保持原样，与 Docusaurus 一致）
    const dm = base.match(/^(\d{4})-(\d{1,2})-(\d{1,2})(?:-(.*))?$/);
    if (dm) {
      const [, y, m, d, rest] = dm;
      if (rest) {
        slug = rest;
        url = `/blog/${slug}/`;
      } else {
        url = `/blog/${y}/${m}/${d}/`;
      }
    } else {
      slug = base;
      url = `/blog/${slug}/`;
    }
  }

  const existingDesc = fmGet(fm, "description");
  let summary = existingDesc;
  let needsFill = false;
  if (!summary) {
    summary = extractSummary(body);
    needsFill = true;
  }

  return {
    title,
    date,
    year,
    url,
    summary,
    _fm: fm,
    _body: body,
    _eol: eol,
    _file: file,
    _needsFill: needsFill,
  };
}

function fillDescription(post) {
  if (!post._needsFill || !post.summary) return false;
  const eol = post._eol || "\n";
  const fm = post._fm;
  const insertLine = `description: ${JSON.stringify(post.summary)}`;
  let newFm;
  const titleLine = fm.match(/^(title:.*)$/m);
  if (titleLine) {
    newFm = fm.replace(/^(title:.*)$/m, `$1${eol}${insertLine}`);
  } else {
    newFm = `${insertLine}${eol}${fm}`;
  }
  const newContent = `---${eol}${newFm}${eol}---${eol}${post._body}`;
  fs.writeFileSync(post._file, newContent, "utf8");
  return true;
}

function main() {
  const files = collectPosts();
  const posts = files.map(processPost);

  if (FILL) {
    let filled = 0;
    for (const p of posts) if (fillDescription(p)) filled++;
    if (filled) console.log(`[blog-summary] 已为 ${filled} 篇博文补写 description`);
  }

  // 排序：年份倒序，同年日期倒序
  posts.sort((a, b) => {
    if (a.year !== b.year) return b.year.localeCompare(a.year);
    return (b.date || "").localeCompare(a.date || "");
  });

  // 按年份分组
  const byYear = new Map();
  for (const p of posts) {
    const y = p.year || "未知";
    if (!byYear.has(y)) byYear.set(y, []);
    byYear.get(y).push({
      title: p.title,
      date: p.date,
      url: p.url,
      summary: p.summary,
    });
  }
  const years = [...byYear.entries()]
    .sort((a, b) => b[0].localeCompare(a[0]))
    .map(([year, items]) => ({ year, posts: items }));

  const out = {
    generatedAt: new Date().toISOString(),
    total: posts.length,
    years,
  };

  fs.mkdirSync(path.dirname(OUT_JSON), { recursive: true });
  fs.writeFileSync(OUT_JSON, JSON.stringify(out, null, 2) + "\n", "utf8");

  console.log(
    `[blog-summary] 生成 ${OUT_JSON}：共 ${posts.length} 篇，${years.length} 个年份` +
      (FILL ? "" : "（未写回源 frontmatter，加 --fill 可持久化摘要）")
  );
}

main();
