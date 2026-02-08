---
slug: react-released
title: React 发布，前端框架新时代
authors: [weuqiang]
tags: [React, Facebook, 前端, 时事]
date: 2013-05-29
---

Facebook 开源了 React，提出了组件化和虚拟 DOM 的概念。前端开发要变天了。

<!-- truncate -->

## 什么是 React

React 是个前端框架：

- 组件化开发
- 虚拟 DOM
- 单向数据流

## 核心概念

**1. 组件化**

把 UI 拆成独立的组件：

```jsx
function Button() {
  return <button>点击</button>;
}
```

**2. 虚拟 DOM**

不直接操作 DOM，而是操作虚拟 DOM，React 自动更新真实 DOM。

**3. JSX**

在 JS 里写 HTML：

```jsx
const element = <h1>Hello, world!</h1>;
```

## 为什么革命性

**1. 性能好**

虚拟 DOM 减少了 DOM 操作，性能提升明显。

**2. 开发效率高**

组件化让代码更好维护。

**3. 生态好**

Facebook 支持，社区活跃。

## 对比 jQuery

| 特性 | React | jQuery |
|------|-------|--------|
| 开发方式 | 组件化 | 命令式 |
| 性能 | 好 | 一般 |
| 学习曲线 | 陡 | 平缓 |

React 更适合大型应用。

## 争议

**1. JSX 很丑**

把 HTML 写在 JS 里，很多人不习惯。

**2. 学习曲线陡**

概念多，新手不好上手。

**3. 只是 View 层**

不像 Angular 是完整框架，React 只管 UI。

## 对行业的影响

React 的出现：

- 推动了组件化开发
- 改变了前端开发方式
- 催生了 React Native

现在，React 是最流行的前端框架之一。

## 总结

React 是前端的一次革命：

- 组件化开发
- 虚拟 DOM
- 改变了前端生态

2013 年，前端框架的新时代开始了。

