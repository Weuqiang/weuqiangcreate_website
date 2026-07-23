# weuqiangcreate_website

> 终身学习，持续成长

## 项目简介

基于 **Docusaurus 3.9.2** 构建的个人知识花园。整体采用 **暖色人文纸感** 设计：米色纸张背景、衬线标题、陶土色与墨色点缀，专注于分享技术文档、读书笔记、AI 资讯、项目案例与照片。

## 内容模块

| 模块 | 路径 | 说明 |
| --- | --- | --- |
| 主页 | `/` | 「魏强的知识花园」——站点导航与自我介绍 |
| 开发文档 | `/docs` | 技术文档与开发指南（原 `docs/docs`） |
| 书架 | `/read` | 读书笔记，按体裁分四类（见下） |
| 博文 | `/blog` | 技术博客，支持 RSS/Atom 订阅 |
| 个案 | `/case` | 个人项目案例展示 |
| 相簿 | `/gallery` | 照片展示 |

### 书架分类（docs/read）

- **文学小说** — 小说、随笔类阅读笔记
- **社科历史** — 社会学、历史、人类学等
- **自我成长** — 方法论、心理学、思维模型
- **科学技术** — 编程、AI、科普类

## 设计特色

- **暖色人文纸感**：米色纸张背景、衬线标题（Noto Serif SC）、陶土/墨色强调色
- **响应式布局**：适配桌面、平板、移动端
- **明暗主题**：支持切换，默认浅色（跟随系统）
- **柔和层次**：卡片化内容与留白，弱化边框与高饱和色

## 技术特性

- **Markdown 增强**：数学公式（KaTeX / remark-math）、Mermaid 图表、Markmap 交互式思维导图、代码高亮（Prism）
- **本地全文搜索**：Docusaurus 内置客户端搜索
- **SEO**：完整元数据配置、Sitemap 自动生成
- **阅读体验**：文章阅读时间估算、RSS/Atom feed

## 技术栈

- **框架**：Docusaurus 3.9.2
- **语言**：JavaScript (ES6+)、CSS3
- **样式**：CSS 变量 + CSS Modules（暖色纸感主题位于 `src/theme/custom.css`）
- **部署**：GitHub Pages（GitHub Actions 自动构建至 `gh-pages` 分支）

## 本地开发

```bash
npm install        # 安装依赖
npm start          # 本地预览，默认 http://localhost:3000
npm run build      # 构建静态文件至 build/
npm run serve      # 本地预览构建产物
```

## 部署

推送至 `main` 分支时，由 `.github/workflows/updata.yml`（peaceiris/actions-gh-pages）自动构建并发布到：

**https://weuqiang.github.io/weuqiangcreate_website/**

## 目录结构

```
docs/docs/          开发文档源（Markdown/MDX）
docs/read/          读书笔记源（按体裁分四类，含 _category_.json）
blog/               博文（Markdown，含 authors.yml）
src/pages/          主页等自定义页面
src/theme/          自定义主题（custom.css 暖色纸感、MDXComponents）
static/             静态资源（图片、字体、katex 样式）
docusaurus.config.js 站点配置
sidebars.js         文档侧边栏配置（docs 与 read 共用）
```

## 说明

本站已移除早期版本中遗留的部分实验性功能（PWA、Giscus 评论、知识图谱、学习路径、打字游戏、相册组件等）与相关死依赖，以保持结构清晰、构建稳定。
