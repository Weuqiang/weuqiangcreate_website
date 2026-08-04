---
title: Git 与版本控制
sidebar_position: 2
---

版本控制（VCS）记录文件随时间的变化，让你能回退到任意历史版本、并行开发、协同协作。Git 是目前最主流的分布式版本控制系统。

## 为什么需要版本控制

- 历史可追溯：每一次改动都有作者、时间与说明。
- 并行协作：多人基于同一仓库独立开发，再合并。
- 安全回滚：出错时可快速回到上一个稳定状态。
- 分支实验：在不影响主线的前提下尝试新方案。

## 核心概念

| 概念 | 说明 |
| --- | --- |
| 仓库（Repository） | 存放项目与完整历史记录的目录（`.git`） |
| 提交（Commit） | 一次快照，包含改动内容与父提交指针 |
| 分支（Branch） | 指向某次提交的轻量可变指针 |
| 暂存区（Index/Stage） | 提交前临时存放待记录改动的区域 |
| 工作区（Working Tree） | 你本地正在编辑的文件 |
| 远程（Remote） | 托管在服务器上的仓库副本，如 GitHub |

## 常用命令

```bash
git init                 # 初始化本地仓库
git clone 仓库地址        # 克隆远程仓库
git status               # 查看工作区状态
git add <file>           # 加入暂存区
git add -A               # 加入所有改动
git commit -m "msg"      # 提交暂存区
git branch               # 查看分支
git switch -c feat       # 新建并切换到 feat 分支
git merge feat           # 合并 feat 到当前分支
git rebase main          # 将当前分支变基到 main
git pull                 # 拉取并合并远程
git push -u origin feat  # 推送并设置上游
git log --oneline --graph
git diff                 # 查看未暂存改动
```

## 分支模型

- **Git Flow**：`main`（生产）、`develop`（集成分支）、`feature/*`、`release/*`、`hotfix/*`。适合有明确发布节奏的团队。
- **Trunk-Based**：几乎所有改动直接合入 `main`（短生命周期分支）。配合 CI 与特性开关，适合高频交付。

## 冲突解决

合并双方改了同一处时会冲突。Git 会在文件中标记：

```text
<<<<<<< HEAD
你的改动
=======
对方的改动
>>>>>>> branch
```

手动选择保留内容后，`git add` 再 `git commit` 即可完成合并。

## .gitignore

忽略不应纳入版本的文件（依赖、构建产物、密钥）：

```text
node_modules/
build/
*.log
.env
```

## 推荐实践

1. 提交粒度小且单一职责，信息写「做了什么、为什么」。
2. 推送前先 `pull`/`rebase`，保持历史线性清晰。
3. 永远不要把密钥、token 提交进仓库。
4. 用分支隔离实验性工作，主分支保持可发布。

:::tip
新手记住三板斧即可起步：`git add -A` → `git commit -m "..."` → `git push`。
:::

## 延伸阅读

- 下一篇：[代码规范与重构](../代码规范与重构)
- 返回 [工程实践总览](../)
- 相关领域：[后端通识](../../后端通识/)
- 跨语言对照：[Go](../../../编程语言/Go/) · [Python](../../../编程语言/Python/)
