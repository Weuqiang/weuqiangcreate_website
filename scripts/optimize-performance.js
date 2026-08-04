/**
 * Postbuild: performance optimizations
 *
 * 1. Add loading="lazy" + decoding="async" to all <img> tags (1222+ images)
 * 2. Defer KaTeX CSS (non-render-blocking, 24K saved on first paint)
 * 3. Preload critical JS/CSS on homepage (start download earlier)
 */

const fs = require("fs");
const path = require("path");

const BUILD_DIR = path.join(__dirname, "..", "build");

/* ---- 1. Lazy-load images ---- */
function lazyLoadImages() {
  let scanned = 0;
  let patched = 0;

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        walk(full);
      } else if (e.name.endsWith(".html")) {
        let html = fs.readFileSync(full, "utf-8");
        scanned++;
        let changed = false;

        // Add loading="lazy" decoding="async" to <img> tags that lack them
        // Skip navbar logos (themedComponent class) and tiny icons (width <= 48)
        html = html.replace(/<img(?![^>]*\bloading=)([^>]*)>/gi, (match, attrs) => {
          if (/class="[^"]*themedComponent/.test(attrs)) return match;
          const wMatch = attrs.match(/\bwidth="(\d+)"/);
          if (wMatch && parseInt(wMatch[1]) <= 48) return match;
          changed = true;
          return `<img loading="lazy" decoding="async"${attrs}>`;
        });

        // Also add decoding="async" to <img> tags that have loading but not decoding
        html = html.replace(/<img(?=[^>]*\bloading=)(?![^>]*\bdecoding=)([^>]*)>/gi, (match, attrs) => {
          changed = true;
          return `<img decoding="async"${attrs}>`;
        });

        if (changed) {
          fs.writeFileSync(full, html, "utf-8");
          patched++;
        }
      }
    }
  }

  walk(BUILD_DIR);
  console.log(`[perf:img] scanned ${scanned} HTML, patched ${patched} with lazy loading`);
}

/* ---- 2. Defer KaTeX CSS ---- */
function deferKatexCss() {
  const indexPath = path.join(BUILD_DIR, "index.html");
  if (!fs.existsSync(indexPath)) return;

  let html = fs.readFileSync(indexPath, "utf-8");
  let changed = false;

  // Replace render-blocking KaTeX stylesheet with preload pattern
  // Before: <link rel="stylesheet" href="/katex/katex.min.css">
  // After:  <link rel="preload" href="/katex/katex.min.css" as="style" onload="..."><noscript>...</noscript>
  html = html.replace(
    /<link\s+rel="stylesheet"\s+href="([^"]*katex[^"]*\.css)">/gi,
    (match, href) => {
      changed = true;
      return `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}"></noscript>`;
    }
  );

  if (changed) {
    // Apply to all HTML files, not just index.html
    function walk(dir) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const e of entries) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) walk(full);
        else if (e.name.endsWith(".html")) {
          let h = fs.readFileSync(full, "utf-8");
          let c = false;
          h = h.replace(
            /<link\s+rel="stylesheet"\s+href="([^"]*katex[^"]*\.css)">/gi,
            (m, href) => {
              c = true;
              return `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="${href}"></noscript>`;
            }
          );
          if (c) fs.writeFileSync(full, h, "utf-8");
        }
      }
    }
    walk(BUILD_DIR);
    console.log("[perf:css] KaTeX CSS deferred to non-render-blocking on all pages");
  } else {
    console.log("[perf:css] KaTeX CSS not found, skipping");
  }
}

/* ---- 3. Preload critical resources on homepage ---- */
function preloadCritical() {
  const indexPath = path.join(BUILD_DIR, "index.html");
  if (!fs.existsSync(indexPath)) return;

  let html = fs.readFileSync(indexPath, "utf-8");
  const preloads = [];

  // Extract main CSS file
  const cssMatch = html.match(/<link\s+rel="stylesheet"\s+href="([^"]*assets\/css\/styles[^"]*\.css)">/i);
  if (cssMatch) {
    preloads.push(`<link rel="preload" href="${cssMatch[1]}" as="style">`);
  }

  // Extract main JS file
  const jsMatch = html.match(/<script\s+src="([^"]*assets\/js\/main[^"]*\.js)"\s+defer/i);
  if (jsMatch) {
    preloads.push(`<link rel="preload" href="${jsMatch[1]}" as="script">`);
  }

  // Extract runtime JS file
  const rtMatch = html.match(/<script\s+src="([^"]*assets\/js\/runtime[^"]*\.js)"\s+defer/i);
  if (rtMatch) {
    preloads.push(`<link rel="preload" href="${rtMatch[1]}" as="script">`);
  }

  if (preloads.length > 0) {
    // Inject preload tags before the first <link> or <script> in <head>
    const injectPoint = html.indexOf("<link");
    if (injectPoint > 0) {
      html = html.substring(0, injectPoint) + preloads.join("\n") + "\n" + html.substring(injectPoint);
      fs.writeFileSync(indexPath, html, "utf-8");
      console.log(`[perf:preload] Injected ${preloads.length} preload tags on homepage`);
    }
  }
}

/* ---- Main ---- */
function main() {
  lazyLoadImages();
  deferKatexCss();
  preloadCritical();
}

main();
