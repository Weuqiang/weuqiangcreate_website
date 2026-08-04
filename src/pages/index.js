import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import recentPosts from "@site/src/data/recent-posts.json";
import recentBooks from "@site/src/data/recent-books.json";
import kgData from "@site/src/data/knowledge-graph.json";
import styles from "./index.module.css";

/* ---------- 知识图谱：数据由 scripts/gen-knowledge-graph.js 从真实目录树生成 ---------- */
const { groups, nodes, edges } = kgData;
const nodeById = {};
nodes.forEach((n) => (nodeById[n.id] = n));

/* 布局：中心 + 两环（确定性放射，支持任意子节点数，无需依赖） */
const GW = 980, GH = 760, GCX = 490, GCY = 380, R1 = 156, R2 = 320;
const l1 = nodes.filter((n) => n.layer === 1);
const pos = { root: { x: GCX, y: GCY } };
l1.forEach((n, i) => {
  const ang = (-90 + i * (360 / l1.length)) * (Math.PI / 180);
  pos[n.id] = { x: GCX + R1 * Math.cos(ang), y: GCY + R1 * Math.sin(ang) };
});
l1.forEach((parent) => {
  const children = nodes.filter((n) => n.parent === parent.id);
  if (!children.length) return;
  const base = Math.atan2(pos[parent.id].y - GCY, pos[parent.id].x - GCX);
  const span = Math.min(52, 360 / l1.length - 10) * (Math.PI / 180);
  children.forEach((c, j) => {
    const t = children.length === 1 ? 0 : (j / (children.length - 1) - 0.5) * 2;
    const ang = base + t * span;
    pos[c.id] = { x: GCX + R2 * Math.cos(ang), y: GCY + R2 * Math.sin(ang) };
  });
});

const adj = {};
nodes.forEach((n) => (adj[n.id] = new Set()));
edges.forEach(([a, b]) => {
  adj[a].add(b);
  adj[b].add(a);
});

function edgePath(a, b) {
  const p1 = pos[a], p2 = pos[b];
  const isCross = nodeById[a].layer === 1 && nodeById[b].layer === 1;
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
            {edges.map(([a, b], i) => {
              const isCross =
                nodeById[a].layer === 1 && nodeById[b].layer === 1;
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
            {nodes.map((n, i) => {
              const p = pos[n.id];
              const color = groups[n.group].color;
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
                  <title>{n.label}{typeof n.count === "number" ? ` · ${n.count} 篇` : ""}</title>
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
                  {typeof n.count === "number" && n.count > 0 && !onRoot && (
                    <text
                      x={p.x}
                      y={p.y + (n.layer === 1 ? 21 : 16)}
                      className={styles.kgCount}
                      style={{ fontSize: n.layer === 1 ? 9.5 : 8.5 }}
                    >
                      {n.count}篇
                    </text>
                  )}
                </Link>
              );
            })}
          </g>
        </svg>
      </div>
      {/* 移动端：6 领域卡片网格替代 SVG 图谱（纯 CSS 切换，<560px 显示） */}
      <div className={styles.kgMobileGrid}>
        {l1.map((n) => {
          const children = nodes.filter((c) => c.parent === n.id);
          return (
            <Link
              key={n.id}
              to={n.to}
              className={styles.kgMobileCard}
              style={{ ["--gc"]: groups[n.group].color }}
            >
              <span className={styles.kgMobileLabel}>{n.label}</span>
              {typeof n.count === "number" && n.count > 0 && (
                <span className={styles.kgMobileCount}>{n.count} 篇</span>
              )}
              {children.length > 0 && (
                <span className={styles.kgMobileSub}>
                  {children.map((c) => c.label).join(" · ")}
                </span>
              )}
            </Link>
          );
        })}
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
