---
title: "script noscript"
description: "<script标签用于在网页插入脚本，<noscript标签用于指定浏览器不支持脚本时的显示内容。"
sidebar_position: 13
---
# script noscript

`<script>`标签用于在网页插入脚本，`<noscript>`标签用于指定浏览器不支持脚本时的显示内容。

## 学习目标

学完本章，你应该能够：

- 区分内联脚本与外链脚本（`<script src>`）
- 理解 `async` / `defer` 对加载与执行时机的影响
- 知道 `<noscript>` 的降级用途

## 前置知识

在阅读下面的内容前，建议先掌握：

- 先读 [HTML 入门](/docs/编程语言/Web前端/HTML/intro)
- JS 语言本身见 [JavaScript 简介](/docs/编程语言/Web前端/JavaScript/basic/introduction)

## 核心概念

`<script>` 把 JavaScript 引入页面：内联写在标签内，外链用 `<script src>`。默认脚本会阻塞解析；`async` 异步加载、加载完立即执行（顺序不保），`defer` 异步加载、等文档解析完再按序执行。无 JS 时用 `<noscript>` 提供降级内容。

本章主线：
- `<script>`：内联与外链
- 执行时机：普通 / async / defer
- `<noscript>` 与降级方案

## `<script>`

`<script>`用于加载脚本代码，目前主要是加载 JavaScript 代码。

```html
<script>
console.log('hello world');
</script>
```

上面代码嵌入网页，会立即执行。

`<script>`也可以加载外部脚本，`src`属性给出外部脚本的地址。

```html
<script src="javascript.js"></script>
```

上面代码会加载`javascript.js`脚本文件，并执行。

`type`属性给出脚本的类型，默认是 JavaScript 代码，所以可省略。完整的写法其实是下面这样。

```html
<script type="text/javascript" src="javascript.js"></script>
```

`type`属性也可以设成`module`，表示这是一个 ES6 模块，不是传统脚本。

```html
<script type="module" src="main.js"></script>
```

对于那些不支持 ES6 模块的浏览器，可以设置`nomodule`属性。支持 ES6 模块的浏览器，会不加载指定的脚本。这个属性通常与`type="module"`配合使用，作为老式浏览器的回退方案。

```html
<script type="module" src="main.js"></script>
<script nomodule src="fallback.js"></script>
```

`<script>`还有下面一些其他属性，大部分跟 JavaScript 语言有关，可以参考相关的 JavaScript 教程。

- `async`：该属性指定 JavaScript 代码为异步执行，不是造成阻塞效果，JavaScript 代码默认是同步执行。
- `defer`：该属性指定 JavaScript 代码不是立即执行，而是页面解析完成后执行。
- `crossorigin`：如果采用这个属性，就会采用跨域的方式加载外部脚本，即 HTTP 请求的头信息会加上`origin`字段。
- `integrity`：给出外部脚本的哈希值，防止脚本被篡改。只有哈希值相符的外部脚本，才会执行。
- `nonce`：一个密码随机数，由服务器在 HTTP 头信息里面给出，每次加载脚本都不一样。它相当于给出了内嵌脚本的白名单，只有在白名单内的脚本才能执行。
- `referrerpolicy`：HTTP 请求的`Referer`字段的处理方法。

## `<noscript>`

`<noscript>`标签用于浏览器不支持或关闭 JavaScript 时，所要显示的内容。用户关闭 JavaScript 可能是为了节省带宽，以延长手机电池寿命，或者为了防止追踪，保护隐私。

```html
<noscript>
  您的浏览器不能执行 JavaScript 语言，页面无法正常显示。
</noscript>
```

上面这段代码，只有浏览器不能执行 JavaScript 代码时才会显示，否则就不会显示。

## 小结

脚本可内联或外链；`defer` 等解析完再按序执行、`async` 加载完就跑；`<noscript>` 为禁用 JS 的环境提供兜底。

## 练习

动手检验一下自己：

1. 分别用 `async` 与 `defer` 引入同一个脚本，观察执行顺序差异。
2. 说明把 `<script>` 放在 `</body>` 前的效果与 `defer` 是否等价。
3. 写一个 `<noscript>` 提示用户启用 JavaScript。

## 延伸阅读

- [HTML5](..)
- [a](../a)
- [网页元素的属性](../attribute)
- [其他标签](../elements)
- [HTML 字符编码](../encode)
- [表单标签](../form)
- [iframe](../iframe)
- [图像标签](../image)
- [HTML 语言简介](../intro)
