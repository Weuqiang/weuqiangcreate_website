// check-internal-links.js
// 端到端校验 build/ 下所有 HTML 的内部链接是否都指向真实存在的资源。
// 为什么需要它：Docusaurus 的 onBrokenLinks 是静态分析，抓不到「动态拼接」或
// 「构建期注入」产生的死链（如中文侧边栏 category 链接被插入 \x00 字节的回归）。
// 本脚本遍历产物、解析每个内部 href、核对目标路由在 build 中真实存在，能 100% 兜底。
// 退出码：发现坏链或残留空字节 → 1；全部通过 → 0。

const fs = require("fs");
const path = require("path");

const ROOT = path.join(process.cwd(), "build");
const BASE = "/weuqiangcreate_website/"; // 与 docusaurus.config.js baseUrl 一致

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, out);
    else if (ent.name.endsWith(".html")) out.push(full);
  }
  return out;
}

// 判断一个内部链接目标在 build 中是否真实存在
function targetExists(targetAbs) {
  if (fs.existsSync(targetAbs)) {
    if (fs.statSync(targetAbs).isDirectory())
      return fs.existsSync(path.join(targetAbs, "index.html"));
    return true;
  }
  // 无扩展名的路由通常对应 index.html
  if (!path.extname(targetAbs)) {
    if (fs.existsSync(targetAbs + ".html")) return true;
    if (fs.existsSync(path.join(targetAbs, "index.html"))) return true;
  }
  return false;
}

function main() {
  if (!fs.existsSync(ROOT)) {
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
      // 仅校验站内链接：剥离已知同站 origin 后，剩下的路径按站内解析
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
      // 剥离后仍是其他域名 → 真外部链接，跳过
      if (/^https?:\/\//i.test(clean)) continue;

      if (href.includes("\x00")) {
        nullHits++;
        const key = "[NULL-BYTE] " + href;
        if (!broken.has(key)) broken.set(key, []);
        broken.get(key).push(path.relative(ROOT, file));
        continue;
      }

      // 归一化为 build 内的绝对路径
      let targetAbs;
      if (clean.startsWith(BASE)) {
        targetAbs = path.join(ROOT, clean.slice(BASE.length));
      } else if (clean.startsWith("/")) {
        targetAbs = path.join(ROOT, clean); // 站点根绝对（理论应都带 BASE）
      } else {
        targetAbs = path.resolve(path.dirname(file), clean); // 相对
      }

      if (!targetExists(targetAbs)) {
        const key = clean;
        if (!broken.has(key)) broken.set(key, []);
        broken.get(key).push(path.relative(ROOT, file));
      }
    }
  }

  if (broken.size === 0 && nullHits === 0) {
    console.log(
      `[check-links] ✅ 通过：扫描 ${htmls.length} 个 HTML，内部链接全部有效，无空字节残留`
    );
    process.exit(0);
  }

  console.error(`[check-links] ❌ 发现 ${broken.size} 个可疑站内坏链，空字节 ${nullHits} 处`);
  for (const [url, files] of broken) {
    console.error(`  BROKEN: ${url}`);
    console.error(`    出现在 ${files.length} 个文件，例如: ${files.slice(0, 3).join(", ")}`);
  }
  process.exit(1);
}

main();
