---
title: 容器化与 Docker
sidebar_position: 7
description: "容器化与 Docker 工程实践：容器与虚拟机差异、镜像分层与构建缓存、Dockerfile 多阶段构建、compose 编排与镜像优化实战坑"
---

## 学习目标

学完本章，你应该能够：

- 说清容器与虚拟机的本质差异，理解镜像分层与缓存机制
- 会写 Dockerfile 与多阶段构建，能做镜像体积优化
- 掌握 docker-compose 编排与常见实战坑的规避方法

## 前置知识

在阅读下面的内容前，建议先掌握：

- 命令与基础概念：[开发工具链 · Docker](../../../计算机科学基础/开发工具链/Docker)
- 理论支撑：[操作系统 · 进程、线程与调度](../../../计算机科学基础/计算机科学导论/操作系统/进程线程与调度)

## 核心概念

容器化解决的是「在我机器上能跑」这个古老问题：把应用连同它的依赖、运行时、配置一起打包成不可变镜像，任何装了容器运行时的机器都能得到一致的行为。镜像的分层设计是效率关键——每条指令一层、层可共享可缓存，所以 Dockerfile 的指令顺序直接决定构建速度和镜像体积（把变动最少的放最上面）。

本章主线：
- 容器与虚拟机的差异
- 镜像分层与构建缓存
- Dockerfile 与多阶段构建
- docker-compose 编排
- 镜像优化、命令速查与实战坑


容器把应用及其依赖打包成可移植的单元，一次构建、处处运行。Docker 是当前最流行的容器引擎。

## 容器与虚拟机

- 虚拟机：每个实例带完整操作系统，隔离强但重。
- 容器：共享宿主机内核，轻量、启动秒级，适合微服务。

## 镜像分层

镜像由只读层叠加而成：基础系统层、依赖层、应用层。层可缓存复用，改动只重建受影响层。

## Dockerfile 示例

```dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "app.py"]
```

## 多阶段构建

把编译与运行分离，最终镜像只保留运行所需：

```dockerfile
FROM golang:1.22 AS build
WORKDIR /src
COPY . .
RUN go build -o server .

FROM gcr.io/distroless/base
COPY --from=build /src/server /server
CMD ["/server"]
```

## docker-compose

用一个文件编排多容器（如 Web + 数据库）：

```yaml
services:
  web:
    build: .
    ports: ["8000:8000"]
  db:
    image: postgres:16
    environment:
      POSTGRES_PASSWORD: secret
```

## 镜像优化

- 选 `slim`/`alpine` 基础镜像。
- 合并 `RUN` 指令、清理包管理器缓存。
- 用 `.dockerignore` 排除无关文件。
- 固定基础镜像版本，保证可复现。

## 常用命令速查

日常九成场景就靠下面这些命令，记住它们基本能独立干活：

| 命令 | 作用 | 常用参数 |
| --- | --- | --- |
| `docker build` | 从 Dockerfile 构建镜像 | `-t 名:标签`、`-f 指定文件`、`--no-cache` |
| `docker run` | 由镜像启动容器 | `-d` 后台、`-p 主机:容器`、`-v 卷`、`-e 环境变量`、`--rm` 退出即删 |
| `docker ps` | 查看运行中的容器 | `-a` 含已停止、`-q` 只输出 ID |
| `docker images` | 查看本地镜像 | `-a`、`--filter dangling=true` 找悬空层 |
| `docker logs` | 看容器日志 | `-f` 跟随、`--tail 100`、`--since 10m` |
| `docker exec` | 进入运行中的容器执行命令 | `-it` 交互式 |
| `docker stop` / `rm` | 停止 / 删除容器 | `rm -f` 强制删运行中的容器 |
| `docker rmi` | 删除镜像 | `-f` 强制 |
| `docker system df` / `prune` | 查看 / 清理磁盘占用 | `prune -a --volumes` 深度清理（慎用） |

```bash
# 构建：打上语义化标签，别只用 latest
docker build -t myapp:1.2.0 -t myapp:latest .

# 运行：后台跑、映射端口、注入环境变量、挂载数据卷
docker run -d --name myapp \
  -p 8000:8000 \
  -e APP_ENV=prod \
  -v myapp-data:/app/data \
  myapp:1.2.0

# 排查：先看日志，再进容器里现场调试
docker logs -f --tail 100 myapp
docker exec -it myapp sh          # alpine 用 sh，debian 系可用 bash

# 观察资源占用与容器内进程
docker stats myapp
docker top myapp

# 清理：先看占了多少，再决定要不要 prune
docker system df
docker container prune            # 只删已停止的容器，比较安全
docker image prune                # 删悬空镜像（<none>）
```

:::caution
`docker system prune -a --volumes` 会连同未被使用的镜像和数据卷一起删掉，本地开发数据库的数据卷很容易就这么没了。执行前务必确认卷里没有你还想要的东西。
:::

## 实战坑

这些坑几乎每个人都会踩一遍，提前知道能省很多时间。

**1. 层缓存失效：`COPY . .` 放太靠前**

Docker 按行缓存，某一层变了后面全部重建。如果先 `COPY . .` 再装依赖，那你改一行业务代码，依赖就得重装一遍。

```dockerfile
# 反例：改任何一个源文件，pip install 都会重跑
COPY . .
RUN pip install -r requirements.txt

# 正例：依赖清单单独先拷，只有它变了才重装依赖
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
```

**2. 忘写 `.dockerignore`**

不写的话 `.git`、`node_modules`、本地虚拟环境、`.env` 全被打进构建上下文：镜像变大、构建变慢，最糟的是可能把密钥打进镜像层——即使后面 `RUN rm` 删掉，历史层里依然能扒出来。

```bash
# .dockerignore
.git
.gitignore
node_modules
__pycache__
*.pyc
.venv
.env
*.log
dist/
```

**3. 用 root 跑容器**

默认用户是 root，一旦应用被攻破，配合挂载卷就可能影响宿主机。生产镜像应显式降权：

```dockerfile
RUN adduser --disabled-password --gecos "" appuser
USER appuser                       # 之后的进程都以 appuser 身份运行
```

注意顺序：安装依赖等需要写系统目录的操作放在 `USER` 之前，切换后再 `COPY --chown=appuser:appuser` 应用代码。

**4. 日志写进文件而不是 stdout**

容器的日志约定是写到 `stdout`/`stderr`，由 Docker、K8s 或日志采集器统一收走。写进容器内的文件，容器一删日志就没了，还会把可写层撑大。

```dockerfile
# 常见做法：把框架日志软链到标准输出（nginx 官方镜像就是这么干的）
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
 && ln -sf /dev/stderr /var/log/nginx/error.log
```

应用层面则是把日志 handler 配成输出到控制台，而不是 `FileHandler`。

**5. 标签用 `latest`，构建不可复现**

`FROM python:latest` 意味着今天构建和下个月构建可能是两个完全不同的基础镜像，出问题无法回溯。基础镜像和自己的产物都要固定版本；对安全性要求高的场景，可以进一步用摘要锁死：

```dockerfile
FROM python:3.11-slim                      # 至少锁到小版本
# FROM python:3.11-slim@sha256:abc123...   # 更严格：锁到内容摘要
```

发布自己的镜像时，同时打 `myapp:1.2.0`（可追溯）和 `myapp:latest`（方便本地拉取），部署时永远引用带版本号的那个。

**6. 容器一启动就退出**

容器的生命周期跟着主进程走，主进程结束容器就结束。所以 `CMD` 里不要跑会立刻返回的命令，也别把服务放后台。用 `docker logs 容器名` 看最后的输出，通常一眼就能定位是启动命令写错还是配置缺失。

:::tip
镜像越小，拉取越快、攻击面越小。多阶段构建是减小体积的关键手段。
:::

## 小结

镜像不可变、分层可缓存、容器可写层易失。Dockerfile 按「变动频率从低到高」排列指令，用多阶段构建把编译期依赖挡在最终镜像之外。

## 练习

动手检验一下自己：

1. 为什么把 `COPY . .` 放在 `pip install` 之前会让缓存几乎全部失效？
2. 多阶段构建能把镜像体积降低多少？原理是什么？
3. 容器内进程以 root 运行有什么风险？如何改为非特权用户？

## 延伸阅读

- 上一篇：[代码规范与重构](../代码规范与重构)
- 下一篇：[微服务与分布式架构](../微服务与分布式架构)
- 返回 [工程实践总览](../)
- 相关领域：[后端通识](../../后端通识/)
- 跨语言对照：[Go](../../../编程语言/Go/) · [Python](../../../编程语言/Python/)
