---
title: "移动端网页适配"
description: "通过 viewport、媒体查询与相对单位让网页在手机上正确显示，是响应式设计的第一步"
sidebar_position: 19
---

## 学习目标

- 理解 `viewport` 各参数对移动端渲染的影响
- 掌握 `width=device-width, initial-scale=1` 的标准写法
- 了解响应式适配的基本手段（媒体查询、相对单位 `rem` / `vw`）

## 前置知识

- [HTML 简介](../intro)
- [网页的语义结构](../semantic)

## 移动端网页设计

手机浏览器默认会假设页面宽度为约 `980px`，然后把整页缩放进屏幕——这就是为什么没做适配的网页在手机上"字很小、要双指放大"。要让页面按设备真实宽度渲染，必须声明 `viewport`。

### viewport 是什么

`<meta name="viewport">` 告诉浏览器"这块画布应该怎么映射到屏幕上"：

```html
<!-- 初始加载不缩放 -->
<meta name="viewport" content="initial-scale=1">
```

### 标准写法（推荐）

绝大多数移动端页面都应写成下面这样：视口宽度等于设备宽度，初始缩放 1 倍。

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

下面是各参数含义：

- `width=device-width`：视口宽度取设备宽度（而不是默认的 980px）。
- `initial-scale=1`：初始不缩放。
- `maximum-scale` / `minimum-scale`：允许用户缩放的上/下限。
- `user-scalable=no`：禁止用户缩放。**谨慎使用**，会损害可访问性（WCAG 要求用户能缩放）。
- `viewport-fit=cover`：配合刘海屏安全区 `env(safe-area-inset-*)`，避免内容被圆角/刘海遮挡。

指定固定宽度的写法（不推荐，大屏手机会溢出）：

```html
<meta name="viewport" content="width=320">
```

### 响应式适配基础

`viewport` 只是"让页面按真实宽度渲染"，真正的响应式布局还要配合 CSS：

- **媒体查询**：根据屏幕宽度套用不同样式。

  ```css
  @media (max-width: 600px) {
    .sidebar { display: none; }
  }
  ```

- **相对单位**：用 `rem`（相对根字号）、`vw` / `vh`（相对视口宽/高）代替固定 `px`，布局更顺滑。
- **流式布局**：优先用 `flex` / `grid` 让元素自动换行。
- **触摸友好**：可点击区域建议 ≥ `44×44px`；不要只做 `:hover` 效果（手机没有悬停）。
- **图片自适应**：给图片加 `max-width: 100%`，避免横向溢出。

## 易错点

- **忘记写 `viewport`**：页面在手机上被整体缩小，文字极小、需要双指放大。
- **`width=320` 写死**：在更宽的设备上内容两侧空白或溢出，应该用 `device-width`。
- **`user-scalable=no` 伤可访问性**：老年用户、弱视用户无法放大，很多规范不推荐。
- **图片 / 固定宽度容器不设 `max-width`**：在窄屏上出现横向滚动条。
- **只在桌面调试**：手机上的 `300ms` 点击延迟、安全区、真实像素密度都和桌面不同，务必用真机或浏览器移动模拟器验证。

## 练习

1. 新建一个 `html` 文件，写入标准 `viewport` 和一个 `div`，用媒体查询实现"屏幕宽度小于 `600px` 时背景变红，否则变绿"。
2. 故意删掉 `viewport` 标签在手机模拟器里打开同一页面，对比观察缩放差异。
3. 给一张图片加 `max-width: 100%; height: auto`，在窄屏下验证它不会撑破容器。

## 延伸阅读

- [HTML 简介](../intro)
- [网页的语义结构](../semantic)
- 进阶：结合 CSS 媒体查询与 JavaScript 的触摸事件（`touchstart` / `touchmove`）做交互适配，可参考 [JavaScript 入门](../../JavaScript/)
