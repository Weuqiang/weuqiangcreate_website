---
title: "响应式设计"
description: "媒体查询、相对单位、移动优先与流式栅格，让一套代码适配手机到桌面"
sidebar_position: 9
---

# 响应式设计

前面所有布局都假设"屏幕够宽"。可今天流量一大半来自手机：窄屏只有 375px，桌面有 1920px。不能给每个设备写一套页面——你要的是**一套代码，随视口自动适配**。这就是响应式设计（Responsive Web Design）。

它的核心不是某个神奇属性，而是三件武器的组合：**媒体查询（何时变）** + **相对单位与弹性布局（怎么变）** + **移动优先（从哪开始变）**。

## 学习目标

学完本章，你应该能够：

- 用 `@media` 按视口宽度（及更多特性）切换样式
- 区分**移动优先（min-width）**与**桌面优先（max-width）**两种断点写法，并说明为何推荐前者
- 用相对单位（`em`/`rem`/`%`/`vw`）和流式布局（`max-width`、`clamp()`）替代固定像素
- 理解 `viewport` meta 标签为什么是响应式的前提
- 组合 Grid 的 `auto-fill` + `minmax` 做免媒体查询的栅格

## 前置知识

- [盒模型](/docs/软件工程/Web前端/CSS/box-model) — `max-width: 100%` 是响应式图片的基石。
- [Grid 网格布局](/docs/软件工程/Web前端/CSS/grid) — `auto-fill` + `minmax` 是响应式栅格利器。
- [Flexbox 弹性布局](/docs/软件工程/Web前端/CSS/flexbox) — `flex-wrap` 让一维布局自然回流。

## 核心概念

### 前提：`viewport` meta 标签

没有它，手机浏览器会假装自己有 ~980px 宽，然后把页面缩放到刚好塞进屏幕——于是你看到的是"缩小版的桌面页"，而不是"为手机重排的页"。必须在 HTML `<head>` 里声明：

```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

`width=device-width` 告诉浏览器"布局视口宽度等于设备真实宽度"。**漏了这个标签，后面所有媒体查询都基于错误的宽度。**

### 媒体查询：何时变

```css
/* 视口 ≥ 768px 时生效（移动优先写法）*/
@media (min-width: 768px) {
  .layout { grid-template-columns: 200px 1fr; }
}

/* 视口 ≤ 600px 时生效（桌面优先写法）*/
@media (max-width: 600px) {
  .nav { flex-direction: column; }
}
```

常见断点（仅参考，按你的设计定）：手机 `<600px`、平板 `600–900px`、桌面 `>900px`、大屏 `>1200px`。

本章主线：
- `viewport` 标签为何是前提
- 媒体查询的语法与特性（宽度、方向、分辨率）
- 移动优先 vs 桌面优先
- 相对单位与流式布局（少写媒体查询）
- 现代响应式：容器查询与 `clamp()`

## 移动优先：从窄屏往上叠加

**移动优先（mobile-first）** 指默认样式就按最窄屏写，再用 `min-width` 媒体查询**往上**逐步增强：

```css
.card { width: 100%; }              /* 手机：单列占满 */
@media (min-width: 600px) {
  .card { width: calc(50% - 8px); } /* 平板：两列 */
}
@media (min-width: 900px) {
  .card { width: calc(33.3% - 12px); } /* 桌面：三列 */
}
```

推荐移动优先的理由：
1. 手机是约束最严的场景，先满足它，再"加东西"比"减东西"简单。
2. 更语义化：`min-width` 是"从此宽度起叠加"，逻辑顺。
3. 对低端设备更友好——它们直接拿到基础样式。

## 相对单位：让尺寸跟着环境走

尽量用相对单位替代死 `px`：

```css
:root { font-size: 16px; }
body { font-size: 1rem; }          /* 1rem = 根元素字号，便于整体缩放 */
.sidebar { width: 18em; }          /* em 跟随自身/父字号 */
.banner { width: 100%; }           /* 百分比跟随父容器 */
.full-bleed { width: 100vw; }      /* vw = 视口宽度 1% */
```

`rem` 特别适合做"可缩放排版"：用户调大浏览器默认字号时，全站跟着放大，无障碍友好。注意：**`100vw` 包含滚动条宽度**，可能比 `100%` 略宽导致横向滚动，正文宽度优先用 `100%`。

## 流式布局：少写媒体查询

用 `clamp()` 和弹性栅格，很多场景根本不需要断点：

```css
.heading {
  font-size: clamp(1.5rem, 4vw, 3rem);  /* 最小 1.5rem、理想 4vw、最大 3rem */
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;     /* 自动按宽度决定列数，无需媒体查询 */
}
```

`clamp(下限, 理想值, 上限)` 让字号/间距在范围内随视口平滑变化，是"流式排版"的核心工具。

## 容器查询：相对于容器而非视口

传统媒体查询看的是**视口**宽度，但同一组件可能放在侧边栏（窄）或主区（宽），视口相同却需要不同样式。现代 CSS 提供**容器查询**：

```css
.card-wrap { container-type: inline-size; }
@container (min-width: 400px) {
  .card { /* 当容器本身 ≥ 400px 时 */ }
}
```

组件库、复用卡片特别适合容器查询——样式跟着"容身之处"走，而非跟着屏幕走。浏览器已广泛支持。

## 易错点

- **漏写 `viewport` 标签**。所有响应式逻辑基于错误的布局宽度，手机上看到缩小版桌面页。
- **桌面优先（`max-width`）写一大堆重置**。从宽屏往下减，要不断撤销样式，容易残留冲突；优先 `min-width` 叠加。
- **断点卡死在设备型号**。别为"iPhone 12"设断点，按你的**内容**在哪开始挤来设（内容驱动断点）。
- **`100vw` 引发横向滚动**。它含滚动条宽度，正文用 `100%` 更安全。
- **只用媒体查询不做弹性**。固定 `px` 宽度 + 一堆断点，维护噩梦；优先 `fr`/`%`/`clamp`/`auto-fill`。
- **响应式图片忘了限制宽度**。图片应 `max-width: 100%; height: auto` 才不溢出窄屏（见盒模型）。
- **隐藏内容而非重排**。`display: none` 把内容从手机端删掉，可能误删重要信息；优先重排、降级，而非隐藏。

## 练习

1. 在 HTML 头部确认有 `<meta name="viewport" content="width=device-width, initial-scale=1">`，去掉它看手机模拟下的差异。
2. 用移动优先实现卡片列表：手机单列、≥600px 两列、≥900px 三列。
3. 用 `clamp(1.25rem, 3vw, 2.5rem)` 做一个随窗口平滑缩放的大标题，拖拽窗口观察。
4. 用 Grid `repeat(auto-fill, minmax(180px, 1fr))` 做相册，不写任何媒体查询，看窗口变窄时列数如何自动减少。
5. 把一个卡片放进"窄侧边栏"和"宽主区"两个容器，用容器查询让它在窄容器里变纵向、宽容器里变横向。

## 小结

响应式设计 = 媒体查询（何时变）+ 相对单位/弹性布局（怎么变）+ 移动优先（从哪开始变）。`viewport` meta 标签是前提，漏写则所有断点基于错误宽度。推荐移动优先（`min-width` 叠加）而非桌面优先；能用 `clamp()`、`fr`、`auto-fill + minmax` 做流式布局的就少写媒体查询。容器查询让组件样式跟着"容器宽度"而非"视口宽度"走，适合可复用组件。

## 延伸阅读

- [盒模型](/docs/软件工程/Web前端/CSS/box-model) — `max-width: 100%` 是响应式图片基石。
- [Grid 网格布局](/docs/软件工程/Web前端/CSS/grid) — `auto-fill` + `minmax` 免媒体查询栅格。
- [Flexbox 弹性布局](/docs/软件工程/Web前端/CSS/flexbox) — `flex-wrap` 让一维布局自然回流。
- [颜色、背景与渐变](/docs/软件工程/Web前端/CSS/color-background) — 配合主题做明暗适配（prefers-color-scheme）。
- [《弹性网页设计》](/read/科学技术/弹性网页设计/) — 响应式思想源头（设计延伸）。
- [返回 CSS 总览](/docs/软件工程/Web前端/CSS/)
