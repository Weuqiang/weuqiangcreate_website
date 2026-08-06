---
title: "Web Vitals 与监控"
description: "LCP / INP / CLS 三大核心指标的含义与优化方向，以及用 Performance API 与真实用户监控（RUM）把性能量化。"
sidebar_position: 3
---

# Web Vitals 与监控

## 学习目标

学完本章，你应该能够：

- 解释 LCP / INP / CLS 分别衡量什么用户体验
- 说出每个指标的常见优化抓手
- 用 Performance / Navigation API 采集字段数据
- 区分实验室数据（lab）与真实用户监控（RUM）

## 前置知识

在阅读下面的内容前，建议先掌握：

- [加载性能](/docs/软件工程/Web前端/性能优化/加载性能)
- [渲染性能](/docs/软件工程/Web前端/性能优化/渲染性能)

## 核心概念

「快不快」不能只靠感觉，要用统一指标量化。Google 的 **Core Web Vitals** 给出三个面向真实体验的核心指标，配套工具让团队有共同语言。

本章主线：

- LCP：加载
- INP：交互
- CLS：视觉稳定
- 实验室 vs 真实用户监控

## LCP：最大内容绘制（加载）

**Largest Contentful Paint** 衡量「主要内容多久画出来」。通常取视口内最大的文本块/图片的绘制时间点。

- 良好：≤ 2.5s；需改进：> 2.5s 且 ≤ 4s；差：> 4s
- 优化抓手：削减首屏体积（[加载性能](/docs/软件工程/Web前端/性能优化/加载性能)）、服务端更快返回、关键图片预加载、避免阻塞渲染的 CSS/JS。

## INP：交互到下一次绘制（交互）

**Interaction to Next Paint** 衡量「用户操作后界面多久响应」。它观察多次交互中最差的一次输入延迟+处理+绘制耗时，比旧的 FID 更全面。

- 良好：≤ 200ms；差：> 500ms
- 优化抓手：拆分[长任务](/docs/软件工程/Web前端/性能优化/渲染性能)、把非紧急工作推迟、减少大型重排。事件处理函数要「快进快出」。

## CLS：累计布局偏移（视觉稳定）

**Cumulative Layout Shift** 衡量「页面元素是否乱跳」。比如图片没留高、字体加载后文字重排、插入广告把内容挤下去，都会扣分。

- 良好：≤ 0.1；差：> 0.25
- 优化抓手：给图片/视频显式宽高或 `aspect-ratio`；字体用 `font-display: swap` 并预留空间；动态插入内容时预留占位，别硬挤已有内容。

## 实验室数据 vs 真实用户监控

| 类型 | 来源 | 用途 |
| --- | --- | --- |
| 实验室（lab） | Lighthouse、本地 DevTools | 开发期发现问题、对比优化前后 |
| 真实用户（RUM） | 真实访客浏览器上报 | 反映真实分布、不同地区/设备表现 |

实验室数据稳定可复现，但不等于真实体验；RUM 才是「用户实际感受」。生产应两者结合：本地用 Lighthouse 迭代，线上用 RUM 守住。

## 用 API 采集字段数据

```javascript
// 监听各项指标（示意，借助 web-vitals 库更稳）
import { onLCP, onINP, onCLS } from 'web-vitals';

onLCP(metric => sendToAnalytics(metric));
onINP(metric => sendToAnalytics(metric));
onCLS(metric => sendToAnalytics(metric));
```

`web-vitals` 库封装了复杂的触发时机与上报规则，比手写可靠。上报后可在看板按分位（p75）观察，而非只看平均。

## 易错点

1. **只看平均值**：少数慢用户（移动端弱网）会被平均掩盖；看 p75/p90。
2. **实验室达标就以为线上达标**：设备/网络差异大，必须上 RUM。
3. **CLS 忽略字体与动态插入**：没预留空间的元素是布局抖动主因。
4. **INP 期用老指标 FID**：FID 只测首次交互、且只算输入延迟，掩盖了后续处理卡顿；新项目看 INP。

## 小结

Core Web Vitals 用 LCP（加载）、INP（交互）、CLS（稳定）把体验量化。优化分别落到「减首屏体积」「拆长任务」「预留布局空间」。用 Lighthouse 在开发期迭代、用 RUM 在线上守住真实体验，并以 p75 分位而非平均评估。

## 练习

1. 用 Lighthouse 跑一次你的站点，记录 LCP/INP/CLS，找出最差的一项并优化。
2. 给站点接入 `web-vitals` 上报，在控制台观察真实指标数值。
3. 故意移除一张图片的宽高属性，刷新观察 CLS 是否上升，再补回 `aspect-ratio`。

## 延伸阅读

- [加载性能](/docs/软件工程/Web前端/性能优化/加载性能)
- [渲染性能](/docs/软件工程/Web前端/性能优化/渲染性能)
- [返回 Web 前端总览](/docs/软件工程/Web前端/)
