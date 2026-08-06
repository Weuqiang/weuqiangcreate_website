---
title: "ES Modules 模块化"
description: "import / export 静态结构、默认与命名导出、动态 import，以及浏览器原生模块与打包器的关系。"
sidebar_position: 1
---

# ES Modules 模块化

## 学习目标

学完本章，你应该能够：

- 用 `export` / `import` 拆分与复用代码
- 区分命名导出与默认导出及各自的适用场景
- 用动态 `import()` 做按需加载
- 理解「浏览器原生 ESM」与「打包器」如何共存

## 前置知识

在阅读下面的内容前，建议先掌握：

- [JavaScript 函数](/docs/软件工程/Web前端/JavaScript/types/function)
- [前端工程化概述](/docs/软件工程/Web前端/构建工具与工程化/前端工程化概述)

## 核心概念

ES Module（ESM）是 JavaScript 官方的模块系统，用**静态**的 `import`/`export` 把代码切成可组合的单位。它的「静态性」正是 tree-shaking 与打包优化的前提。

本章主线：

- 命名导出 vs 默认导出
- 静态结构与 tree-shaking
- 动态 import 与按需加载
- 原生 ESM 与打包器

## 命名导出与默认导出

```javascript
// math.js：命名导出（可多个）
export const add = (a, b) => a + b;
export function sub(a, b) { return a - b; }

// 默认导出（每个模块一个）
export default function main() { /* ... */ }

// 使用方
import main, { add, sub } from './math.js';
```

- **命名导出**：适合一个模块暴露多个工具（如 `lodash` 风格），导入时用花括号、名字必须对应。
- **默认导出**：适合「模块的主产物」（一个组件、一个入口），导入时可任意命名。

约定：一个模块要么以「默认导出主物 + 少量命名辅助」为主，避免混用造成心智负担。

## 静态结构：编译期可知

ESM 的 `import`/`export` 必须写在**顶层**、且路径是静态字符串——不能在 `if` 里动态拼模块名。这带来关键能力：

```javascript
import { add } from './math.js'; // OK，静态
// if (x) import ...  // 非法，import 不能出现在块级
```

正因为依赖在编译期完全确定，打包器能安全地做 **tree-shaking**（删掉未用导出）和**作用域提升**。CommonJS 的 `require(variable)` 做不到这一点。

## 动态 import：按需加载

静态 `import` 在加载时就全部拉取；动态 `import()` 返回一个 Promise，在**运行时**才去加载模块：

```javascript
button.onclick = async () => {
  const { heavyChart } = await import('./chart.js');
  heavyChart.render();
};
```

这是代码分割的自然支点（见[模块打包](/docs/软件工程/Web前端/构建工具与工程化/模块打包)）。注意动态 import 是**表达式**，路径可以动态——它不属于「静态结构」，不会被 tree-shaking 消除。

## 原生 ESM 与打包器

浏览器原生支持：

```html
<script type="module">
  import { add } from './math.js';
  console.log(add(1, 2));
</script>
```

但生产直接用原生 ESM 有请求爆炸、无法降级等问题（见[模块打包](/docs/软件工程/Web前端/构建工具与工程化/模块打包)）。所以：开发态 Vite 直接用原生 ESM（快），生产态用打包器聚合成少量文件（小、快、兼容）。**两者的模块语法是同一套 ESM**，只是交付策略不同。

## 易错点

1. **默认导出匿名**：`export default function(){}` 报错栈难读；给默认导出命名更易调试。
2. **混用两种导出导致命名混乱**：团队约定「默认=主物，命名=工具」可减少困惑。
3. **把动态 import 当静态用**：忘了它是异步、返回 Promise，直接当同步值用会得到 Promise。
4. **路径忘了扩展名/写错**：原生 ESM 在浏览器里必须写全路径（含 `.js`），打包器下通常可省，注意环境差异。

## 小结

ESM 用静态 `import`/`export` 把代码模块化，其静态性支撑了 tree-shaking 与打包优化；默认导出表主物、命名导出表工具；动态 `import()` 提供按需加载。原生 ESM 用于开发便捷，打包器用于生产交付，语法同一套。

## 练习

1. 把一个大文件拆成「默认导出一个主函数 + 若干命名工具函数」，体会导入写法差异。
2. 用动态 `import()` 实现「点击才加载重型模块」，对比网络面板请求时机。
3. 故意把某个命名导出改成未使用，构建后确认它被 tree-shaking 消除。

## 延伸阅读

- [模块打包](/docs/软件工程/Web前端/构建工具与工程化/模块打包)
- [前端工程化概述](/docs/软件工程/Web前端/构建工具与工程化/前端工程化概述)
- [返回 Web 前端总览](/docs/软件工程/Web前端/)
