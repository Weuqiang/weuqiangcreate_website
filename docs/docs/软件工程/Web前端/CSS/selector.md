---
title: "选择器"
description: "基础选择器、组合器、伪类与伪元素：如何精确选中页面上的任意元素"
sidebar_position: 2
---

# 选择器

选择器（selector）回答一个问题：**这条规则作用在哪些元素上**。它是 CSS 里最需要熟练的部分——选不准，后面的样式全是空谈；选得笨，样式表会越写越难维护。

## 学习目标

学完本章，你应该能够：

- 熟练使用标签、类、ID、属性四类基础选择器
- 用组合器表达元素之间的层级与相邻关系
- 用伪类响应状态（悬停、选中、第 n 个）与结构位置
- 用伪元素生成内容、修饰首字母首行
- 判断什么时候该加一个类，什么时候该用结构关系

## 前置知识

- [CSS 简介](/docs/软件工程/Web前端/CSS/intro) — 规则的语法结构。
- [HTML 全局属性](/docs/软件工程/Web前端/HTML/attribute) — `class` 与 `id` 的含义。

## 核心概念

把 HTML 文档想成一棵树：`html` 是根，每个标签是一个节点，嵌套关系就是父子关系。选择器本质上是一套**在这棵树上做模式匹配的查询语言**——和 [数据结构里的树遍历](/docs/计算机科学基础/数据结构与算法/二叉搜索树) 是同一类问题，只不过语法是声明式的。

本章主线：
- 基础选择器：按标签名、类、ID、属性来选
- 组合器：按元素之间的位置关系来选
- 伪类：按状态和结构序号来选
- 伪元素：选中元素内部"并不真实存在"的部分

## 基础选择器

```css
/* 标签选择器：所有 p 元素 */
p { line-height: 1.75; }

/* 类选择器：所有 class 含 note 的元素 */
.note { background: #fffbe6; }

/* ID 选择器：id 为 header 的那一个元素 */
#header { position: sticky; }

/* 通配选择器：所有元素 */
* { box-sizing: border-box; }
```

选择器之间可以**连写表示"同时满足"**，中间不留空格：

```css
/* 既是 p 又有 note 类 */
p.note { font-style: italic; }

/* 同时具备 btn 和 primary 两个类 */
.btn.primary { background: #0b6bcb; }
```

### 属性选择器

按 HTML 属性来选，方括号语法：

```css
/* 有 disabled 属性 */
[disabled] { opacity: .5; }

/* type 恰好等于 email */
input[type="email"] { border-color: #0b6bcb; }

/* href 以 https 开头 */
a[href^="https"] { color: green; }

/* href 以 .pdf 结尾 */
a[href$=".pdf"] { font-weight: bold; }

/* href 中包含 github */
a[href*="github"] { text-decoration: underline dotted; }
```

三个匹配符号很好记：`^=` 是开头（正则里的 `^`）、`$=` 是结尾（正则里的 `$`）、`*=` 是包含。属性选择器在处理表单和外链时特别有用，配合 [HTML 表单标签](/docs/软件工程/Web前端/HTML/form) 一起看效果最好。

## 组合器

组合器描述元素之间的**位置关系**，写在两个选择器中间：

```css
/* 后代：div 内部任意层级的 p */
div p { margin: 0; }

/* 子元素：只有 ul 的直接子级 li */
ul > li { list-style: square; }

/* 相邻兄弟：紧跟在 h2 后面的第一个 p */
h2 + p { margin-top: 0; }

/* 通用兄弟：h2 之后所有的同级 p */
h2 ~ p { color: #555; }
```

四者的区别用一句话概括：空格是"里面所有层"，`>` 是"里面第一层"，`+` 是"后面紧挨着的一个"，`~` 是"后面所有的"。

注意 `+` 和 `~` 都**只能向后找**，CSS 里没有"前一个兄弟"的选择器。这是个刻意的限制：浏览器从上到下解析文档，向前查找会破坏流式渲染。

## 伪类

伪类以单冒号开头，表示元素处于某种**状态**或占据某个**结构位置**。

### 状态伪类

```css
a:hover { color: #0b6bcb; }        /* 鼠标悬停 */
a:active { color: #d1453b; }       /* 按下瞬间 */
input:focus { outline: 2px solid; } /* 获得焦点 */
input:disabled { cursor: not-allowed; }
input:checked + label { font-weight: bold; }
a:visited { color: purple; }        /* 已访问过的链接 */
```

链接的四个伪类有**书写顺序要求**：`:link` → `:visited` → `:hover` → `:active`，记作 LVHA。顺序错了后面的会被前面的覆盖——原因见[层叠与优先级](/docs/软件工程/Web前端/CSS/cascade)中的"同优先级看书写顺序"规则。

### 结构伪类

```css
li:first-child { border-top: none; }
li:last-child { border-bottom: none; }
li:nth-child(2) { background: #f5f5f5; }   /* 第 2 个 */
li:nth-child(odd) { background: #fafafa; } /* 奇数行 */
tr:nth-child(2n) { background: #f0f0f0; }  /* 偶数行，斑马纹 */
p:only-child { text-align: center; }       /* 唯一的子元素 */
li:nth-last-child(2) { color: red; }       /* 倒数第 2 个 */
```

`nth-child()` 的参数支持 `an+b` 形式的公式，`n` 从 0 开始递增：`3n` 是第 3、6、9 个，`3n+1` 是第 1、4、7 个。这套记法能表达任意周期性选择，做表格斑马纹和网格布局时非常好用。

### 否定与匹配伪类

```css
/* 除了 .active 之外的所有 li */
li:not(.active) { opacity: .6; }

/* 等价于 h1, h2, h3 各自加 .title 前缀，但写法更短 */
.title:is(h1, h2, h3) { margin-block: .5em; }

/* 与 :is 相同，但优先级恒为 0 */
:where(h1, h2, h3) { line-height: 1.25; }
```

`:is()` 和 `:where()` 是现代 CSS 的重要简化工具，二者唯一的区别是优先级——详见[自定义属性与现代特性](/docs/软件工程/Web前端/CSS/variables)。

## 伪元素

伪元素以**双冒号**开头，选中的是元素内部"并不作为独立标签存在"的部分：

```css
/* 在元素内容前后插入生成内容 */
.required::after {
  content: " *";
  color: red;
}

/* 首字母下沉 */
p::first-letter {
  font-size: 3em;
  float: left;
}

/* 第一行 */
p::first-line { font-weight: bold; }

/* 输入框占位文字 */
input::placeholder { color: #999; }

/* 用户选中的文本 */
::selection { background: #ffe58f; }
```

`::before` 和 `::after` 必须有 `content` 属性才会显示，哪怕是空字符串 `content: ""`。它们常被用来做装饰性图形（角标、分隔线、图标），好处是不污染 HTML 结构。

但要注意：**伪元素生成的内容对屏幕阅读器不可靠**，纯装饰用没问题，承载信息就不合适了。可访问性相关讨论见 [HTML 语义结构](/docs/软件工程/Web前端/HTML/semantic)。

## 该用类还是该用结构关系

这是选择器设计的核心权衡：

```css
/* 写法 A：依赖结构 */
.sidebar ul li a { color: #333; }

/* 写法 B：显式加类 */
.nav-link { color: #333; }
```

写法 A 不用改 HTML，但**脆弱**：一旦有人把 `ul` 换成 `nav` 或者多包一层 `div`，样式就失效了；而且选择器越长优先级越高，将来越难覆盖。

写法 B 需要在 HTML 上加类，但**稳定**：不管结构怎么调整，只要类还在样式就在；优先级低而平坦，易于覆盖和组合。

现代工程实践普遍倾向写法 B——这正是 BEM 等命名规范的出发点，详见 [CSS 工程化](/docs/软件工程/Web前端/CSS/engineering)。经验法则：**结构关系用于表达"确实是结构性的"约束（比如列表项之间的分隔线），其余一律加类。**

## 易错点

- **`div p` 和 `div > p` 混用**。后代选择器会选中深层嵌套的元素，常导致"改了外层却影响了内层组件"。不确定时优先用 `>`。
- **选择器之间多打了空格**。`.btn.primary`（同时有两个类）和 `.btn .primary`（后代）含义完全不同，是高频笔误。
- **忘记伪元素需要 `content`**。`::before` 没有 `content` 时根本不渲染，很多人以为是别的地方写错了。
- **滥用 ID 选择器**。ID 优先级极高（见[层叠](/docs/软件工程/Web前端/CSS/cascade)），一旦用了后面几乎无法覆盖，只能靠 `!important` 硬压，恶性循环。
- **`:nth-child` 与 `:nth-of-type` 混淆**。前者数的是"父元素的第 n 个孩子"（不管标签类型），后者数的是"第 n 个同类型标签"。列表里混有其他标签时结果会大不相同。
- **过长的选择器链**。`.a .b .c .d span` 这类写法既慢又脆，还会把优先级抬到难以覆盖的高度。

## 练习

动手检验一下自己：

1. 给一个表格写斑马纹：奇数行浅灰、偶数行白色，并让最后一行没有下边框。
2. 用属性选择器给所有外链（`href` 以 `http` 开头）自动加一个"↗"角标，要求不改动 HTML。
3. 写一个必填表单项的样式：标签文字后面自动加红色星号。
4. 给出 `ul li a` 和 `.nav-link` 两种写法，各说出一个"另一种写法会出问题"的具体场景。
5. 用 `:nth-child()` 选中一个九宫格里的正中间那一格（第 5 个）。

## 小结

选择器是在 DOM 树上做模式匹配：基础选择器按身份选（标签/类/ID/属性），组合器按位置选（后代/子/相邻/通用兄弟），伪类按状态与序号选，伪元素选中元素内部的虚拟部分。工程上应优先用扁平的类选择器而非深层结构链——它更稳定、优先级更低、也更好覆盖。

## 延伸阅读

- [层叠、继承与优先级](/docs/软件工程/Web前端/CSS/cascade) — 下一步：多条规则同时命中时谁说了算。
- [CSS 简介](/docs/软件工程/Web前端/CSS/intro) — 上一步：规则的基本语法。
- [CSS 工程化](/docs/软件工程/Web前端/CSS/engineering) — 选择器命名规范与可维护性。
- [JavaScript 元素选取](/docs/软件工程/Web前端/JavaScript/dom/document) — `querySelector` 复用的正是同一套选择器语法。
- [返回 CSS 总览](/docs/软件工程/Web前端/CSS/)
