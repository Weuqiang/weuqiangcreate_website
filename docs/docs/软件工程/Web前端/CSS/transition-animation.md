---
title: "变换、过渡与动画"
description: "transform 变换、transition 过渡、@keyframes 动画，以及性能与可访问性注意点"
sidebar_position: 12
---

# 变换、过渡与动画

静态样式会"跳变"——hover 时颜色瞬间切换。加上**过渡**和**动画**，界面就有了"动起来"的质感，反馈更清晰、更高级。这一章讲三个东西：`transform`（变形）、`transition`（过渡）、`@keyframes`（关键帧动画），以及它们的性能红线。

## 学习目标

学完本章，你应该能够：

- 用 `transform` 做位移、缩放、旋转、倾斜，并理解它**不触发重排**的优势
- 用 `transition` 让属性变化平滑发生，控制时长、缓动与延迟
- 用 `@keyframes` 定义多步动画，并用 `animation` 简写挂到元素上
- 区分 `transition`（两态之间）与 `animation`（多步、可循环）
- 知道哪些属性动起来便宜（transform/opacity），哪些昂贵（width/height/top）

## 前置知识

- [盒模型](/docs/软件工程/Web前端/CSS/box-model) — `transform` 基于盒子位置，但不改变布局。
- [颜色、背景与渐变](/docs/软件工程/Web前端/CSS/color-background) — 颜色/背景常作为过渡对象。

## 核心概念

### `transform`：变形之王

```css
.card:hover {
  transform: translateY(-4px) scale(1.02) rotate(2deg);
}
```

`transform` 在同一行里可叠加多个函数：`translate`（位移）、`scale`（缩放）、`rotate`（旋转）、`skew`（倾斜）。它的巨大优势是：**只动"视觉层"，不改文档流、不触发重排（reflow）**，性能远好于改 `top`/`left`/`width`。

⚠️ 注意：带 `transform` 的元素会建立**包含块**和**层叠上下文**——这会影响内部 `position: fixed`/`absolute` 与 `z-index`（见 [定位](/docs/软件工程/Web前端/CSS/position)）。

### `transition`：让变化平滑

```css
.btn {
  background: #2575fc;
  transition: background 0.3s ease, transform 0.2s ease;
}
.btn:hover {
  background: #1a5fd0;
  transform: translateY(-2px);
}
```

`transition` 描述"当某属性变化时，用多长时间、什么缓动曲线过渡"。语法：`属性 时长 缓动 延迟`。常用缓动：`ease`（默认）、`ease-in`/`ease-out`/`ease-in-out`、`linear`，以及 `cubic-bezier(...)` 自定义。

本章主线：
- `transform` 四类变换与性能优势
- `transition` 的四大参数
- `@keyframes` 与 `animation` 简写
- 性能红线与 `prefers-reduced-motion`

## `@keyframes` 与 `animation`：多步动画

过渡只在"两态之间"插值。要来回循环、多关键帧，用动画：

```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}
.loader {
  animation: spin 1s linear infinite;   /* 名称 时长 缓动 次数 */
}
```

`animation` 简写：`animation: 名称 时长 缓动 延迟 次数 方向 填充模式`。`infinite` 无限循环，`alternate` 来回播放，`forwards` 保持结束帧。

## 性能红线：动什么最便宜

浏览器渲染有三条成本递增的流水线：

```text
便宜：transform、opacity          → 只走合成（composite），GPU 加速
中等：color、background、visibility → 走重绘（paint）
昂贵：width、height、top、left、margin → 走重排（layout）+ 重绘
```

**结论：能用 `transform`/`opacity` 实现的动效，绝不用改布局的属性。** 例如"滑入"用 `transform: translateX()` 而非改 `left`；"淡入"用 `opacity` 而非切 `display`。这直接决定动画是否流畅（能否稳住 60fps）。

## 可访问性：尊重"减少动态"

部分用户会因动画产生眩晕（前庭功能障碍）。务必尊重系统设置：

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation: none !important;
    transition: none !important;
  }
}
```

这是可访问性硬性建议，不是可选优化。

## 易错点

- **用 `top`/`left` 做位移动画**。触发重排，手机上卡顿；改用 `transform: translate()`。
- **`transition` 只生效于"可插值"的属性**。`display` 不能过渡（无中间态），要淡入淡出用 `opacity`。
- **忘了写 `transition` 的触发条件**。过渡需要"属性值发生变化"才跑——绑定到 `:hover`/类切换/JS 改样式。
- **`@keyframes` 名字冲突**。同名动画会互相覆盖，命名加前缀或语义化。
- **动画 `infinite` 忘停**。加载指示可无限转，但装饰动画无限循环会分散注意力、耗电。
- **忽略 `prefers-reduced-motion`**。眩晕用户会被动画困扰，必加减弱规则。
- **`transform` 建立层叠上下文后 `z-index` 失效**。见定位一章。

## 练习

1. 按钮 hover 上浮 + 变色：用 `transform: translateY(-2px)` + `transition`，测性能面板确认无重排。
2. 加载圈：用 `@keyframes spin` + `animation: spin 1s linear infinite` 做一个转圈 loader。
3. 弹窗淡入：用 `opacity` 从 0 到 1 的过渡（而非 `display`），对比切 `display` 为何无过渡。
4. 把"滑入菜单"从 `left: -200px → 0` 改成 `transform: translateX(-200px) → 0`，在 Performance 面板看重排是否消失。
5. 加 `@media (prefers-reduced-motion: reduce)` 关闭全站动画，用系统"减少动态效果"开关验证生效。

## 小结

`transform` 做位移/缩放/旋转且**不触发重排**，性能最佳；`transition` 让两态变化平滑（属性 时长 缓动 延迟）；`@keyframes` + `animation` 做多步/循环动画。性能红线：动 `transform`/`opacity` 最便宜，动 `width`/`top`/`left` 最贵会卡顿。务必用 `@media (prefers-reduced-motion: reduce)` 尊重减少动态的偏好，这是可访问性硬要求。

## 延伸阅读

- [定位](/docs/软件工程/Web前端/CSS/position) — `transform` 会建立包含块与层叠上下文。
- [盒模型](/docs/软件工程/Web前端/CSS/box-model) — `transform` 基于盒子但不变布局。
- [颜色、背景与渐变](/docs/软件工程/Web前端/CSS/color-background) — 颜色/背景常作过渡对象。
- [返回 CSS 总览](/docs/软件工程/Web前端/CSS/)
