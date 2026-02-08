import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Layout from "@theme/Layout";
import React, { Fragment, useEffect, useState } from "react";

// 自定义 CaseCard 组件，替代 @infinum/docusaurus-theme 的 ShowcaseCard
function CaseCard({ url, imageUrl, imageAlt, title, description }) {
  const hasUrl = url && url !== "#";
  
  return (
    <div
      className="showcase-card"
      style={{
        border: "1px solid var(--ifm-color-emphasis-200)",
        borderRadius: "12px",
        padding: "0",
        margin: "1rem",
        overflow: "hidden",
        transition: "all 0.3s ease",
        cursor: hasUrl ? "pointer" : "default",
        backgroundColor: "var(--ifm-card-background-color)",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
      onClick={() => hasUrl && window.open(url, "_blank")}
      onMouseEnter={(e) => {
        if (hasUrl) {
          e.currentTarget.style.transform = "translateY(-4px)";
          e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.12)";
        }
      }}
      onMouseLeave={(e) => {
        if (hasUrl) {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.08)";
        }
      }}
    >
      {imageUrl && (
        <div style={{
          width: "100%",
          height: "180px",
          overflow: "hidden",
          backgroundColor: "var(--ifm-color-emphasis-100)",
        }}>
          <img
            src={imageUrl}
            alt={imageAlt || title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
        </div>
      )}
      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ 
          margin: "0 0 0.75rem 0",
          fontSize: "1.1rem",
          fontWeight: "600",
        }}>
          {title}
        </h3>
        <p style={{ 
          color: "var(--ifm-color-emphasis-700)", 
          lineHeight: "1.6",
          margin: "0",
          fontSize: "0.95rem",
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}

function ShowcaseGrid() {
  const headingTitle = "项目案例";
  const publicData = [
    // 2025年
    {
      image: useBaseUrl("pages/case/jiangmiemie.webp"),
      title: "做 Agent",
      desc: "写了个智能助手，能自动处理任务。",
      url: "#",
      category: "2025",
      year: 2025,
    },
    {
      image: useBaseUrl("pages/case/AI-Practice-Collection.webp"),
      title: "RAG 问答",
      desc: "做了个知识库问答，挺好用的。",
      url: "#",
      category: "2025",
      year: 2025,
    },
    
    // 2024年
    {
      image: useBaseUrl("pages/case/jiangmiemie.webp"),
      title: "玩大模型",
      desc: "试了试 GPT API，做了些小工具。",
      url: "#",
      category: "2024",
      year: 2024,
    },
    {
      image: useBaseUrl("pages/case/AI-Practice-Collection.webp"),
      title: "图像识别",
      desc: "学 CV，做了个识别图片的东西。",
      url: "#",
      category: "2024",
      year: 2024,
    },
    {
      image: useBaseUrl("pages/case/AI-Practice-Collection.webp"),
      title: "学深度学习",
      desc: "用 PyTorch 训练模型，挺有意思。",
      url: "#",
      category: "2024",
      year: 2024,
    },
    
    // 2023年
    {
      image: useBaseUrl("pages/case/etool.webp"),
      title: "分析数据",
      desc: "用 pandas 处理数据，画了些图表。",
      url: "#",
      category: "2023",
      year: 2023,
    },
    {
      image: useBaseUrl("pages/case/Bluetooth.webp"),
      title: "写爬虫",
      desc: "抓了些网站数据，练习处理。",
      url: "#",
      category: "2023",
      year: 2023,
    },
    
    // 2022年
    {
      image: useBaseUrl("pages/case/etool.webp"),
      title: "做 Web 应用",
      desc: "用 Flask 写了个网站，挺简单的。",
      url: "#",
      category: "2022",
      year: 2022,
    },
    {
      image: useBaseUrl("pages/case/etool.webp"),
      title: "写脚本",
      desc: "写了些自动化脚本，省了不少事。",
      url: "#",
      category: "2022",
      year: 2022,
    },
    
    // 2021年
    {
      image: useBaseUrl("pages/case/Bluetooth.webp"),
      title: "做小程序",
      desc: "做了个微信小程序，学了不少。",
      url: "#",
      category: "2021",
      year: 2021,
    },
    {
      image: useBaseUrl("pages/case/AI-Practice-Collection.webp"),
      title: "继续学 ML",
      desc: "深入学机器学习，做了些项目。",
      url: "#",
      category: "2021",
      year: 2021,
    },
    
    // 2020年
    {
      image: useBaseUrl("pages/case/AI-Practice-Collection.webp"),
      title: "开始学 ML",
      desc: "学机器学习，实现了些算法。",
      url: "#",
      category: "2020",
      year: 2020,
    },
    {
      image: useBaseUrl("pages/case/etool.webp"),
      title: "刷题",
      desc: "在 LeetCode 刷算法题。",
      url: "#",
      category: "2020",
      year: 2020,
    },
    
    // 2019年
    {
      image: useBaseUrl("pages/case/etool.webp"),
      title: "学 Vue",
      desc: "学了 Vue，做了几个页面。",
      url: "#",
      category: "2019",
      year: 2019,
    },
    {
      image: useBaseUrl("pages/case/halo-theme-2020.webp"),
      title: "改主题",
      desc: "改了改博客样式，加了点功能。",
      url: "#",
      category: "2019",
      year: 2019,
    },
    
    // 2018年
    {
      image: useBaseUrl("pages/case/etool.webp"),
      title: "学 Python",
      desc: "开始学编程，做了很多练习。",
      url: "#",
      category: "2018",
      year: 2018,
    },
    {
      image: useBaseUrl("pages/case/halo-theme-2020.webp"),
      title: "搭博客",
      desc: "用 Hexo 搭了个博客，记笔记。",
      url: "#",
      category: "2018",
      year: 2018,
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

  // 按年份倒序排列
  const categories = Object.keys(groupedData).sort((a, b) => {
    const yearA = parseInt(a);
    const yearB = parseInt(b);
    return yearB - yearA;
  });

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
          <h2 className="es-h-center" style={{ 
            fontSize: "2rem", 
            margin: "3rem 0 2rem",
            color: "var(--ifm-color-primary)"
          }}>
            {category}
          </h2>
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
