---
title: 自动化测试与 TDD
sidebar_position: 4
---

测试用机器代替手工验证，保证改动不会破坏已有功能。TDD（测试驱动开发）则先写测试再写实现。

## 测试金字塔

- **单元测试**：验证最小单元（函数/类），数量最多、最快、最稳定。
- **集成测试**：验证多个模块协作（如服务 + 数据库）。
- **端到端测试**：模拟真实用户走完整流程，数量最少、最慢。

## pytest 示例

```python
def add(a, b):
    return a + b

def test_add():
    assert add(1, 2) == 3
    assert add(-1, 1) == 0
```

运行：`pytest -q`。

## 参数化与 Mock

参数化避免复制粘贴相似用例；Mock 隔离外部依赖（数据库、网络），让单元测试稳定快速：

```python
import pytest
from unittest.mock import Mock

def test_fetch_user(monkeypatch):
    # 伪造数据库查询，不连真库
    fake_db = Mock()
    fake_db.get.return_value = {"id": 1, "name": "魏强"}
    monkeypatch.setattr("app.db", fake_db)

    from app import fetch_user
    assert fetch_user(1)["name"] == "魏强"

@pytest.mark.parametrize("a,b,expect", [(1, 2, 3), (0, 0, 0), (-1, 1, 0)])
def test_add_param(a, b, expect):
    assert add(a, b) == expect
```

## TDD 红绿重构

1. **红**：先写一个会失败的测试，描述期望行为。
2. **绿**：用最简实现让测试通过。
3. **重构**：在测试保护下改善代码结构，测试必须仍全绿。

示例：实现 `fizzbuzz`，先写 `assert fizzbuzz(3) == "Fizz"`，再补实现，逐步让 15 的倍数、5 的倍数都通过。

## Mock 与覆盖率

- 用 Mock 隔离外部依赖（数据库、网络），让单元测试稳定快速。
- 覆盖率衡量代码被测试触及的比例，但高覆盖率不等于高可靠性，关键路径的断言质量更重要。

## 推荐实践

1. 测试应独立、可重复、不依赖执行顺序。
2. 一个测试只验证一个行为，失败信息要明确。
3. 优先覆盖核心业务逻辑与易错分支。
4. 把测试纳入 CI，未通过禁止合并。

:::info
测试的价值不在于数量，而在于它能在你犯错时立刻报警。
:::

## 易错点

- **测试互相依赖**：用例 A 改了全局状态、用例 B 依赖它，执行顺序一变就红。每个测试自负盈亏。
- **过度 Mock**：把实现细节全 mock 掉，测试通过但真实协作已坏，等于没测。只 mock 真正的外部边界（DB/网络/时间）。
- **为覆盖率写空测试**：`assert True` 凑数，既无断言价值又掩盖脆弱。

## 练习

给下面的函数写 TDD：先写会失败的测试，再实现，最后重构。

```python
# 需求：摄氏转华氏，公式 F = C * 9/5 + 32
def celsius_to_fahrenheit(c):
    ...
```

## 延伸阅读

- 上一篇：[持续集成与部署](../持续集成与部署)
- 下一篇：[设计模式](../设计模式)
- 返回 [工程实践总览](../)
- 相关领域：[后端通识](../../后端通识/)
- 跨语言对照：[Go](../../../编程语言/Go/) · [Python](../../../编程语言/Python/)
