---
title: 容器化与 Docker
sidebar_position: 7
---

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

:::tip
镜像越小，拉取越快、攻击面越小。多阶段构建是减小体积的关键手段。
:::

## 延伸阅读

- 上一篇：[代码规范与重构](../代码规范与重构)
- 下一篇：[微服务与分布式架构](../微服务与分布式架构)
- 返回 [工程实践总览](../)
- 相关领域：[后端通识](../../后端通识/)
- 跨语言对照：[Go](../../../编程语言/Go/) · [Python](../../../编程语言/Python/)
