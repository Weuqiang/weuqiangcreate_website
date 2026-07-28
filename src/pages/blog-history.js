import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import summary from "@site/src/data/blog-summary.json";
import styles from "./blog-history.module.css";

export default function BlogHistory() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="博文历史总览"
      description="按年份归档的全部博文与自动摘要，每日自动更新"
    >
      <main className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.h1}>博文历史总览</h1>
          <p className={styles.sub}>
            共 <strong>{summary.total}</strong> 篇 · 按年份归档，每篇附自动摘要
            <span className={styles.tag}>每日自动更新</span>
          </p>
        </header>

        {summary.years.map((y) => (
          <section key={y.year} className={styles.yearBlock}>
            <div className={styles.yearBar}>
              <h2 className={styles.year}>{y.year}</h2>
              <span className={styles.yearCount}>{y.posts.length} 篇</span>
            </div>
            <ul className={styles.list}>
              {y.posts.map((p) => (
                <li key={p.url} className={styles.item}>
                  <div className={styles.itemHead}>
                    <Link to={p.url} className={styles.itemTitle}>
                      {p.title}
                    </Link>
                    {p.date && <span className={styles.date}>{p.date}</span>}
                  </div>
                  {p.summary && <p className={styles.summary}>{p.summary}</p>}
                </li>
              ))}
            </ul>
          </section>
        ))}

        <footer className={styles.foot}>
          摘要由构建脚本自动从正文提取，每日定时刷新；更多可按
          <Link to="/blog/archive"> 全部博文列表 </Link>
          或 <Link to="/blog"> 博文主页 </Link> 浏览。
        </footer>
      </main>
    </Layout>
  );
}
