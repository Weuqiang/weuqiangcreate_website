import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import recentPosts from "@site/src/data/recent-posts.json";
import recentBooks from "@site/src/data/recent-books.json";
import styles from "./index.module.css";

/* ---------- 真实知识图谱：节点 + 连线（对应站点实际结构） ---------- */
const GROUPS = {
  root:  { color: "var(--ifm-color-primary)" },
  ai:    { color: "#c1654b" },
  lang:  { color: "#d99a4e" },
  embed: { color: "#8a9a5b" },
  math:  { color: "#5b9aa0" },
  cs:    { color: "#9a6b8c" },
  be:    { color: "#6b7faa" },
};

const NODES = [
  { id: "root", label: "知识花园", to: "/", layer: 0, group: "root" },
  // 六大领域（环一）
  { id: "cs",    label: "计算机科学基础", to: "/docs/计算机科学基础/", layer: 1, group: "cs" },
  { id: "math",  label: "数学基础",     to: "/docs/数学基础/",     layer: 1, group: "math" },
  { id: "ai",    label: "人工智能",     to: "/docs/人工智能/",     layer: 1, group: "ai" },
  { id: "lang",  label: "编程语言",     to: "/docs/编程语言/",     layer: 1, group: "lang" },
  { id: "be",    label: "软件工程与后端", to: "/docs/软件工程与后端/", layer: 1, group: "be" },
  { id: "embed", label: "嵌入式开发",   to: "/docs/嵌入式开发/",   layer: 1, group: "embed" },
  // 子主题（环二）
  { id: "cs-cs",    label: "计算机科学导论", to: "/docs/计算机科学基础/计算机科学导论/", layer: 2, group: "cs", parent: "cs", side: -1 },
  { id: "cs-dsa",   label: "数据结构与算法", to: "/docs/计算机科学基础/数据结构与算法/", layer: 2, group: "cs", parent: "cs", side: 0 },
  { id: "cs-tool",  label: "开发工具链",     to: "/docs/计算机科学基础/开发工具链/",     layer: 2, group: "cs", parent: "cs", side: 1 },
  { id: "math-la",  label: "线性代数",       to: "/docs/数学基础/线性代数/",   layer: 2, group: "math", parent: "math", side: -1 },
  { id: "math-ps",  label: "概率与统计",     to: "/docs/数学基础/概率与统计/", layer: 2, group: "math", parent: "math", side: 1 },
  { id: "ai-ml",    label: "机器学习",       to: "/docs/人工智能/机器学习/",   layer: 2, group: "ai", parent: "ai", side: -1 },
  { id: "ai-llm",   label: "大模型",         to: "/docs/人工智能/大模型LLM与应用/", layer: 2, group: "ai", parent: "ai", side: 1 },
  { id: "lang-py",  label: "Python",        to: "/docs/编程语言/Python/",   layer: 2, group: "lang", parent: "lang", side: -1 },
  { id: "lang-rust",label: "Rust",          to: "/docs/编程语言/Rust/",     layer: 2, group: "lang", parent: "lang", side: 1 },
  { id: "be-back",  label: "后端通识",       to: "/docs/软件工程与后端/后端通识/", layer: 2, group: "be", parent: "be", side: -1 },
  { id: "be-arch",  label: "架构",           to: "/docs/软件工程与后端/",     layer: 2, group: "be", parent: "be", side: 1 },
  { id: "embed-mcu",label: "单片机MCU",      to: "/docs/嵌入式开发/单片机MCU/", layer: 2, group: "embed", parent: "embed", side: -1 },
  { id: "embed-net",label: "通信协议",       to: "/docs/嵌入式开发/通信协议/", layer: 2, group: "embed", parent: "embed", side: 1 },
];

const EDGES = [
  ["root", "cs"], ["root", "math"], ["root", "ai"], ["root", "lang"], ["root", "be"], ["root", "embed"],
  ["cs", "cs-cs"], ["cs", "cs-dsa"], ["cs", "cs-tool"],
  ["math", "math-la"], ["math", "math-ps"],
  ["ai", "ai-ml"], ["ai", "ai-llm"],
  ["lang", "lang-py"], ["lang", "lang-rust"],
  ["be", "be-back"], ["be", "be-arch"],
  ["embed", "embed-mcu"], ["embed", "embed-net"],
  // 跨领域关联：让它成为「图」而非树
  ["ai", "math"],   // 机器学习依赖数学
  ["lang", "ai"],   // AI 多用 Python
  ["lang", "be"],   // 后端用编程语言
  ["embed", "lang"],// 嵌入式用 C/固件
  ["cs", "be"],     // 计算机基础支撑后端
  ["cs-dsa", "math"], // 算法依赖数学
  ["cs-dsa", "lang"], // 算法用语言实现
];

/* 布局：中心 + 两环（确定性，无需依赖） */
const GW = 960, GH = 680, GCX = 480, GCY = 340, R1 = 158, R2 = 286;
const domainIds = NODES.filter((n) => n.layer === 1).map((n) => n.id);
const pos = {};
NODES.forEach((n) => {
  if (n.layer === 0) { pos[n.id] = { x: GCX, y: GCY }; return; }
  if (n.layer === 1) {
    const i = domainIds.indexOf(n.id);
    const ang = ((-90 + i * 60) * Math.PI) / 180;
    pos[n.id] = { x: GCX + R1 * Math.cos(ang), y: GCY + R1 * Math.sin(ang) };
    return;
  }
  const p = pos[n.parent];
  const base = Math.atan2(p.y - GCY, p.x - GCX);
  const ang = base + (n.side || 0) * 0.32;
  pos[n.id] = { x: GCX + R2 * Math.cos(ang), y: GCY + R2 * Math.sin(ang) };
});

const adj = {};
NODES.forEach((n) => (adj[n.id] = new Set()));
EDGES.forEach(([a, b]) => { adj[a].add(b); adj[b].add(a); });

function edgePath(a, b) {
  const p1 = pos[a], p2 = pos[b];
  const isCross =
    NODES.find((n) => n.id === a).layer === 1 && NODES.find((n) => n.id === b).layer === 1;
  if (!isCross) return `M${p1.x},${p1.y} L${p2.x},${p2.y}`;
  const mx = (p1.x + p2.x) / 2, my = (p1.y + p2.y) / 2;
  const dx = p2.x - p1.x, dy = p2.y - p1.y;
  const len = Math.hypot(dx, dy) || 1;
  const nx = -dy / len, ny = dx / len;
  const off = 52;
  return `M${p1.x},${p1.y} Q${mx + nx * off},${my + ny * off} ${p2.x},${p2.y}`;
}

/* 近况：前两项取自真实数据；第三项「在想的事」可自由编辑 */
const nowReading = recentBooks[0];
const nowWriting = recentPosts[0];

const rotating = ["笔记", "代码", "思考", "生活"];

/* 滚动入场动画（无 JS / 减弱动效时直接显示） */
function useReveal() {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("js");
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add(styles.revealIn));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.revealIn);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  const [wi, setWi] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setWi((v) => (v + 1) % rotating.length), 2300);
    return () => clearInterval(t);
  }, []);
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} aria-hidden="true" />
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>
            <span className={styles.eyebrowFix}>一座关于</span>
            <span className={styles.eyebrowRotate} key={wi}>{rotating[wi]}</span>
            <span className={styles.eyebrowFix}>的花园</span>
          </span>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.manifesto}>
            把零散的念头，种成一座<em>慢慢生长</em>的花园。
          </p>
          <p className={styles.lede}>
            我是魏强：这里收着「把学的东西真正弄懂」的过程——方便随时续写。
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs">逛逛知识图谱</Link>
            <Link className="button button--secondary button--lg" to="/about">关于我</Link>
          </div>
        </div>
        <aside className={styles.heroAside} aria-hidden="true">
          <div className={styles.emblem}>
            <span className={styles.ringOuter} />
            <span className={styles.seal}>
              <span className={styles.sealChar}>魏</span>
            </span>
            <span className={styles.ringInner} />
          </div>
          <svg className={styles.sprout} viewBox="0 0 120 170" fill="none">
            <path d="M60 168 V92" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
            <path d="M60 116 C60 92 36 86 22 92 C36 102 54 110 60 116Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            <path d="M60 104 C60 80 86 74 102 82 C88 92 66 98 60 104Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
            <circle cx="60" cy="80" r="4.5" stroke="currentColor" strokeWidth="2.2" />
          </svg>
        </aside>
      </div>
    </header>
  );
}

function KnowledgeGraph() {
  const [hover, setHover] = useState(null);
  const active = hover ? new Set([hover, ...adj[hover]]) : null;
  return (
    <section className={clsx(styles.section)} data-reveal>
      <div className={styles.sectionHead}>
        <span className={styles.kicker}>知识图谱</span>
        <h2 className={styles.sectionTitle}>知识的脉络</h2>
        <p className={styles.sectionLead}>
          这座花园，向阳而生，主干坚实脉络繁茂，点击进入。
        </p>
      </div>
      <div className={styles.kgStage}>
        <svg
          className={styles.kgSvg}
          viewBox={`0 0 ${GW} ${GH}`}
          role="img"
          aria-label="知识图谱：中心为知识花园，连接六大领域及其子主题"
        >
          <g className={styles.kgEdges}>
            {EDGES.map(([a, b], i) => {
              const isCross =
                NODES.find((n) => n.id === a).layer === 1 &&
                NODES.find((n) => n.id === b).layer === 1;
              const on = !hover || a === hover || b === hover;
              return (
                <path
                  key={i}
                  d={edgePath(a, b)}
                  className={clsx(styles.kgEdge, isCross && styles.kgEdgeCross, !on && styles.kgEdgeDim)}
                  {...(isCross ? {} : { pathLength: 1 })}
                  style={{ animationDelay: `${i * 35}ms` }}
                />
              );
            })}
          </g>
          <g>
            {NODES.map((n, i) => {
              const p = pos[n.id];
              const color = GROUPS[n.group].color;
              const isActive = !hover || (active && active.has(n.id));
              const r = n.layer === 0 ? 46 : n.layer === 1 ? 34 : 25;
              const onRoot = n.layer === 0;
              return (
                <Link
                  key={n.id}
                  to={n.to}
                  className={clsx(styles.kgNode, !isActive && styles.kgNodeDim, hover === n.id && styles.kgNodeHot)}
                  aria-label={n.label}
                  onMouseEnter={() => setHover(n.id)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(n.id)}
                  onBlur={() => setHover(null)}
                  style={{ animationDelay: `${i * 28}ms`, ["--gc"]: color }}
                >
                  <circle cx={p.x} cy={p.y} r={r + 9} fill="transparent" />
                  <circle
                    cx={p.x}
                    cy={p.y}
                    r={r}
                    className={clsx(styles.kgDot, onRoot && styles.kgDotRoot)}
                    style={{ stroke: color }}
                  />
                  <text
                    x={p.x}
                    y={p.y + (onRoot ? 5 : n.layer === 1 ? 5 : 4)}
                    className={clsx(styles.kgLabel, onRoot && styles.kgLabelRoot)}
                    style={{ fontSize: onRoot ? 17 : n.layer === 1 ? 14 : 11.5 }}
                  >
                    {n.label}
                  </text>
                </Link>
              );
            })}
          </g>
        </svg>
      </div>
    </section>
  );
}

function NowSection() {
  return (
    <section className={clsx(styles.section, styles.nowSection)} data-reveal>
      <div className={styles.sectionHead}>
        <span className={styles.kicker}>近况</span>
        <h2 className={styles.sectionTitle}>这座花园，现在长这样</h2>
      </div>
      <div className={styles.nowGrid}>
        <div className={styles.nowCard} data-reveal>
          <span className={styles.nowTag}>最近在读</span>
          <Link to={nowReading.permalink} className={styles.nowTitle}>{nowReading.title}</Link>
          <span className={styles.nowMeta}>{nowReading.genre}</span>
        </div>
        <div className={styles.nowCard} data-reveal>
          <span className={styles.nowTag}>最近在写</span>
          <Link to={nowWriting.permalink} className={styles.nowTitle}>{nowWriting.title}</Link>
          <span className={styles.nowMeta}>{nowWriting.date}</span>
        </div>
        <div className={styles.nowCard} data-reveal>
          <span className={styles.nowTag}>在想的事</span>
          <p className={styles.nowThink}>
            如何把「学过」真正变成「会用」——这座花园想回答的，就是这个问题。
          </p>
        </div>
      </div>
    </section>
  );
}

function Latest() {
  const posts = recentPosts.slice(0, 5);
  const books = recentBooks.slice(0, 6);
  return (
    <section className={clsx(styles.section, styles.sectionAlt)} data-reveal>
      <div className={styles.sectionHead}>
        <span className={styles.kicker}>最近更新</span>
        <h2 className={styles.sectionTitle}>新写的与新读的</h2>
      </div>
      <div className={styles.latestGrid}>
        <div className={styles.latestCol} data-reveal>
          <h3 className={styles.colTitle}>最新文章</h3>
          <ul className={styles.postList}>
            {posts.map((p) => (
              <li key={p.permalink} className={styles.postItem}>
                <Link to={p.permalink} className={styles.postTitle}>{p.title}</Link>
                <span className={styles.postDate}>{p.date}</span>
              </li>
            ))}
          </ul>
          <Link className={styles.colMore} to="/blog/archive">查看全部博文 →</Link>
        </div>
        <div className={styles.latestCol} data-reveal>
          <h3 className={styles.colTitle}>最近读过的书</h3>
          <ul className={styles.bookList}>
            {books.map((b) => (
              <li key={b.permalink}>
                <Link to={b.permalink} className={styles.bookTitle}>{b.title}</Link>
                <span className={styles.bookGenre}>{b.genre}</span>
              </li>
            ))}
          </ul>
          <Link className={styles.colMore} to="/read">逛逛书架 →</Link>
        </div>
      </div>
    </section>
  );
}

function Closing() {
  const rss = useBaseUrl("/blog/rss.xml");
  return (
    <section className={styles.closing} data-reveal>
      <div className={styles.closingInner}>
        <span className={styles.closingKicker}>慢慢相遇</span>
        <p className={styles.closingText}>
          知识不是囤积，而是一次次回来、续写与重逢。<br />
          欢迎随意漫步这座花园，也欢迎纠错与建议。
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/about">了解更多</Link>
          <a className="button button--secondary button--lg" href={rss}>RSS 订阅</a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useReveal();
  return (
    <Layout
      title="首页"
      description="魏强的个人知识花园：编程、数学、AI、软工、嵌入式与读书笔记的系统整理。"
    >
      <Hero />
      <main>
        <KnowledgeGraph />
        <NowSection />
        <Latest />
        <Closing />
      </main>
    </Layout>
  );
}
