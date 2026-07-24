import React from "react";
import { translate } from "@docusaurus/Translate";
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function NotFound() {
  const title = translate({
    id: "theme.NotFound.title",
    message: "页面找不到了",
  });
  return (
    <>
      <PageMetadata title={title} />
      <Layout title={title}>
        <main className={styles.page}>
          <div className={styles.card}>
            <div className={styles.code}>404</div>
            <span className={styles.eyebrow}>迷路了？</span>
            <h1 className={styles.title}>这页内容不在花园里</h1>
            <p className={styles.lead}>
              或许链接已经过时，或许花朵尚未开放。这里有几条常走的小径：
            </p>
            <div className={styles.actions}>
              <Link className={`button button--primary ${styles.btn}`} to="/">
                回到首页
              </Link>
              <Link className={`button button--secondary ${styles.btn}`} to="/blog">
                阅读博文
              </Link>
              <Link className={`button button--secondary ${styles.btn}`} to="/docs">
                浏览文档
              </Link>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
