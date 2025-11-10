# GitHub Pages 部署指南

本指南将帮助您将个人网站部署到 GitHub Pages 上，让全世界都能访问您的网站。

## 📋 部署前准备

### 1. 确保项目配置正确

项目已经配置好了 GitHub Pages 部署所需的所有设置：

- ✅ **GitHub Actions 工作流**：`.github/workflows/updata.yml`
- ✅ **Docusaurus 配置**：`docusaurus.config.js` 中的 URL 和 baseUrl
- ✅ **构建脚本**：`package.json` 中的构建命令
- ✅ **静态文件**：`static` 目录中的必要文件

### 2. GitHub 仓库要求

- GitHub 账户：`Weuqiang`
- 仓库名称：`weuqiangcreate_website`
- 仓库地址：`https://github.com/Weuqiang/weuqiangcreate_website`

## 🚀 部署步骤

### 步骤 1：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角的 "+" 按钮，选择 "New repository"
3. 仓库名称填写：`weuqiangcreate_website`
4. 设置为 **Public**（GitHub Pages 免费版需要公开仓库）
5. 不要初始化 README、.gitignore 或 license（因为本地已有）
6. 点击 "Create repository"

### 步骤 2：推送代码到 GitHub

在项目根目录打开终端，执行以下命令：

```bash
# 初始化 Git 仓库（如果还没有）
git init

# 添加远程仓库
git remote add origin https://github.com/Weuqiang/weuqiangcreate_website.git

# 添加所有文件
git add .

# 提交代码
git commit -m "Initial commit: Personal website with blog and docs"

# 推送到 GitHub
git push -u origin main
```

### 步骤 3：启用 GitHub Pages

1. 进入 GitHub 仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分选择：
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
5. 点击 "Save"

### 步骤 4：配置 GitHub Actions 权限

1. 在仓库的 "Settings" 页面
2. 点击左侧的 "Actions" → "General"
3. 在 "Workflow permissions" 部分：
   - 选择 "Read and write permissions"
   - 勾选 "Allow GitHub Actions to create and approve pull requests"
4. 点击 "Save"

### 步骤 5：触发部署

推送代码后，GitHub Actions 会自动运行：

1. 进入仓库的 "Actions" 选项卡
2. 查看 "Deploy to GitHub Pages" 工作流的运行状态
3. 等待构建完成（通常需要 2-5 分钟）

## 🌐 访问您的网站

部署成功后，您的网站将在以下地址可用：

**主网站地址**：`https://weuqiang.github.io/weuqiangcreate_website/`

**具体页面**：
- 首页：`https://weuqiang.github.io/weuqiangcreate_website/`
- 博客：`https://weuqiang.github.io/weuqiangcreate_website/blog`
- 文档：`https://weuqiang.github.io/weuqiangcreate_website/docs`
- 案例展示：`https://weuqiang.github.io/weuqiangcreate_website/cases`
- 书架：`https://weuqiang.github.io/weuqiangcreate_website/bookshelf`

## 🔄 自动部署

配置完成后，每次您推送代码到 `main` 分支时，网站都会自动更新：

```bash
# 修改代码后
git add .
git commit -m "Update content"
git push origin main
```

## 🛠️ 故障排除

### 常见问题

1. **404 错误**
   - 检查 GitHub Pages 设置中的分支是否为 `gh-pages`
   - 确认 Actions 工作流已成功运行

2. **样式或资源加载失败**
   - 检查 `docusaurus.config.js` 中的 `baseUrl` 配置
   - 确保为 `/weuqiangcreate_website/`

3. **Actions 工作流失败**
   - 检查 Actions 权限设置
   - 查看工作流日志中的错误信息

### 检查部署状态

1. **GitHub Actions**：仓库 → Actions 选项卡
2. **GitHub Pages**：仓库 → Settings → Pages
3. **部署历史**：查看 `gh-pages` 分支的提交记录

## 📝 自定义域名（可选）

如果您有自定义域名：

1. 编辑 `static/CNAME` 文件：
   ```
   your-domain.com
   ```

2. 在域名提供商处设置 DNS：
   ```
   CNAME record: www.your-domain.com → weuqiang.github.io
   A record: your-domain.com → 185.199.108.153
   A record: your-domain.com → 185.199.109.153
   A record: your-domain.com → 185.199.110.153
   A record: your-domain.com → 185.199.111.153
   ```

3. 在 GitHub Pages 设置中添加自定义域名

## 🎉 完成！

恭喜！您的个人网站现在已经部署到 GitHub Pages 上了。您可以：

- 📝 继续添加博客文章到 `blog/` 目录
- 📚 更新文档内容到 `docs/` 目录
- 🎨 自定义网站样式和配置
- 🔗 分享您的网站链接给朋友和同事

每次推送代码，网站都会自动更新，让您专注于内容创作！