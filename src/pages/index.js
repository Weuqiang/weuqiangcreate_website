import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import recentPosts from "@site/src/data/recent-posts.json";
import styles from "./index.module.css";

const sections = [
  { icon: "📚", title: "开发文档", desc: "前端、后端、机器学习与编程语言的系统笔记。", to: "/docs" },
  { icon: "📖", title: "书架", desc: "70+ 本读过的书，按体裁归类与随想。", to: "/read" },
  { icon: "✍️", title: "博文", desc: "AI 前沿速递、技术史与偶尔的随笔。", to: "/blog" },
  { icon: "🗂️", title: "个案", desc: "亲手做过的小项目与作品集。", to: "/case" },
  { icon: "🖼️", title: "相簿", desc: "旅途与日常的影像记录。", to: "/gallery" },
];

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroInner}>
        <span className={styles.heroEyebrow}>笔记 · 代码 · 思考 · 生活</span>
        <h1 className={clsx(styles.heroTitle)}>{siteConfig.title}</h1>
        <p className={clsx(styles.heroSubtitle)}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/docs">
            开始探索
          </Link>
          <Link className="button button--secondary button--lg" to="/blog">
            阅读博客
          </Link>
        </div>
        <p className={styles.intro}>
          这里是我用来存放学习与思考的地方——技术文档、读书笔记、文章与影像。
          相信「终身学习，持续成长」，也相信好东西值得慢慢记下来。
        </p>
      </div>
    </header>
  );
}

function RecentUpdates() {
  const recent = recentPosts.slice(0, 5);
  return (
    <section className={styles.recentSection}>
      <h2 className={styles.sectionTitle}>最近更新</h2>
      <p className={styles.sectionLead}>最新发布的文章与笔记</p>
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
        <Link className="button button--secondary button--md" to="/blog/archive">
          查看全部博文
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="首页"
      description="魏强的个人知识博客：技术文档、读书笔记、文章与影像。"
    >
      <HomepageHeader />
      <main>
        <section className={styles.featuresSection}>
          <h2 className={styles.sectionTitle}>逛逛看</h2>
          <p className={styles.sectionLead}>几个常去的地方</p>
          <div className={styles.heroCards}>
            {sections.map((s) => (
              <Link
                key={s.to}
                to={s.to}
                className={styles.heroCard}
                style={{ textDecoration: "none" }}
              >
                <div className={styles.cardIcon}>{s.icon}</div>
                <div className={styles.cardContent}>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <RecentUpdates />
      </main>
    </Layout>
  );
}
