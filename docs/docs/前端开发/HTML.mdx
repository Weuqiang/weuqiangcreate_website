---
sidebarDepth: 4
---
# HTML
### meta标签

`meta`标签是网页的元数据，用来描述页面的信息，一个`meta`标签包括`name`和`content`的键值对。常见的`meta`标签有：

``` html
<meta charset="utf-8" /> <!-- 编码方式 -->
<meta name="title" content="页面的标题" />
<meta name="description" content="页面的描述" />
<meta name="keywords" content="页面的关键词" />
<meta http-equiv="refresh" content="3;url=messiahhh.github.io/blog/" /> <!-- 自动跳转 -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> <!-- 适配移动端viewport -->
```

上面提到的`title`、`description`、`keywords`组合起来就是搜索引擎SEO优化中经常提到的TDK。







### 资源预加载

预加载资源时进入请求队列的先后顺序是根据资源在代码中出现的顺序决定的，我们也可以使用`preload`来手动调整资源的预加载顺序。

``` html
<body>
    <script src="a.js"></script>
    <script src="b.js"></script>
    <script src="c.js"></script>
</body>
```

对于以上文档的脚本资源的加载顺序是`a、b、c`，如果想要在不改变脚本执行顺序的同时让`c.js`优先于`a.js`进入请求队列，我们可以这样改。此时脚本资源的加载顺序是`c、a、b`

``` html
<body>
    <link rel="preload" as="script" href="c.js">
    <script src="a.js"></script>
    <script src="b.js"></script>
    <script src="c.js"></script>
</body>
```

### script标签中async和defer的区别

解析HTML的时候需要注意JavaScript**脚本的执行会阻塞HTML的解析**，因此当解析HTML解析到一行外链脚本的时候，我们需要等待**脚本的加载**、再等待**脚本的执行**，才能继续后续HTML的解析。



如果我们不希望**脚本的加载**阻塞HTML的解析，我们可以给`script`标签加上`async`或者`defer`，此时该外链脚本的加载将不会阻塞后续HTML的解析（也就是解析后续HTML的同时并行加载该脚本，当该脚本被成功加载后则会停止后续HTML的解析并开始执行该脚本）

- `async`：外链脚本加载完成后会立刻停止HTML的解析并开始执行该脚本
- `defer`：外链脚本会在整个HTML都被解析完成后（或者说`DOMContentLoaded`事件触发）才执行

![defer and async](https://image-static.segmentfault.com/215/179/2151798436-59da4801c6772_articlex)





### DOMContentLoaded和Load

- `DOMContentLoaded`：HTML被完全加载和解析后触发，通常此时样式、图片等资源没有完全加载好
- `Load`：当所有的资源都加载完成，即包括HTML、样式、图片、脚本等资源。

在浏览器`network`一栏中可以看到这两个事件完成所经过的时间。



### img标签alt和title的区别

- `alt`是图片加载失败时兜底显示的内容，是必要属性
- `title`是鼠标hover到图片上时显示的内容，非必要属性



## 其他

### 重定向

- ``` html
  <meta http-equiv="refresh" content='2;https://messiahhh.github.io/blog'>
  ```

- ``` js
  location.href = 'https://messiahhh.github.io/blog'
  ```

- ``` js
  res.statusCode = 301 // or 302
  res.setHeader('Location', 'https://messiahhh.github.io/blog')
  ```

### markdown to html

我们的常见需求是把`markdown`文件解析成页面，有很多种工具可以实现这一目的，比如可以使用`gray-matter`、`remark`、`remark-html`、`remark-prism`来实现。

其中`gray-matter`可以用来获取`markdown`的内容和`yaml`元数据。

``` js
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

const markdown = fs.readFileSync(path, 'utf8')
const matterResult = matter(markdown)
const processedContent = await remark()
	.use(html)
	.use(prism)
	.process(matterResult.content)
const contentHtml = processedContent.toString()
```

## 语义化标签

HTML5引入了许多语义化标签，这些标签不仅有助于SEO，还能提高代码的可读性和可维护性。

### 结构性语义标签

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>语义化页面</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">首页</a></li>
                <li><a href="#about">关于</a></li>
                <li><a href="#contact">联系</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <header>
                <h1>文章标题</h1>
                <time datetime="2024-01-01">2024年1月1日</time>
            </header>
            
            <section>
                <h2>章节标题</h2>
                <p>章节内容...</p>
            </section>
            
            <aside>
                <h3>相关链接</h3>
                <ul>
                    <li><a href="#">相关文章1</a></li>
                    <li><a href="#">相关文章2</a></li>
                </ul>
            </aside>
        </article>
    </main>
    
    <footer>
        <p>&copy; 2024 版权所有</p>
    </footer>
</body>
</html>
```

### 内容语义标签

```html
<!-- 强调和重要性 -->
<p>这是<em>强调</em>的文本，这是<strong>重要</strong>的文本</p>

<!-- 引用 -->
<blockquote cite="https://example.com">
    <p>这是一段引用文本</p>
    <footer>— <cite>作者名</cite></footer>
</blockquote>

<!-- 缩写和定义 -->
<p><abbr title="HyperText Markup Language">HTML</abbr>是网页标记语言</p>
<p><dfn>响应式设计</dfn>是指网页能够适应不同设备屏幕的设计方法</p>

<!-- 代码相关 -->
<p>使用<code>console.log()</code>来输出信息</p>
<pre><code>function hello() {
    console.log('Hello World');
}</code></pre>

<!-- 键盘输入和示例输出 -->
<p>按<kbd>Ctrl</kbd> + <kbd>C</kbd>复制文本</p>
<p>命令执行结果：<samp>Hello World</samp></p>

<!-- 变量和数据 -->
<p>文件大小：<var>x</var> MB</p>
<p>今天的日期是<time datetime="2024-01-01">2024年1月1日</time></p>
```

## 表单元素

HTML表单是用户与网页交互的重要方式，HTML5增加了许多新的表单元素和属性。

### 基础表单

```html
<form action="/submit" method="post" enctype="multipart/form-data">
    <!-- 文本输入 -->
    <label for="username">用户名：</label>
    <input type="text" id="username" name="username" required minlength="3" maxlength="20">
    
    <!-- 密码输入 -->
    <label for="password">密码：</label>
    <input type="password" id="password" name="password" required>
    
    <!-- 邮箱输入 -->
    <label for="email">邮箱：</label>
    <input type="email" id="email" name="email" required>
    
    <!-- 电话输入 -->
    <label for="phone">电话：</label>
    <input type="tel" id="phone" name="phone" pattern="[0-9]{11}">
    
    <!-- 数字输入 -->
    <label for="age">年龄：</label>
    <input type="number" id="age" name="age" min="1" max="120">
    
    <!-- 日期输入 -->
    <label for="birthday">生日：</label>
    <input type="date" id="birthday" name="birthday">
    
    <!-- 颜色选择 -->
    <label for="color">喜欢的颜色：</label>
    <input type="color" id="color" name="color">
    
    <!-- 文件上传 -->
    <label for="avatar">头像：</label>
    <input type="file" id="avatar" name="avatar" accept="image/*">
    
    <!-- 单选框 -->
    <fieldset>
        <legend>性别：</legend>
        <input type="radio" id="male" name="gender" value="male">
        <label for="male">男</label>
        <input type="radio" id="female" name="gender" value="female">
        <label for="female">女</label>
    </fieldset>
    
    <!-- 复选框 -->
    <fieldset>
        <legend>兴趣爱好：</legend>
        <input type="checkbox" id="reading" name="hobbies" value="reading">
        <label for="reading">阅读</label>
        <input type="checkbox" id="music" name="hobbies" value="music">
        <label for="music">音乐</label>
        <input type="checkbox" id="sports" name="hobbies" value="sports">
        <label for="sports">运动</label>
    </fieldset>
    
    <!-- 下拉选择 -->
    <label for="city">城市：</label>
    <select id="city" name="city">
        <option value="">请选择城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="guangzhou">广州</option>
    </select>
    
    <!-- 多行文本 -->
    <label for="message">留言：</label>
    <textarea id="message" name="message" rows="4" cols="50" placeholder="请输入您的留言"></textarea>
    
    <!-- 数据列表 -->
    <label for="browser">浏览器：</label>
    <input list="browsers" id="browser" name="browser">
    <datalist id="browsers">
        <option value="Chrome">
        <option value="Firefox">
        <option value="Safari">
        <option value="Edge">
    </datalist>
    
    <!-- 提交按钮 -->
    <button type="submit">提交</button>
    <button type="reset">重置</button>
</form>
```

### HTML5新增输入类型

```html
<!-- 搜索框 -->
<input type="search" placeholder="搜索...">

<!-- URL输入 -->
<input type="url" placeholder="https://example.com">

<!-- 范围滑块 -->
<label for="volume">音量：</label>
<input type="range" id="volume" min="0" max="100" value="50">

<!-- 时间输入 -->
<input type="time">
<input type="datetime-local">
<input type="month">
<input type="week">
```

## 多媒体元素

### 图片和图形

```html
<!-- 响应式图片 -->
<picture>
    <source media="(min-width: 800px)" srcset="large.jpg">
    <source media="(min-width: 400px)" srcset="medium.jpg">
    <img src="small.jpg" alt="响应式图片" loading="lazy">
</picture>

<!-- 图片映射 -->
<img src="map.jpg" alt="地图" usemap="#map">
<map name="map">
    <area shape="rect" coords="0,0,100,100" href="#area1" alt="区域1">
    <area shape="circle" coords="200,200,50" href="#area2" alt="区域2">
</map>

<!-- SVG图形 -->
<svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
</svg>

<!-- Canvas画布 -->
<canvas id="myCanvas" width="200" height="100"></canvas>
```

### 音频和视频

```html
<!-- 音频 -->
<audio controls preload="metadata">
    <source src="audio.mp3" type="audio/mpeg">
    <source src="audio.ogg" type="audio/ogg">
    您的浏览器不支持音频播放。
</audio>

<!-- 视频 -->
<video controls width="640" height="360" poster="poster.jpg">
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <track kind="subtitles" src="subtitles.vtt" srclang="zh" label="中文字幕">
    您的浏览器不支持视频播放。
</video>

<!-- 嵌入内容 -->
<iframe src="https://example.com" width="600" height="400" 
        title="嵌入页面" sandbox="allow-scripts allow-same-origin">
</iframe>
```

## 无障碍访问

### ARIA属性

```html
<!-- 角色定义 -->
<div role="button" tabindex="0" aria-label="关闭对话框">×</div>
<nav role="navigation" aria-label="主导航">
    <ul>
        <li><a href="#" aria-current="page">首页</a></li>
        <li><a href="#">关于</a></li>
    </ul>
</nav>

<!-- 状态和属性 -->
<button aria-expanded="false" aria-controls="menu">菜单</button>
<div id="menu" aria-hidden="true">
    <!-- 菜单内容 -->
</div>

<!-- 标签和描述 -->
<input type="password" aria-labelledby="pwd-label" aria-describedby="pwd-help">
<label id="pwd-label">密码</label>
<div id="pwd-help">密码至少8位，包含字母和数字</div>

<!-- 实时区域 -->
<div aria-live="polite" id="status"></div>
<div aria-live="assertive" id="error"></div>
```

### 键盘导航

```html
<!-- 跳转链接 -->
<a href="#main-content" class="skip-link">跳转到主内容</a>

<!-- 焦点管理 -->
<div tabindex="-1" id="main-content">
    <h1>主要内容</h1>
</div>

<!-- 自定义组件的键盘支持 -->
<div role="tablist">
    <button role="tab" aria-selected="true" aria-controls="panel1" tabindex="0">标签1</button>
    <button role="tab" aria-selected="false" aria-controls="panel2" tabindex="-1">标签2</button>
</div>
<div role="tabpanel" id="panel1">内容1</div>
<div role="tabpanel" id="panel2" hidden>内容2</div>
```

## 性能优化

### 资源优化

```html
<!-- 预加载关键资源 -->
<link rel="preload" href="critical.css" as="style">
<link rel="preload" href="hero-image.jpg" as="image">
<link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>

<!-- 预连接到外部域名 -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="dns-prefetch" href="https://api.example.com">

<!-- 懒加载图片 -->
<img src="placeholder.jpg" data-src="actual-image.jpg" loading="lazy" alt="懒加载图片">

<!-- 响应式图片 -->
<img srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w" 
     sizes="(max-width: 480px) 100vw, (max-width: 800px) 50vw, 25vw" 
     src="medium.jpg" alt="响应式图片">
```

### 缓存策略

```html
<!-- 缓存控制 -->
<meta http-equiv="Cache-Control" content="max-age=3600">
<meta http-equiv="Expires" content="Wed, 21 Oct 2024 07:28:00 GMT">

<!-- 版本控制 -->
<link rel="stylesheet" href="styles.css?v=1.2.3">
<script src="app.js?v=1.2.3"></script>
```

## 最佳实践

### 文档结构

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="页面描述">
    <meta name="keywords" content="关键词1,关键词2">
    <title>页面标题</title>
    
    <!-- 样式表 -->
    <link rel="stylesheet" href="styles.css">
    
    <!-- 图标 -->
    <link rel="icon" href="favicon.ico">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
</head>
<body>
    <!-- 页面内容 -->
    
    <!-- 脚本放在底部 -->
    <script src="script.js"></script>
</body>
</html>
```

### 代码规范

1. **使用语义化标签**：选择最合适的HTML元素
2. **保持结构清晰**：合理的嵌套和缩进
3. **添加必要属性**：alt、title、lang等
4. **验证HTML**：使用W3C验证器检查代码
5. **优化性能**：压缩代码、优化图片、使用CDN
6. **考虑无障碍**：添加ARIA属性、支持键盘导航
7. **响应式设计**：使用viewport meta标签、响应式图片
