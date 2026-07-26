#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
为 docs/read 书架每篇书评注入「📖 去哪读这本书」区块。

设计（对齐 Phase 5.2 选中的「逐篇精准豆瓣链接」方案）：
- 每篇 frontmatter 维护一个 `douban:` 字段，存该书在豆瓣的【精确页】URL
  （形如 https://book.douban.com/subject/XXXX/ ）。
  可选 `isbn:` 字段作为兜底（无 douban 时用 https://book.douban.com/isbn/<isbn>/ ）。
- 本脚本读取 frontmatter，若含 douban/isbn，则在正文末尾（幂等）注入统一区块；
  区块含：豆瓣精确页 + 微信读书搜索 + 国家图书馆 OPAC 检索（按书名兜底）。
- 改了 frontmatter 后重跑本脚本即可同步；已含区块则替换旧区块（永不重复）。
- 无 douban/isbn 的篇目跳过（精准方案下不臆造链接）。

用法：
  python scripts/inject-read-links.py            # dry-run，只打印
  python scripts/inject-read-links.py --apply    # 写入文件
"""
import re
import os
import sys
import glob

BASE = "docs/read"
DRY = "--apply" not in sys.argv
MARKER = "## 📖 去哪读这本书"

EMOJI_RE = re.compile(
    "[\U0001F000-\U0001FAFF\u2600-\u27BF\u2B00-\u2BFF\uFE0F\u200d]", re.UNICODE
)


def strip_emoji(s: str) -> str:
    return EMOJI_RE.sub("", s).strip()


def parse_fm(raw: str):
    m = re.match(r"^---\r?\n(.*?)\r?\n---\r?\n", raw, re.S)
    if not m:
        return None, raw
    return m.group(1), raw[m.end():]


def get_field(fm: str, key: str):
    m = re.search(r"^" + re.escape(key) + r":\s*(.+)$", fm, re.M)
    if not m:
        return None
    return m.group(1).strip().strip('"').strip("'")


def build_block(douban, isbn, clean_title):
    lines = [
        "",
        MARKER,
        "",
        "> 本页为书评与摘要，书籍全文请阅读原书，尊重版权。",
        "",
    ]
    if douban:
        lines.append(f"- [豆瓣读书（精确页）]({douban})")
    elif isbn:
        lines.append(f"- [豆瓣读书（ISBN）](https://book.douban.com/isbn/{isbn}/)")
    lines.append(f"- [微信读书搜索](https://weread.qq.com/search?keyword={clean_title})")
    lines.append(f"- [国家图书馆 OPAC 检索](https://opac.nlc.cn/search?q={clean_title})")
    lines.append("")
    return "\n".join(lines)


def main():
    files = sorted(
        f
        for f in glob.glob(os.path.join(BASE, "**", "*.md"), recursive=True)
        if not f.endswith("index.md")
    )
    added = skipped = 0
    for fp in files:
        raw = open(fp, encoding="utf-8").read()
        fm, body = parse_fm(raw)
        if fm is None:
            continue
        douban = get_field(fm, "douban")
        isbn = get_field(fm, "isbn")
        title = get_field(fm, "title") or os.path.splitext(os.path.basename(fp))[0]
        clean_title = strip_emoji(title)
        if not douban and not isbn:
            if DRY:
                print(f"[SKIP] {fp}  (frontmatter 无 douban/isbn)")
            skipped += 1
            continue
        block = build_block(douban, isbn, clean_title)
        # 去掉旧区块（MARKER 起至文件末尾，因区块恒在最后）
        new_body = re.split(r"\n" + re.escape(MARKER) + r"\b", body)[0].rstrip() + "\n"
        new_raw = "---\n" + fm + "\n---\n" + new_body + block
        if DRY:
            print(f"[ADD ] {fp}\n{block}")
            added += 1
        else:
            open(fp, "w", encoding="utf-8").write(new_raw)
            print(f"[DONE] {fp}")
            added += 1
    print(
        ("DRY RUN —— 未改动文件。" if DRY else "APPLY 完成。")
        + f"  可注入={added}  跳过={skipped}"
    )


if __name__ == "__main__":
    main()
