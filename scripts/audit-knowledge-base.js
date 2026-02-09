#!/usr/bin/env node

/**
 * 知识库内容审查脚本
 * 检查文件完整性、内容质量、代码示例等
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', 'docs', 'docs');
const MIN_CONTENT_LENGTH = 500;

const stats = {
  totalFiles: 0,
  emptyFiles: [],
  shortFiles: [],
  missingIndex: [],
  moduleStats: {},
  totalWords: 0,
  totalCodeBlocks: 0,
};

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath, callback);
    } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
      callback(filePath);
    }
  });
}

function analyzeFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relativePath = path.relative(DOCS_DIR, filePath);
  const moduleName = relativePath.split(path.sep)[0];
  
  if (!stats.moduleStats[moduleName]) {
    stats.moduleStats[moduleName] = {
      files: 0,
      words: 0,
      codeBlocks: 0,
      emptyFiles: 0,
      shortFiles: 0,
    };
  }
  
  stats.totalFiles++;
  stats.moduleStats[moduleName].files++;
  
  const contentWithoutFrontmatter = content.replace(/^---[\s\S]*?---\n/, '');
  
  if (contentWithoutFrontmatter.trim().length < 50) {
    stats.emptyFiles.push(relativePath);
    stats.moduleStats[moduleName].emptyFiles++;
    return;
  }
  
  const contentLength = contentWithoutFrontmatter.length;
  if (contentLength < MIN_CONTENT_LENGTH) {
    stats.shortFiles.push({
      path: relativePath,
      length: contentLength,
    });
    stats.moduleStats[moduleName].shortFiles++;
  }
  
  const words = contentWithoutFrontmatter.split(/\s+/).length;
  stats.totalWords += words;
  stats.moduleStats[moduleName].words += words;
  
  const codeBlocks = (contentWithoutFrontmatter.match(/```/g) || []).length / 2;
  stats.totalCodeBlocks += codeBlocks;
  stats.moduleStats[moduleName].codeBlocks += codeBlocks;
}

function checkMissingIndex() {
  const modules = fs.readdirSync(DOCS_DIR);
  
  modules.forEach(module => {
    const modulePath = path.join(DOCS_DIR, module);
    const stat = fs.statSync(modulePath);
    
    if (stat.isDirectory()) {
      const indexPath = path.join(modulePath, 'index.mdx');
      if (!fs.existsSync(indexPath)) {
        stats.missingIndex.push(module);
      }
    }
  });
}

function generateReport() {
  console.log('\n' + '='.repeat(80));
  console.log('知识库内容审查报告');
  console.log('='.repeat(80) + '\n');
  
  console.log('📊 总体统计');
  console.log('-'.repeat(80));
  console.log(`总文件数: ${stats.totalFiles}`);
  console.log(`总字数: ${stats.totalWords.toLocaleString()}`);
  console.log(`总代码块: ${Math.floor(stats.totalCodeBlocks)}`);
  console.log(`平均每文件字数: ${Math.floor(stats.totalWords / stats.totalFiles)}`);
  
  console.log('\n📁 模块统计 (按文件数排序)');
  console.log('-'.repeat(80));
  
  Object.entries(stats.moduleStats)
    .sort((a, b) => b[1].files - a[1].files)
    .forEach(([module, data]) => {
      const issues = data.emptyFiles + data.shortFiles;
      console.log(`${module}: ${data.files} 文件, ${data.words.toLocaleString()} 字, ${Math.floor(data.codeBlocks)} 代码块, ${issues} 问题`);
    });
  
  if (stats.emptyFiles.length > 0) {
    console.log(`\n⚠️  空文件: ${stats.emptyFiles.length} 个`);
  }
  
  if (stats.shortFiles.length > 0) {
    console.log(`📝 短文件: ${stats.shortFiles.length} 个`);
  }
  
  if (stats.missingIndex.length > 0) {
    console.log(`\n❌ 缺失 index.mdx: ${stats.missingIndex.join(', ')}`);
  }
  
  const reportPath = path.join(__dirname, '..', 'knowledge-base-audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(stats, null, 2));
  console.log(`\n✅ 详细报告: ${reportPath}\n`);
}

function main() {
  console.log('开始审查知识库...\n');
  walkDir(DOCS_DIR, analyzeFile);
  checkMissingIndex();
  generateReport();
}

main();

