---
title: "Trie 字典树"
description: "前缀树的结构、插入/查找/前缀匹配实现，与哈希表的复杂度对比，含自动补全实战与空间优化"
---

# Trie 字典树

在搜索框里敲 `pyt`，下拉框立刻弹出 `python`、`pytorch`、`pytest`。这背后不是遍历全部词典（那要 $O(n)$），而是**Trie（字典树，又称前缀树）**——一种把「公共前缀只存一次」的树形结构。

## 学习目标

- 说清 Trie 的节点含义：**边代表字符，路径代表前缀，标记代表单词结束**。
- 手写插入、精确查找、前缀查找三个操作，并分析复杂度为什么与词表大小 $n$ 无关。
- 说清 Trie 相对哈希表的两个独有优势与一个明显劣势。
- 用 Trie 实现自动补全，并知道压缩 Trie / DAWG 等空间优化方向。

## 核心直觉

Trie 最反直觉的一点是：**值不存在节点里，而存在「从根到该节点的路径」上。**

存入 `cat`、`car`、`card`、`dog` 后的结构：

```text
        (root)
        /    \
       c      d
       |      |
       a      o
      / \     |
     t*  r*   g*
         |
         d*

* 表示 is_end = True（这里是一个完整单词的结尾）
```

观察三个要点：

1. **公共前缀共享**：`cat`、`car`、`card` 共用了 `c → a` 这段路径，只存一次。词表越大、前缀重合越多，越省空间。
2. **`is_end` 标记不可省**：节点 `r` 标了 `*` 说明 `car` 是个词；它还有孩子 `d`，说明 `card` 也是词。如果没有这个标记，就无法区分「`car` 是个完整单词」和「`car` 只是 `card` 的中间路径」。
3. **查找耗时只和查询串长度 $L$ 有关**：查 `card` 就走 4 步，无论词表里有 100 个词还是 1 亿个词。这就是 $O(L)$ 而非 $O(\log n)$ 或 $O(n)$。

### 和哈希表比，Trie 强在哪

哈希表查单词也是 $O(L)$（算哈希要扫一遍字符串），看起来没优势。Trie 的真正价值在于两个哈希表**根本做不到**的操作：

| 能力 | 哈希表 | Trie |
|---|---|---|
| 精确查找一个词 | $O(L)$ 平均 | $O(L)$ 最坏 |
| **查所有以 X 开头的词** | 不支持，只能遍历全表 $O(n \cdot L)$ | $O(L + k)$，$k$ 为结果数 |
| **按字典序输出全部词** | 不支持，需额外排序 | $O(\text{总字符数})$，DFS 天然有序 |
| 最坏时间 | $O(n)$（哈希冲突退化） | $O(L)$，无退化 |
| 空间 | 紧凑 | 每节点带一个孩子表，通常更费 |

一句话：**只查「有没有」用哈希表；要查「以……开头」或「按序输出」用 Trie。**

另外 Trie 没有哈希冲突问题，最坏复杂度就是 $O(L)$，这在需要稳定延迟的场景（如路由表查找）很重要。

## 最小示例

用嵌套字典实现（Python 里最简洁的写法）：

```python
class Trie:
    def __init__(self):
        self.root = {}
        self.END = "$"                  # 用一个不会出现在字符集里的键做结束标记

    def insert(self, word):
        node = self.root
        for ch in word:
            node = node.setdefault(ch, {})   # 没有就新建一层
        node[self.END] = True

    def search(self, word):
        """精确查找：路径要走通，且终点必须有结束标记"""
        node = self._walk(word)
        return node is not None and self.END in node

    def starts_with(self, prefix):
        """前缀存在性：路径走通即可，不要求结束标记"""
        return self._walk(prefix) is not None

    def _walk(self, s):
        node = self.root
        for ch in s:
            if ch not in node:
                return None
            node = node[ch]
        return node

    def autocomplete(self, prefix, limit=10):
        """自动补全：先定位前缀，再 DFS 收集所有词"""
        node = self._walk(prefix)
        if node is None:
            return []
        results = []

        def dfs(cur, path):
            if len(results) >= limit:
                return
            if self.END in cur:
                results.append(prefix + path)
            for ch in sorted(cur):          # 排序保证字典序输出
                if ch != self.END:
                    dfs(cur[ch], path + ch)

        dfs(node, "")
        return results


# ---- 验算 ----
t = Trie()
for w in ["cat", "car", "card", "care", "dog", "do"]:
    t.insert(w)

print(t.search("car"))          # True   —— 是完整单词
print(t.search("ca"))           # False  —— 只是前缀，没有结束标记
print(t.starts_with("ca"))      # True   —— 前缀存在
print(t.starts_with("cb"))      # False
print(t.autocomplete("car"))    # ['car', 'card', 'care']
print(t.autocomplete("do"))     # ['do', 'dog']
```

注意 `search("ca")` 返回 `False` 而 `starts_with("ca")` 返回 `True`——这正是 `is_end` 标记存在的意义。

**手算复杂度**。设词表有 $n$ 个词，平均长度 $L$，字符集大小 $\Sigma$（小写英文为 26）：

| 操作 | 时间 | 说明 |
|---|---|---|
| 插入一个词 | $O(L)$ | 走 $L$ 层，每层字典操作 $O(1)$ |
| 建整棵树 | $O(n \cdot L)$ | 即总字符数 |
| 精确查找 | $O(L)$ | **与 $n$ 无关** |
| 前缀是否存在 | $O(L)$ | 同上 |
| 前缀补全（收集 $k$ 个结果） | $O(L + k \cdot L')$ | $L'$ 为结果平均长度 |
| 字典序遍历全部 | $O(n \cdot L)$ | DFS，按字符排序访问 |
| 空间（最坏） | $O(n \cdot L \cdot \Sigma)$ | 数组实现且无共享前缀时 |
| 空间（实际） | 远小于上界 | 前缀共享 + 用字典而非定长数组 |

举个具体数字：存 10 万个平均长 8 的英文单词。

- 用**定长数组**实现（每节点 26 个指针）：最坏 $100000 \times 8 = 80$ 万节点 $\times$ 26 指针 $\times$ 8 字节 $\approx$ 166 MB，其中绝大多数指针是空的——**浪费严重**。
- 用**哈希字典**实现（只存实际存在的孩子）：节点数因前缀共享大幅低于 80 万，每节点只存真实孩子，实测通常在几十 MB 量级。

这就是为什么生产环境的 Trie 几乎都用字典/哈希表存孩子，而不是定长数组。

### 空间优化的三个方向

1. **压缩 Trie（Radix Tree / Patricia Trie）**：把只有一个孩子的连续节点链合并成一条边。比如只有 `card` 一个词时，`c-a-r-d` 四个节点压成一条边 `"card"`。Linux 内核的路由表、Redis 的 `rax` 结构都用它。
2. **DAWG（有向无环字图）**：不仅共享前缀，还合并相同的**后缀**子树。`walking` 和 `talking` 的 `alking` 部分可以复用同一棵子树。适合静态词典。
3. **双数组 Trie**：把树压成两个整型数组，常见于中文分词工具（如 darts、jieba 的前缀词典）。

## 易错点

1. **忘记 `is_end` 标记，把前缀当成单词。** 这是最经典的 bug。存了 `card` 之后，`search("car")` 必须返回 `False`。区分 `search` 与 `starts_with` 是 Trie 的基本功。

2. **结束标记的键和字符集冲突。** 上面用 `"$"` 作为标记键，如果词表里真有 `$` 字符就会冲突。稳妥的做法是用一个不可能出现的对象（如 `None` 或自定义哨兵），或者给节点定义一个真正的 `is_end` 布尔字段。

3. **无脑用定长数组实现。** 处理中文时字符集有上万个，每节点开一个大数组会瞬间爆内存。字符集大就必须用字典。

4. **删除操作只清标记不回收节点。** 删 `card` 时若 `car` 还在，只能清掉 `d` 节点的 `is_end`；但若 `car` 已不是词且 `d` 没有其他孩子，就应该把整条无用路径回收，否则长期运行会内存泄漏。正确做法是**自底向上递归删除**：孩子被删且当前节点非词尾、无其他孩子时，才删自己。

5. **自动补全没有限流。** 用户输入单个字母 `a` 时，可能匹配上万个词。必须加 `limit` 提前返回（如上面代码的 `if len(results) >= limit: return`），否则 DFS 会把整棵子树跑完。

6. **误用 Trie 做「包含子串」查询。** Trie 只擅长**前缀**匹配。要查「包含某子串」得用后缀树、后缀数组，或直接用 KMP / Aho-Corasick 多模式匹配（后者本身就是 Trie 加了失配指针）。

## 练习

1. 实现 `delete(word)`，要求正确回收不再被任何词使用的节点。测试：插入 `car`、`card` 后删 `card`，验证 `search("car")` 仍为 `True` 且 `d` 节点已被回收。
2. 实现 `count_prefix(prefix)`：返回以该前缀开头的单词数量。优化提示——在每个节点上维护一个 `pass_count` 计数器，插入时沿途 +1，这样查询就是 $O(L)$ 而不用 DFS。
3. 实现**通配符查找** `search_with_dot(pattern)`，支持 `.` 匹配任意单个字符（如 `c.t` 能匹配 `cat`）。提示：遇到 `.` 时需要对所有孩子分支递归——这本质上是 [回溯算法](/docs/计算机科学基础/数据结构与算法/回溯算法)。
4. 实现 **0-1 Trie 求最大异或对**：把每个整数按二进制位（从高位到低位）插入 Trie，查询时每一位都尽量往「相反」的分支走。这能把 $O(n^2)$ 的暴力枚举降到 $O(32n)$。
5. 对比实验：用 10 万个英文单词分别建 Trie 和 set，测量内存占用与「查询以 `pre` 开头的所有词」的耗时差距。

## 小结

Trie 把「字符串集合」重组成「字符路径树」，让前缀成为一等公民。它的复杂度只与**查询串长度**相关，与词表规模完全无关，这在超大词典场景下是决定性的优势。记住它的适用边界：**前缀相关的操作用 Trie，纯精确查找用哈希表，子串匹配用后缀结构**。当你在实现搜索建议、IP 路由表、敏感词过滤、中文分词词典时，Trie（或它的压缩变体）几乎总是标准答案。

## 延伸阅读

- [树与二叉树](/docs/计算机科学基础/数据结构与算法/树与二叉树) — Trie 是多叉树，遍历思路一脉相承。
- [哈希表](/docs/计算机科学基础/数据结构与算法/哈希表) — Trie 最主要的选型对手。
- [二叉搜索树](/docs/计算机科学基础/数据结构与算法/二叉搜索树) — 同样保序，但按「整个键」而非「逐字符」比较。
- [回溯算法](/docs/计算机科学基础/数据结构与算法/回溯算法) — 通配符匹配、单词搜索都是 Trie + 回溯。
- [大O分析](/docs/计算机科学基础/数据结构与算法/大O分析) — 理解「与 $n$ 无关」这类复杂度陈述。
- [复杂度速查](/docs/计算机科学基础/数据结构与算法/复杂度速查) — 各结构操作复杂度对照。

### 外部权威资料
- 《算法导论》（Thomas H. Cormen 等，CLRS）第 3 版 — 本分支绝大多数算法的严格定义、复杂度推导与正确性证明之源。
- 《算法》（Robert Sedgewick & Kevin Wayne）第 4 版 — 配套 Java 实现，更适合边读边写。
- 《数据结构与算法分析》（Mark A. Weiss）— 以 C++/Java 实现讲解，配套练习循序渐进。
