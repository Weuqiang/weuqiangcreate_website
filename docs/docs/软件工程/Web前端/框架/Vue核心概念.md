---
title: "Vue 核心概念"
description: "模板语法、响应式原理、单文件组件 SFC 与组合式 API，建立 Vue 心智模型的最小集合。"
sidebar_position: 3
---

# Vue 核心概念

## 学习目标

学完本章，你应该能够：

- 用模板语法绑定数据与事件
- 解释 Vue 的响应式（reactive）如何自动追踪依赖
- 用单文件组件（SFC）组织结构/样式/逻辑
- 用组合式 API（`ref`/`reactive`/`computed`）组织状态

## 前置知识

在阅读下面的内容前，建议先掌握：

- [组件化与声明式 UI](/docs/软件工程/Web前端/框架/组件化与声明式UI)
- [JavaScript 对象与代理](/docs/软件工程/Web前端/JavaScript/types/object)

## 核心概念

Vue 与 React 共享「UI 是状态的函数、单向数据流」的范式，但表达上更「模板优先」：用类 HTML 的模板描述界面，框架通过响应式系统自动在状态变化时更新视图。

本章主线：

- 模板语法与响应式
- 单文件组件 SFC
- 组合式 API
- 与 React 的关键差异

## 模板语法

```vue
<template>
  <button @click="count++">点击了 {{ count }} 次</button>
</template>
```

- `{{ count }}`：文本插值，绑定响应式数据
- `v-bind`（简写 `:`）绑定属性，`v-on`（简写 `@`）绑定事件
- 模板是 Vue 编译器的输入，最终生成渲染函数

## 响应式：自动追踪依赖

Vue 3 用 `Proxy` 把普通对象包成「响应式对象」，读取时收集依赖、修改时触发更新：

```javascript
import { reactive, ref } from 'vue';

const state = reactive({ count: 0 });
// 模板或 effect 里读到 state.count → 建立依赖
// state.count = 1 → 自动重新渲染

const n = ref(0); // ref 包裹基本类型，用 n.value 访问
```

与 React 必须显式调用 `setState` 不同，Vue 的响应式是**隐式自动**的——改属性即更新。代价是「哪些被追踪、何时更新」更隐蔽，需要理解依赖收集机制。

## 单文件组件 SFC

```vue
<template>
  <h1>{{ title }}</h1>
</template>

<script setup>
const title = 'Hello Vue';
</script>

<style scoped>
h1 { color: teal; }
</style>
```

一个 `.vue` 文件把模板、脚本、样式**就近组织**，`scoped` 样式默认只作用于本组件，避免全局污染。这是 Vue「渐进式、好上手」体验的核心。

## 组合式 API

Vue 2 的「选项式 API」（`data`/`methods`/`computed` 分开写）在复杂组件里会把同一逻辑的代码片段拆散。组合式 API 让你按**逻辑关注点**组织代码：

```javascript
import { ref, computed, onMounted } from 'vue';

const count = ref(0);
const double = computed(() => count.value * 2);
onMounted(() => console.log('挂载完成'));
```

`ref`/`computed`/`watch`/`onMounted` 等都是「组合函数」，可在组件间抽取复用，解决了选项式 API 的逻辑碎片化问题。

## 与 React 的关键差异

| 维度 | React | Vue |
| --- | --- | --- |
| 状态更新 | 显式 setter | 响应式自动追踪 |
| UI 描述 | JSX（JS 即模板） | 模板（类 HTML） |
| 逻辑组织 | hooks 顺序 | 组合式函数 |
| 心智 | 更显式、可控 | 更自动、省心 |

两者底层都是「状态→视图」的声明式数据流，差异主要在表达风格与更新触发方式。

## 易错点

1. **解构丢失响应式**：`const { count } = reactiveState` 会切断响应式；用 `toRefs` 或保持访问 `state.count`。
2. **ref 忘记 `.value`**：在 `<script>` 里访问 ref 必须 `.value`，模板里才自动解包。
3. **在响应式对象里放非响应式引用**：如把外部普通对象塞进 reactive，其属性变化不会触发更新。
4. **scoped 样式穿透误用**：子组件根节点可被父 scoped 影响，深层需用 `:deep()`，滥用会破坏封装。

## 小结

Vue 用模板描述 UI、用 `Proxy` 实现自动响应式、用 SFC 就近组织代码、用组合式 API 按逻辑复用。它与 React 同属声明式范式，差异主要在「自动响应式 vs 显式 setter」与「模板 vs JSX」。

## 练习

1. 写一个 Vue 计数器，对比它与 React 版本在「如何触发更新」上的写法差异。
2. 故意把 `reactive` 对象解构后再改属性，观察视图不更新，再用 `toRefs` 修复。
3. 把一个选项式 API 组件重写成组合式 API，体会同一逻辑是否更聚拢。

## 延伸阅读

- [React 核心概念](/docs/软件工程/Web前端/框架/React核心概念)
- [前端状态管理](/docs/软件工程/Web前端/框架/前端状态管理)
- [返回 Web 前端总览](/docs/软件工程/Web前端/)
