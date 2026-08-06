---
title: "颜色、背景与渐变"
description: "颜色表示法、透明度、背景图与渐变、对比度与可读性"
sidebar_position: 11
---

# 颜色、背景与渐变

文字要能读，前提是**前景色与背景色对比足够**。这一章讲颜色怎么写、背景怎么铺、渐变怎么画，以及一条不可妥协的底线——**对比度（accessibility）**。

## 学习目标

学完本章，你应该能够：

- 用 `hex` / `rgb()` / `hsl()` 表示颜色，并理解 `hsl` 为何利于"调色"
- 用 `rgba()` / `hsla()` 或 `#rrggbbaa` 做半透明
- 用 `background` 简写控制颜色、图片、位置、重复、尺寸
- 用 `linear-gradient` / `radial-gradient` 画渐变（含"纯色分隔条"技巧）
- 说出 WCAG 对比度的基本要求（正文 ≥ 4.5:1）

## 前置知识

- [CSS 简介](/docs/软件工程/Web前端/CSS/intro) — 属性与值的写法。
- [文本与字体](/docs/软件工程/Web前端/CSS/text) — 颜色与背景共同决定可读性。

## 核心概念

### 颜色表示法

```css
.color {
  color: #3366cc;            /* hex */
  color: rgb(51, 102, 204);  /* rgb，0–255 */
  color: hsl(220, 60%, 50%); /* 色相/饱和/亮度，最直观 */
}
```

三种等价。`hsl()` 的优势是**语义化调色**：调亮度（L）就近白/近黑，调饱和度（S）就鲜/灰，调色相（H）就换色系——比在一堆 hex 数字里蒙直观得多。现代还支持相对颜色语法，但 `hsl` 已足够日常。

### 透明度

```css
.tint {
  background: rgba(0, 0, 0, 0.5);     /* 半透明黑遮罩 */
  border-color: #00000080;           /* #rrggbbaa，末尾 80≈50% */
}
```

alpha 通道 0 完全透明、1 完全不透明。半透明黑/白是做遮罩、hover 高亮的利器。

本章主线：
- 颜色表示与 `hsl` 调色
- 背景简写与多背景层
- 线性/径向渐变
- 对比度与可读性底线

## 背景：图片、位置、尺寸

```css
.hero {
  background-color: #222;
  background-image: url("/img/hero.jpg");
  background-size: cover;       /* 覆盖容器，可能裁切 */
  background-position: center;
  background-repeat: no-repeat;
}
```

`background-size: cover` 让图片铺满且不变形（代价是裁切边缘）；`contain` 保证完整显示（代价是留白）。可叠多层背景，逗号分隔，先写的在上：

```css
.box {
  background:
    linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.3)),  /* 上层半透明遮罩 */
    url("/img/bg.jpg") center / cover;
}
```

## 渐变

渐变本质是"一种特殊的图片"，可作 `background-image`：

```css
.btn {
  background-image: linear-gradient(135deg, #6a11cb, #2575fc);
}
.card {
  background-image: radial-gradient(circle at top, #fff, #eee);
}
```

常用技巧——**用渐变画"硬边分隔条"**（其实是无过渡的渐变）：

```css
.divider {
  height: 4px;
  background: linear-gradient(to right, red 50%, blue 50%); /* 左红右蓝，无过渡 */
}
```

`to right, red 0 50%, blue 50% 100%` 这种"在 50% 处突变"的写法能画出锐利边界、条纹背景，是渐变里极实用的模式。

## 对比度：可读性的底线

无论多好看，文字必须能读。WCAG 要求：

- **正文**前景/背景对比度 **≥ 4.5:1**
- **大字（≥24px 或 ≥19px 粗体）** ≥ 3:1
- **UI 组件边界/图标** ≥ 3:1

```css
/* 危险：浅灰字配白底，对比度不足 */
.bad  { color: #aaa; background: #fff; }   /* 约 2.3:1，不合格 */
/* 安全 */
.good { color: #595959; background: #fff; } /* 约 7:1 */
```

用浏览器开发者工具或在线对比度检查器验证。别用纯黑配纯白（刺眼），深灰 `#333` 配白通常最舒服。这条是**硬性可访问性要求**，不是审美偏好。

## 易错点

- **忘了对比度底线**。浅灰字配白底好看却不达标，正文至少 4.5:1。
- **`background` 简写覆盖 `background-color`**。简写会重置所有子属性，写 `background:` 后再单独设 `background-color` 会被清掉顺序要小心，或改用具体子属性。
- **`background-size: cover` 裁掉重要内容**。人物脸被切，改用 `contain` 或调整 `position`。
- **渐变方向写反**。`linear-gradient(to right, A, B)` 是 A 在左 B 在右；角度 `135deg` 是右下方向。
- **透明度叠加导致意外变淡**。多层半透明叠在一起会越来越浅，遮罩别叠太多层。
- **用颜色 alone 传达信息**。色盲用户分不清红绿，重要状态要加文字/图标，不只靠颜色。

## 练习

1. 用 `hsl()` 生成同一色相的"浅—中—深"三档，用于边框/背景/主色，体会 HSL 调色。
2. 给卡片加半透明黑遮罩：`linear-gradient(rgba(0,0,0,.4), rgba(0,0,0,.4))` 叠在背景图上，文字改白，验证对比度。
3. 用突变渐变画一条"左红右蓝"的 4px 分隔条。
4. 测一组配色：浅灰 `#bbb` 配白底 vs 深灰 `#595959` 配白底，分别算对比度，判断哪个达标。
5.  hero 区 `background: url(...) center / cover no-repeat`，把 `cover` 改成 `contain`，观察留白与裁切的差异。

## 小结

颜色用 `hex`/`rgb`/`hsl` 表示，`hsl` 最利于调色。背景可用多层（先写在上）、`cover`/`contain` 控制图片铺法。渐变是特殊的"图片"，突变写法能画锐利分隔条与条纹。最重要的底线是**对比度**：正文 ≥ 4.5:1、大字/UI ≥ 3:1，否则再美观也不可读，且别只用颜色传达关键信息。

## 延伸阅读

- [文本与字体](/docs/软件工程/Web前端/CSS/text) — 前景色来自 `color`，与背景共同决定可读性。
- [响应式设计](/docs/软件工程/Web前端/CSS/responsive) — `prefers-color-scheme` 切换深色背景与浅色文字。
- [变换、过渡与动画](/docs/软件工程/Web前端/CSS/transition-animation) — 背景/颜色也能做过渡。
- [返回 CSS 总览](/docs/软件工程/Web前端/CSS/)
