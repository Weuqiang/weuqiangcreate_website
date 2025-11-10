# 启动问题排查指南

## 🔍 常见启动问题及解决方案

### 1. 依赖未安装

**症状**: 启动时出现 `Module not found` 错误

**解决方案**:
```bash
# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装依赖
npm install
```

### 2. 端口被占用

**症状**: 提示 `Something is already running on port 3000`

**解决方案**:
```bash
# 使用 dev 命令，会自动选择其他端口
npm run dev

# 或者手动指定端口
PORT=3001 npm start
```

### 3. 缓存问题

**症状**: 启动后页面显示异常或报错

**解决方案**:
```bash
# 清理 Docusaurus 缓存
npm run clear

# 然后重新启动
npm start
```

### 4. Node.js 版本过低

**症状**: 启动时报错或功能异常

**检查版本**:
```bash
node --version
```

**要求**: Node.js >= 18.0

**解决方案**: 升级 Node.js 到最新 LTS 版本

### 5. 配置文件错误

**症状**: 启动时报语法错误或配置错误

**检查项**:
- `docusaurus.config.js` 语法是否正确
- `package.json` 中的脚本是否正确
- `src/theme/custom.css` 文件是否存在

**解决方案**:
```bash
# 检查配置文件语法
node -c docusaurus.config.js

# 检查 package.json
npm run typecheck
```

### 6. 文件路径问题

**症状**: 找不到文件或模块

**检查项**:
- `src/theme/custom.css` 是否存在
- `src/pages/index.js` 是否存在
- `docs/docs/` 和 `docs/read/` 目录是否存在

### 7. 权限问题（Windows/WSL）

**症状**: 无法访问文件或目录

**解决方案**:
- 确保在正确的目录下运行命令
- 检查文件权限
- 如果在 WSL 中，确保路径正确

## 🚀 标准启动流程

```bash
# 1. 进入项目目录
cd /mnt/c/Users/31616/Desktop/git/weuqiangcreate_website

# 2. 检查依赖
ls node_modules  # 应该能看到很多文件夹

# 3. 如果依赖不存在，安装依赖
npm install

# 4. 清理缓存（可选）
npm run clear

# 5. 启动开发服务器
npm start

# 或者使用 dev 模式（支持外部访问）
npm run dev
```

## 📝 启动成功标志

启动成功后，你应该看到类似以下输出：

```
[SUCCESS] Docusaurus website is running at: http://localhost:3000/
```

## 🔧 如果仍然无法启动

1. **查看完整错误信息**: 复制终端中的完整错误信息
2. **检查终端输出**: 查看是否有红色错误信息
3. **尝试构建**: 运行 `npm run build` 查看是否有构建错误
4. **检查日志**: 查看是否有 `.docusaurus` 目录中的日志文件

## 💡 快速修复命令

```bash
# 完整重置（谨慎使用）
rm -rf node_modules package-lock.json .docusaurus
npm install
npm run clear
npm start
```


