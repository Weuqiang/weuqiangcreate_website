---
slug: transformer-paper
title: Transformer 论文发布，改变了 NLP
authors: [weuqiang]
tags: [Transformer, NLP, 深度学习, 时事]
date: 2017-06-12
---

Google 发布了《Attention is All You Need》论文，提出了 Transformer 架构。这会改变整个 NLP 领域。

<!-- truncate -->

## 什么是 Transformer

Transformer 是个新的神经网络架构：

- 完全基于注意力机制
- 不用 RNN 或 CNN
- 能并行训练

## 为什么重要

之前 NLP 都用 RNN（LSTM、GRU）：

- 训练慢（不能并行）
- 长文本效果差
- 难以捕捉长距离依赖

Transformer 解决了这些问题。

## 核心机制

**Self-Attention**

让模型关注输入的不同部分：

- 能捕捉长距离依赖
- 能并行计算
- 效果好

**Multi-Head Attention**

多个注意力头，从不同角度看输入。

**Position Encoding**

因为没有 RNN，需要手动加位置信息。

## 效果

在机器翻译任务上：

- 比 RNN 快
- 效果更好
- 训练更稳定

## 对行业的影响

Transformer 的出现：

- 改变了 NLP 的主流架构
- 催生了 BERT、GPT 等模型
- 推动了大模型时代

现在，几乎所有 NLP 模型都基于 Transformer。

## 后续发展

**BERT**（2018）

用 Transformer 做预训练，效果炸裂。

**GPT**（2018）

用 Transformer 生成文本。

**Vision Transformer**（2020）

Transformer 用到了计算机视觉。

## 总结

Transformer 是 AI 历史上的里程碑：

- 改变了 NLP 架构
- 催生了大模型时代
- 影响了整个 AI 领域

2017 年，AI 的新时代开始了。

