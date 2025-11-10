# GitHub Pages 部署指南

本项目已经完全配置好了 GitHub Pages 部署，以下是详细的部署说明。

## 🚀 自动部署（推荐）

### 1. GitHub Actions 自动部署

项目已配置了 GitHub Actions 工作流（`.github/workflows/updata.yml`），当你推送代码到 `main` 分支时会自动部署：

```bash
# 推送到 main 分支触发自动部署
git add .
git commit -m "Update website"
git push origin main
```

### 2. 启用 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings** 标签
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分选择 **Deploy from a branch**
5. 选择 **gh-pages** 分支
6. 点击 **Save**

## 🛠️ 手动部署

### 方法一：使用 Docusaurus 内置部署

```bash
# 设置 GitHub 用户名并部署
GIT_USER=你的GitHub用户名 npm run deploy
```

### 方法二：使用 gh-pages 包

```bash
# 安装 gh-pages（如果还没安装）
npm install

# 构建并部署
npm run deploy:github
```

## 📋 部署前检查清单

- [ ] 确保 `docusaurus.config.js` 中的配置正确：
  - `url`: `https://你的用户名.github.io`
  - `baseUrl`: `/仓库名/`
  - `organizationName`: `你的GitHub用户名`
  - `projectName`: `仓库名`

- [ ] 确保 GitHub 仓库设置正确：
  - 仓库是公开的（或者你有 GitHub Pro）
  - GitHub Pages 已启用
  - 部署分支设置为 `gh-pages`

- [ ] 检查 GitHub Actions 权限：
  - 进入仓库 Settings > Actions > General
  - 确保 "Workflow permissions" 设置为 "Read and write permissions"

## 🌐 访问你的网站

部署成功后，你的网站将在以下地址可用：

```
https://你的用户名.github.io/仓库名/
```

例如：`https://weuqiang.github.io/weuqiangcreate_website/`

## 🔧 故障排除

### 部署失败

1. **检查 GitHub Actions 日志**：
   - 进入仓库的 "Actions" 标签
   - 查看失败的工作流日志

2. **常见问题**：
   - 确保 `package.json` 中的脚本正确
   - 检查 Node.js 版本兼容性
   - 确保所有依赖都已正确安装

### 页面显示异常

1. **检查 baseUrl 配置**：
   - 确保 `docusaurus.config.js` 中的 `baseUrl` 与仓库名匹配

2. **检查资源路径**：
   - 确保所有静态资源路径正确
   - 检查图片和 CSS 文件是否正确加载

### 自定义域名（可选）

如果你想使用自定义域名：

1. 在 `static/CNAME` 文件中添加你的域名
2. 在你的域名提供商处设置 DNS 记录
3. 在 GitHub 仓库设置中配置自定义域名

## 📚 相关文档

- [Docusaurus 部署文档](https://docusaurus.io/docs/deployment)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)

## 🎯 部署优化

项目已包含以下优化：

- ✅ SEO 优化（sitemap.xml, robots.txt）
- ✅ 性能优化（CSS 优化，GPU 加速）
- ✅ 响应式设计
- ✅ 暗色主题支持
- ✅ 自动化部署工作流
- ✅ 构建缓存优化

---

如果遇到问题，请检查 GitHub Actions 的运行日志或提交 Issue。