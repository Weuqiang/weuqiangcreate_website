/**
 * 知识图谱生成器：扫描 docs/docs 目录树（两层：一级分类 + 子分类），
 * 读取 _category_.json 的 label 或 index 的 frontmatter title 作为中文名，
 * 并递归统计每个分类下的真实内容页数（.md/.mdx，排除 index.*），
 * 产出 src/data/knowledge-graph.json 供首页「知识图谱」组件渲染。
 *
 * 这样图谱永远与真实分类同步——新增分类自动出现在图谱，内容页数也实时更新。
 * 由 package.json 的 prebuild 调用，CI 构建时也会自动更新。
 */
const fs = require("fs");
const path = require("path");

const DOCS = path.resolve(__dirname, "..", "docs", "docs");
const OUT = path.resolve(__dirname, "..", "src", "data", "knowledge-graph.json");

// 一级领域固定配色（与首页视觉令牌协调）
const COLOR = {
  计算机科学基础: "#9a6b8c",
  数学基础: "#5b9aa0",
  人工智能: "#c1654b",
  编程语言: "#d99a4e",
  软件工程与后端: "#6b7faa",
  嵌入式开发: "#8a9a5b",
};

// 读取目录的中文名：优先 _category_.json 的 label，其次 index frontmatter 的 title
function catLabel(dir) {
  const cat = path.join(dir, "_category_.json");
  if (fs.existsSync(cat)) {
    try {
      const j = JSON.parse(fs.readFileSync(cat, "utf8"));
      if (j && j.label) return j.label;
    } catch (e) {
      /* 忽略损坏的 json */
    }
  }
  for (const f of ["index.mdx", "index.md"]) {
    const idx = path.join(dir, f);
    if (fs.existsSync(idx)) {
      const c = fs.readFileSync(idx, "utf8");
      const m = c.match(/title:\s*(.+)/);
      if (m) return m[1].trim().replace(/^["']|["']$/g, "");
    }
  }
  return null;
}

// 递归统计某目录下内容页数（.md/.mdx，排除 index.* 与 _category_.json）
function countContent(dir) {
  let n = 0;
  if (!fs.existsSync(dir)) return 0;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) n += countContent(p);
    else if (/\.mdx?$/.test(e.name) && !/^index\./.test(e.name)) n++;
  }
  return n;
}

const topDirs = fs
  .readdirSync(DOCS, { withFileTypes: true })
  .filter((d) => d.isDirectory())
  .map((d) => d.name)
  .sort((a, b) => a.localeCompare(b, "zh"));

const groups = { root: { color: "#9c5b3f", label: "知识花园" } };
const nodes = [
  { id: "root", label: "知识花园", to: "/", layer: 0, group: "root", count: countContent(DOCS) },
];
const edges = [];
const labelToId = { 知识花园: "root" };

topDirs.forEach((name) => {
  const dir = path.join(DOCS, name);
  const label = catLabel(dir) || name;
  const gid = "d-" + name;
  groups[gid] = { color: COLOR[label] || "#888888", label };
  const to = "/docs/" + name + "/";
  nodes.push({ id: gid, label, to, layer: 1, group: gid, count: countContent(dir) });
  edges.push(["root", gid]);
  labelToId[label] = gid;

  const sub = fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((s) => s.isDirectory())
    .map((s) => s.name)
    .sort((a, b) => a.localeCompare(b, "zh"));
  sub.forEach((sname) => {
    const sdir = path.join(dir, sname);
    const slabel = catLabel(sdir) || sname;
    const sid = gid + "-" + sname;
    const sto = "/docs/" + name + "/" + sname + "/";
    nodes.push({
      id: sid,
      label: slabel,
      to: sto,
      layer: 2,
      group: gid,
      parent: gid,
      count: countContent(sdir),
    });
    edges.push([gid, sid]);
    labelToId[slabel] = sid;
  });
});

// 跨领域关联：让图谱呈「网络」而非「树」
const CROSS = [
  ["人工智能", "数学基础"],
  ["编程语言", "人工智能"],
  ["编程语言", "软件工程与后端"],
  ["嵌入式开发", "编程语言"],
  ["计算机科学基础", "软件工程与后端"],
  ["计算机科学基础-数据结构与算法", "数学基础"],
  ["计算机科学基础-数据结构与算法", "编程语言"],
];
CROSS.forEach(([a, b]) => {
  const ia = labelToId[a];
  const ib = labelToId[b];
  if (ia && ib) edges.push([ia, ib]);
});

fs.writeFileSync(OUT, JSON.stringify({ groups, nodes, edges }, null, 2));
console.log(
  `[gen-kg] 生成 ${nodes.length} 个节点 / ${edges.length} 条边（含内容页计数）-> ${path.relative(
    path.resolve(__dirname, ".."),
    OUT
  )}`
);
