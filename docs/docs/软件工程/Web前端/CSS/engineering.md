---
title: "CSS 工程化"
description: "命名规范（BEM 等）、Reset 与 Normalize、预处理器、模块化与原子化方案"
sidebar_position: 14
---

# CSS 工程化

单页写 CSS 很容易，但当样式表膨胀到几千行、多人协作时，"这个 class 谁在用？""改了会不会炸？""为什么又冲突了？"就成了日常噩梦。这一章讲如何让 CSS 在**规模**下依然可控：命名规范、Reset、预处理器、模块化与原子化。

它和具体的样式写法（前 13 篇）正交——是"如何组织 CSS"的方法论。

## 学习目标

学完本章，你应该能够：

- 解释为什么裸写全局 class 会冲突，以及 BEM 等命名约定如何缓解
- 区分 **Reset** 与 **Normalize** 两种"统一浏览器默认样式"的思路
- 说清预处理器（Sass/Less）解决什么、不解决什么
- 理解 **CSS Modules** 与 **原子化（Tailwind 等）** 两种规模化思路及其取舍
- 把 [自定义属性](/docs/软件工程/Web前端/CSS/variables) 作为设计令牌纳入工程体系

## 前置知识

- [层叠、继承与优先级](/docs/软件工程/Web前端/CSS/cascade) — 工程化的根本动机就是"避免层叠冲突"。
- [自定义属性与现代特性](/docs/软件工程/Web前端/CSS/variables) — 设计令牌的工程落地。
- [软件工程/工程实践/设计模式](/docs/软件工程/工程实践/设计模式) — "约定优于配置"等思想在 CSS 组织的投射。

## 核心概念

### 问题：裸写全局样式会冲突

```css
/* 两个人各写各的，最后谁覆盖谁看优先级与书写顺序，极不可控 */
.red { color: red; }
.title { font-size: 20px; }
```

CSS 没有作用域，所有 class 全局共享。项目一大，重名、误覆盖、不敢删（不知道谁在用）就成了常态。工程化就是给 CSS 加"秩序"。

### 命名规范：BEM

```css
/* Block__Element--Modifier */
.card { }                 /* 块 */
.card__title { }          /* 元素 */
.card--featured { }       /* 修饰符 */
```

BEM 用 `块__元素--修饰符` 的命名约定，**靠命名本身避免冲突**、让结构自解释。缺点是名字长。同类思路还有 OOCSS、SMACSS、Atomic CSS（注意区别于下文的"原子化框架"）。

### Reset vs Normalize

浏览器默认样式不统一，第一步要统一基线：

- **Reset**（如 Eric Meyer Reset）：把所有默认样式清零，从零开始。激进、可控。
- **Normalize.css**：保留有用的默认、只修不一致，更"温和"。现代项目多数用 Normalize 或它的变体。

配合 [variables](/docs/软件工程/Web前端/CSS/variables) 一章说的 `:where()`（优先级 0）写 reset，能让后续规则轻松覆盖：

```css
:where(*, *::before, *::after) {
  box-sizing: border-box;   /* 全局盒模型重置，优先级 0 不挡后续 */
}
```

本章主线：
- 规模化下的冲突根因
- 命名约定（BEM 等）
- Reset / Normalize 基线
- 预处理器与变量
- CSS Modules 与原子化两种规模化路线

## 预处理器：Sass / Less

```scss
$primary: #2575fc;          /* 变量（编译期）*/
@mixin card { border-radius: 8px; }  /* 混入复用 */
.btn {
  @include card;
  background: $primary;
  &:hover { background: darken($primary, 10%); }  /* 嵌套 */
}
```

预处理器解决**变量、嵌套、混入、函数、分文件**，提升编写效率。但它本质是"编译期宏替换"——变量不进浏览器运行时、嵌套展开成普通规则。注意：现代 CSS 已有原生变量（[variables](/docs/软件工程/Web前端/CSS/variables)）和 `nesting`，预处理器的必要性在下降，许多项目已转向原生 + 构建工具。

## 两种规模化路线

### CSS Modules（作用域隔离）

构建工具给每个 class 生成唯一哈希名，组件内写的 `.title` 编译后变成 `.title_abc123`，**天然不冲突**：

```css
/* Button.module.css */
.title { color: red; }   /* 编译后变成 .title_hash，仅本组件可见 */
```

适合组件化框架（React/Vue），样式与组件绑定。

### 原子化（Tailwind 等）

不写"语义 class"，而是直接在 HTML 里组合原子工具类：

```html
<button class="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
  提交
</button>
```

把"样式"下推到"类名组合"。优点：不用起名、不用切文件、约束统一；缺点：HTML 变长、需要设计系统支撑。Tailwind 通过 `theme` 配置把 [自定义属性](/docs/软件工程/Web前端/CSS/variables) 那套令牌固化进工具类。

两条路线不互斥：小型项目原子化快，组件库用 CSS Modules 隔离，设计令牌用 CSS 变量贯穿。

## 易错点

- **裸写全局 class 不命名**。规模一大必冲突，尽早引入 BEM 或 Modules。
- **Reset 用 `*` 又忘了恢复**。全盘清零后某些默认行为（如列表缩进）要手动补回。
- **预处理器变量和原生变量混用导致混乱**。分清"编译期替换"（Sass `$`）与"运行时可变"（CSS `--`），别在同一语义上重复定义。
- **嵌套过深**。Sass 嵌套超过 3 层就难维护，且编译出的选择器优先级高、难覆盖。
- **原子化 class 堆成"天书"**。缺乏设计令牌约束时，散落各处的值无法统一改主题。
- **不敢删 CSS**。没有作用域/依赖图时，删一条怕炸全站——这正是工程化要解决的"可删除性"。

## 练习

1. 把一组"卡片"样式从裸 `.title/.body` 重构成 BEM 命名（`.card/.card__title/.card--featured`）。
2. 用 `:where(*)` 写一个最小 reset（含 `box-sizing: border-box` 与 `margin: 0`），验证后续规则能轻松覆盖。
3. 对比：同一按钮用 CSS Modules（编译后哈希名）vs 用 Tailwind 原子类实现，体会两种"不冲突"思路。
4. 定义一套设计令牌（`--color-primary` 等），分别在 Sass 变量、原生 CSS 变量、Tailwind theme 三处表达，说明它们各自的生效时机。
5. 审视一个你写过的长 Sass 嵌套，把它压到 3 层以内，观察选择器优先级是否更易管理。

## 小结

CSS 工程化解决"规模下的可控性"。裸写全局 class 会冲突，BEM 等命名约定靠命名本身规避；Reset/Normalize 统一浏览器基线，用 `:where()` 写优先级 0 的 reset 最干净。预处理器（Sass）提供变量/嵌套/混入但属编译期替换，现代原生 CSS 已能覆盖大半。规模化两条主线：CSS Modules 做作用域隔离、原子化（Tailwind）把样式下推到类名组合；设计令牌（CSS 变量）贯穿其中。目标不仅是"能写"，更是"可维护、可删除"。

## 延伸阅读

- [自定义属性与现代特性](/docs/软件工程/Web前端/CSS/variables) — 设计令牌的工程落地。
- [层叠、继承与优先级](/docs/软件工程/Web前端/CSS/cascade) — 工程化动机的本源。
- [软件工程/工程实践/设计模式](/docs/软件工程/工程实践/设计模式) — 约定与模块化的通用思想。
- [返回 CSS 总览](/docs/软件工程/Web前端/CSS/)
