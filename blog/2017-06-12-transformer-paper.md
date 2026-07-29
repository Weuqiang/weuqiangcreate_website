---
category: 技术史
slug: transformer-paper
title: 那篇《Attention is All You Need》刚出时，没几个人意识到它改写了未来
description: 2017 年 Google 发表 Transformer，扔掉 RNN/LSTM，只用注意力。回顾它如何悄悄成为后来所有大模型的地基。
authors: [weuqiang]
tags: [Transformer, NLP, 注意力机制]
date: 2017-06-12
---

2017 年 6 月，Google 发了一篇标题很嚣张的论文——《Attention is All You Need》。当时的 NLP 圈，主流还是 RNN、LSTM 那一套：模型像流水线的工人，一个词一个词地往后读，读到末尾早把开头忘了。论文说：别搞那么复杂了，扔掉循环，只用注意力（attention）就行。

说实话，我第一反应是「又一个新架构，看论文都看麻了」。那年类似的论文不少，谁也没料到这篇会成为后来一切的底座。

<!-- truncate -->

但 Transformer 真正妙的地方，是它让「并行」和「可扩展」成为可能。RNN 必须按顺序算，注定慢且难堆量；Transformer 一次性看全序列，GPU 吃得下，数据喂得猛，于是「模型越大、数据越多、效果越好」这条路被彻底打开。几年后回头看，GPT、BERT、还有你现在用的各种大模型，骨架全是它。

我挺喜欢论文标题里那句「is All You Need」的笃定。做工程的人大多谨慎，习惯说「视情况而定」；敢在标题里拍胸脯说「只要注意力就够了」，要么是无知，要么是真看透了。现在看，是后者。

有时候一个想法的重量，要等好几年后才压得下来。Transformer 就是这种。
