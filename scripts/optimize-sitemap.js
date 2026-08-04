/**
 * Postbuild: 按页面类型差异化 sitemap.xml 的 priority 和 changefreq
 *
 * Rules:
 *   首页 (/)                priority 1.0, changefreq daily
 *   /docs/ 根索引            priority 0.8, changefreq weekly
 *   /docs/ 内容页            priority 0.7, changefreq monthly
 *   /read/ 书评页            priority 0.6, changefreq monthly
 *   /blog/ 根索引            priority 0.7, changefreq daily
 *   /blog/ 博文              priority 0.6, changefreq weekly
 *   /blog/ tech-daily 日报   priority 0.3, changefreq daily  (自动生成，权重低)
 *   其他页面                 priority 0.4, changefreq weekly
 */

const fs = require("fs");
const path = require("path");

const SITEMAP_PATH = path.join(__dirname, "..", "build", "sitemap.xml");

function getPriorityChangefreq(loc) {
  // 提取 baseUrl 之后的路径
  const baseUrl = "/weuqiangcreate_website/";
  let route = loc;
  const baseIdx = route.indexOf(baseUrl);
  if (baseIdx >= 0) {
    route = route.substring(baseIdx + baseUrl.length);
  }
  // 去掉尾部斜杠方便匹配
  route = route.replace(/\/$/, "");

  // 首页
  if (route === "" || route === "/") {
    return { priority: "1.0", changefreq: "daily" };
  }

  // tech-daily 日报（低权重）
  if (route.includes("tech-daily")) {
    return { priority: "0.3", changefreq: "daily" };
  }

  // docs 根索引
  if (route === "docs") {
    return { priority: "0.8", changefreq: "weekly" };
  }

  // docs 内容页
  if (route.startsWith("docs/")) {
    return { priority: "0.7", changefreq: "monthly" };
  }

  // read 书评
  if (route.startsWith("read/")) {
    return { priority: "0.6", changefreq: "monthly" };
  }

  // blog 根索引
  if (route === "blog") {
    return { priority: "0.7", changefreq: "daily" };
  }

  // blog 博文
  if (route.startsWith("blog/")) {
    return { priority: "0.6", changefreq: "weekly" };
  }

  // 其他页面
  return { priority: "0.4", changefreq: "weekly" };
}

function main() {
  if (!fs.existsSync(SITEMAP_PATH)) {
    console.log("[optimize-sitemap] sitemap.xml 不存在，跳过");
    return;
  }

  let xml = fs.readFileSync(SITEMAP_PATH, "utf-8");
  let modified = 0;

  // 匹配每个 <url> 块，提取 <loc>，替换 priority 和 changefreq
  xml = xml.replace(
    /<url>\s*<loc>([^<]+)<\/loc>\s*<changefreq>[^<]*<\/changefreq>\s*<priority>[^<]*<\/priority>\s*<\/url>/g,
    (match, loc) => {
      const { priority, changefreq } = getPriorityChangefreq(loc);
      modified++;
      return `<url><loc>${loc}</loc><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`;
    }
  );

  fs.writeFileSync(SITEMAP_PATH, xml, "utf-8");
  console.log(`[optimize-sitemap] 已优化 ${modified} 个 URL 的 priority/changefreq`);
}

main();
