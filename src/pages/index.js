import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx(styles.heroBanner)}>
      {/* 飘逸粒子效果 */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.particle} style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 4}s`
          }} />
        ))}
      </div>
      
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={clsx("hero__title", styles.heroTitle)}>Hello World!</h1>
            <p className={clsx("hero__subtitle", styles.heroSubtitle)}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link className={clsx("button button--primary button--lg", styles.primaryButton)} to="/docs">
                开始探索
              </Link>
              <Link className={clsx("button button--secondary button--lg", styles.secondaryButton)} to="/blog">
                阅读博客
              </Link>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <section className={styles.featuresSection}>
          <div className="container">
            <div className={styles.heroCards}>
              <div className={styles.heroCard}>
                <div className={styles.cardContent}>
                  <h3>Support Me</h3>
                  <p>Give me a star at <a href="https://github.com/Weuqiang/weuqiangcreate_website" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
                </div>
              </div>
              <div className={styles.heroCard}>
                <div className={styles.cardContent}>
                  <h3>About Me</h3>
                  <p>Lifelong Learning.</p>
                </div>
              </div>
              <div className={styles.heroCard}>
                <div className={styles.cardContent}>
                  <h3>Contact Me</h3>
                  <p>WeChat: wxai2411</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
