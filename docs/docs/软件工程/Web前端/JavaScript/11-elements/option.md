---
title: "option 元素"
description: "<option元素表示下拉框（<select，<optgroup或<datalist）里面的一个选项"
---

# option 元素

`<option>`元素表示下拉框（`<select>`，`<optgroup>`或`<datalist>`）里面的一个选项。它是 HTMLOptionElement 接口的实例。

## 学习目标

学完本章，你应该能够：

- 理解 `<option>` 在 select 中的角色
- 掌握 value/selected/text
- 认识动态增删选项

## 前置知识

在阅读下面的内容前，建议先掌握：

- [DOM 概览](/docs/软件工程/Web前端/JavaScript/dom/general)
- [input 元素](../input)

## 核心概念

`<option>` 表示一个可选项，通常位于 `<select>` 内。HTMLOptionElement 的 value 是提交值、text 是显示文本、selected 表示是否被选中；可调用 Option 构造器动态创建选项。

本章主线：
- value 与 text
- selected 状态
- 动态创建选项

## 属性

除了继承 HTMLElement 接口的属性和方法，HTMLOptionElement 接口具有下面的属性。

- `disabled`：布尔值，表示该项是否可选择。
- `defaultSelected`：布尔值，表示该项是否默认选中。一旦设为`true`，该项的值就是`<select>`的默认值。
- `form`：返回`<option>`所在的表单元素。如果不属于任何表单，则返回`null`。该属性只读。
- `index`：整数，表示该选项在整个下拉列表里面的位置。该属性只读。
- `label`：字符串，表示对该选项的说明。如果该属性未设置，则返回该选项的文本内容。
- `selected`：布尔值，表示该选项是否选中。
- `text`：字符串，该选项的文本内容。
- `value`：字符串，该选项的值。表单提交时，上传的就是选中项的这个属性。

## Option() 构造函数

浏览器原生提供`Option()`构造函数，用来生成 HTMLOptionElement 实例。

```javascript
new Option(text, value, defaultSelected, selected)
```

它接受四个参数，都是可选的。

- text：字符串，表示该选项的文本内容。如果省略，返回空字符串。
- value：字符串，表示该选项的值。如果省略，默认返回`text`属性的值。
- defaultSelected：布尔值，表示该项是否默认选中，默认为`false`。注意，即使设为`true`，也不代表该项的`selected`属性为`true`。
- selected：布尔值，表示该项是否选中，默认为`false`。

```javascript
var newOption = new Option('hello', 'world', true);

newOption.text // "hello"
newOption.value // "world"
newOption.defaultSelected // true
newOption.selected // false
```

上面代码中，`newOption`的`defaultSelected`属性为`true`，但是它没有被选中（即`selected`属性为`false`）。

## 小结

`<option>` 是下拉项；value 提交、text 显示、selected 选中；可用 Option() 动态插入。

## 练习

动手检验一下自己：

1. 用 Option 构造器向 select 添加一个选项。
2. 读取当前选中项的 value。

## 延伸阅读

- [a 元素](../a)
- [button 元素](../button)
- [form 元素](../form)
- [img 元素](../image)
- [input 元素](../input)
- [video audio](../video)
