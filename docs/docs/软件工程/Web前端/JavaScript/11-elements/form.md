---
title: "form 元素"
description: "<form元素代表了表单，继承了 HTMLFormElement 接口。"
---

# form 元素

`<form>`元素代表了表单，继承了 HTMLFormElement 接口。

## 学习目标

学完本章，你应该能够：

- 理解 `<form>` 组织表单字段
- 掌握 submit/reset 与事件
- 认识 elements 集合与序列化

## 前置知识

在阅读下面的内容前，建议先掌握：

- [DOM 概览](/docs/软件工程/Web前端/JavaScript/dom/general)
- [HTML 表单](/docs/软件工程/Web前端/HTML/form)
- [Fetch 上传](/docs/软件工程/Web前端/JavaScript/bom/xmlhttprequest)

## 核心概念

`<form>` 把若干输入控件聚合成一个可提交单元。HTMLFormElement 提供 elements 集合、submit()/reset() 方法，以及 submit 事件——可在提交前用 preventDefault() 拦截并改用异步上传。

本章主线：
- elements 集合
- submit 与 reset
- 提交拦截

## HTMLFormElement 的实例属性

- `elements`：返回一个类似数组的对象，成员是属于该表单的所有控件元素。该属性只读。
- `length`：返回一个整数，表示属于该表单的控件数量。该属性只读。
- `name`：字符串，表示该表单的名称。
- `method`：字符串，表示提交给服务器时所使用的 HTTP 方法。
- `target`：字符串，表示表单提交后，服务器返回的数据的展示位置。
- `action`：字符串，表示表单提交数据的 URL。
- `enctype`（或`encoding`）：字符串，表示表单提交数据的编码方法，可能的值有`application/x-www-form-urlencoded`、`multipart/form-data`和`text/plain`。
- `acceptCharset`：字符串，表示服务器所能接受的字符编码，多个编码格式之间使用逗号或空格分隔。
- `autocomplete`：字符串`on`或`off`，表示浏览器是否要对`<input>`控件提供自动补全。
- `noValidate`：布尔值，表示是否关闭表单的自动校验。

## HTMLFormElement 的实例方法

- `submit()`：提交表单，但是不会触发`submit`事件和表单的自动校验。
- `reset()`：重置表单控件的值为默认值。
- `checkValidity()`：如果控件能够通过自动校验，返回`true`，否则返回`false`，同时触发`invalid`事件。

下面是一个创建表单并提交的例子。

```javascript
var f = document.createElement('form');
document.body.appendChild(f);
f.action = '/cgi-bin/some.cgi';
f.method = 'POST';
f.submit();
```

## 小结

`<form>` 是字段容器；elements 集合按名称访问控件；监听 submit 事件可用 preventDefault 改为异步提交。

## 练习

动手检验一下自己：

1. 遍历 form.elements 收集所有字段值。
2. 用 submit 事件配合 fetch 异步提交。

## 延伸阅读

- [a 元素](../a)
- [button 元素](../button)
- [img 元素](../image)
- [input 元素](../input)
- [option 元素](../option)
- [video audio](../video)
