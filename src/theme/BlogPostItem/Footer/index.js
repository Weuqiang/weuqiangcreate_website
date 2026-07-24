import React from "react";
import BlogPostItemFooterOriginal from "@theme-original/BlogPostItem/Footer";
import GiscusComments from "@site/src/components/GiscusComments";

/**
 * Swizzle BlogPostItem/Footer：在原始页脚（标签 / 版权 / 阅读原文）下方追加
 * Giscus 评论组件。仅影响博文页（BlogPostPage）。
 * 用户需在 Giscus 控制台拿到 data-repo-id / data-category-id 后替换占位。
 */
export default function BlogPostItemFooter(props) {
  return (
    <>
      <BlogPostItemFooterOriginal {...props} />
      <GiscusComments />
    </>
  );
}
