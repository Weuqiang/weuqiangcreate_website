# 

## 

listenerevent-driven

JavaScript 

### HTML  on- 

HTML 

```html
<body onload="doSomething()">
<div onclick="console.log('')">
```

`body``load``div``click`

`on``onload``on + load``load`



```html
<!--  -->
<body onload="doSomething()">

<!--  -->
<body onload="doSomething">
```

`on-` JavaScript 



```html
<div onclick="console.log(2)">
  <button onclick="console.log(1)"></button>
</div>
```

`<button>``<div>``<button>``click``<div>``click``on-``1``2`

`on-``setAttribute``on-`

```javascript
el.setAttribute('onclick', 'doSomething()');
// 
// <Element onclick="doSomething()">
```

### 



```javascript
window.onload = doSomething;

div.onclick = function (event) {
  console.log('');
};
```



 HTML `on-``doSomething``doSomething()`

### EventTarget.addEventListener()

 DOM `addEventListener`

```javascript
window.addEventListener('load', doSomething, false);
```

`addEventListener``EventTarget`

### 

“HTML  on- ” HTML  JavaScript 

“”`onclick`

`EventTarget.addEventListener`

- 
- 
-  DOM `window``XMLHttpRequest` JavaScript 

## this 

`this`

```html
<button id="btn" onclick="console.log(this.id)"></button>
```

`btn`

`this`

```javascript
// HTML 
// <button id="btn"></button>
var btn = document.getElementById('btn');

// 
btn.onclick = function () {
  console.log(this.id);
};

// 
btn.addEventListener(
  'click',
  function (e) {
    console.log(this.id);
  },
  false
);
```

`btn`

## 

propagation

- ****`window`“”capture phase
- ****“”target phase
- ****`window`“”bubbling phase



```html
<div>
  <p></p>
</div>
```

`<div>``<p>`

`click``<p>``click`

```javascript
var phases = {
  1: 'capture',
  2: 'target',
  3: 'bubble'
};

var div = document.querySelector('div');
var p = document.querySelector('p');

div.addEventListener('click', callback, true);
p.addEventListener('click', callback, true);
div.addEventListener('click', callback, false);
p.addEventListener('click', callback, false);

function callback(event) {
  var tag = event.currentTarget.tagName;
  var phase = phases[event.eventPhase];
  console.log("Tag: '" + tag + "'. EventPhase: '" + phase + "'");
}

// 
// Tag: 'DIV'. EventPhase: 'capture'
// Tag: 'P'. EventPhase: 'target'
// Tag: 'P'. EventPhase: 'target'
// Tag: 'DIV'. EventPhase: 'bubble'
```

`click``<div>`1`<p>`2

1. `<div>``<p>``<div>``click`
2. `<div>``<p>``<p>``click`
3. `<p>``<div>``<div>``click`

`<p>``addEventListener``click``<p>``target`

`click``<div>``<p>``<p>``target`

`window``document``html``document.documentElement``body``document.body``window``document``html``body``div``p``p``div``body``html``document``window`

## 

delegation

```javascript
var ul = document.querySelector('ul');

ul.addEventListener('click', function (event) {
  if (event.target.tagName.toLowerCase() === 'li') {
    // some code
  }
});
```

`click``<ul>``<li>``click``<li>`

`stopPropagation`

```javascript
//  p 
p.addEventListener('click', function (event) {
  event.stopPropagation();
}, true);

//  p 
p.addEventListener('click', function (event) {
  event.stopPropagation();
}, false);
```

`stopPropagation`

`stopPropagation``<p>``click``click`

```javascript
p.addEventListener('click', function (event) {
  event.stopPropagation();
  console.log(1);
});

p.addEventListener('click', function(event) {
  // 
  console.log(2);
});
```

`p``click``stopPropagation`12

`click``stopImmediatePropagation`

```javascript
p.addEventListener('click', function (event) {
  event.stopImmediatePropagation();
  console.log(1);
});

p.addEventListener('click', function(event) {
  // 
  console.log(2);
});
```

`stopImmediatePropagation``click`12
