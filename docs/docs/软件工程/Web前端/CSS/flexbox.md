---
title: "Flexbox 弹性布局"
description: "一维布局模型：主轴与交叉轴、对齐、伸缩、换行，以及用 gap 取代外边距合并"
sidebar_position: 7
---

# Flexbox 弹性布局

[显示类型与常规流](/docs/软件工程/Web前端/CSS/display-flow) 一章说过：一旦你需要对齐、居中、均分剩余空间、响应式换行，就该上 Flexbox。这一章把它讲透。

Flexbox 是一个**一维**布局模型——它一次只沿**一个方向**（横向或纵向）排布孩子。导航栏、卡片列表、工具栏这些"一排或一列"的场景，它是默认解法。（需要同时管行和列，见 [Grid](/docs/软件工程/Web前端/CSS/grid)。）

## 学习目标

学完本章，你应该能够：

- 画出 Flex 的**主轴（main axis）**与**交叉轴（cross axis）**，并说明它们的方向由谁决定
- 用 `justify-content`（主轴对齐）和 `align-items`（交叉轴对齐）做任意方向的居中
- 用 `flex: 1` 让某个孩子吃掉剩余空间，用 `flex-wrap` 处理换行
- 用 `gap` 统一控制间距，理解它为何比 margin 更优
- 区分作用在**容器**上的属性和作用在**孩子**上的属性

## 前置知识

- [显示类型与常规流](/docs/软件工程/Web前端/CSS/display-flow) — `display: flex` 是内部显示类型的实战。
- [盒模型](/docs/软件工程/Web前端/CSS/box-model) — Flex 会改变孩子盒子的尺寸计算，并**消除内部外边距合并**。

## 核心概念

开启 Flex 只需一行：

```css
.container {
  display: flex;
}
```

一旦如此，`.container` 成了 **flex 容器**，它的**直接子元素**成了 **flex 项目（flex item）**，不再按常规流堆叠，而是沿一条**主轴**排列。

### 两条轴

Flex 的一切都绕不开两条轴：

```text
默认（flex-direction: row）:
  主轴 →   ┌────┐┌────┐┌────┐
           │ A  ││ B  ││ C  │
  交叉轴 ↓  └────┘└────┘└────┘

flex-direction: column 时：主轴变竖直，交叉轴变水平
```

- **主轴（main axis）**：孩子排列的方向，由 `flex-direction` 决定（`row` 横向 / `column` 纵向）。
- **交叉轴（cross axis）**：垂直于主轴的方向。

所有对齐属性都挂在"对主轴做什么"和"对交叉轴做什么"上——记住轴，就记住了属性该往哪放。

本章主线：
- 容器属性：`flex-direction`、`justify-content`、`align-items`、`flex-wrap`、`gap`
- 项目属性：`flex-grow/shrink/basis`（简写 `flex`）、`align-self`、`order`
- 主轴 vs 交叉轴的轴心对齐

## 容器属性（排布与对齐）

```css
.container {
  display: flex;
  flex-direction: row;          /* 主轴方向：row / column / row-reverse / column-reverse */
  justify-content: space-between; /* 主轴对齐：start/end/center/space-between/space-around/space-evenly */
  align-items: center;          /* 交叉轴对齐：stretch(默认)/start/end/center */
  flex-wrap: wrap;              /* 空间不够时是否换行：nowrap(默认)/wrap */
  gap: 16px;                    /* 项目间距，替代 margin */
}
```

最常用的"水平垂直居中"就是一条组合拳：

```css
.center {
  display: flex;
  justify-content: center;  /* 主轴居中 */
  align-items: center;      /* 交叉轴居中 */
}
```

`justify-content` 的几个取值容易混，记住语义：
- `flex-start` / `flex-end`：靠主轴起点 / 终点
- `center`：居中
- `space-between`：两端贴边，中间均分剩余
- `space-around`：每个项目左右各留一半空隙（两端空隙是中间的一半）
- `space-evenly`：所有空隙完全相等

## 项目属性（伸缩与次序）

```css
.item {
  flex: 1;          /* 等价于 flex: 1 1 0 → 能伸能缩，基础尺寸 0，吃掉剩余空间 */
  align-self: flex-end;  /* 单独覆盖自己的交叉轴对齐 */
  order: 2;        /* 改变视觉次序（不影响 DOM 顺序/可访问性），默认 0 */
}
```

`flex` 是 `flex-grow`（伸长比例）、`flex-shrink`（收缩比例）、`flex-basis`（基础尺寸）三者的简写。常见写法：

```css
.sidebar { flex: 0 0 240px; }   /* 不伸不缩，固定 240px */
.main    { flex: 1; }           /* 吃掉所有剩余空间 */
```

一个经典三栏布局：左侧固定、右侧固定、中间自适应，只需三条规则。

## 用 `gap` 取代 margin

Flex 容器里**不会发生外边距合并**（见盒模型一章），但用 `margin` 控制间距仍有两个缺点：首尾元素要多写 `margin` 抵消、响应式断点要改多处。用 `gap` 一次解决：

```css
.container {
  display: flex;
  gap: 16px;     /* 行间距与列间距统一，且不会在容器边缘产生多余空隙 */
}
```

`gap` 只在项目**之间**产生间距，不会在容器边缘额外留白，比 margin 干净得多。

## 易错点

- **把属性加到容器上却期望作用于孩子**。`justify-content`/`align-items` 是容器属性；`flex`/`align-self`/`order` 是孩子属性，别写反。
- **`align-items: center` 没生效**。检查主轴方向——`align-items` 管的是**交叉轴**。横向排布时要居中靠 `align-items`，纵向居中靠 `justify-content`。
- **`flex: 1` 后内容溢出**。基础尺寸 `flex-basis` 默认是内容宽，配合 `min-width: 0`（或 `overflow: hidden`）才能正确收缩，否则长文本/图片会撑破。
- **用 `margin: auto` 居中被 `justify-content` 覆盖**。在 Flex 里 `margin: auto` 会吃掉对应方向的剩余空间，优先级高于 `justify-content`，行为可能出乎意料。
- **`flex-wrap` 默认 `nowrap`**。空间不够时孩子被压缩而非换行，记得显式设 `wrap`。
- **误以为 Flex 是二维的**。Flex 只管一个方向；要行列同时控制，用 [Grid](/docs/软件工程/Web前端/CSS/grid)。
- **`order` 改了视觉却动了语义**。屏幕阅读器仍按 DOM 顺序读，`order` 只改视觉，别用它做逻辑排序。

## 练习

1. 实现一个水平导航栏：logo 居左、链接组居中、登录按钮居右——提示 `justify-content: space-between` 或给中间项 `flex: 1`。
2. 三栏布局：左 240px 固定、右 240px 固定、中间 `flex: 1` 自适应，等高排列（提示 `align-items` 默认 `stretch`）。
3. 卡片网格：容器 `display: flex; flex-wrap: wrap; gap: 16px`，每张卡 `flex: 1 1 280px`，观察窄屏自动换行的效果。
4. 垂直居中一个弹窗：容器 `display: flex; justify-content: center; align-items: center`，对比没有 Flex 时要用 `position` + `transform` 的麻烦写法。
5. 给一个 Flex 孩子设 `order: -1`，观察它跑到最前面，并解释为什么 DOM 顺序没变。

## 小结

Flexbox 是一维布局模型：先由 `flex-direction` 决定主轴（横向/纵向），所有对齐都分"主轴（`justify-content`）"和"交叉轴（`align-items`）"两侧。`gap` 统一控制项目间距、不产边缘空白，优于 margin；`flex: 1` 让孩子吃掉剩余空间、`flex: 0 0 Npx` 做固定栏。容器属性与孩子属性要分清，且 Flex 只管一个方向——需要行列同时控制时用 Grid。

## 延伸阅读

- [显示类型与常规流](/docs/软件工程/Web前端/CSS/display-flow) — `display: flex` 是内部显示类型的实战。
- [Grid 网格布局](/docs/软件工程/Web前端/CSS/grid) — 二维布局的默认解法，与 Flex 互补。
- [盒模型](/docs/软件工程/Web前端/CSS/box-model) — Flex 内部无外边距合并，`gap` 取代 margin。
- [定位](/docs/软件工程/Web前端/CSS/position) — 浮层用 `position`，主体结构用 Flex。
- [返回 CSS 总览](/docs/软件工程/Web前端/CSS/)
