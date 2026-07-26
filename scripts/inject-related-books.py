#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为 docs/read 书架每篇书评注入「📚 相关书目」互链区块（幂等）。

- 依据 CLUSTERS（同簇内两两互链，跨分类对也以 2 元簇表达）生成关系网。
- 相关书目区块插入在「## 📖 去哪读这本书」之前（若没有则追加到文末）。
- 链接按 Docusaurus 文档相对路径规则：同分类用 ../slug/，跨分类用 ../../分类/slug/。
- 幂等：已含 MARKER 的篇目跳过；去哪读脚本重跑时会保留本区块（它位于去哪读 MARKER 之前）。

用法：
  python scripts/inject-related-books.py        # dry-run
  python scripts/inject-related-books.py --apply
"""
import re
import os
import sys
import glob

BASE = "docs/read"
DRY = "--apply" not in sys.argv
MARKER = "## 📚 相关书目"
READ_MARKER = "## 📖 去哪读这本书"

EMOJI_RE = re.compile(
    "[\U0001F000-\U0001FAFF\u2600-\u27BF\u2B00-\u2BFF\uFE0F\u200d]", re.UNICODE
)

# slug -> (category, filepath)
slug_cat = {}
for fp in glob.glob(os.path.join(BASE, "**", "*.md"), recursive=True):
    if fp.endswith("index.md"):
        continue
    cat = os.path.basename(os.path.dirname(fp))
    slug = os.path.splitext(os.path.basename(fp))[0]
    slug_cat[slug] = (cat, fp)

# ---- 聚类（同簇两两互链；跨分类以 2 元簇表达）----
CLUSTERS = [
    # 文学小说 —— 村上春树
    ["1Q84", "挪威的森林", "且听风吟"],
    # 文学小说 —— 奥威尔反乌托邦
    ["动物农场", "一九八四"],
    # 文学小说 —— 大仲马冒险
    ["三个火枪手", "基度山恩仇记"],
    # 文学小说 —— 中国现实主义小说
    ["围城", "平凡的世界", "蛙", "许三观卖血记", "边城"],
    # 文学小说 —— 欧陆经典现实主义
    ["巴黎圣母院", "红与黑", "苔丝"],
    # 文学小说 —— 哲理寓言
    ["小王子", "一个孤独漫步者的遐想"],
    # 文学小说 —— 存在/荒诞
    ["变形记", "不能承受的生命之轻", "变色龙"],
    # 文学小说 —— 中国古典
    ["西游记", "古文观止", "人间词话"],
    # 文学小说 —— 反乌托邦与科幻（跨奥威尔）
    ["三体", "美丽新世界", "一九八四"],
    # 文学小说 —— 温情文学
    ["追风筝的人", "偷影子的人"],
    # 文学小说 —— 中文散文与回忆
    ["文化苦旅", "城南旧事", "皮囊"],
    # 文学小说 —— 冒险经典（跨大仲马）
    ["海底两万里", "三个火枪手"],
    # 文学小说 —— 补全孤岛（弱关联但同属经典文学）
    ["双城记", "巴黎圣母院"],
    ["穆斯林的葬礼", "围城"],
    ["钢铁是怎样炼成的", "平凡的世界"],
    ["飘", "红与黑"],
    # 社科历史 —— 简史三部曲
    ["人类简史", "今日简史", "未来简史"],
    # 社科历史 —— 社会批判
    ["乌合之众", "娱乐至死", "规训与惩罚"],
    # 社科历史 —— 中国现实
    ["乡土中国", "置身事内"],
    # 社科历史 —— 认知与思维
    ["事实", "我们赖以生存的隐喻", "天才在左，疯子在右"],
    # 社科历史 —— 政治哲学
    ["理想国", "规训与惩罚"],
    # 社科历史 —— 历史宏大叙事
    ["人类群星闪耀时", "人类简史"],
    # 社科历史 —— 系统思维
    ["系统之美", "置身事内"],
    # 科学技术 —— 编程与计算
    ["Python神经网络编程", "白帽子讲Web安全", "黑客与画家", "编码：隐匿在计算机软硬件背后的语言"],
    # 科学技术 —— 自然观察
    ["昆虫记", "植物的战斗", "云彩收集者手册"],
    # 科学技术 —— Web 设计
    ["弹性网页设计", "黑客与画家"],
    # 自我成长 —— 思维与财富
    ["原则", "思考，快与慢", "财富自由之路", "禅与摩托车维修艺术"],
    # 自我成长 —— 习惯/学习/专注
    ["原子习惯", "深度工作", "如何高效学习", "断舍离", "如何阅读一本书"],
    # 自我成长 —— 身心与独处
    ["灵魂需要独处", "运动改造大脑", "断舍离"],
    # 自我成长 —— 金钱启蒙
    ["小狗钱钱", "财富自由之路"],
    # 跨分类 —— 思维偏差
    ["思考，快与慢", "事实"],
    ["思考，快与慢", "我们赖以生存的隐喻"],
    # 跨分类 —— 中国社会镜像
    ["乡土中国", "围城"],
]

relations = {s: set() for s in slug_cat}
for cl in CLUSTERS:
    for a in cl:
        for b in cl:
            if a != b and a in relations and b in relations:
                relations[a].add(b)


def get_title(fp):
    raw = open(fp, encoding="utf-8").read()
    m = re.match(r"^---\r?\n(.*?)\r?\n---\r?\n", raw, re.S)
    if not m:
        return None
    fm = m.group(1)
    mt = re.search(r"^title:\s*(.+)$", fm, re.M)
    if not mt:
        return None
    return mt.group(1).strip().strip('"').strip("'")


title_cache = {s: (get_title(fp) or s) for s, (_, fp) in slug_cat.items()}


def rel_link(src, tgt):
    scat, _ = slug_cat[src]
    tcat, _ = slug_cat[tgt]
    if scat == tcat:
        return f"../{tgt}/"
    return f"../../{tcat}/{tgt}/"


def build_block(src):
    rels = sorted(relations.get(src, []))
    if not rels:
        return None
    lines = ["", MARKER, ""]
    for t in rels:
        label = title_cache[t] or t
        label = EMOJI_RE.sub("", label).strip()
        lines.append(f"- [{label}]({rel_link(src, t)})")
    lines.append("")
    return "\n".join(lines)


def main():
    added = existed = norel = 0
    for slug, (cat, fp) in slug_cat.items():
        raw = open(fp, encoding="utf-8").read()
        if MARKER in raw:
            existed += 1
            if DRY:
                print(f"[EXISTS] {fp}")
            continue
        block = build_block(slug)
        if not block:
            norel += 1
            if DRY:
                print(f"[NOREL] {fp}")
            continue
        if READ_MARKER in raw:
            new_raw = raw.replace(READ_MARKER, block + "\n\n" + READ_MARKER, 1)
        else:
            new_raw = raw.rstrip() + "\n" + block + "\n"
        if DRY:
            print(f"[ADD ] {fp}\n{block}")
            added += 1
        else:
            open(fp, "w", encoding="utf-8").write(new_raw)
            print(f"[DONE] {fp}")
            added += 1
    print(
        ("DRY RUN —— 未改动文件。" if DRY else "APPLY 完成。")
        + f"  新增={added}  已存在={existed}  无关联={norel}"
    )


if __name__ == "__main__":
    main()
