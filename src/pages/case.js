import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import React from "react";
import styles from "./case.module.css";

// 项目集数据。图片使用 static/pages/case/ 下已存在的素材；
// weuqiangcreate_website 这张之前引用的是错位的占位图 (jiangmiemie.webp，
// 在社交卡片未配置时 GitHub 会生成 "Hello, World!" 默认封图)，现改用 sky.webp。
// 路径不带前导斜杠，与 siteConfig.baseUrl 字符串拼接，避免在模块顶层调用 React hook。
const publicData = [
  {
    image: "pages/case/sky.webp",
    title: "weuqiangcreate_website",
    desc: "精巧且开源的个人博客站点。配置生成式 AI 文章总结，个人相册，支持 mermaid 、KaTeX 、交互式思维导图。可使用 GitHub 账号评论，一键分享至 twitter。",
    url: "https://github.com/Weuqiang/weuqiangcreate_website",
    category: "关于我",
  },
  {
    image: "pages/case/readme.webp",
    title: "Readme",
    desc: "关于我自己的中英介绍，使用 jinja 模板。通过 hash 去重存储文章、deepseek 模型生成总结、每天定时更新。",
    url: "https://weuqiang.github.io",
    category: "关于我",
  },
  {
    image: "pages/case/halo-theme-2020.webp",
    title: "halo-theme-2020",
    desc: "2020 年使用 halo 博客框架，在 xue 主题上二次开发的个人博客主题，适配 Halo 1.5.5，修复网易云音乐。",
    url: "https://github.com/Weuqiang/halo-theme-2020/",
    category: "关于我",
  },
  {
    image: "pages/case/exboard.webp",
    title: "exboard",
    desc: "Python 驱动库，适用于 Jetson Orin Nano 和 RK3399 Pro 芯片，支持 RSS 协议、数字量/模拟量、i2c、超声波、非加密 NFC 读写。",
    url: "https://github.com/Weuqiang/exboard/",
    category: "模块库",
  },
  {
    image: "pages/case/etool.webp",
    title: "eTool",
    desc: "30 多种常用工具集合库：进程定时监听、发送邮件、硬件测速、PDF/excel/word/图片常用处理、Windows 右键菜单管理等。",
    url: "https://github.com/Weuqiang/eTool/",
    category: "模块库",
  },
  {
    image: "pages/case/AI-Practice-Collection.webp",
    title: "AI-Practice-Collection",
    desc: "用于 AI 技术练习和探索的项目合集，汇集多个完整的 AI 项目，适用于学习与练习。",
    url: "https://github.com/Weuqiang/AI-Practice-Collection",
    category: "项目 DEMO",
  },
  {
    image: "pages/case/Bluetooth.webp",
    title: "Bluetooth 小程序",
    desc: "微信小程序实现蓝牙遥控最小示例（测试设备为 ESP32 单片机）。支持中英文、文件分片传输。",
    url: "https://github.com/Weuqiang/WX-Mini-Program/",
    category: "项目 DEMO",
  },
];

function ShowcaseGrid() {
  const { siteConfig } = useDocusaurusContext();
  const baseUrl = siteConfig.baseUrl;
  const groupedData = publicData.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});
  const categories = Object.keys(groupedData);

  return (
    <>
      <header className={styles.pageHeader}>
        <span className={styles.pageEyebrow}>作品集</span>
        <h1 className={styles.pageTitle}>项目集</h1>
        <p className={styles.pageLead}>
          亲手做过的小项目、模块库与作品集——开源地址均指向 GitHub，欢迎前往围观。
        </p>
      </header>

      {categories.map((category) => (
        <section key={category} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>{category}</h2>
          <div className={styles.cardsGrid}>
            {groupedData[category].map((item) => (
              <article key={item.title} className={styles.card}>
                <img
                  className={styles.cardImage}
                  src={`${baseUrl}${item.image}`}
                  alt={item.title}
                  loading="lazy"
                />
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.cardLink}
                  >
                    查看详情 →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}

export default function Showcase() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title="项目集"
      description={siteConfig.tagline}
      keywords={siteConfig.customFields?.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields?.image}`)}
    >
      <ShowcaseGrid />
    </Layout>
  );
}
