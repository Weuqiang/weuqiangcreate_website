---
title: "自定义属性与现代特性"
description: "CSS 变量（自定义属性）、作用域与主题切换，逻辑选择器与容器查询速览"
sidebar_position: 13
---

# 自定义属性与现代特性

前面的篇章覆盖了 CSS 的"经典三件套"。这一章讲让 CSS 从"写死样式"升级到"可配置系统"的现代特性：**自定义属性（CSS 变量）**、逻辑选择器 `:is()`/`:where()`/`:has()`，以及容器查询。它们是工程化与主题化的基础。

## 学习目标

学完本章，你应该能够：

- 用 `--name` 定义、**`var()`** 引用自定义属性，理解它的**层叠作用域**（可继承、可覆盖）
- 用自定义属性 + `:root` 做一套**设计令牌（design tokens）**，实现换肤/暗色模式
- 区分 `:is()`（保留优先级）与 `:where()`（优先级为 0）的取舍
- 用 `:has()` 做"父选择器"式的反向选择
- 知道容器查询（见 [响应式设计](/docs/软件工程/Web前端/CSS/responsive)）的基本写法

## 前置知识

- [层叠、继承与优先级](/docs/软件工程/Web前端/CSS/cascade) — 自定义属性本身参与层叠、可被继承，`:where()` 优先级为 0 是层叠规则的延伸。
- [选择器](/docs/软件工程/Web前端/CSS/selector) — 本章的逻辑选择器是其进阶。

## 核心概念

### 自定义属性（CSS 变量）

```css
:root {
  --color-primary: #2575fc;
  --space-4: 16px;
  --radius: 8px;
}
.btn {
  background: var(--color-primary);
  padding: var(--space-4);
  border-radius: var(--radius);
}
```

定义用 `--` 前缀，引用用 `var()`。它们本质是**自定义属性**，因此**参与层叠、可被继承、可被覆盖**——这正是它比 Sass 变量强大的地方：运行时可变，不只是编译期替换。

### 作用域与覆盖

自定义属性随 DOM 树继承。在子元素或特定选择器里重设，就只影响该范围：

```css
:root { --theme-bg: #fff; --theme-text: #222; }   /* 默认浅色 */
[data-theme="dark"] { --theme-bg: #111; --theme-text: #eee; }  /* 暗色覆盖 */

body { background: var(--theme-bg); color: var(--theme-text); }
```

切主题只需在 `<html>` 上切 `data-theme`，全站颜色自动跟随——无需改任何具体规则。这是现代**设计令牌**与主题切换的标准做法。

### `var()` 的兜底值

```css
.card { width: var(--card-w, 300px); }   /* 没定义 --card-w 时用 300px */
```

第二个参数是默认值，变量缺失时兜底。注意：CSS 变量**不能做运算穿透**，`calc(var(--x) + 10px)` 要用 `calc` 包起来。

本章主线：
- 自定义属性的定义、引用与作用域
- 用变量做设计令牌与主题切换
- `:is()` / `:where()` / `:has()` 逻辑选择器
- 现代特性一览（容器查询、`:has` 已广泛支持）

## 逻辑选择器

```css
/* :is() —— 括号内任一命中，优先级取括号内最高的那个 */
:is(h1, h2, h3) { color: var(--color-heading); }

/* :where() —— 优先级恒为 0，专用于"易覆盖"的reset */
:where(button, input) { font: inherit; }

/* :has() —— 父选择器！选中"包含某子元素"的父级 */
.card:has(img) { padding: 0; }     /* 含图片的卡片去掉内边距 */
label:has(input:checked) { color: green; }
```

- 用 `:is()` 化简长选择器列表、且保留原优先级。
- 用 `:where()` 写 reset——优先级 0，后面任何规则都能轻松覆盖（见 [CSS 工程化](/docs/软件工程/Web前端/CSS/engineering) 的 reset 思路）。
- `:has()` 是长期缺失的"父选择器"，现在已广泛支持，能做很多过去要 JS 才行的样式判断。

## 易错点

- **变量名拼错得到兜底/无效值**。`var(--primary)` 写成 `--primay`，会落回兜底或 `initial`，不报错难排查。
- **在 `:root` 之外忘记作用域**。想全局生效的令牌必须定义在 `:root`（或 `html`）。
- **误以为 CSS 变量有类型**。它存的是字符串，`--x: 10px` 和 `--x: 10` 不同；参与运算要 `calc()`。
- **`:where()` 用了却期望高优先级**。它优先级恒为 0，和 `:is()` 相反，别混用。
- **`:has()` 当子选择器用**。`:has()` 选的是**父**，不是子；`a:has(b)` 选的是"含 b 的 a"。
- **动态改主题却没用变量**。直接在具体规则里写死颜色，切主题时改不动；先抽成 `--token`。

## 练习

1. 在 `:root` 定义一套令牌（`--color-primary`/`--space-*`/`--radius`），把前面某篇的示例样式改用变量重写。
2. 实现暗色模式：`<html data-theme="dark">` 覆盖令牌，用 JS 切换属性，验证全站变色。
3. 用 `:is(h1,h2,h3)` 统一标题色，再单独用 `h1` 覆盖一次，观察 `:is` 的优先级（取括号内最高 = h1 的优先级）。
4. 用 `:where()` 写一行 reset（清除 `button`/`input` 默认字体），再在别处轻松覆盖它，体会优先级 0。
5. 用 `:has()` 给"包含 `<code>` 的段落"加左侧边框，做成引用代码块样式，无需额外 class。

## 小结

自定义属性（`--x` + `var()`）参与层叠、可继承、可覆盖，是主题切换与设计令牌的基础——在 `:root` 定义、在特定作用域覆盖即可换肤。`var()` 的第二参数是兜底值，运算要包 `calc()`。逻辑选择器里，`:is()` 保留原优先级、`:where()` 优先级恒为 0（适合 reset）、`:has()` 是父选择器。这些现代特性让 CSS 从写死样式走向可配置系统。

## 延伸阅读

- [层叠、继承与优先级](/docs/软件工程/Web前端/CSS/cascade) — 变量参与层叠、`:where` 优先级 0 的本源。
- [选择器](/docs/软件工程/Web前端/CSS/selector) — 逻辑选择器的前置知识。
- [CSS 工程化](/docs/软件工程/Web前端/CSS/engineering) — 变量 + 命名规范 + 设计令牌的组织。
- [响应式设计](/docs/软件工程/Web前端/CSS/responsive) — 容器查询与 `prefers-color-scheme` 配合变量做暗色。
- [返回 CSS 总览](/docs/软件工程/Web前端/CSS/)
