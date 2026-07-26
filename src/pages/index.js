import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import recentPosts from "@site/src/data/recent-posts.json";
import styles from "./index.module.css";

/* ---------- 频道图标（内联 SVG，随主题色 currentColor） ---------- */
function Icon({ name }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "docs":
      return (
        <svg {...common}>
          <path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" />
        </svg>
      );
    case "books":
      return (
        <svg {...common}>
          <path d="M3 5.5A2.5 2.5 0 0 1 5.5 3H11v15H5.5A2.5 2.5 0 0 0 3 20.5zM21 5.5A2.5 2.5 0 0 0 18.5 3H13v15h5.5a2.5 2.5 0 0 1 2.5 2.5z" />
        </svg>
      );
    case "pen":
      return (
        <svg {...common}>
          <path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
        </svg>
      );
    case "case":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    case "image":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <circle cx="8.5" cy="9.5" r="1.6" />
          <path d="M21 16l-5-5-7 7" />
        </svg>
      );
    case "user":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 21a8 8 0 0 1 16 0" />
        </svg>
      );
    default:
      return null;
  }
}

const channels = [
  {
    icon: "docs",
    title: "开发知识库",
    desc: "六大方向、教程级笔记，覆盖从地基到系统的完整学习路径。",
    to: "/docs",
    cta: "进入知识库",
  },
  {
    icon: "books",
    title: "书架",
    desc: "70+ 本读过的书，按体裁归类，附书评与「去哪读」。",
    to: "/read",
    cta: "逛逛书架",
  },
  {
    icon: "pen",
    title: "博文",
    desc: "AI 前沿速递、技术史与偶尔的随笔。",
    to: "/blog/archive",
    cta: "读读博客",
  },
  {
    icon: "case",
    title: "个案",
    desc: "亲手做过的小项目、实验与作品集。",
    to: "/case",
    cta: "看作品",
  },
  {
    icon: "image",
    title: "相簿",
    desc: "旅途与日常的影像记录。",
    to: "/gallery",
    cta: "翻翻相簿",
  },
  {
    icon: "user",
    title: "关于",
    desc: "关于我、这座花园，以及联系方式。",
    to: "/about",
    cta: "认识我",
  },
];

const domains = [
  {
    title: "编程外的基础",
    desc: "计算机科学导论、数据结构与算法、开发工具链——全局地图。",
    to: "/docs/编程外的基础/",
  },
  {
    title: "数学基础",
    desc: "线性代数、微积分、概率统计、离散数学——AI 与算法的底层语言。",
    to: "/docs/数学基础/",
  },
  {
    title: "编程语言",
    desc: "Python / C / Web 前端 / Java / Go / Rust 多语言横向对比与选型。",
    to: "/docs/编程语言/",
  },
  {
    title: "人工智能",
    desc: "从机器学习、深度学习到大模型（LLM）与应用。",
    to: "/docs/人工智能/",
  },
  {
    title: "软件工程与后端",
    desc: "网络、数据库、API、架构、CI/CD、测试——做系统的通识。",
    to: "/docs/软件工程与后端/",
  },
  {
    title: "嵌入式开发",
    desc: "硬件电路、单片机、RTOS 与嵌入式固件——软硬结合。",
    to: "/docs/嵌入式开发/",
  },
];

function Hero() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroBg} aria-hidden="true" />
      <div className={styles.heroInner}>
        <div className={styles.avatar} aria-hidden="true">
          魏
        </div>
        <span className={styles.eyebrow}>笔记 · 代码 · 思考 · 生活</span>
        <h1 className={styles.title}>{siteConfig.title}</h1>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <p className={styles.intro}>
          这里是我用来存放学习与思考的地方——技术文档、读书笔记、文章与影像。
          相信「终身学习，持续成长」，也相信好东西值得慢慢记下来。
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs">
            开始探索
          </Link>
          <Link className="button button--secondary button--lg" to="/blog/archive">
            阅读博客
          </Link>
        </div>
        <ul className={styles.stats}>
          <li>
            <strong>6</strong>
            <span>大知识领域</span>
          </li>
          <li>
            <strong>70+</strong>
            <span>篇读书笔记</span>
          </li>
          <li>
            <strong>∞</strong>
            <span>持续生长中</span>
          </li>
        </ul>
      </div>
    </header>
  );
}

function Channels() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>从这里开始</h2>
        <p className={styles.sectionLead}>
          几个常去的地方，挑一个感兴趣的方向进入。
        </p>
      </div>
      <div className={styles.channelGrid}>
        {channels.map((c) => (
          <Link key={c.to} to={c.to} className={styles.channelCard}>
            <span className={styles.channelIcon}>
              <Icon name={c.icon} />
            </span>
            <h3 className={styles.channelTitle}>{c.title}</h3>
            <p className={styles.channelDesc}>{c.desc}</p>
            <span className={styles.channelCta}>
              {c.cta}
              <span className={styles.arrow}>→</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Domains() {
  return (
    <section className={clsx(styles.section, styles.sectionAlt)}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>六大知识领域</h2>
        <p className={styles.sectionLead}>
          按「先打地基、再学语言、后做系统」的顺序组织，点进任意领域开始学习。
        </p>
      </div>
      <div className={styles.domainGrid}>
        {domains.map((d, i) => (
          <Link key={d.to} to={d.to} className={styles.domainCard}>
            <span className={styles.domainIndex}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className={styles.domainTitle}>{d.title}</h3>
              <p className={styles.domainDesc}>{d.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Recent() {
  const recent = recentPosts.slice(0, 5);
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <h2 className={styles.sectionTitle}>最新文章</h2>
        <p className={styles.sectionLead}>最近写下的博文与随笔。</p>
      </div>
      <ul className={styles.recentList}>
        {recent.map((post) => (
          <li key={post.permalink} className={styles.recentItem}>
            <Link to={post.permalink} className={styles.recentTitle}>
              {post.title}
            </Link>
            <span className={styles.recentDate}>{post.date}</span>
          </li>
        ))}
      </ul>
      <div className={styles.recentMore}>
        <Link
          className="button button--secondary button--md"
          to="/blog/archive"
        >
          查看全部博文
        </Link>
      </div>
    </section>
  );
}

function AboutCTA() {
  const rss = useBaseUrl("/blog/rss.xml");
  return (
    <section className={clsx(styles.section, styles.ctaSection)}>
      <div className={styles.ctaInner}>
        <h2 className={styles.ctaTitle}>关于这座花园</h2>
        <p className={styles.ctaText}>
          我叫魏强，一名相信「持续积累」的开发者。这个站点是我个人的知识花园——
          技术、数学、阅读与生活，都在这里慢慢生长。欢迎随意漫步，也欢迎纠错与建议。
        </p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/about">
            了解更多
          </Link>
          <a className="button button--secondary button--lg" href={rss}>
            RSS 订阅
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="首页"
      description="魏强的个人知识花园：技术文档、读书笔记、文章与影像。"
    >
      <Hero />
      <main>
        <Channels />
        <Domains />
        <Recent />
        <AboutCTA />
      </main>
    </Layout>
  );
}
