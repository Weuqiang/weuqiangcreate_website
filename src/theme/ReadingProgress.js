import React, { useEffect, useState } from "react";
import { useLocation } from "@docusaurus/router";

/**
 * 阅读进度条：仅在文档/博文正文页显示，跟随页面滚动计算百分比。
 */
export default function ReadingProgress() {
  const { pathname } = useLocation();
  const [progress, setProgress] = useState(0);

  const show = /(^|\/)(docs|read|blog)\//.test(pathname);

  useEffect(() => {
    if (!show) {
      setProgress(0);
      return undefined;
    }
    const compute = () => {
      const el = document.documentElement;
      const height = el.scrollHeight - el.clientHeight;
      const scrolled = el.scrollTop || document.body.scrollTop || 0;
      setProgress(height > 0 ? Math.min(100, (scrolled / height) * 100) : 0);
    };
    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", compute);
    return () => {
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", compute);
    };
  }, [show, pathname]);

  if (!show) return null;

  return (
    <div
      className="reading-progress-bar"
      style={{ width: `${progress}%` }}
      role="progressbar"
      aria-label="阅读进度"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  );
}
