import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./404.module.css";

export default function NotFound() {
  return (
    <Layout
      title="页面走丢了"
      description="你访问的页面不存在或已移动，回到知识花园的首页、知识图谱、博客或书架。"
    >
      <main className={styles.wrap}>
        <div className={styles.inner}>
          <div className={styles.art} aria-hidden="true">
            <svg viewBox="0 0 200 200" fill="none" className={styles.svg}>
              <path
                d="M70 150 h60 l-8 34 a6 6 0 0 1 -6 5 H84 a6 6 0 0 1 -6 -5 Z"
                fill="var(--ifm-color-primary-lightest)"
                stroke="var(--ifm-color-primary)"
                strokeWidth="3"
                strokeLinejoin="round"
              />
              <path d="M72 150 h56" stroke="var(--ifm-color-primary)" strokeWidth="3" strokeLinecap="round" />
              <path d="M100 150 V110" stroke="var(--ifm-color-primary)" strokeWidth="3" strokeLinecap="round" />
              <path
                d="M100 128 C100 108 80 104 68 110 C80 120 94 126 100 128Z"
                fill="var(--ifm-color-primary-light)"
                stroke="var(--ifm-color-primary)"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <path
                d="M100 118 C100 98 120 94 132 102 C120 112 106 116 100 118Z"
                fill="var(--ifm-color-primary-light)"
                stroke="var(--ifm-color-primary)"
                strokeWidth="2.4"
                strokeLinejoin="round"
              />
              <circle cx="152" cy="58" r="23" fill="var(--paper-2)" stroke="var(--ifm-color-primary)" strokeWidth="3" />
              <text
                x="152"
                y="68"
                textAnchor="middle"
                fontSize="28"
                fontFamily="var(--font-serif)"
                fill="var(--ifm-color-primary)"
              >
                ?
              </text>
            </svg>
          </div>
          <span className={styles.kicker}>404</span>
          <h1 className={styles.title}>这片叶子还没长出来</h1>
          <p className={styles.lede}>
            你访问的页面不存在，或者已经移到了别处。<br />
            别急——顺着下面的小路，总能回到花园里。
          </p>
          <div className={styles.links}>
            <Link className="button button--primary button--lg" to="/">
              返回首页
            </Link>
            <Link className="button button--secondary button--lg" to="/docs">
              逛知识图谱
            </Link>
            <Link className="button button--secondary button--lg" to="/blog">
              读博客
            </Link>
            <Link className="button button--secondary button--lg" to="/read">
              逛书架
            </Link>
          </div>
          <p className={styles.hint}>
            也可以点右上角的搜索框，直接找想看的内容。
          </p>
        </div>
      </main>
    </Layout>
  );
}
