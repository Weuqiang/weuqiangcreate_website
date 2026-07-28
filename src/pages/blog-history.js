import React, { useState, useMemo } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import summary from "@site/src/data/blog-summary.json";
import styles from "./blog-history.module.css";

const TAG_PREVIEW = 16; // 标签默认展示数量，超出折叠

export default function BlogHistory() {
  const { siteConfig } = useDocusaurusContext();
  const { total, categories, tags: allTags, years } = summary;

  const [activeCat, setActiveCat] = useState(null); // 单选分类，null=全部
  const [activeTags, setActiveTags] = useState(() => new Set()); // 多选标签（OR）
  const [showAllTags, setShowAllTags] = useState(false);

  const toggleTag = (t) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(t)) next.delete(t);
      else next.add(t);
      return next;
    });
  };

  const clearFilters = () => {
    setActiveCat(null);
    setActiveTags(new Set());
  };

  const hasFilter = activeCat !== null || activeTags.size > 0;

  // 按筛选条件过滤后的年份分组
  const filteredYears = useMemo(() => {
    return years
      .map((y) => ({
        year: y.year,
        posts: y.posts.filter((p) => {
          const catOk = activeCat === null || p.category === activeCat;
          const tagOk =
            activeTags.size === 0 || p.tags.some((t) => activeTags.has(t));
          return catOk && tagOk;
        }),
      }))
      .filter((y) => y.posts.length > 0);
  }, [years, activeCat, activeTags]);

  const matchedCount = useMemo(
    () => filteredYears.reduce((n, y) => n + y.posts.length, 0),
    [filteredYears]
  );

  const visibleTags = showAllTags ? allTags : allTags.slice(0, TAG_PREVIEW);

  return (
    <Layout
      title="博文历史总览"
      description="按年份、标签与分类筛选的全部博文与自动摘要，每日自动更新"
    >
      <main className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.h1}>博文历史总览</h1>
          <p className={styles.sub}>
            共 <strong>{total}</strong> 篇 · 按年份归档，每篇附自动摘要
            <span className={styles.tag}>每日自动更新</span>
          </p>
        </header>

        {/* 筛选栏 */}
        <section className={styles.filterBar} aria-label="筛选">
          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>分类</span>
            <div className={styles.chips}>
              <button
                type="button"
                className={`${styles.chip} ${activeCat === null ? styles.chipActive : ""}`}
                onClick={() => setActiveCat(null)}
              >
                全部
              </button>
              {categories.map((c) => (
                <button
                  type="button"
                  key={c.name}
                  className={`${styles.chip} ${activeCat === c.name ? styles.chipActive : ""}`}
                  onClick={() =>
                    setActiveCat((prev) => (prev === c.name ? null : c.name))
                  }
                >
                  {c.name}
                  <span className={styles.chipCount}>{c.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>标签</span>
            <div className={styles.chips}>
              {visibleTags.map((t) => (
                <button
                  type="button"
                  key={t.name}
                  className={`${styles.chip} ${activeTags.has(t.name) ? styles.chipActive : ""}`}
                  onClick={() => toggleTag(t.name)}
                >
                  {t.name}
                  <span className={styles.chipCount}>{t.count}</span>
                </button>
              ))}
              {allTags.length > TAG_PREVIEW && (
                <button
                  type="button"
                  className={styles.chipMore}
                  onClick={() => setShowAllTags((v) => !v)}
                >
                  {showAllTags
                    ? "收起"
                    : `展开全部 ${allTags.length} 个标签`}
                </button>
              )}
            </div>
          </div>

          {hasFilter && (
            <div className={styles.filterStatus}>
              筛选命中 <strong>{matchedCount}</strong> 篇
              <button type="button" className={styles.clearBtn} onClick={clearFilters}>
                清除筛选
              </button>
            </div>
          )}
        </section>

        {/* 年份分组 */}
        {filteredYears.length === 0 ? (
          <p className={styles.empty}>没有符合当前筛选条件的博文。</p>
        ) : (
          filteredYears.map((y) => (
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
                      <span className={styles.meta}>
                        {p.category && (
                          <span className={styles.catPill}>{p.category}</span>
                        )}
                        {p.date && <span className={styles.date}>{p.date}</span>}
                      </span>
                    </div>
                    {p.summary && <p className={styles.summary}>{p.summary}</p>}
                    {p.tags && p.tags.length > 0 && (
                      <div className={styles.tagRow}>
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className={`${styles.tagPill} ${
                              activeTags.has(t) ? styles.tagPillActive : ""
                            }`}
                            onClick={() => toggleTag(t)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") toggleTag(t);
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}

        <footer className={styles.foot}>
          摘要由构建脚本自动从正文提取，每日定时刷新；更多可按
          <Link to="/blog/archive"> 全部博文列表 </Link>
          或 <Link to="/blog"> 博文主页 </Link> 浏览。
        </footer>
      </main>
    </Layout>
  );
}
