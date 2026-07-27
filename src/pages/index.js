import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import recentPosts from "@site/src/data/recent-posts.json";
import recentBooks from "@site/src/data/recent-books.json";
import styles from "./index.module.css";

/* ---------- 内联图标（随主题色 currentColor） ---------- */
function Icon({ name }) {
  const common = {
    width: 22, height: 22, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor",
    strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round",
  };
  switch (name) {
    case "docs": return (<svg {...common}><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" /></svg>);
    case "books": return (<svg {...common}><path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H11v15H5.5A2.5 2.5 0 0 0 3 20.5zM21 5.5A2.5 2.5 0 0 0 18.5 3H13v15h5.5a2.5 2.5 0 0 1 2.5 2.5z" /></svg>);
    case "pen": return (<svg {...common}><path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" /></svg>);
    case "case": return (<svg {...common}><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /></svg>);
    case "image": return (<svg {...common}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9.5" r="1.6" /><path d="M21 16l-5-5-7 7" /></svg>);
    case "user": return (<svg {...common}><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></svg>);
    default: return null;
  }
}

const quickLinks = [
  { icon: "docs", label: "开发知识库", to: "/docs" },
  { icon: "books", label: "书架", to: "/read" },
  { icon: "pen", label: "博文", to: "/blog/archive" },
  { icon: "case", label: "个案", to: "/case" },
  { icon: "image", label: "相簿", to: "/gallery" },
  { icon: "user", label: "关于", to: "/about" },
];

const domains = [
  { title: "编程外的基础", desc: "计算机科学导论、数据结构与算法、开发工具链——先建立全局地图。", to: "/docs/编程外的基础/" },
  { title: "数学基础", desc: "线性代数、微积分、概率统计、离散数学——AI 与算法的底层语言。", to: "/docs/数学基础/" },
  { title: "编程语言", desc: "Python / C / Web 前端 / Java / Go / Rust 多语言横向对比与选型。", to: "/docs/编程语言/" },
  { title: "人工智能", desc: "机器学习、深度学习、大模型（LLM）与应用——从原理到落地。", to: "/docs/人工智能/" },
  { title: "软件工程与后端", desc: "网络、数据库、API、架构、CI/CD、测试——做系统的通识。", to: "/docs/软件工程与后端/" },
  { title: "嵌入式开发", desc: "硬件电路、单片机、RTOS 与固件——软硬结合的工程实践。", to: "/docs/嵌入式开发/" },
];

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>笔记 · 代码 · 思考 · 生活</span>
          <h1 className={styles.title}>
            {siteConfig.title}
          </h1>
          <p className={styles.tagline}>{siteConfig.tagline}</p>
          <p className={styles.lede}>
            这里收集我把「学过的东西真正弄懂」的过程——技术笔记、读书心得、文章与影像，
            按<em>主题</em>而非时间组织，方便随时回来查阅与续写。
          </p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs">
              开始探索
            </Link>
            <Link className="button button--secondary button--lg" to="/blog/archive">
              阅读博客
            </Link>
          </div>
        </div>
        <aside className={styles.heroAside} aria-hidden="true">
          <div className={styles.seal}>
            <span className={styles.sealChar}>魏</span>
            <span className={styles.sealRing} />
          </div>
          <p className={styles.sealQuote}>
            「终身学习，<br />持续成长。」
          </p>
        </aside>
      </div>
    </header>
  );
}

function QuickNav() {
  return (
    <nav className={styles.quickNav} aria-label="快速导航">
      <div className={styles.quickNavInner}>
        {quickLinks.map((q) => (
          <Link key={q.to} to={q.to} className={styles.quickPill}>
            <span className={styles.quickIcon}><Icon name={q.icon} /></span>
            {q.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function KnowledgeMap() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <span className={styles.kicker}>知识地图</span>
        <h2 className={styles.sectionTitle}>六大知识领域</h2>
        <p className={styles.sectionLead}>
          按「先打地基、再学语言、后做系统」的顺序组织，点进任意领域开始学习。
        </p>
      </div>
      <div className={styles.domainGrid}>
        {domains.map((d, i) => (
          <Link key={d.to} to={d.to} className={styles.domainCard}>
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

function Latest() {
  const posts = recentPosts.slice(0, 5);
  const books = recentBooks.slice(0, 6);
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className={styles.sectionHead}>
        <span className={styles.kicker}>最近更新</span>
        <h2 className={styles.sectionTitle}>新写的与新读的</h2>
      </div>
      <div className={styles.latestGrid}>
        <div className={styles.latestCol}>
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
        <div className={styles.latestCol}>
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
    <section className={styles.closing}>
      <div className={styles.closingInner}>
        <p className={styles.closingKicker}>关于这座花园</p>
        <p className={styles.closingText}>
          我叫魏强，一名相信「持续积累」的开发者。技术、数学、阅读与生活，
          都在这里慢慢生长。欢迎随意漫步，也欢迎纠错与建议。
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
  return (
    <Layout
      title="首页"
      description="魏强的个人知识花园：编程、数学、AI、软工、嵌入式与读书笔记的系统整理。"
    >
      <Hero />
      <QuickNav />
      <main>
        <KnowledgeMap />
        <Latest />
        <Closing />
      </main>
    </Layout>
  );
}
