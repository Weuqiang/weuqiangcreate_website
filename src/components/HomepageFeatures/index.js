import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '🚀 技术分享',
    description: (
      <>
        分享前端开发、人工智能、编程语言等技术领域的深度内容，
        助力开发者成长。
      </>
    ),
  },
  {
    title: '📚 持续学习',
    description: (
      <>
        终身学习者，专注技术前沿探索，
        构建系统化知识体系。
      </>
    ),
  },
  {
    title: '🤝 开源贡献',
    description: (
      <>
        欢迎在 <a href="https://github.com/Weuqiang/weuqiangcreate_website" target="_blank" rel="noopener noreferrer">GitHub</a> 给个 Star，
        或通过微信 <strong>wxai2411</strong> 交流。
      </>
    ),
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4', styles.featureColumn)}>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
