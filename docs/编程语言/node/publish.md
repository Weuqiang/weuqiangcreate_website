# 发布模块

## 模块产物类型

通常会编译多份产物以适应不同的使用场景：

1. **ES产物**：方便使用者进行tree shaking
2. **lib产物（CommonJS）**：默认无法按需加载，但使用者可以使用具体的路径来只引用想要的内容，或者使用插件（如babel-plugins-import）
3. **dist产物（UMD）**：无法按需加载，可以浏览器直接加载

## 发布前准备

### 1. 完善package.json

```json
{
  "name": "my-awesome-package",
  "version": "1.0.0",
  "description": "A brief description of your package",
  "main": "lib/index.js",
  "module": "es/index.js",
  "types": "lib/index.d.ts",
  "files": [
    "lib",
    "es",
    "dist",
    "README.md"
  ],
  "scripts": {
    "build": "npm run build:lib && npm run build:es && npm run build:dist",
    "build:lib": "babel src --out-dir lib --env-name lib",
    "build:es": "babel src --out-dir es --env-name es",
    "build:dist": "webpack --mode production",
    "prepublishOnly": "npm run build"
  },
  "keywords": ["javascript", "utility"],
  "author": "Your Name <your.email@example.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/username/my-awesome-package.git"
  },
  "bugs": {
    "url": "https://github.com/username/my-awesome-package/issues"
  },
  "homepage": "https://github.com/username/my-awesome-package#readme"
}
```

### 2. 创建.npmignore文件

```
src/
tests/
*.test.js
.babelrc
webpack.config.js
tsconfig.json
.eslintrc
.gitignore
.github/
docs/
examples/
```

### 3. 编写README.md

一个好的README应该包含：
- 项目简介
- 安装方法
- 使用示例
- API文档
- 贡献指南
- 许可证信息

## 构建配置

### Babel配置（.babelrc）

```json
{
  "env": {
    "lib": {
      "presets": [
        ["@babel/preset-env", {
          "modules": "cjs"
        }]
      ]
    },
    "es": {
      "presets": [
        ["@babel/preset-env", {
          "modules": false
        }]
      ]
    }
  }
}
```

### Webpack配置（webpack.config.js）

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'MyAwesomePackage',
    libraryTarget: 'umd',
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
```

## 发布流程

### 1. 登录npm

```bash
npm login
```

### 2. 检查包名是否可用

```bash
npm view <package-name>
```

### 3. 版本管理

```bash
# 补丁版本（bug修复）
npm version patch

# 次要版本（新功能）
npm version minor

# 主要版本（破坏性更改）
npm version major
```

### 4. 发布

```bash
# 正式发布
npm publish

# 发布beta版本
npm publish --tag beta

# 发布到指定registry
npm publish --registry https://registry.npmjs.org/
```

## 发布最佳实践

### 1. 语义化版本控制

遵循[Semantic Versioning](https://semver.org/)规范：
- **MAJOR**：不兼容的API更改
- **MINOR**：向后兼容的功能添加
- **PATCH**：向后兼容的bug修复

### 2. 使用npm scripts

```json
{
  "scripts": {
    "test": "jest",
    "lint": "eslint src/",
    "build": "npm run build:lib && npm run build:es && npm run build:dist",
    "prepublishOnly": "npm run test && npm run lint && npm run build",
    "postpublish": "git push && git push --tags"
  }
}
```

### 3. 使用标签管理不同版本

```bash
# 发布alpha版本
npm publish --tag alpha

# 发布beta版本
npm publish --tag beta

# 将beta版本设为latest
npm dist-tag add my-package@1.0.0-beta.1 latest
```

### 4. 撤销发布

```bash
# 撤销指定版本（24小时内）
npm unpublish my-package@1.0.0

# 撤销整个包（24小时内且无其他人依赖）
npm unpublish my-package --force

# 废弃版本（推荐）
npm deprecate my-package@1.0.0 "This version has been deprecated"
```

## 私有包发布

### 1. 发布到npm私有仓库

```bash
# 发布scoped私有包
npm publish --access restricted

# 发布scoped公开包
npm publish --access public
```

### 2. 发布到私有registry

```bash
# 设置registry
npm config set registry https://your-private-registry.com/

# 或在package.json中指定
{
  "publishConfig": {
    "registry": "https://your-private-registry.com/"
  }
}
```

## 自动化发布

### 使用GitHub Actions

```yaml
name: Publish Package

on:
  push:
    tags:
      - 'v*'

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
          registry-url: 'https://registry.npmjs.org'
      - run: npm ci
      - run: npm test
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

## 发布后维护

### 1. 监控下载量

```bash
npm view my-package
```

### 2. 处理issue和PR

及时回应用户反馈，维护项目的活跃度。

### 3. 定期更新依赖

```bash
npm audit
npm audit fix
```

### 4. 文档维护

保持README、CHANGELOG和API文档的更新。