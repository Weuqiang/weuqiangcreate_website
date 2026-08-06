---
title: "React 核心概念"
description: "JSX、组件与 props、useState 与 hooks、虚拟 DOM 与单向数据流，建立 React 心智模型的最小集合。"
sidebar_position: 2
---

# React 核心概念

## 学习目标

学完本章，你应该能够：

- 用 JSX 描述 UI 并理解它本质是 `createElement` 的语法糖
- 用 `useState` 管理组件状态
- 解释虚拟 DOM 与协调（reconciliation）的作用
- 说清单向数据流在 React 中如何体现

## 前置知识

在阅读下面的内容前，建议先掌握：

- [组件化与声明式 UI](/docs/软件工程/Web前端/框架/组件化与声明式UI)
- [JavaScript 函数](/docs/软件工程/Web前端/JavaScript/types/function)

## 核心概念

React 把「UI 是状态的函数」落到一套具体 API：组件返回 JSX，框架负责把它变成真实 DOM 并在状态变化时高效更新。

本章主线：

- JSX 与组件
- 状态 `useState` 与 hooks
- 虚拟 DOM 与协调
- 单向数据流

## JSX：声明式 UI 的语法糖

```jsx
function Greeting({ name }) {
  return <h1>你好，{name}</h1>;
}
```

JSX 不是 HTML，是 JavaScript 的语法扩展。编译后等价于：

```javascript
function Greeting({ name }) {
  return React.createElement('h1', null, '你好，' + name);
}
```

所以 `{name}` 里可以放任意 JS 表达式；`className` 而非 `class`（避免与 JS 关键字冲突）；`onClick` 等事件用驼峰。

## 组件与 props

组件就是返回 JSX 的函数（或类）。props 是调用时传入的只读参数：

```jsx
<Greeting name="小明" />
```

props 不可在子组件内修改——要改数据，必须由父组件持有状态。这正是单向数据流的体现。

## 状态：useState 与 hooks

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      点击了 {count} 次
    </button>
  );
}
```

- `useState(0)` 返回 `[当前值,  setter]`，初始值 0。
- 调用 `setCount` 会**触发重渲染**，React 用新状态重新执行组件函数。
- 直接改 `count`（如 `count++`）不会触发更新——必须通过 setter。

**hooks 规则**：只能在组件顶层、不能在循环/条件里调用 `useState` 等 hook，否则顺序会乱。

## 虚拟 DOM 与协调

React 不直接操作真实 DOM，而是维护一棵轻量的「虚拟 DOM」树：

1. 状态变化 → 重新渲染得到新的虚拟树
2. **协调（reconciliation）**：对比新旧两棵树，算出最小差异
3. **提交（commit）**：只把差异部分应用到真实 DOM

这就是为什么 React 能「只更新变化的部分」。注意：虚拟 DOM 不是「比直接操作 DOM 快」的银弹，它的价值在于**让开发者用声明式写代码，同时 diff 把更新成本压到可接受**。

## 单向数据流

数据从父经 props 下行；子要改数据，调用父传下的回调（也是 props 的一部分），由父改状态再流下。没有「子直接改父」的隐式通道，状态变化因而可追踪。

## 易错点

1. **直接改状态**：`count++` 或 `obj.x = 1` 然后 `setState(obj)` 不触发更新；要传新引用（`setCount(c => c + 1)`、`setObj({...obj, x:1})`）。
2. **hook 顺序不稳定**：在 `if` 里写 `useState` 会导致后续 hook 错位、报错。
3. **把 props 当状态**：props 只读，想改就提升状态到父或改用 `useState`。
4. **忘记 key**：列表用 index 作 key，在增删/排序时会复用错节点、引发状态串台。
5. **在渲染中做副作用**：数据请求、订阅应放在 `useEffect`，而非组件函数体直接跑。

## 小结

React 用 JSX 描述 UI、用 `useState` 等 hooks 管状态、用虚拟 DOM 做最小更新、用单向数据流保证可追踪。掌握这四点的关系，就掌握了 React 的核心心智模型。

## 练习

1. 写一个受控输入框（input 的值来自 state、onChange 更新 state），体会单向数据流。
2. 故意用 `count++` 而非 setter，观察点击无反应，再用函数式更新修好。
3. 渲染一个数组列表，给每个项加稳定 `key`，删除中间一项验证状态不串。

## 延伸阅读

- [Vue 核心概念](/docs/软件工程/Web前端/框架/Vue核心概念)
- [前端状态管理](/docs/软件工程/Web前端/框架/前端状态管理)
- [返回 Web 前端总览](/docs/软件工程/Web前端/)
