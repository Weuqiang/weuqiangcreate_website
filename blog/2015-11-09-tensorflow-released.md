---
category: 技术史
slug: tensorflow-released
title: TensorFlow 开源那天，深度学习第一次「飞入寻常百姓家」
description: 2015 年 Google 开源 TensorFlow，把大厂级深度学习能力摆到所有人面前。回顾它的普及、TF 2.0 的阵痛，以及 PyTorch 的逆袭。
authors: [weuqiang]
tags: [TensorFlow, Google, 深度学习]
date: 2015-11-09
---

2015 年 11 月，Google 把 TensorFlow 开源。在那之前，严肃的深度学习工具要么是大厂内部闭源的系统，要么是学术界零散的 Caffe、Theano 之类。TF 的意义在于：它把 Google 级别的深度学习能力，直接摆到了所有人面前。

我身边不少做研究的朋友，那阵子几乎是连夜把代码从 Theano 迁到 TF。原因很现实：背靠 Google、文档和教程雨后春笋般冒出来、还有 GPU 支持。那几年你搜「怎么用神经网络做 XXX」，十篇里有八篇是 TF 的。

<!-- truncate -->

但 TF 也不是没挨过骂。早年的 `tf.Session` + 静态图那套，调试起来像在黑暗里摸象；等到 TF 2.0 强行拥抱动态图、把 API 大改一通，又把一堆老用户得罪了——「我上版本的代码怎么全红了」。这种「自己推翻自己」的阵痛，至今还有人耿耿于怀。

有意思的是，研究圈后来悄悄倒向了 PyTorch，因为它更「Pythonic」、调试更直观。TF 则在工业和移动端（尤其是 TensorFlow Lite）站稳了脚跟。我个人的体会是：框架之争到最后，拼的不是谁功能多，而是谁让你**少踩坑、早点跑通第一个例子**。这一点上，当年 TF 的普及功不可没，但它自己后来也在这个点上吃了亏。


---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

---

## 延伸阅读（知识库）

- [AlexNet](/docs/人工智能/深度学习/网格数据/AlexNet) — 2012 年引爆深度学习的卷积网络——ReLU、Dropout、GPU 训练三件套的开端，含逐层尺寸推导与可运行训练代码。
- [ResNet](/docs/人工智能/深度学习/网格数据/ResNet) — 用残差连接让网络“想深就深”——从退化现象、恒等映射到 BasicBlock/Bottleneck 的完整推导与可运行实现。
- [经典神经网络](/docs/人工智能/深度学习/经典神经网络)
- [模型评测](/docs/人工智能/大模型LLM与应用/模型评测)
- [Transformer](/docs/人工智能/深度学习/序列处理/Transformer)
