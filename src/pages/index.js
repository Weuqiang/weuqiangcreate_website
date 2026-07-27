import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import recentPosts from "@site/src/data/recent-posts.json";
import recentBooks from "@site/src/data/recent-books.json";
import styles from "./index.module.css";

const domains = [
  { title: "编程外的基础", desc: "计算机科学导论、数据结构与算法、开发工具链——先建立全局地图。", to: "/docs/编程外的基础/" },
  { title: "数学基础", desc: "线性代数、微积分、概率统计、离散数学——AI 与算法的底层语言。", to: "/docs/数学基础/" },
  { title: "编程语言", desc: "Python / C / Web 前端 / Java / Go / Rust 多语言横向对比与选型。", to: "/docs/编程语言/" },
  { title: "人工智能", desc: "机器学习、深度学习、大模型（LLM）与应用——从原理到落地。", to: "/docs/人工智能/" },
  { title: "软件工程与后端", desc: "网络、数据库、API、架构、CI/CD、测试——做系统的通识。", to: "/docs/软件工程与后端/" },
  { title: "嵌入式开发", desc: "硬件电路、单片机、RTOS 与固件——软硬结合的工程实践。", to: "/docs/嵌入式开发/" },
];

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
            我是魏强。这里收着我「把学过的东西真正弄懂」的过程——
            技术笔记、读书心得、文章与影像，按主题而非时间组织，方便随时回来续写。
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs">逛逛知识地图</Link>
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

function KnowledgeMap() {
  return (
    <section className={clsx(styles.section)} data-reveal>
      <div className={styles.sectionHead}>
        <span className={styles.kicker}>知识地图</span>
        <h2 className={styles.sectionTitle}>六大知识领域</h2>
        <p className={styles.sectionLead}>
          按「先打地基、再学语言、后做系统」的顺序生长，点进任意领域开始学习。
        </p>
      </div>
      <div className={styles.domainGrid}>
        {domains.map((d, i) => (
          <Link key={d.to} to={d.to} className={styles.domainCard} data-reveal>
            <span className={styles.domainIndex}>{String(i + 1).padStart(2, "0")}</span>
            <div className={styles.domainBody}>
              <h3 className={styles.domainTitle}>{d.title}</h3>
              <p className={styles.domainDesc}>{d.desc}</p>
            </div>
            <span className={styles.domainArrow} aria-hidden="true">→</span>
          </Link>
        ))}
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
        <KnowledgeMap />
        <NowSection />
        <Latest />
        <Closing />
      </main>
    </Layout>
  );
}
