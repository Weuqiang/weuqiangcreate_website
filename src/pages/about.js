import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./about.module.css";

const facts = [
  { k: "方向", v: "全栈工程 · 嵌入式 · 机器学习" },
  { k: "信条", v: "终身学习，持续成长" },
  { k: "工具", v: "Docusaurus · KaTeX · Mermaid · Markmap" },
  { k: "托管", v: "GitHub Pages 自动部署" },
];

export default function About() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="关于" description="关于魏强，以及这个知识花园的由来">
      <main className={styles.page}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>关于我</span>
          <h1 className={styles.title}>{siteConfig.title}</h1>
          <p className={styles.lead}>
            你好，我是魏强。这里是一处安放学习与思考的「知识花园」——
            技术文档、读书笔记、文章与影像，慢慢记下来，也慢慢生长。
          </p>
        </header>

        <section className={styles.body}>
          <h2 className={styles.h2}>为什么有这个站</h2>
          <p>
            知识如果不被写下，就容易被遗忘；如果不被串联，就难以成体系。
            这个站点把分散在文档、书本、博客里的内容收拢到一处，
            用六支分类（编程外的基础、数学基础、编程语言、人工智能、软件工程与后端、嵌入式开发）
            作为骨架，让零散的笔记长成可以翻阅的花园。
          </p>

          <h2 className={styles.h2}>这里有什么</h2>
          <ul className={styles.list}>
            <li><strong>开发文档</strong>：按六支组织的系统笔记，可交叉跳转。</li>
            <li><strong>书架</strong>：读过的书按体裁归类，附随想与摘录。</li>
            <li><strong>博文</strong>：AI 前沿速递、技术史与偶尔的随笔。</li>
            <li><strong>个案</strong>：亲手做过的小项目与作品集。</li>
            <li><strong>相簿</strong>：旅途与日常的影像记录。</li>
          </ul>

          <h2 className={styles.h2}>关于我</h2>
          <p>
            我关注把复杂的东西讲清楚，也关注把清楚的东西做扎实。
            本职在做工程，业余把学到的东西整理成可复用的笔记。
            如果你在某一篇里看到错漏，欢迎通过页脚的「编辑此页」纠正。
          </p>
        </section>

        <section className={styles.facts}>
          {facts.map((f) => (
            <div key={f.k} className={styles.factCard}>
              <span className={styles.factKey}>{f.k}</span>
              <span className={styles.factVal}>{f.v}</span>
            </div>
          ))}
        </section>

        <p className={styles.foot}>
          <a className={styles.link} href="https://github.com/Weuqiang" target="_blank" rel="noopener noreferrer">
            在 GitHub 上关注 →
          </a>
        </p>
      </main>
    </Layout>
  );
}
