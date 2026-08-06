---
title: "Grid 网格布局"
description: "二维布局模型：定义行与列、轨道与间距、区域命名，以及与 Flexbox 的取舍"
sidebar_position: 8
---

# Grid 网格布局

[Flexbox](/docs/软件工程/Web前端/CSS/flexbox) 一次只管一个方向。可真实界面里到处是**二维**结构：后台的"侧边栏 + 顶栏 + 内容 + footer"、相册的行列、仪表盘的小组件矩阵。这种"同时管行和列"的需求，交给 **Grid**。

Grid 是 CSS 第一个真正的**二维**布局系统：你先画出一张"网格"（行轨道 × 列轨道），再把元素放进格子。它的能力远超用 `float` 或 `inline-block` 硬拼的"伪栅格"。

## 学习目标

学完本章，你应该能够：

- 用 `grid-template-columns` / `grid-template-rows` 定义行列轨道
- 用 `fr` 单位、`repeat()`、`minmax()` 做弹性且可控的栅格
- 用 `grid-template-areas` 用"画图"的方式排布页面区域
- 用 `gap` 控制网格间距，理解 Grid 内部也**无外边距合并**
- 说清 Flexbox 与 Grid 各自的适用场景

## 前置知识

- [Flexbox 弹性布局](/docs/软件工程/Web前端/CSS/flexbox) — 一维布局的默认解法，与 Grid 互补。
- [显示类型与常规流](/docs/软件工程/Web前端/CSS/display-flow) — `display: grid` 开启内部显示类型。
- [盒模型](/docs/软件工程/Web前端/CSS/box-model) — `fr` 与盒模型尺寸的关系。

## 核心概念

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;  /* 三列：固定 200px，其余两列均分 */
  grid-template-rows: 60px 1fr 40px;     /* 三行 */
  gap: 12px;
}
```

一旦 `display: grid`，容器成了 **grid 容器**，直接子元素成了 **grid 项目**，被放进你定义的行列轨道里。关键概念：

- **轨道（track）**：一条行或一条列，`grid-template-columns`/`rows` 各定义一组。
- **网格线（line）**：轨道之间的分隔线，从 1 开始编号，可用来精确摆放。
- **单元格 / 区域（cell / area）**：行列交叉出的格子，可合并成大区域。

本章主线：
- 轨道定义：`fr`、`repeat()`、`minmax()`
- 摆放项目：按线编号或按 `grid-area`
- 语义化布局：`grid-template-areas` 画图法
- Grid vs Flex 的取舍

## `fr`、repeat 与 minmax

`fr`（fraction，剩余空间份数）是 Grid 的灵魂单位，类似 Flex 的 `flex: 1`：

```css
grid-template-columns: 1fr 2fr;     /* 两列，宽度比 1:2 */
grid-template-columns: repeat(3, 1fr);  /* 三等分，等价于 1fr 1fr 1fr */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
/* 自动计算能放几列：每列至少 200px、最多占满 1fr，窄屏自动减列 */
```

`minmax(最小值, 最大值)` 让轨道有弹性边界，配合 `repeat(auto-fill, ...)` 能实现**响应式栅格而无需媒体查询**——这是 Grid 相比旧方案的巨大优势。

## 按网格线摆放

默认项目按顺序自动流入格子。要精确控制，用线编号：

```css
.item {
  grid-column: 1 / 3;   /* 从第 1 条竖线跨到第 3 条（占两列）*/
  grid-row: 2 / 4;      /* 占两行 */
}
```

`grid-column: 1 / -1` 表示"从第 1 条线跨到最后一条线"——常用来做"横跨整行的标题栏"。

## `grid-template-areas`：用画图来布局

最直观的写法，直接把页面画出来：

```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 60px 1fr 40px;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
}
.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

改布局只需改那几行字符串——把 `"sidebar main"` 改成 `"main main"` 就能让主区占满。`.` 表示空单元格。这种"所见即所得"的声明方式，是 Grid 最被低估的特性。

## Grid 内部也无外边距合并

和 Flex 一样，Grid 容器内部的项目**不发生外边距合并**，用 `gap` 控制间距即可：

```css
.container {
  display: grid;
  gap: 16px;     /* 行列间距统一 */
}
```

## Grid vs Flex：怎么选

| 场景 | 用 |
|---|---|
| 明确需要行列二维结构（后台框架、相册、仪表盘） | **Grid** |
| 一维排列（一排导航、一列表单、均分剩余空间） | **Flex** |
| 内容数量不定、靠流式换行（卡片流） | **Flex**（或 Grid 的 auto-fill） |
| 需要"按名字画图"排区域 | **Grid**（`grid-template-areas`） |

经验法则：**先问"这是一维还是二维"。** 一维用 Flex，二维用 Grid；两者也可以嵌套——Grid 单元格里再放 Flex 容器做内部一维排布，是常见组合。

## 易错点

- **把 `grid-template-columns` 写成孩子的属性**。它是**容器**属性，定义的是轨道，不是给某个孩子设宽。
- **`fr` 和 `px` 混用却忽略内容溢出**。`fr` 分的是"剩余空间"，若某列内容很宽，可能把 `fr` 列挤到 0；可加 `minmax(0, 1fr)` 允许收缩。
- **`grid-template-areas` 每行格子数不一致**。会直接报错，所有行必须列数相同。
- **用了 `gap` 又加 `margin`**。两者叠加会多出意外空隙，统一用 `gap`。
- **误以为 Grid 自动搞定所有对齐**。项目在格子内的对齐仍靠 `justify-items`/`align-items`（容器）和 `justify-self`/`align-self`（项目）。
- **把 Grid 当 Flex 用**。只是要一排按钮就上 Grid，反而比 Flex 啰嗦；二维才值得 Grid。
- **`order` 在 Grid 里同样只改视觉**。语义顺序仍是 DOM 顺序。

## 练习

1. 用 Grid 搭一个后台框架：顶部 `header` 横跨、左侧 `sidebar`、右侧 `main`、底部 `footer` 横跨，全部用 `grid-template-areas`。
2. 响应式卡片墙：容器 `grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px`，观察窗口变窄时列数自动减少。
3. 一个横跨整行的标题：`.title { grid-column: 1 / -1; }`，并解释 `-1` 的含义。
4. 三列布局，中间列最宽且自适应：外侧两列 `200px` 固定，中间 `minmax(0, 1fr)`。对比不用 `minmax(0,...)` 时长内容是否撑破。
5. 在 Grid 单元格里再放一个 `display: flex` 容器，做"图标 + 文字"的水平排列——体会 Grid 管二维、Flex 管一维的分工。

## 小结

Grid 是 CSS 第一个真正的二维布局系统：先用 `grid-template-columns`/`rows` 定义行列轨道，再把项目放进去。`fr` 分配剩余空间、`repeat()` + `minmax()` 能做出免媒体查询的响应式栅格；`grid-template-areas` 用画字符串的方式排布区域，改版只需改几行。Grid 内部也无外边距合并，用 `gap` 控间距。取舍上：一维用 Flex，二维用 Grid，两者可嵌套。

## 延伸阅读

- [Flexbox 弹性布局](/docs/软件工程/Web前端/CSS/flexbox) — 一维布局的默认解法，与 Grid 互补。
- [显示类型与常规流](/docs/软件工程/Web前端/CSS/display-flow) — `display: grid` 开启内部显示类型。
- [响应式设计](/docs/软件工程/Web前端/CSS/responsive) — `auto-fill` + `minmax` 是响应式栅格利器。
- [盒模型](/docs/软件工程/Web前端/CSS/box-model) — 尺寸计算是布局的前提。
- [返回 CSS 总览](/docs/软件工程/Web前端/CSS/)
