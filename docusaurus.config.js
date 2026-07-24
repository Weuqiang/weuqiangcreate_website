// @ts-check
// 导入公式渲染模块remark-math和rehype-katex
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import {themes as prismThemes} from 'prism-react-renderer';

// 设置明暗模式
const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;

// 用户自定义
const username = "魏强";
const websitename = "weuqiangcreate_website";
const githubusername = "Weuqiang";
const siteTitle = "魏强的知识花园";

const websiteurl = `https://${githubusername}.github.io`;
const githubuserRepository = `${githubusername}.github.io`;
const githuborgurl = `https://github.com/${githubusername}/${websitename}`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: siteTitle,
  tagline: "终身学习，持续成长",
  favicon: "img/logo.svg",
  url: websiteurl,
  baseUrl: process.env.NODE_ENV === 'development' ? '/' : '/weuqiangcreate_website/',
  organizationName: githubusername,
  projectName: websitename,
  deploymentBranch: "gh-pages",
  trailingSlash: true,
  onBrokenLinks: 'warn',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        theme: {
          customCss: [
            require.resolve("./src/theme/custom.css"),
          ],
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
        },
        docs: false,
        blog: false,
        pages: {
          path: "src/pages",
          routeBasePath: "",
          include: ["**/*.{js,jsx,ts,tsx,md,mdx}"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          mdxPageComponent: "@theme/MDXPage",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "read",
        path: "docs/read",
        routeBasePath: "read",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/Weuqiang/weuqiangcreate_website/edit/main/",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "default",
        path: "docs/docs",
        routeBasePath: "docs",
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: "https://github.com/Weuqiang/weuqiangcreate_website/edit/main/",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        routeBasePath: "/blog",
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        showReadingTime: true,
        blogSidebarCount: 0,
        onUntruncatedBlogPosts: 'ignore',
        feedOptions: {
          type: "all",
          createFeedItems: async (params) => {
            const { blogPosts, defaultCreateFeedItems, ...rest } = params;
            return defaultCreateFeedItems({
              blogPosts: blogPosts.filter((item, index) => index < 99),
              ...rest,
            });
          },
        },
      },
    ],
    [
      "@easyops-cn/docusaurus-search-local",
      {
        indexBlog: true,
        indexDocs: true,
        docsRouteBasePath: ["docs", "read"],
        language: ["zh"],
        highlightSearchTermsOnTargetPage: true,
        searchBarPosition: "right",
      },
    ],
  ],
  themes: ["@docusaurus/theme-mermaid", "@docusaurus/theme-live-codeblock"],
  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
    },
  ],
  themeConfig: {
    image: "/img/og-image.png",
    mermaid: {
      theme: { light: "neutral", dark: "forest" },
    },
    metadata: [
      {
        name: "keywords",
        content:
          "魏强, 知识博客, 编程, 数学基础, 机器学习, 软件工程, 嵌入式开发, 数据结构, 算法, 终身学习, 个人博客",
      },
      {
        name: "description",
        content:
          "魏强的个人知识花园：编程、数学、AI、软工、嵌入式与读书笔记的系统整理。",
      },
      { name: "author", content: "魏强" },
      { name: "theme-color", content: "#9c5b3f" },
    ],
    colorMode: {
      defaultMode: "light",
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      defaultLanguage: "markdown",
    },
    scripts: [
      {
        src: "https://gc.zgo.at/count.js",
        async: true,
        "data-goatcounter": "https://PLACEHOLDER_GOATCOUNTER_CODE.goatcounter.com/count",
      },
    ],
    navbar: {
      title: siteTitle,
      logo: {
        alt: "魏强的知识花园",
        src: "img/logo.svg",
        width: 32,
        height: 32,
      },
      hideOnScroll: false,
      items: [
        {
          to: "/",
          position: "left",
          label: "主页",
        },
        {
          to: "/docs",
          position: "left",
          label: "开发",
        },
        {
          to: "/read",
          position: "left",
          label: "书架",
        },
        {
          to: "/blog/archive",
          position: "left",
          label: "博文",
        },
        {
          to: "/case",
          position: "left",
          label: "个案",
        },
        {
          to: "/gallery",
          position: "left",
          label: "相簿",
        },
        {
          to: "/about",
          position: "left",
          label: "关于",
        },
        {
          type: "search",
          position: "right",
        },
        {
          type: "html",
          position: "right",
          className: "navbar-rss-link",
          value: '<a href="/blog/rss.xml" target="_blank" rel="noopener noreferrer" title="RSS 订阅">RSS</a>',
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "内容",
          items: [
            { label: "开发文档", to: "/docs" },
            { label: "书架", to: "/read" },
            { label: "博文", to: "/blog" },
            { label: "个案", to: "/case" },
            { label: "相簿", to: "/gallery" },
          ],
        },
        {
          title: "联系",
          items: [
            { label: "GitHub", href: "https://github.com/Weuqiang" },
            { label: "邮箱", href: "mailto:wxai2411@example.com" },
          ],
        },
      ],
      copyright: `Copyright © ${username} ${new Date().getFullYear()} · 终身学习，持续成长`,
    },
  },
};

export default config;
