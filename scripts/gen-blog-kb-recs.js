/**
 * gen-blog-kb-recs.js
 * 扫描所有博客文章，基于标签和标题关键词匹配知识库页面，
 * 生成 src/data/blog-kb-recommendations.json。
 * 推荐结构：{ "blog-slug": [{ title, url, category }] }
 */
const fs = require('fs');
const path = require('path');

// ========== 配置 ==========
const BLOG_DIR = path.resolve(__dirname, '..', 'blog');
const DOCS_DIR = path.resolve(__dirname, '..', 'docs', 'docs');
const READ_DIR = path.resolve(__dirname, '..', 'docs', 'read');
const OUTPUT = path.resolve(__dirname, '..', 'src', 'data', 'blog-kb-recommendations.json');

// ========== 标签 → KB 页面路径映射（docs/docs/ 相对路径） ==========
const TAG_TO_KB = {
  // --- AI / ML 核心 ---
  '深度学习': ['人工智能/深度学习/经典神经网络', '人工智能/深度学习/序列处理/Transformer', '人工智能/深度学习/网格数据/YOLO'],
  'Transformer': ['人工智能/深度学习/序列处理/Transformer', '人工智能/深度学习/序列处理/Vision Transformer'],
  '注意力机制': ['人工智能/深度学习/序列处理/Transformer'],
  'NLP': ['人工智能/深度学习/序列处理/Transformer', '人工智能/深度学习/序列处理/LSTM'],
  '预训练': ['人工智能/深度学习/经典神经网络', '人工智能/大模型LLM与应用/模型微调'],
  'TensorFlow': ['人工智能/深度学习/网格数据/AlexNet', '人工智能/深度学习/网格数据/ResNet', '人工智能/深度学习/经典神经网络'],
  '大模型': ['人工智能/大模型LLM与应用/模型微调', '人工智能/大模型LLM与应用/Agent开发', '人工智能/大模型LLM与应用/上下文工程'],
  '开源大模型': ['人工智能/大模型LLM与应用/模型微调', '人工智能/大模型LLM与应用/本地部署', '人工智能/大模型LLM与应用/模型社区'],
  'GPT': ['人工智能/大模型LLM与应用/模型微调', '人工智能/大模型LLM与应用/Agent开发', '人工智能/大模型LLM与应用/上下文工程'],
  'GPT-4': ['人工智能/大模型LLM与应用/上下文工程', '人工智能/大模型LLM与应用/Agent开发', '人工智能/大模型LLM与应用/模型评测'],
  'GPT-4o': ['人工智能/大模型LLM与应用/上下文工程', '人工智能/深度学习/序列处理/手写多模态大模型'],
  'GPT-5': ['人工智能/大模型LLM与应用/Agent开发', '人工智能/大模型LLM与应用/模型评测', '人工智能/大模型LLM与应用/模型微调'],
  'o3': ['人工智能/大模型LLM与应用/模型评测', '人工智能/大模型LLM与应用/Agent开发'],
  'OpenAI': ['人工智能/大模型LLM与应用/模型微调', '人工智能/大模型LLM与应用/Agent开发', '人工智能/大模型LLM与应用/上下文工程'],
  'ChatGPT': ['人工智能/大模型LLM与应用/上下文工程', '人工智能/大模型LLM与应用/Agent开发'],
  'Claude': ['人工智能/大模型LLM与应用/Agent开发', '人工智能/大模型LLM与应用/上下文工程'],
  'Claude 3.5': ['人工智能/大模型LLM与应用/Agent开发', '人工智能/大模型LLM与应用/模型评测'],
  'Claude 4': ['人工智能/大模型LLM与应用/Agent开发', '软件工程与后端/工程实践/代码规范与重构'],
  'Anthropic': ['人工智能/大模型LLM与应用/Agent开发', '人工智能/大模型LLM与应用/上下文工程'],
  'DeepSeek': ['人工智能/大模型LLM与应用/模型微调', '人工智能/大模型LLM与应用/本地部署', '人工智能/大模型LLM与应用/模型评测'],
  'Gemini 1.5': ['人工智能/大模型LLM与应用/上下文工程', '人工智能/深度学习/序列处理/手写多模态大模型'],
  'Gemini 2.5': ['人工智能/大模型LLM与应用/Agent开发', '人工智能/大模型LLM与应用/模型评测'],
  'Google': ['人工智能/大模型LLM与应用/模型评测', '人工智能/深度学习/经典神经网络'],
  'Gemma 3.0': ['人工智能/大模型LLM与应用/本地部署', '人工智能/大模型LLM与应用/模型微调'],
  'Llama': ['人工智能/大模型LLM与应用/本地部署', '人工智能/大模型LLM与应用/模型微调', '人工智能/大模型LLM与应用/模型社区'],
  'Llama 3.1': ['人工智能/大模型LLM与应用/本地部署', '人工智能/大模型LLM与应用/模型微调', '人工智能/大模型LLM与应用/模型社区'],
  'Llama 4': ['人工智能/大模型LLM与应用/本地部署', '人工智能/大模型LLM与应用/模型评测', '人工智能/大模型LLM与应用/模型微调'],
  'Meta': ['人工智能/大模型LLM与应用/本地部署', '人工智能/大模型LLM与应用/模型社区'],
  'MoE': ['人工智能/大模型LLM与应用/模型微调', '人工智能/深度学习/序列处理/Transformer'],
  'MoE架构': ['人工智能/大模型LLM与应用/模型微调', '人工智能/深度学习/序列处理/Transformer'],
  '多模态': ['人工智能/深度学习/序列处理/手写多模态大模型', '人工智能/大模型LLM与应用/上下文工程'],
  'AI绘画': ['人工智能/深度学习/经典神经网络', '人工智能/深度学习/网格数据/ResNet'],
  '图像生成': ['人工智能/深度学习/经典神经网络', '人工智能/深度学习/网格数据/ResNet'],
  '视频生成': ['人工智能/深度学习/经典神经网络', '人工智能/深度学习/序列处理/Transformer'],
  'Sora': ['人工智能/深度学习/经典神经网络', '人工智能/深度学习/序列处理/Transformer'],
  'AlphaGo': ['人工智能/深度学习/经典神经网络', '人工智能/机器学习/分类算法'],
  'Midjourney': ['人工智能/深度学习/经典神经网络', '人工智能/深度学习/网格数据/ResNet'],
  'Stable Diffusion': ['人工智能/深度学习/经典神经网络', '人工智能/深度学习/网格数据/ResNet'],
  'AI安全': ['人工智能/大模型LLM与应用/模型评测', '人工智能/大模型LLM与应用/上下文工程'],
  '大语言模型': ['人工智能/大模型LLM与应用/模型微调', '人工智能/大模型LLM与应用/Agent开发'],
  'Grok 3': ['人工智能/大模型LLM与应用/模型评测', '人工智能/大模型LLM与应用/Agent开发'],
  'xAI': ['人工智能/大模型LLM与应用/Agent开发', '人工智能/大模型LLM与应用/模型评测'],
  'Deep Think': ['人工智能/大模型LLM与应用/模型评测', '人工智能/大模型LLM与应用/Agent开发'],
  '多智能体': ['人工智能/大模型LLM与应用/Agent开发'],
  '并行推理': ['人工智能/大模型LLM与应用/Agent开发', '人工智能/大模型LLM与应用/模型评测'],
  '长上下文': ['人工智能/大模型LLM与应用/上下文工程'],
  'AI民主化': ['人工智能/大模型LLM与应用/本地部署', '人工智能/大模型LLM与应用/模型社区'],
  '人工智能': ['人工智能/深度学习/经典神经网络', '人工智能/大模型LLM与应用/模型微调'],
  '中国AI': ['人工智能/大模型LLM与应用/模型微调', '人工智能/大模型LLM与应用/本地部署'],
  '数学推理': ['数学基础/离散数学/集合逻辑与证明', '数学基础/线性代数/线性代数入门'],
  '推理能力': ['人工智能/大模型LLM与应用/模型评测', '人工智能/大模型LLM与应用/Agent开发'],
  '推理模型': ['人工智能/大模型LLM与应用/模型评测', '人工智能/大模型LLM与应用/Agent开发'],
  '实时信息': ['人工智能/大模型LLM与应用/检索增强', '人工智能/大模型LLM与应用/Agent开发'],
  '单GPU优化': ['人工智能/大模型LLM与应用/本地部署', '人工智能/大模型LLM与应用/模型微调'],
  '对话AI': ['人工智能/大模型LLM与应用/上下文工程', '人工智能/大模型LLM与应用/Agent开发'],
  '幽默对话': ['人工智能/大模型LLM与应用/上下文工程', '人工智能/大模型LLM与应用/Agent开发'],

  // --- DevOps / 工程 ---
  'Docker': ['软件工程与后端/工程实践/容器化与Docker', '计算机科学基础/开发工具链/Docker'],
  'DevOps': ['软件工程与后端/工程实践/持续集成与部署', '软件工程与后端/工程实践/容器化与Docker'],
  '容器': ['软件工程与后端/工程实践/容器化与Docker', '计算机科学基础/开发工具链/Docker'],
  'Kubernetes': ['软件工程与后端/工程实践/容器化与Docker', '软件工程与后端/工程实践/微服务与分布式架构'],
  '容器编排': ['软件工程与后端/工程实践/容器化与Docker', '软件工程与后端/工程实践/微服务与分布式架构'],
  'GitHub': ['软件工程与后端/工程实践/Git与版本控制', '计算机科学基础/开发工具链/Git'],
  'Copilot': ['软件工程与后端/工程实践/Git与版本控制', '软件工程与后端/工程实践/代码规范与重构'],
  'AI编程': ['软件工程与后端/工程实践/代码规范与重构', '软件工程与后端/工程实践/自动化测试与TDD', '编程语言/Python/10函数'],
  '代码生成': ['软件工程与后端/工程实践/代码规范与重构', '编程语言/Python/10函数'],
  'Cursor': ['软件工程与后端/工程实践/代码规范与重构', '软件工程与后端/工程实践/Git与版本控制'],

  // --- 前端 ---
  '前端': ['编程语言/Web前端/HTML/', '编程语言/Web前端/JavaScript/'],
  'React': ['编程语言/Web前端/HTML/', '编程语言/Web前端/JavaScript/'],
  'Vue': ['编程语言/Web前端/HTML/', '编程语言/Web前端/JavaScript/'],
  'Facebook': ['编程语言/Web前端/JavaScript/02-types/object', '编程语言/Web前端/JavaScript/07-async/promise'],
  '渐进式框架': ['编程语言/Web前端/HTML/', '编程语言/Web前端/JavaScript/'],

  // --- 开源 / 社区 ---
  '开源': ['人工智能/大模型LLM与应用/模型社区', '软件工程与后端/工程实践/Git与版本控制'],
  'DeepMind': ['人工智能/深度学习/经典神经网络', '人工智能/大模型LLM与应用/Agent开发'],
  '围棋': ['人工智能/机器学习/分类算法', '人工智能/深度学习/经典神经网络'],
};

// ========== 博客标题关键词 → 额外 KB 页面 ==========
const TITLE_PATTERNS = [
  { pattern: /[Dd]ocker/, pages: ['软件工程与后端/工程实践/容器化与Docker', '计算机科学基础/开发工具链/Docker'] },
  { pattern: /[Kk]ubernetes/, pages: ['软件工程与后端/工程实践/容器化与Docker', '软件工程与后端/工程实践/微服务与分布式架构'] },
  { pattern: /[Rr]eact/, pages: ['编程语言/Web前端/HTML/', '编程语言/Web前端/JavaScript/'] },
  { pattern: /[Vv]ue/, pages: ['编程语言/Web前端/HTML/', '编程语言/Web前端/JavaScript/'] },
  { pattern: /[Tt]ransformer/, pages: ['人工智能/深度学习/序列处理/Transformer', '人工智能/深度学习/序列处理/Vision Transformer'] },
  { pattern: /[Aa]lpha\s*[Gg]o/, pages: ['人工智能/深度学习/经典神经网络', '人工智能/机器学习/分类算法'] },
  { pattern: /[Ss]table\s*[Dd]iffusion/, pages: ['人工智能/深度学习/经典神经网络', '人工智能/深度学习/网格数据/ResNet'] },
  { pattern: /[Mm]idjourney/, pages: ['人工智能/深度学习/经典神经网络', '人工智能/深度学习/网格数据/ResNet'] },
  { pattern: /[Ss]ora/, pages: ['人工智能/深度学习/经典神经网络', '人工智能/深度学习/序列处理/Transformer'] },
  { pattern: /[Cc]opilot/, pages: ['软件工程与后端/工程实践/Git与版本控制', '软件工程与后端/工程实践/代码规范与重构'] },
  { pattern: /[Gg]it/, pages: ['软件工程与后端/工程实践/Git与版本控制', '计算机科学基础/开发工具链/Git'] },
  { pattern: /编码|计算机软件硬件|隐匿/, pages: ['计算机科学基础/计算机科学导论/组成原理/数字逻辑与冯诺依曼', '计算机科学基础/开发工具链/Git'] },
];

// ========== 知识库页面元数据缓存 ==========
const kbPages = {};
const readPages = {};

// 加载知识库页面元数据
function loadKbPages(dir, pages, rootKey) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const ent of entries) {
    const fullPath = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      loadKbPages(fullPath, pages, rootKey);
    } else if (ent.name.endsWith('.md') || ent.name.endsWith('.mdx')) {
      if (ent.name.startsWith('_category_') || ent.name.startsWith('index.')) continue;
      const relPath = path.relative(rootKey === 'docs' ? DOCS_DIR : READ_DIR, fullPath).replace(/\\/g, '/');
      const content = fs.readFileSync(fullPath, 'utf-8').replace(/\r\n/g, '\n');
      const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
      let title = '';
      if (fmMatch) {
        const titleMatch = fmMatch[1].match(/^title:\s*["']?(.+?)["']?\s*$/m);
        if (titleMatch) title = titleMatch[1];
      }
      if (!title) {
        title = path.basename(ent.name, path.extname(ent.name));
      }
      pages[relPath] = { title, path: relPath, category: path.dirname(relPath) };
    }
  }
}

// 获取 KB 页面的 category label
function getCategoryLabel(catPath) {
  if (!catPath || catPath === '.') return '';
  const catFile = path.join(DOCS_DIR, catPath, '_category_.json');
  if (fs.existsSync(catFile)) {
    try {
      const cat = JSON.parse(fs.readFileSync(catFile, 'utf-8'));
      return cat.label || catPath;
    } catch { return catPath; }
  }
  return catPath;
}

// 获取 KB 页面的简短描述
function getPageDescription(pagePath) {
  const fullPath = path.join(DOCS_DIR, pagePath + '.mdx');
  const altPath = path.join(DOCS_DIR, pagePath + '.md');
  const fpath = fs.existsSync(fullPath) ? fullPath : altPath;
  if (!fs.existsSync(fpath)) return '';
  try {
    const content = fs.readFileSync(fpath, 'utf-8').replace(/\r\n/g, '\n');
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (fmMatch) {
      const descMatch = fmMatch[1].match(/^description:\s*["']?(.+?)["']?\s*$/m);
      if (descMatch) return descMatch[1];
    }
  } catch { return ''; }
  return '';
}

// 将 KB 路径转为 Docusaurus URL
function kbPathToUrl(kbPath) {
  // kbPath 格式: "分类/子分类/文件名" (无扩展名)
  // Docusaurus 剥除前导数字前缀 (数字+分隔符)
  const segments = kbPath.split('/');
  const urlSegments = segments.map(seg => {
    return seg.replace(/^\d+[-_ ]/, '');
  });
  // index 页面路由是目录路径
  return '/docs/' + urlSegments.join('/');
}

// 解析博客 frontmatter
function parseFrontmatter(content) {
  // 规范化换行符（处理 Windows CRLF）
  content = content.replace(/\r\n/g, '\n');
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return {};
  const fm = {};
  const lines = fmMatch[1].split('\n');
  let inTags = false;
  for (const line of lines) {
    // title / slug
    let m = line.match(/^title:\s*["']?(.+?)["']?\s*$/);
    if (m) { fm.title = m[1]; continue; }
    m = line.match(/^slug:\s*["']?(.+?)["']?\s*$/);
    if (m) { fm.slug = m[1]; continue; }
    // tags — 使用子串提取，比正则更可靠
    if (line.startsWith('tags:')) {
      const start = line.indexOf('[');
      const end = line.indexOf(']');
      if (start >= 0 && end > start) {
        fm.tags = line.substring(start + 1, end).split(',').map(t => t.trim().replace(/^["']|["']$/g, ''));
      }
      continue;
    }
    // multi-line tags
    if (line.trim() === 'tags:') { inTags = true; continue; }
    if (inTags) {
      m = line.match(/^\s*-\s*(.+)$/);
      if (m) {
        if (!fm.tags) fm.tags = [];
        fm.tags.push(m[1].trim().replace(/^["']|["']$/g, ''));
      } else {
        inTags = false;
      }
    }
  }
  return fm;
}

// 提取 slug
function getSlug(filename, fm) {
  if (fm.slug) return fm.slug;
  // 从文件名提取: YYYY-MM-DD-slug.md → slug
  const match = filename.match(/^\d{4}-\d{2}-\d{2}-(.+)\.md$/);
  if (match) return match[1];
  return filename.replace(/\.md$/, '');
}

// 按路径（无扩展名）查找 KB 页面
function findKbPage(basePath) {
  // 尝试 .mdx / .md 扩展名
  return kbPages[basePath + '.mdx'] || kbPages[basePath + '.md'] || null;
}

// 从标签获取推荐 KB 页面
function getRecsFromTags(tags) {
  const paths = new Set();
  for (const tag of tags) {
    const mapped = TAG_TO_KB[tag];
    if (mapped) mapped.forEach(p => paths.add(p));
  }
  return [...paths];
}

// 从标题获取推荐 KB 页面
function getRecsFromTitle(title) {
  const paths = new Set();
  for (const { pattern, pages } of TITLE_PATTERNS) {
    if (pattern.test(title)) pages.forEach(p => paths.add(p));
  }
  return [...paths];
}

// ========== 主流程 ==========
function main() {
  // 加载知识库页面
  loadKbPages(DOCS_DIR, kbPages, 'docs');
  loadKbPages(READ_DIR, readPages, 'read');

  const blogFiles = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
  const recommendations = {};

  for (const filename of blogFiles) {
    const content = fs.readFileSync(path.join(BLOG_DIR, filename), 'utf-8');
    const fm = parseFrontmatter(content);
    const slug = getSlug(filename, fm);
    const title = fm.title || filename;
    const tags = fm.tags || [];

    // 收集推荐路径
    const recPaths = new Set();
    getRecsFromTags(tags).forEach(p => recPaths.add(p));
    getRecsFromTitle(title).forEach(p => recPaths.add(p));

    // 跳过科技日报（无明确主题）
    if (tags.includes('科技日报') || tags.includes('每日资讯')) continue;
    // 跳过低信号博客（空标签或仅 hello/docusaurus/tutorial）
    if (recPaths.size === 0) continue;

    // 转为推荐对象
    const recs = [];
    for (const p of recPaths) {
      const page = findKbPage(p);
      if (!page) continue;
      const desc = getPageDescription(p);
      const url = kbPathToUrl(p);
      recs.push({
        title: page.title,
        url,
        description: desc,
        category: getCategoryLabel(page.category),
      });
    }

    // 去重（按 title），限制 5 条
    const seen = new Set();
    const unique = [];
    for (const r of recs) {
      if (!seen.has(r.title)) {
        seen.add(r.title);
        unique.push(r);
      }
    }
    if (unique.length > 0) {
      recommendations[slug] = unique.slice(0, 5);
    }
  }

  // 确保输出目录存在
  const outDir = path.dirname(OUTPUT);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  fs.writeFileSync(OUTPUT, JSON.stringify(recommendations, null, 2), 'utf-8');
  const totalBlogs = Object.keys(recommendations).length;
  console.log(`[blog-kb-recs] 生成 ${totalBlogs} 篇博客的知识库推荐 → ${OUTPUT}`);
}

main();
