import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './cases.module.css';

const CaseList = [
  {
    title: '🌐 全栈Web应用',
    description: '基于React + Node.js的现代化Web应用开发',
    details: [
      '前端：React 18 + TypeScript + Tailwind CSS',
      '后端：Node.js + Express + MongoDB',
      '部署：Docker + AWS/阿里云',
      '特色：响应式设计、PWA支持、实时通信'
    ],
    status: '已完成',
    link: '#',
  },
  {
    title: '🤖 AI智能助手',
    description: '集成大语言模型的智能对话系统',
    details: [
      '技术栈：Python + FastAPI + OpenAI API',
      '功能：自然语言处理、知识问答、代码生成',
      '特色：多模态交互、上下文记忆、插件扩展',
      '应用：客服机器人、编程助手、学习伙伴'
    ],
    status: '进行中',
    link: '#',
  },
  {
    title: '📱 移动端应用',
    description: '跨平台移动应用开发解决方案',
    details: [
      '框架：React Native / Flutter',
      '功能：用户认证、数据同步、离线支持',
      '集成：第三方支付、地图服务、推送通知',
      '平台：iOS + Android 双端发布'
    ],
    status: '规划中',
    link: '#',
  },
  {
    title: '🔍 数据分析平台',
    description: '企业级数据可视化和分析系统',
    details: [
      '技术：Python + Pandas + D3.js + ECharts',
      '功能：数据清洗、统计分析、可视化图表',
      '特色：实时数据流、交互式仪表板',
      '应用：业务分析、用户画像、趋势预测'
    ],
    status: '已完成',
    link: '#',
  },
  {
    title: '🎨 设计系统',
    description: '企业级UI组件库和设计规范',
    details: [
      '组件：50+ React组件，支持主题定制',
      '文档：Storybook + 使用指南',
      '工具：Figma设计稿 + 代码生成',
      '特色：无障碍支持、国际化、响应式'
    ],
    status: '维护中',
    link: '#',
  },
  {
    title: '⚡ 性能优化',
    description: '大型应用性能监控和优化方案',
    details: [
      '监控：性能指标收集、错误追踪',
      '优化：代码分割、懒加载、缓存策略',
      '工具：Webpack优化、CDN部署',
      '效果：首屏加载时间减少60%'
    ],
    status: '已完成',
    link: '#',
  },
];

function CaseCard({title, description, details, status, link}) {
  const getStatusClass = (status) => {
    switch(status) {
      case '已完成': return 'completed';
      case '进行中': return 'inProgress';
      case '维护中': return 'maintenance';
      case '规划中': return 'planning';
      default: return 'planning';
    }
  };

  const parseDetail = (detail) => {
    const colonIndex = detail.indexOf('：');
    if (colonIndex !== -1) {
      const label = detail.substring(0, colonIndex + 1);
      const content = detail.substring(colonIndex + 1);
      return { label, content };
    }
    return { label: '', content: detail };
  };

  return (
    <div className={styles.caseCard}>
      <div className={styles.caseHeader}>
        <div className={styles.caseTitleRow}>
          <h3 className={styles.caseTitle}>{title}</h3>
          <span className={clsx(styles.caseStatus, styles[getStatusClass(status)])}>
            {status}
          </span>
        </div>
        <p className={styles.caseDescription}>{description}</p>
      </div>
      
      <div className={styles.caseContent}>
        <div className={styles.caseDetails}>
          {details.map((detail, idx) => {
            const { label, content } = parseDetail(detail);
            return (
              <div key={idx} className={styles.detailItem}>
                <div className={styles.detailIcon}></div>
                <div className={styles.detailText}>
                  {label && <strong>{label}</strong>}
                  {content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      <div className={styles.caseFooter}>
        {link !== '#' ? (
          <a href={link} className={styles.caseButton}>
            查看详情
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17"/>
            </svg>
          </a>
        ) : (
          <button className={clsx(styles.caseButton)} disabled>
            敬请期待
          </button>
        )}
      </div>
    </div>
  );
}

export default function Cases() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`个案 - ${siteConfig.title}`}
      description="项目案例展示，技术实践和解决方案分享">
      <header className={styles.casesHero}>
        <div className="container">
          <h1 className={styles.casesHeroTitle}>💼 项目个案</h1>
          <p className={styles.casesHeroSubtitle}>
            技术实践 · 解决方案 · 项目经验
          </p>
        </div>
      </header>
      <main>
        <section className={styles.casesContainer}>
          <div className={styles.casesGrid}>
            {CaseList.map((props, idx) => (
              <CaseCard key={idx} {...props} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}