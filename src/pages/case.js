import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import React, { Fragment, useEffect, useState } from "react";

// 自定义 CaseCard 组件，替代 @infinum/docusaurus-theme 的 ShowcaseCard
function CaseCard({ url, imageUrl, imageAlt, title, description }) {
  return (
    <div
      className="showcase-card"
      style={{
        border: "1px solid var(--ifm-color-emphasis-300)",
        borderRadius: "8px",
        padding: "1.5rem",
        margin: "1rem",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
        backgroundColor: "var(--ifm-card-background-color)",
      }}
      onClick={() => window.open(url, "_blank")}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={imageAlt || title}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "4px",
            marginBottom: "1rem",
          }}
        />
      )}
      <h3 style={{ marginTop: "0.5rem 0" }}>{title}</h3>
      <p style={{ color: "var(--ifm-color-content-secondary)", lineHeight: "1.6" }}>
        {description}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "1rem",
          color: "var(--ifm-color-primary)",
          textDecoration: "none",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        查看详情 →
      </a>
    </div>
  );
}

function ShowcaseGrid() {
  const headingTitle = "ShowCase";
  const publicData = [
    {
      image: useBaseUrl("pages/case/jiangmiemie.webp"),
      title: "weuqiangcreate_website",
      desc: "精巧且开源的个人博客站点。配置生成式 AI 文章总结，个人相册，支持 mermaid 、KaTeX 、交互式思维导图。可使用 GitHub 账号评论，一键分享至 twitter。",
      url: "https://github.com/Weuqiang/weuqiangcreate_website",
      category: "关于我",
    },
    {
      image: useBaseUrl("pages/case/readme.webp"),
      title: "Readme",
      desc: "关于我自己的中英介绍，使用jinja模板。通过hash去重存储文章、deepseek模型生成总结、每天定时更新。",
      url: "https://weuqiang.github.io",
      category: "关于我",
    },
    {
      image: useBaseUrl("pages/case/halo-theme-2020.webp"),
      title: "halo-theme-2020",
      desc: "2020年，我使用halo博客框架，在xue主题上二次开发了我的个人博客主题，适配 Halo 最新 1.5.5 版本 修复网易云音乐。",
      url: "https://github.com/Weuqiang/halo-theme-2020/",
      category: "关于我",
    },
    {
      image: useBaseUrl("pages/case/exboard.webp"),
      title: "exboard",
      desc: "Python驱动库，适用于Jetson Orin Nano 和 RK3399 Pro芯片，支持RSS协议（摄像头云台）、数字量模拟量的处理（常见传感器）、i2c协议（控制RGB灯带）、超声波读取、非加密NFC读写。",
      url: "https://github.com/Weuqiang/exboard/",
      category: "模块库",
    },
    {
      image: useBaseUrl("pages/case/etool.webp"),
      title: "eTool",
      desc: "30 多种常用工具集合库，包含：进程定时监听；发送邮件；硬件测速（网络、硬盘、内存、显存）；PDF、excel、word、图片等常用处理；windows右键菜单管理等",
      url: "https://github.com/Weuqiang/eTool/",
      category: "模块库",
    },
    {
      image: useBaseUrl("pages/case/AI-Practice-Collection.webp"),
      title: "AI-Practice-Collection",
      desc: "这是一个用于AI技术练习和探索的项目合集。该仓库汇集了多个完整的AI项目，适用于学习和练习。",
      url: "https://github.com/Weuqiang/AI-Practice-Collection",
      category: "项目DEMO",
    },
    {
      image: useBaseUrl("pages/case/Bluetooth.webp"),
      title: "Bluetooth 小程序",
      desc: "微信小程序实现蓝牙遥控最小示例：微信小程序与设备通信（测试设备为ESP32单片机）。支持中文、英文、文件分片传输。",
      url: "https://github.com/Weuqiang/WX-Mini-Program/",
      category: "项目DEMO",
    },
  ];

  // https://reactjs.org/docs/react-dom.html#hydrate
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const groupedData = publicData.reduce((acc, item) => {
    const { category } = item;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  const categories = Object.keys(groupedData);

  return (
    <Fragment key={isClient ? 1 : 2}>
      <h1
        className="es-big-title es-h-center"
        style={{
          backgroundImage: 'url("/pages/case/sky.webp")',
          backgroundPosition: "50% 50%",
        }}
      >
        {headingTitle}
      </h1>

      {categories.map((category) => (
        <Fragment key={category}>
          <h2 className="es-h-center">{category}</h2>
          <div className="es-showcase-grid">
            {groupedData[category].map((item, idx) => (
              <CaseCard
                key={idx}
                url={item.url}
                imageUrl={item.image}
                imageAlt={item.title}
                title={item.title}
                description={item.desc}
              />
            ))}
          </div>
        </Fragment>
      ))}
    </Fragment>
  );
}

export default function Showcase() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title="Showcase"
      description={siteConfig.tagline}
      keywords={siteConfig.customFields?.keywords}
      metaImage={useBaseUrl(`img/${siteConfig.customFields?.image}`)}
      wrapperClassName="es-navbar-white"
    >
      <ShowcaseGrid />
    </Layout>
  );
}
