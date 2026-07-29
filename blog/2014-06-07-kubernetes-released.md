---
category: 技术史
slug: kubernetes-released
title: Kubernetes 开源时，没人想到它会变成「云时代的操作系统」
description: 2014 年 Google 开源 Kubernetes，源自内部 Borg 系统。回顾它如何定义容器编排，以及为什么小团队往往用不上它。
authors: [weuqiang]
tags: [Kubernetes, DevOps, 容器编排]
date: 2014-06-07
---

2014 年 6 月，Google 把 Kubernetes 开源。它脱胎于 Google 内部跑了十几年的容器编排系统 Borg。当时 Docker 刚火起来，大家都在兴奋地 `docker run`，但有个问题没人认真回答：当你有几百上千个容器、分布在几十台机器上，谁来管它们的生死、扩缩容、互相发现？

K8s 就是来回答这个问题的。它用一套声明式的语言让你描述「我想要这样的系统」，然后自己想办法让现实去靠拢这个描述。Pod、Service、Deployment 这套抽象，初看很劝退，但一旦接受「我只是在描述期望状态」这个设定，很多运维的脏活就消失了。

<!-- truncate -->

不过说句实话，K8s 的复杂度也是真的劝退。光是搞明白 Ingress、ConfigMap、PV/PVC 就能劝退一拨人，更别提那些 yaml 缩进引发的惨案。我曾怀疑：小团队真的需要它吗？很多时候，一个小 `docker-compose`、甚至不用容器，反而更省心。

但大势比个人好恶有力。当「上云」成了默认选项，K8s 几乎成了云厂商之间事实上的通用接口——你在哪家云上跑，用的都是同一套概念。今天再回头看，它更像是「云时代的操作系统」，只不过这个系统的「命令行」是 yaml 文件。
