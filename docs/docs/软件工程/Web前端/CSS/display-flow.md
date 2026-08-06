---
title: "显示类型与常规流"
description: "display 的几种取值、块级/行内/行内块的区别，以及文档常规流如何排列盒子"
sidebar_position: 5
---

# 显示类型与常规流

前两章你学会了"一个盒子有多大"（盒模型）和"哪条规则生效"（层叠）。这一章解决一个更基础的问题：**这些盒子在页面上怎么摆**——谁在上、谁在下，谁独占一行、谁挤在一行里。

答案由两个开关控制：元素的 **`display` 类型** 和 **它所在的格式化上下文（流）**。搞懂这两个词，Flexbox 和 Grid 之前的所有布局困惑都会消失。

## 学习目标

学完本章，你应该能够：

- 说出 `block` / `inline` / `inline-block` / `flex` / `grid` 各自在"占行"和"接受宽高"上的区别
- 解释什么是**文档常规流（normal flow）**，以及脱离常规流的几种方式
- 区分**外部显示类型**（盒子对外怎么排）与**内部显示类型**（容器内部怎么排）
- 知道为什么 `inline-block` 元素之间会出现莫名空隙，以及如何消除
- 判断一个布局问题该用常规流、还是该 `display: flex` / `grid`

## 前置知识

- [盒模型](/docs/软件工程/Web前端/CSS/box-model) — 本章在盒子尺寸已定的前提下，讨论盒子怎么排布。
- [层叠、继承与优先级](/docs/软件工程/Web前端/CSS/cascade) — `display` 是一个**不被继承**的属性，但会影响继承的可见性。

## 核心概念

### 外部显示类型：盒子对外怎么排

`display` 的第一个作用，是定义这个盒子在父容器里**如何参与排列**。最常用的是三种：

| 取值 | 占行 | 接受 `width`/`height` | 典型元素 |
|---|---|---|---|
| `block` | 独占一行 | 是 | `<div>`、`<p>`、`<h1>` |
| `inline` | 随文字流动 | **否** | `<span>`、`<a>`、`<strong>` |
| `inline-block` | 随文字流动 | 是 | 按钮、标签 |

- `block`：默认撑满父容器宽度，前后自动换行。
- `inline`：和文字一起排，宽高由内容决定，设了 `width` 无效。
- `inline-block`：对外像 `inline`（不换行、挨着文字），对内像 `block`（能设宽高、有盒模型）。

### 内部显示类型：容器内部怎么排

`display` 的第二个作用，是定义**这个元素内部的孩子怎么排**。当你写 `display: flex` 或 `display: grid`，这个元素本身对外仍按块级占据一行，但**它的子元素进入了全新的排布规则**：

```css
.container {
  display: flex;   /* 内部孩子走 Flexbox 布局算法 */
}
```

这正是"外部显示类型"与"内部显示类型"的区别：`<div style="display:flex">` 对外是 block（独占一行），对内是 flex（孩子横着排）。`display: flex` 同时扮演了这两个角色。

### 文档常规流

所谓**常规流（normal flow）**，就是浏览器默认按"块级往下堆叠、行内往右流动"的规则摆放所有盒子。你在 HTML 里写的顺序，基本就是它们上屏的顺序。

```text
常规流（默认）:
  ┌─────────────┐
  │ block A     │  ← 独占一行，从上往下
  ├─────────────┤
  │ block B     │
  ├─────────────┤
  │ inline i1 i2 │  ← 行内，从上往下、从左往右流动
  └─────────────┘
```

脱离常规流的方式有三类：
1. **`position: absolute` / `fixed`**：盒子被"抽"出流，不占原位置，由坐标定位。
2. **`float`**：盒子浮到一侧，文字环绕它（现代布局已基本被 Flexbox/Grid 取代）。
3. **`display: flex` / `grid`**：孩子脱离常规流，改由对应算法排布。

本章主线：
- `display` 的两种角色（外部 vs 内部）
- 三种基础显示类型的取舍
- 常规流是什么、怎么被打破
- `inline-block` 的缝隙陷阱

## 常规流的排列细节

块级盒子在常规流里默认**从上往下、垂直堆叠**，每个宽度撑满父容器：

```css
.box { display: block; }   /* 即使不写，div/p/h1 也是 block */
```

行内盒子在常规流里**从左往右、水平流动**，一行放不下才折到下一行；它只占据自己内容所需的空间，且**垂直方向的 padding/margin 不会推开上下元素**（见盒模型一章）。

## `inline-block` 的缝隙问题

两个 `inline-block` 元素并排时，HTML 里它们之间的**换行符/空格会被当成一个空格**渲染，导致中间出现几像素空隙：

```html
<button class="btn">A</button>
<button class="btn">B</button>
```

```css
.btn { display: inline-block; }
```

如果按钮之间没有空格却出现了缝隙，就是换行符被保留。消除方法：

```css
/* 方法 1：父容器 font-size: 0，再在孩子上恢复 */
.parent { font-size: 0; }
.btn { font-size: 14px; }

/* 方法 2：用 Flexbox 代替（推荐，见 Grid/Flex 章节）*/
.parent { display: flex; gap: 8px; }

/* 方法 3：HTML 里把标签连写，不留换行（可读性差，不推荐）*/
```

具体什么时候该用哪种，下文"怎么选"一节会讲。

## 怎么选显示类型

| 你想要的效果 | 用 |
|---|---|
| 一段独立占满宽度的内容（段落、分区） | `display: block`（默认） |
| 行内的一段强调文字、一个链接 | `display: inline`（默认） |
| 一个能设尺寸、又挨着文字的小部件（标签、按钮） | `display: inline-block` |
| 一维排列（一排或一列，数量不定） | `display: flex` |
| 二维排列（行 + 列，有明确栅格） | `display: grid` |

经验法则：**一旦你需要"对齐、居中、均分剩余空间、响应式换行"，就别再硬调 `inline-block` + `margin`，直接上 Flexbox 或 Grid**。定位一章和后续两章就是干这个的。

## 易错点

- **给 `inline` 元素设宽高没反应**。它不是 bug，是规范：`inline` 不接受 `width`/`height`。改 `inline-block` 或 `block`。
- **`inline-block` 并排出现莫名空隙**。那是换行符被渲染成空格，用 Flexbox 或 `font-size: 0` 解决。
- **以为 `display: flex` 会让容器自己变窄**。容器对外仍是 block，默认撑满父容器宽度；变窄的是它内部的孩子排列逻辑。
- **在常规流里用 `margin-top` 想让元素"绝对定位"到某处**。常规流是顺序排布，脱离位置要用 `position` 或把它放进 flex/grid 容器。
- **`vertical-align` 只对行内/表格单元格生效**。想竖直居中块级元素，那是 Flexbox 的 `align-items` 的活，不是 `vertical-align`。
- **混用 `float` 和 Flexbox**。新项目几乎不需要 `float`；需要文字环绕图片时再用，否则一律 Flex/Grid。

## 练习

1. 写三个 `<span>`，第一个 `inline`、第二个 `inline-block`（宽 100px）、第三个 `inline`，观察它们能否设宽、是否换行、垂直 padding 是否推开邻居。
2. 复现 `inline-block` 缝隙：两个按钮并排，中间加一个 HTML 换行，看缝隙；再用 Flexbox 重写一次，对比。
3. 把 `<div class="row">` 设成 `display: flex`，里面放 3 个 `block` 子元素，观察它们从"纵向堆叠"变成"横向排列"——这就是内部显示类型生效。
4. 解释：为什么 `<img>` 默认是 `inline` 且底部有约 4px 空隙？`（提示：行内元素基线对齐 + 文字下沉空间）` 并用 `display: block` 或 `vertical-align: bottom` 修复。
5. 判断：一个占满宽度的导航栏，里面要水平排开 logo 和若干链接并右对齐——该用 `inline-block` 还是 `flex`？为什么？

## 小结

`display` 同时控制"盒子对外怎么排"（外部显示类型）和"容器内部怎么排"（内部显示类型）。基础三类型 `block`/`inline`/`inline-block` 覆盖简单场景；`inline-block` 的并排缝隙是经典坑，用 Flexbox 可根除。需要居中、均分、对齐、响应式换行时，应当切换到 `display: flex` 或 `display: grid`——这两类会让子元素脱离常规流，改由各自的布局算法接管。

## 延伸阅读

- [定位](/docs/软件工程/Web前端/CSS/position) — 用 `position` 把盒子移出常规流做精确定位。
- [Flexbox 弹性布局](/docs/软件工程/Web前端/CSS/flexbox) — 一维布局的默认解法，内部显示类型的实战。
- [Grid 网格布局](/docs/软件工程/Web前端/CSS/grid) — 二维布局的默认解法。
- [盒模型](/docs/软件工程/Web前端/CSS/box-model) — 回顾：尺寸在排列之前已经算好。
- [返回 CSS 总览](/docs/软件工程/Web前端/CSS/)
