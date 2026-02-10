# 

HTML “”attribute

```html
<a id="test" href="http://www.example.com">
  
</a>
```

`a``id``href`

`Attr``HTMlElement`

## Element.attributes 

`attributes``attributes``null`



```javascript
// HTML 
// <body bgcolor="yellow" onload="">
document.body.attributes[0]
document.body.attributes.bgcolor
document.body.attributes['ONLOAD']
```



`name``value``nodeName``nodeValue`

```javascript
// HTML
// <div id="mydiv">
var n = document.getElementById('mydiv');

n.attributes[0].name // "id"
n.attributes[0].nodeName // "id"

n.attributes[0].value // "mydiv"
n.attributes[0].nodeValue // "mydiv"
```



```javascript
var para = document.getElementsByTagName('p')[0];
var result = document.getElementById('result');

if (para.hasAttributes()) {
  var attrs = para.attributes;
  var output = '';
  for(var i = attrs.length - 1; i >= 0; i--) {
    output += attrs[i].name + '->' + attrs[i].value;
  }
  result.textContent = output;
} else {
  result.textContent = 'No attributes to show';
}
```

## 

HTML 

```javascript
var a = document.getElementById('test');
a.id // "test"
a.href // "http://www.example.com/"
```

`a``id``href`



```javascript
var img = document.getElementById('myImage');
img.src = 'http://www.example.com/image.jpg';
```

`img``src`



```javascript
var f = document.forms[0];
f.action = 'submit.php';
f.method = 'POST';
```



`delete`

HTML  JavaScript  JavaScript `onClick`

 HTML  JavaScript  JavaScript 

- `for``htmlFor`
- `class``className`

HTML  JavaScript `true``onClick``style``CSSStyleDeclaration`

## 

### 



- `getAttribute()`
- `getAttributeNames()`
- `setAttribute()`
- `hasAttribute()`
- `hasAttributes()`
- `removeAttribute()`



1



2

`getAttribute()`

3

`for``class`

```javascript
var image = document.images[0];
image.setAttribute('class', 'myImage');
```

`setAttribute``class``className`

### Element.getAttribute()

`Element.getAttribute``null`

```javascript
// HTML 
// <div id="div1" align="left">
var div = document.getElementById('div1');
div.getAttribute('align') // "left"
```

### Element.getAttributeNames()

`Element.getAttributeNames()``Element.attributes`

```javascript
var mydiv = document.getElementById('mydiv');

mydiv.getAttributeNames().forEach(function (key) {
  var value = mydiv.getAttribute(key);
  console.log(key, value);
})
```



### Element.setAttribute()

`Element.setAttribute`

```javascript
// HTML 
// <button>Hello World</button>
var b = document.querySelector('button');
b.setAttribute('name', 'myButton');
b.setAttribute('disabled', true);
```

`button``name``myButton``disabled``true`

`true``true``disable``<button>``setAttribute``disabled`

### Element.hasAttribute()

`Element.hasAttribute`

```javascript
var d = document.getElementById('div1');

if (d.hasAttribute('align')) {
  d.setAttribute('align', 'center');
}
```

`div``align`

### Element.hasAttributes()

`Element.hasAttributes``false``true`

```javascript
var foo = document.getElementById('foo');
foo.hasAttributes() // true
```

### Element.removeAttribute()

`Element.removeAttribute`

```javascript
// HTML 
// <div id="div1" align="left" width="200px">
document.getElementById('div1').removeAttribute('align');
// HTML
// <div id="div1" width="200px">
```

## dataset 

HTML JavaScript 

```html
<div id="mydiv" foo="bar">
```

`div``foo``getAttribute()``setAttribute()`

```javascript
var n = document.getElementById('mydiv');
n.getAttribute('foo') // bar
n.setAttribute('foo', 'baz')
```

 HTML 

`data-*`

```html
<div id="mydiv" data-foo="bar">
```

`dataset` HTML `data-*`

```javascript
var n = document.getElementById('mydiv');
n.dataset.foo // bar
n.dataset.foo = 'baz'
```

`dataset.foo``data-foo`

`data-*``delete`

```javascript
delete document.getElementById('myDiv').dataset.foo;
```

`dataset``getAttribute('data-foo')``removeAttribute('data-foo')``setAttribute('data-foo')``hasAttribute('data-foo')``data-*`

`data-``-``.``:``_`)`A``Z``data-helloWorld``data-hello-world`

`dataset``dataset`+`dataset.helloWorld``data-hello-world`
