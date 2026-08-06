---
title: "文本与字体"
description: "字体栈、字号与行高、字重与对齐、可读性与排版基础"
sidebar_position: 10
---

# 文本与字体

CSS 的一大半工作量在排版——网页终究是"给人读的文字"。好的排版不靠花哨，而靠**可读性**：合适的字号、行高、字间距、行宽。这一章讲清楚文字相关的核心属性，以及中文/西文排版的特殊注意点。

## 学习目标

学完本章，你应该能够：

- 写一条健壮的**字体栈（font stack）**，让不同系统都有体面的 fallback
- 用 `rem`/`em` 控制字号，理解 `line-height`、`letter-spacing`、`word-spacing` 对可读性的影响
- 区分 `font-weight` 的数值与关键字，知道中文网页常踩的字重坑
- 用 `text-align`、`text-indent`、连字符与换行控制控制段落形态
- 说出"一行多宽最舒服"（行宽 45–75 字符）这类排版经验值

## 前置知识

- [CSS 简介](/docs/软件工程/Web前端/CSS/intro) — 属性与值的写法。
- [层叠、继承与优先级](/docs/软件工程/Web前端/CSS/cascade) — `font-*` 多数属性**可继承**，是少数会"往下传"的样式。

## 核心概念

### 字体栈：别只写一个字体名

你不能假设用户装了某款字体。写**字体栈**——一排候选，浏览器取第一个存在的：

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
               "PingFang SC", "Microsoft YaHei", sans-serif;
}
```

逻辑：先列系统 UI 字体（快、原生质感），再列常见中文字体（PingFang SC 苹果 / Microsoft YaHei 微软），最后以通用族（`sans-serif`/`serif`/`monospace`）兜底。中文网站务必在栈里包含一款中文 sans 字体，否则中文会回退到难看的默认体。

### 字号、行高与行宽

```css
body {
  font-size: 16px;        /* 正文基准，常用 15–18px */
  line-height: 1.6;       /* 无单位 = 相对自身字号的倍数，推荐 1.5–1.8 */
}
p {
  max-width: 70ch;        /* 限制行宽：ch ≈ 一个'0'的宽度，70ch ≈ 一行 70 字符最舒服 */
}
```

- **`line-height` 用无单位倍数**：继承的是"比例"而非固定像素，子元素字号变化时行高自动跟着变。
- **行宽（line length）**：一行 45–75 个字符最易读，过宽眼睛要大幅横扫、过窄频繁换行。用 `max-width: 65ch` 这类约束正文容器。

本章主线：
- 字体栈与 Web 字体（`@font-face`）
- 字号体系与 `line-height`/`letter-spacing`
- 字重与中文坑
- 对齐、缩进、断词与可读性

## 字重与中文陷阱

```css
.regular { font-weight: 400; }   /* normal */
.bold    { font-weight: 700; }   /* bold */
```

关键字 `normal`=400、`bold`=700，也可用数值 100–900。坑在于**中文字体通常只有 1–2 个字重**（常规 + 粗体），你写 `font-weight: 300` 也只会落到最近可用的那档——指望中文"细体"往往无效，要么引入多字重 Web 字体，要么接受只有常规/粗体两档。

## Web 字体与 `@font-face`

系统字体栈够用，但想要品牌字体就得加载。现代用 `@font-face` + `woff2`（体积小、压缩好）：

```css
@font-face {
  font-family: "MyFont";
  src: url("/fonts/myfont.woff2") format("woff2");
  font-weight: 400;
  font-display: swap;     /* 先显示后备字体，加载完再换，避免"不可见文本期" */
}
```

`font-display: swap` 很关键：否则文字在字体下载完前不渲染（FOIT），用户盯着空白。也可交给系统字体栈省去加载。中文 Web 字体体积巨大（几 MB），通常用"按需子集化"只打包用到的字。

## 对齐、缩进与断词

```css
p {
  text-align: justify;        /* 两端对齐（中文常用，西文易留空洞） */
  text-indent: 2em;           /* 首行缩进两字（中文段落习惯） */
  letter-spacing: 0.02em;     /* 字间距，标题可稍宽 */
  word-spacing: 0.1em;        /* 词间距（对中文几乎无效） */
}
.long-word {
  overflow-wrap: break-word;  /* 长串（URL/哈希）超出时允许断行，防溢出 */
}
```

西文 `text-align: justify` 会在单词间拉开空隙导致"河流状"难看留白，中文因字符等宽影响小。长串无空格文本（如 token）务必 `overflow-wrap: break-word` 防撑破容器。

## 易错点

- **字体栈没有中文 fallback**。中文落到难看的默认衬线体，务必加 `PingFang SC`/`Microsoft YaHei`。
- **`line-height` 用固定 px**。子元素字号变化时行高不跟随，改用无单位倍数。
- **指望中文 `font-weight: 300` 变细**。中文字体通常无细字重，只会回退到常规。
- **正文行宽过宽/过窄**。无 `max-width` 约束时一行拉到全屏，极难读；用 `65ch` 量级限制。
- **`text-align: justify` 用于西文长段落**。出现难看空隙，改用 `left`。
- **Web 字体忘了 `font-display: swap`**。加载期间文字不可见（FOIT）。
- **`word-spacing` 调中文间距**。中文无词边界，用它无效，用 `letter-spacing`。

## 练习

1. 写一条兼顾 macOS / Windows / Linux 的中英文字体栈，包含系统 UI 体与中文 sans 兜底。
2. 给正文设 `font-size: 16px; line-height: 1.7; max-width: 68ch`，用浏览器测量一行大约多少字符、是否舒适。
3. 对比 `font-weight: 300/400/700` 在中文与英文标题下的差异，记录中文字重为何"跳档"。
4. 一段含长 URL 的正文，去掉 `overflow-wrap: break-word` 看是否撑破容器，再补上观察修复。
5. 用 `@font-face` 加载一个 `woff2` 字体并设 `font-display: swap`，用开发者工具的网络面板看"后备字体先显示、再替换"的过程。

## 小结

排版的核心是可读性而非花哨。写健壮的字体栈（系统 UI 体 → 中文 sans → 通用族兜底）；`line-height` 用无单位倍数、`max-width: ~65ch` 约束行宽最舒适。中文字体通常只有常规/粗体两档，`font-weight` 细值会跳档。Web 字体用 `woff2` + `font-display: swap` 避免不可见文本期；长串文本加 `overflow-wrap: break-word` 防溢出。

## 延伸阅读

- [颜色、背景与渐变](/docs/软件工程/Web前端/CSS/color-background) — 文字颜色与背景对比度（可读性另一半）。
- [层叠、继承与优先级](/docs/软件工程/Web前端/CSS/cascade) — `font-*` 多数可继承。
- [响应式设计](/docs/软件工程/Web前端/CSS/responsive) — `rem` 做可缩放排版。
- [返回 CSS 总览](/docs/软件工程/Web前端/CSS/)
