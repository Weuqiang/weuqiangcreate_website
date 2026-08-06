---
title: "盒模型"
description: "内容、内边距、边框与外边距如何决定元素尺寸，以及 box-sizing 与外边距合并"
sidebar_position: 4
---

# 盒模型

CSS 布局的第一性原理只有一句话：**页面上的每一个元素，都是一个矩形盒子**。文字是盒子，图片是盒子，整个页面也是盒子。所谓布局，就是决定这些盒子有多大、摆在哪里。

盒模型（box model）就是描述"一个盒子有多大"的规则。它简单得只有四层，却贡献了前端历史上最著名的一场浏览器兼容灾难，以及今天几乎每个项目都要写的那行 `box-sizing: border-box`。

## 学习目标

学完本章，你应该能够：

- 画出盒模型的四层结构并说出每层的作用
- 手算一个元素在两种 `box-sizing` 下的实际占位宽度
- 解释为什么现代项目都要全局设置 `border-box`
- 识别并处理外边距合并（margin collapsing）
- 区分块级盒与行内盒在盒模型上的行为差异

## 前置知识

- [CSS 简介](/docs/软件工程/Web前端/CSS/intro) — 属性与值的写法。
- [层叠、继承与优先级](/docs/软件工程/Web前端/CSS/cascade) — 尺寸属性不继承，这点在本章会用到。

## 核心概念

一个盒子由内到外分四层：

```text
┌─────────────────────────────────┐
│           margin（外边距）        │  ← 透明，是盒子与外界的距离
│  ┌───────────────────────────┐  │
│  │       border（边框）        │  │  ← 有厚度、有颜色，属于盒子本身
│  │  ┌─────────────────────┐  │  │
│  │  │   padding（内边距）   │  │  │  ← 透明，但会被背景色填充
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │    content    │  │  │  │  ← 文字、图片真正占据的区域
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

关键区别：**`padding` 会被背景色覆盖，`margin` 不会**。想让文字离边框远一点，用 `padding`；想让两个盒子之间有空隙，用 `margin`。

本章主线：
- 四层结构与各自的书写语法
- `box-sizing`：宽度到底算的是哪一层
- 外边距合并：那个"消失的间距"
- 块级盒与行内盒的差异

## 四层的书写语法

`margin`、`padding`、`border` 都支持简写，按**上、右、下、左**顺时针顺序：

```css
.box {
  padding: 10px;                /* 四边都是 10px */
  padding: 10px 20px;           /* 上下 10px，左右 20px */
  padding: 10px 20px 30px;      /* 上 10，左右 20，下 30 */
  padding: 10px 20px 30px 40px; /* 上 右 下 左 */
}
```

记忆方法：从上边开始顺时针转一圈；缺的那一边取对边的值。

也可以单边设置，或使用**逻辑属性**（更适合多语言站点，会随书写方向自动翻转）：

```css
.box {
  margin-top: 16px;
  margin-inline: auto;    /* 左右（水平书写时）*/
  padding-block: 24px;    /* 上下（水平书写时）*/
}
```

`margin-inline: auto` 是水平居中一个定宽块级元素的标准写法，等价于经典的 `margin: 0 auto`。

边框需要同时指定宽度、样式、颜色，其中**样式不写就完全不显示**：

```css
.box {
  border: 1px solid #ddd;       /* 宽度 样式 颜色 */
  border-bottom: 2px dashed red;
  border-radius: 8px;           /* 圆角，作用于边框外沿 */
}
```

## `box-sizing`：本章最重要的一件事

假设你写：

```css
.card {
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
}
```

这个盒子在页面上实际占多宽？答案取决于 `box-sizing`。

### `content-box`（CSS 默认值）

`width` 只算**内容区**，padding 和 border 往外加：

```text
实际宽度 = 300 + 20×2 + 1×2 = 342px
```

这就是麻烦所在：你想要一个 300px 宽的卡片，结果得到 342px。想精确控制，得反过来算 `width: 258px`——每次改 padding 都要重算一次。在栅格布局里更致命：两个 `width: 50%` 的盒子只要有 padding，加起来就会超过 100% 而换行。

### `border-box`（推荐）

`width` 算到**边框外沿**，padding 和 border 从内部挤占内容区：

```text
实际宽度 = 300px（就是你写的那个数）
内容区宽度 = 300 - 20×2 - 1×2 = 258px
```

所见即所得。这就是为什么几乎所有现代项目都会在样式表开头写：

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

**为什么 CSS 的默认值是更别扭的 `content-box`？** 这是历史遗留：早期 IE 用的是 `border-box`（更符合直觉），而 W3C 规范定的是 `content-box`，两派长期不兼容，是"盒模型之战"的由来。最终规范胜出成为默认值，但开发者用脚投票——`border-box` 更好用，于是全局重置成了行业惯例。这个故事说明：**标准的正确性和使用的便利性并不总是一回事。**

## 外边距合并

这是盒模型里最反直觉的行为。两个**垂直方向**相邻的 margin 不会相加，而是取较大值：

```css
.a { margin-bottom: 30px; }
.b { margin-top: 20px; }
```

`.a` 和 `.b` 之间的实际间距是 **30px**，不是 50px。

合并发生在三种场景：

1. **相邻兄弟之间**：上一个的 `margin-bottom` 与下一个的 `margin-top` 合并。
2. **父子之间**：父元素没有 border、padding、内联内容隔开时，子元素的 `margin-top` 会"穿透"父元素，变成父元素的外边距。
3. **空元素自身**：一个没有内容、没有 border/padding 的元素，自己的上下 margin 会合并成一个。

第 2 种最容易造成困惑——"我给子元素加了 `margin-top`，结果整个父容器往下跑了"。

**破解方法**（任选其一，都是通过阻断"直接相邻"来实现）：

```css
/* 方法 1：给父元素加 padding 或 border 隔开 */
.parent { padding-top: 1px; }

/* 方法 2：让父元素创建 BFC（块级格式化上下文）*/
.parent { overflow: hidden; }
.parent { display: flow-root; }  /* 更现代、无副作用 */

/* 方法 3：改用 flex 或 grid 布局 —— 其内部不发生 margin 合并 */
.parent { display: flex; flex-direction: column; gap: 20px; }
```

方法 3 是现代实践的首选。**Flexbox 和 Grid 内部完全没有外边距合并**，再配合 `gap` 属性统一控制间距，这类问题从根上消失了。详见 [Flexbox](/docs/软件工程/Web前端/CSS/flexbox) 与 [Grid](/docs/软件工程/Web前端/CSS/grid)。

另外记住：**水平方向的 margin 永不合并**，左右相邻的 margin 会正常相加。

## 块级盒与行内盒的差异

盒模型对两类盒子的作用不完全相同：

| | 块级盒（`display: block`） | 行内盒（`display: inline`） |
|---|---|---|
| `width` / `height` | 生效 | **不生效** |
| 水平 `padding` / `margin` | 生效 | 生效 |
| 垂直 `padding` / `margin` | 生效 | 视觉上不推开其他元素 |
| 换行 | 独占一行 | 随文字排列 |

给 `<span>` 设 `width` 没有任何反应，是初学者常见的困惑。垂直 padding 更微妙：背景会撑出来，但**不会把上下的元素推开**，导致背景重叠。

解决办法是改用 `inline-block`——既能随文字排列，又能设置尺寸：

```css
.tag {
  display: inline-block;
  width: 80px;
  padding: 4px 8px;
}
```

完整的显示类型讨论见[显示类型与常规流](/docs/软件工程/Web前端/CSS/display-flow)。

## 尺寸的其他控制手段

```css
.box {
  min-width: 200px;   /* 下限，优先级高于 width */
  max-width: 100%;    /* 上限，防止溢出容器 */
  height: auto;       /* 由内容决定 */
  aspect-ratio: 16/9; /* 按宽高比自动算另一边 */
}
```

`max-width: 100%` 配合 `height: auto` 是**响应式图片的标准写法**，能让图片在小屏上自动缩小而不溢出：

```css
img {
  max-width: 100%;
  height: auto;
}
```

优先级规则要记牢：`min-width` 胜过 `max-width`，`max-width` 胜过 `width`。所以当 `min-width: 300px` 和 `max-width: 200px` 同时存在时，最终宽度是 300px。

## 易错点

- **没设 `border-box` 就用百分比宽度**。两个 `width: 50%` 加上 padding 后总和超过 100%，直接换行——这是最高频的布局塌陷原因。
- **用 margin 制造父子间距却发现父容器整体位移**。这是父子外边距合并，改用 padding 或 `display: flow-root`。
- **给行内元素设 `width` / `height`**。完全无效且不报错，改用 `inline-block`。
- **以为垂直 margin 会相加**。30px + 20px 得到的是 30px，不是 50px。
- **`border-radius` 之后忘了 `overflow: hidden`**。子元素（尤其是图片）会溢出圆角，方角依然露在外面。
- **用 `width: 100%` 加 padding 撑破父容器**（在 `content-box` 下）。要么用 `border-box`，要么直接不写 `width`——块级元素默认就是撑满父容器的。

## 练习

动手检验一下自己：

1. 手算：`width: 200px; padding: 15px; border: 5px solid;` 在两种 `box-sizing` 下各占多宽？
2. 做一个三等分栅格：三个盒子各占 1/3 宽、都有 16px 内边距、不换行。用 `border-box` 实现一遍。
3. 复现父子外边距合并：给子元素设 `margin-top: 50px`，观察父容器的位置，然后用三种方法各修一遍。
4. 写一条规则让页面所有图片都不会溢出容器，并保持原始宽高比。
5. 给一个 `<span>` 分别设 `width: 100px` 和 `display: inline-block; width: 100px`，对比结果并解释差异。

## 小结

每个元素都是由 content、padding、border、margin 四层构成的盒子。`box-sizing: border-box` 让 `width` 包含 padding 和 border，是现代项目的必备重置。垂直方向的相邻 margin 会合并取较大值，Flexbox 与 Grid 内部则不会——这也是现代布局优先用它们的原因之一。行内盒不接受宽高设置，需要尺寸时改用 `inline-block`。

## 延伸阅读

- [显示类型与常规流](/docs/软件工程/Web前端/CSS/display-flow) — 下一步：盒子如何排布成流。
- [层叠、继承与优先级](/docs/软件工程/Web前端/CSS/cascade) — 上一步：样式冲突的裁决规则。
- [Flexbox 弹性布局](/docs/软件工程/Web前端/CSS/flexbox) — 用 `gap` 取代 margin，彻底告别外边距合并。
- [响应式设计](/docs/软件工程/Web前端/CSS/responsive) — `max-width` 在移动适配中的核心作用。
- [返回 CSS 总览](/docs/软件工程/Web前端/CSS/)
