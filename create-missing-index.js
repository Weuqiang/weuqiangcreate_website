const fs = require('fs');
const path = require('path');

const missingIndexDirs = [
  '前端开发/canvas',
  '前端开发/infra',
  '选择编程语言/JavaScript/1. basic',
  '选择编程语言/JavaScript/10. bom',
  '选择编程语言/JavaScript/11. elements',
  '选择编程语言/JavaScript/2. types',
  '选择编程语言/JavaScript/3. operators',
  '选择编程语言/JavaScript/4. features',
  '选择编程语言/JavaScript/5. stdlib',
  '选择编程语言/JavaScript/6. oop',
  '选择编程语言/JavaScript/7. async',
  '选择编程语言/JavaScript/8. dom',
  '选择编程语言/JavaScript/9. events',
  '选择编程语言/node',
  '选择编程语言/react'
];

const titleMap = {
  'canvas': 'Canvas',
  'infra': '前端基础设施',
  '1. basic': 'JavaScript 基础',
  '2. types': '数据类型',
  '3. operators': '运算符',
  '4. features': '语言特性',
  '5. stdlib': '标准库',
  '6. oop': '面向对象编程',
  '7. async': '异步编程',
  '8. dom': 'DOM 操作',
  '9. events': '事件处理',
  '10. bom': 'BOM 浏览器对象模型',
  '11. elements': 'HTML 元素',
  'node': 'Node.js',
  'react': 'React'
};

const descriptionMap = {
  'canvas': 'Canvas API 用于在网页上绘制图形，支持2D和3D图形渲染。',
  'infra': '前端基础设施包括构建工具、包管理、CI/CD等开发环境配置。',
  '1. basic': 'JavaScript 基础语法、变量声明、作用域等核心概念。',
  '2. types': 'JavaScript 的基本数据类型和引用类型。',
  '3. operators': 'JavaScript 中的各种运算符及其使用方法。',
  '4. features': 'JavaScript 的高级特性，如闭包、原型链、模块化等。',
  '5. stdlib': 'JavaScript 标准库，包括内置对象和方法。',
  '6. oop': 'JavaScript 面向对象编程，包括类、继承、封装等。',
  '7. async': 'JavaScript 异步编程，包括 Promise、async/await 等。',
  '8. dom': 'DOM 操作，包括元素选择、修改、事件绑定等。',
  '9. events': 'JavaScript 事件处理机制和常用事件。',
  '10. bom': '浏览器对象模型，包括 window、navigator、location 等对象。',
  '11. elements': 'HTML 元素的 JavaScript 操作和属性。',
  'node': 'Node.js 服务端 JavaScript 运行环境。',
  'react': 'React 前端框架，用于构建用户界面。'
};

console.log('开始创建缺失的 index.mdx 文件...\n');

let successCount = 0;
let failCount = 0;

missingIndexDirs.forEach(dir => {
  const fullPath = path.join(process.cwd(), 'docs/docs', dir);
  const indexPath = path.join(fullPath, 'index.mdx');
  
  // 获取文件夹名称
  const folderName = path.basename(dir);
  const title = titleMap[folderName] || folderName;
  const description = descriptionMap[folderName] || `${title}相关文档。`;
  
  // 检查文件夹是否存在
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ 文件夹不存在: ${dir}`);
    failCount++;
    return;
  }
  
  // 检查是否已有 index 文件
  if (fs.existsSync(indexPath)) {
    console.log(`⏭️  已存在: ${dir}/index.mdx`);
    return;
  }
  
  // 获取该文件夹下的所有文档文件
  const files = fs.readdirSync(fullPath)
    .filter(f => (f.endsWith('.md') || f.endsWith('.mdx')) && !f.startsWith('index'))
    .sort();
  
  // 生成内容
  let content = `---
title: ${title}
description: ${description}
---

# ${title}

${description}

`;
  
  if (files.length > 0) {
    content += `## 📚 本节内容\n\n`;
    files.forEach(file => {
      const fileName = file.replace(/\.(md|mdx)$/, '');
      const displayName = fileName.replace(/^\d+\.\s*/, ''); // 移除数字前缀
      content += `- [${displayName}](./${fileName})\n`;
    });
  } else {
    content += `:::info\n本节内容正在完善中...\n:::\n`;
  }
  
  // 写入文件
  try {
    fs.writeFileSync(indexPath, content, 'utf8');
    console.log(`✅ 已创建: ${dir}/index.mdx`);
    successCount++;
  } catch (error) {
    console.log(`❌ 创建失败: ${dir}/index.mdx - ${error.message}`);
    failCount++;
  }
});

console.log(`\n完成！成功: ${successCount}, 失败: ${failCount}`);

