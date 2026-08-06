---
title: "转译与 TypeScript"
description: "Babel 与 tsc 的职责边界、语法降级与类型检查的区别，以及 TypeScript 在前端工程中的价值与成本。"
sidebar_position: 3
---

# 转译与 TypeScript

## 学习目标

学完本章，你应该能够：

- 区分「语法转译」与「类型检查」是两件事
- 说清 Babel 与 tsc 各自的职责
- 理解 `target` / `browserslist` 如何影响降级
- 评估 TypeScript 的收益与代价

## 前置知识

在阅读下面的内容前，建议先掌握：

- [包管理与依赖](/docs/软件工程/Web前端/构建工具与工程化/包管理与依赖)
- [ES Modules 模块化](/docs/软件工程/Web前端/现代实践/ES-Modules模块化)

## 核心概念

「写现代语法、跑旧环境」靠转译；「写带类型的 JS、更早抓 bug」靠 TypeScript。两者常被混为一谈，但职责不同。

本章主线：

- 转译（transpile）解决浏览器兼容
- Babel 与 tsc 的分工
- `target` 与 browserslist
- TypeScript 的价值与成本

## 转译解决什么问题

你写 `const x = arr?.find(...)`、`async/await`、可选链等现代语法，但用户可能用三年前的浏览器。转译器把这些语法**等价改写**成旧浏览器能懂的 ES5/ES2015 代码。

```javascript
// 源码（现代）
const name = user?.profile?.name ?? '匿名';

// 转译后（旧环境可跑，示意）
var name = (user && user.profile && user.profile.name) != null
  ? user.profile.name
  : '匿名';
```

注意：转译只改**语法**，不补**运行时缺失的 API**（如旧浏览器没有 `Promise`、`fetch`）。缺 API 要靠 polyfill（垫片）。

## Babel 与 tsc 的分工

| 工具 | 主要职能 | 说明 |
| --- | --- | --- |
| Babel | 语法转译 + polyfill 注入 | 只动语法，不理解类型 |
| tsc（TypeScript 编译器） | 类型检查 + 可选择性转译 | `tsc` 既能查类型也能出 JS |

常见搭配有两种：

1. **tsc 既检查又转译**：简单，但转译能力弱于 Babel，生态插件少。
2. **tsc 只做类型检查（`noEmit`），Babel 负责转译**（即 `babel-preset-typescript`）：转译能力强、快，是多数现代项目（尤其 Vite）的选择。

关键区分：**类型在编译期被完全擦除**，运行时不存在「类型」。TypeScript 不会让代码「更安全地跑」，它只在你写代码时拦住错误。

## target 与 browserslist

降级到什么程度，由两个配置决定：

- `tsconfig.json` 的 `compilerOptions.target`：决定输出哪一代 ECMAScript 语法。
- 项目根 `browserslist`：声明要支持的浏览器范围，Babel/工具据此决定要不要转译某语法、注入哪些 polyfill。

```json
// .browserslistrc 示例
> 0.5%
last 2 versions
not dead
```

支持范围越宽，转译后代码越「啰嗦」、体积越大。这是兼容性与体积的直接权衡。

## TypeScript 的价值与成本

收益：

- 编译期捕获 `undefined` 误用、参数类型错配等一大类 bug
- 重构时有类型保驾，IDE 自动补全与跳转更准
- 接口即文档，类型签名本身就是契约

成本：

- 初期要写类型、配 `tsconfig`，门槛与心智负担上升
- 某些动态模式（如高度反射）与类型系统「打架」，需 `any`/类型断言绕过
- 第三方库若无类型声明（`@types/xxx`），要额外补或容忍 `any`

经验法则：团队协作、长期维护、逻辑复杂的中大型项目，TypeScript 的回报远超成本；一次性小脚本则未必值得。

## 易错点

1. **以为 `any` 是安全出口**：`any` 等于关掉检查，滥用会蔓延。优先用 `unknown` + 类型收窄。
2. **混淆类型与运行时**：`interface`/`type` 在产物里消失，不能用它们做运行期判断（`instanceof` 对接口无效）。
3. **polyfill 漏配**：转译了语法却没注入 `core-js` 等 polyfill，旧浏览器仍白屏。
4. **tsc 与 Babel 双转译冲突**：若两者都输出 JS，可能重复转译或配置打架，明确「谁负责转译、谁只检查」。

## 小结

转译（Babel）负责让现代语法在旧环境跑起来，TypeScript 负责在写代码时拦住类型错误。现代项目常让 `tsc` 只做类型检查、`Babel` 负责转译。用 `target`/`browserslist` 平衡兼容与体积，用 `unknown` 而非 `any` 守住类型安全。

## 练习

1. 写一个用了可选链与 `Promise.allSettled` 的 TS 文件，分别用 `tsc` 与 `babel` 转译，对比产物差异。
2. 故意把函数参数类型写错，运行 `tsc --noEmit`，确认能在编译期报错。
3. 调整 `browserslist` 为「支持 IE11」，重新构建，观察产物体积与 polyfill 变化。

## 延伸阅读

- [模块打包](/docs/软件工程/Web前端/构建工具与工程化/模块打包)
- [前端工程化概述](/docs/软件工程/Web前端/构建工具与工程化/前端工程化概述)
- [返回 Web 前端总览](/docs/软件工程/Web前端/)
