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

const websiteurl = `https://${githubusername}.github.io`;
const githubuserRepository = `${githubusername}.github.io`;
const githuborgurl = `https://github.com/${githubusername}/${websitename}`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: websitename,
  tagline: "终身学习，持续成长",
  favicon: "favicon.ico",
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
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs",
        path: "docs/docs",
        routeBasePath: "docs",
        sidebarPath: require.resolve("./sidebars.js"),
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
  ],
  themes: ["@docusaurus/theme-mermaid", "@docusaurus/theme-live-codeblock"],
  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
    },
  ],
  themeConfig: {
    image: "/pages/case/weuqiangcreate_website.webp",
    mermaid: {
      theme: { light: "neutral", dark: "forest" },
    },
    metadata: [
      {
        name: "keywords",
        content: "docusaurus,blog, python, 开源",
      },
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
    navbar: {
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
          type: "search",
          position: "right",
        },
      ],
    },
    footer: {
      style: "light",
      copyright: `<div style="font-size: 0.75rem;">Copyright ©  ${username} ${new Date().getFullYear()}<div/>`,
    },
  },
};

export default config;
