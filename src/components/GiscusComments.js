import React, { useEffect } from "react";
import BrowserOnly from "@docusaurus/BrowserOnly";

/**
 * Giscus 评论组件。
 * 首次配置请到 https://giscus.app/zh-CN 选择仓库与分类，把生成的
 * data-repo / data-repo-id / data-category / data-category-id 替换下方
 * PLACEHOLDER 占位。注意：Giscus 必须能在 GitHub Discussions 中发言。
 */
export default function GiscusComments(props) {
  return (
    <BrowserOnly fallback={<div style={{ minHeight: 160 }} />}>
      {() => <GiscusInner {...props} />}
    </BrowserOnly>
  );
}

const GISCUS_CONFIG = {
  src: "https://giscus.app/client.js",
  "data-repo": "Weuqiang/weuqiangcreate_website",
  "data-repo-id": "PLACEHOLDER_REPO_ID",
  "data-category": "Announcements",
  "data-category-id": "PLACEHOLDER_CATEGORY_ID",
  "data-mapping": "pathname",
  "data-strict": "0",
  "data-reactions-enabled": "1",
  "data-emit-metadata": "0",
  "data-input-position": "top",
  "data-theme": "light",
  "data-lang": "zh-CN",
  "data-loading": "lazy",
};

function GiscusInner() {
  useEffect(() => {
    const container = document.getElementById("__giscus_container");
    if (!container) return undefined;
    container.innerHTML = "";
    const s = document.createElement("script");
    s.src = GISCUS_CONFIG.src;
    s.async = true;
    s.crossOrigin = "anonymous";
    for (const [k, v] of Object.entries(GISCUS_CONFIG)) {
      if (k === "src") continue;
      s.setAttribute(k, v);
    }
    container.appendChild(s);
    return () => { container.innerHTML = ""; };
  }, []);

  return (
    <section
      className="giscus-comments"
      style={{
        marginTop: "2.5rem",
        padding: "1.5rem",
        borderTop: "1px solid var(--line)",
      }}
    >
      <h3 style={{ fontFamily: "var(--font-serif)", margin: "0 0 1rem", color: "var(--ink)" }}>
        评论
      </h3>
      <div id="__giscus_container" />
      <noscript>
        <p style={{ color: "var(--ink-soft)", fontSize: "0.9rem" }}>
          请启用 JavaScript 以加载评论（由 Giscus 提供，登录 GitHub 后发言）。
        </p>
      </noscript>
    </section>
  );
}
