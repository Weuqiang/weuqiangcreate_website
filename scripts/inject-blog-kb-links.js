/**
 * inject-blog-kb-links.js
 * 读取 blog-kb-recommendations.json，将推荐链接注入到博客 .md 文件底部。
 * 幂等：已有「延伸阅读（知识库）」节则替换，无则追加。
 */
const fs = require('fs');
const path = require('path');

const RECS_FILE = path.resolve(__dirname, '..', 'src', 'data', 'blog-kb-recommendations.json');
const BLOG_DIR = path.resolve(__dirname, '..', 'blog');

// Docusaurus 博客 URL 格式: /blog/slug/
function blogUrl(slug) {
  return `/blog/${slug}/`;
}

function parseFrontmatter(content) {
  // 规范化换行符（处理 Windows CRLF）
  content = content.replace(/\r\n/g, '\n');
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return {};
  const fm = {};
  const lines = fmMatch[1].split('\n');
  for (const line of lines) {
    let m = line.match(/^slug:\s*["']?(.+?)["']?\s*$/);
    if (m) { fm.slug = m[1]; continue; }
  }
  return fm;
}

function getSlug(filename, fm) {
  if (fm.slug) return fm.slug;
  const match = filename.match(/^\d{4}-\d{2}-\d{2}-(.+)\.md$/);
  if (match) return match[1];
  return filename.replace(/\.md$/, '');
}

function buildRecSection(recs) {
  const lines = ['## 延伸阅读（知识库）', ''];
  for (const r of recs) {
    const desc = r.description ? ` — ${r.description}` : '';
    lines.push(`- [${r.title}](${r.url})${desc}`);
  }
  return lines.join('\n');
}

function injectRecs(filepath, recs) {
  let content = fs.readFileSync(filepath, 'utf-8');
  // 规范化换行符
  content = content.replace(/\r\n/g, '\n');

  // 查找已有的「延伸阅读（知识库）」节
  const marker = '## 延伸阅读（知识库）';
  const markerIdx = content.indexOf(marker);

  // 取「延伸阅读」节之前的内容（无则取全文），并切断末尾可能的分隔线块
  // （--- 及其前后空白），再规范尾部空白 —— 幂等 & 自愈历史残留的重复分隔线/空行。
  let prefix = markerIdx >= 0 ? content.substring(0, markerIdx) : content;
  // 从最后一个独立成行的 --- 分隔线整块切断（含其前后空行），避免少吞换行导致每次构建累加空行
  prefix = prefix.replace(/\n[ \t]*-{3,}[ \t]*(?:\n[ \t]*)*$/, '');
  prefix = prefix.replace(/\s+$/, ''); // 去掉末尾残留空白

  // 追加新推荐（固定为 body + 一空行 + --- + 一空行 + 节，全程幂等）
  const newSection = buildRecSection(recs);
  content = prefix + '\n\n---\n\n' + newSection + '\n';
  fs.writeFileSync(filepath, content, 'utf-8');
}

function main() {
  if (!fs.existsSync(RECS_FILE)) {
    console.log('[inject] 推荐文件不存在，跳过注入。先运行 gen-blog-kb-recs.js');
    return;
  }

  const recommendations = JSON.parse(fs.readFileSync(RECS_FILE, 'utf-8'));
  const blogFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
  let injected = 0;

  for (const filename of blogFiles) {
    let content = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8');
    content = content.replace(/\r\n/g, '\n'); // 规范化换行符
    const fm = parseFrontmatter(content);
    const slug = getSlug(filename, fm);
    const recs = recommendations[slug];

    if (recs && recs.length > 0) {
      injectRecs(path.join(BLOG_DIR, filename), recs);
      injected++;
    }
  }

  console.log(`[inject] 已为 ${injected} 篇博客注入知识库推荐链接`);
}

main();
