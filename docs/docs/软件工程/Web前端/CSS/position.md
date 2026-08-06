---
title: "定位"
description: "static / relative / absolute / fixed / sticky 五种定位，以及层叠上下文与 z-index"
sidebar_position: 6
---

# 定位

常规流按"书写顺序"把盒子从上往下、从左往右排。但现实界面里，总有些元素要"浮"在别的上头：弹窗、下拉菜单、吸顶导航、回到顶部按钮。这些都要靠 **`position`** 属性从常规流里"抽"出来，重新定位。

`position` 有五种取值，它们是同一套机制的五个档位。理解每个档位"相对谁定位、是否脱流、留不留守位"，就掌握了全部。

## 学习目标

学完本章，你应该能够：

- 区分 `static` / `relative` / `absolute` / `fixed` / `sticky` 各自"相对什么定位、是否脱离常规流"
- 正确使用 `top` / `right` / `bottom` / `left` 偏移量
- 解释"绝对定位元素为什么跑到了奇怪的地方"——根源在最近的非 `static` 祖先
- 理解 **层叠上下文（stacking context）** 与 `z-index` 的作用范围，避免 `z-index` 失效
- 用 `sticky` 实现吸顶导航、用 `fixed` 实现悬浮按钮

## 前置知识

- [显示类型与常规流](/docs/软件工程/Web前端/CSS/display-flow) — 本章讲的就是"如何脱离/部分脱离常规流"。
- [盒模型](/docs/软件工程/Web前端/CSS/box-model) — 定位偏移基于盒子的边界。

## 核心概念

五种取值构成一张光谱——从"完全在流里"到"完全脱流"：

| 取值 | 是否脱流 | 参考系（相对谁定位） | 原位置是否保留 |
|---|---|---|---|
| `static` | 否（默认） | 无，`top` 等偏移不生效 | 保留 |
| `relative` | 否 | **自己原来的位置** | 保留 |
| `absolute` | **是** | **最近的非 `static` 祖先** | 不保留 |
| `fixed` | **是** | **视口（viewport）** | 不保留 |
| `sticky` | 部分 | 常规流 + 视口阈值 | 滚动到阈值前保留 |

本章主线：
- 五种取值的语义与典型用途
- `absolute` 的"包含块"搜寻规则
- 层叠上下文与 `z-index` 的生效边界
- `sticky` 的触发条件

## `relative`：相对自己原来的位置挪

```css
.tip {
  position: relative;
  top: 8px;     /* 向下挪 8px */
  left: 4px;    /* 向右挪 4px */
}
```

关键：**`relative` 不脱流**，元素原本的位置照样占着，只是视觉上"位移"了，会盖到下面的内容上。它最常见的用途不是自己定位，而是**给内部的 `absolute` 子元素当参考系**（见下）。

注意 `top`/`left` 是正向偏移：`top: 8px` 是往下，`left: 4px` 是往右。

## `absolute`：相对最近的定位祖先

```css
.modal {
  position: absolute;
  top: 50%;
  left: 50%;
}
```

`absolute` **脱离常规流**，原位置不再保留（后面的元素会补上来）。它的偏移参考系是**最近的、非 `static` 定位的祖先元素**（即 `position` 为 `relative`/`absolute`/`fixed`/`sticky` 的祖先）；如果一直找不到，就参考初始包含块（通常是视口）。

这就是经典陷阱的来源：**你忘了给父容器设 `position: relative`**，于是 `absolute` 子元素一路向上找到了 `<body>` 甚至视口，跑到页面角落去了。标准做法：

```css
.parent { position: relative; }   /* 建立包含块 */
.child  { position: absolute; top: 0; right: 0; }
```

想做"父容器内的右上角角标""悬浮在图片上的文字"，都该这么写。

## `fixed`：钉在视口上

```css
.back-to-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
}
```

`fixed` 同样脱流，但参考系是**视口**——无论页面怎么滚动，它都钉在屏幕的同一个位置。常见用途：回到顶部按钮、悬浮客服、全局弹窗遮罩。

一个坑：如果某个祖先元素设了 `transform` / `filter` / `will-change` 等属性，会**建立包含块**，`fixed` 就会相对那个祖先而非视口定位。这是 CSS 里著名的"意外陷阱"。

## `sticky`：滚动到阈值前守在流里，之后钉住

```css
.nav {
  position: sticky;
  top: 0;     /* 滚到距离视口顶部 0px 时，钉住 */
}
```

`sticky` 是"半脱流"：在到达阈值前，它像 `relative` 一样待在常规流里；一旦滚动越过 `top`（或 `bottom`/`left`/`right`）指定的阈值，就变成 `fixed` 钉住，直到父容器滚出视野才松开。

典型用途：吸顶导航栏、表格首行。它**必须指定至少一个阈值方向**（`top`/`bottom` 等），否则等同 `relative` 毫无效果。另外，父容器不能有 `overflow: hidden/auto/scroll` 截断，否则 `sticky` 会失效。

## 层叠上下文与 `z-index`

脱流/定位元素可能互相重叠，谁在上谁在下由 **`z-index`** 决定，但 `z-index` 只在**同一层叠上下文内**比较：

```css
.a { position: absolute; z-index: 10; }
.b { position: absolute; z-index: 5; }   /* a 盖住 b */
```

**层叠上下文（stacking context）** 是 `z-index` 的"作用域"。以下情况会创建新的层叠上下文：

- 设了 `position` 非 `static` **且** `z-index` 非 `auto`
- `opacity` 小于 1、`transform`、`filter`、`will-change` 等
- `flex`/`grid` 容器的直接子元素设了 `z-index`

一旦 A 在自己的上下文里有 `z-index: 999`，它和 B 的 `z-index: 1` **不在一个层级比较**——B 的子元素哪怕 `z-index` 再高也爬不出 B 的上下文。所以"`z-index` 写了却不起作用"，多半是父子各自在不同的层叠上下文里。

## 易错点

- **`absolute` 跑到屏幕角落**。忘了给祖先设 `position: relative` 当包含块。
- **`top`/`left` 方向搞反**。`top: 8px` 是向下偏移，不是向上。
- **`sticky` 完全没反应**。没写阈值方向（如 `top: 0`），或父容器 `overflow` 被截断。
- **`fixed` 相对某个祖先漂**。那个祖先有 `transform`/`filter`，意外成了包含块。
- **`z-index` 失效**。父子处在不同层叠上下文，比较的不是同一个层级。
- **用 `absolute` 做整体布局**。绝对定位脱离流，子元素高度无法撑开父容器，内容多时会重叠溢出。布局用 Flex/Grid，定位只做"浮层"。
- **`relative` 误以为脱流**。它只是视觉位移，原位置仍占位，可能盖住下方内容却留着空白。

## 练习

1. 做一个卡片，内部右上角放一个"NEW"角标：卡片 `position: relative`，角标 `position: absolute; top: 8px; right: 8px`。
2. 复现 `absolute` 陷阱：父容器不加 `relative` 时角标跑到哪？加了之后呢？
3. 实现一个吸顶导航：`.nav { position: sticky; top: 0; }`，确认向下滚动时它钉在顶部，滚出容器后松开。
4. 放两个 `fixed` 弹窗 A(`z-index:10`)、B(`z-index:5`)，再给 A 的父容器加 `transform: translateZ(0)`，观察 `z-index` 比较规则是否还按预期（提示：A 进了新上下文）。
5. 回到顶部按钮：固定在右下角，确认滚动页面时它始终钉在视口。

## 小结

`position` 五档位构成从"完全在流"到"完全脱流"的光谱：`static` 默认、`relative` 相对自身且守位、`absolute` 相对最近定位祖先且脱流、`fixed` 相对视口、`sticky` 滚动到阈值前守位之后钉住。`absolute` 必须配合祖先的 `position: relative` 才能限制在容器内；`z-index` 只在同一个层叠上下文内有效，父级一旦建了新上下文，子级的 `z-index` 就爬不出去。布局用 Flex/Grid，定位只负责浮层。

## 延伸阅读

- [显示类型与常规流](/docs/软件工程/Web前端/CSS/display-flow) — 理解"脱流"的前提。
- [Flexbox 弹性布局](/docs/软件工程/Web前端/CSS/flexbox) — 真正做布局的工具，别用 `position` 硬凑。
- [盒模型](/docs/软件工程/Web前端/CSS/box-model) — 定位偏移基于盒子边界。
- [返回 CSS 总览](/docs/软件工程/Web前端/CSS/)
