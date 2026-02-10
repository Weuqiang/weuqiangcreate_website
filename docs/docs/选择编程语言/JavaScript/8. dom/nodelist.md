# NodeList HTMLCollection 

DOM `NodeList``HTMLCollection`

 DOM `NodeList``HTMLCollection``NodeList``HTMLCollection` HTML 

## NodeList 

### 

`NodeList``NodeList`

- `Node.childNodes`
- `document.querySelectorAll()`

```javascript
document.body.childNodes instanceof NodeList // true
```

`NodeList``length``forEach``pop``push`

```javascript
var children = document.body.childNodes;

Array.isArray(children) // false

children.length // 34
children.forEach(console.log)
```

NodeList `children``length``forEach`

`NodeList`

```javascript
var children = document.body.childNodes;
var nodeArr = Array.prototype.slice.call(children);
```

`forEach` NodeList `for`

```javascript
var children = document.body.childNodes;

for (var i = 0; i < children.length; i++) {
  var item = children[i];
}
```

NodeList DOM  NodeList `Node.childNodes` NodeList 

```javascript
var children = document.body.childNodes;
children.length // 18
document.body.appendChild(document.createElement('p'));
children.length // 19
```

NodeList `children``length`1

### NodeList.prototype.length

`length` NodeList 

```javascript
document.querySelectorAll('xxx').length
// 0
```

`document.querySelectorAll` NodeList  HTML `length``0`

### NodeList.prototype.forEach()

`forEach` NodeList `forEach`

```javascript
var children = document.body.childNodes;
children.forEach(function f(item, i, list) {
  // ...
}, this);
```

`f` NodeList `forEach``this`

### NodeList.prototype.item()

`item`

```javascript
document.body.childNodes.item(0)
```

`item(0)`

`item``null``item`

`item`

```javascript
document.body.childNodes[0]
```

### NodeList.prototype.keys()NodeList.prototype.values()NodeList.prototype.entries()

 ES6 `for...of``keys()``values()``entries()`

```javascript
var children = document.body.childNodes;

for (var key of children.keys()) {
  console.log(key);
}
// 0
// 1
// 2
// ...

for (var value of children.values()) {
  console.log(value);
}
// #text
// <script>
// ...

for (var entry of children.entries()) {
  console.log(entry);
}
// Array [ 0, #text ]
// Array [ 1, <script> ]
// ...
```

## HTMLCollection 

### 

`HTMLCollection`element`NodeList``HTMLCollection``forEach``for`

`HTMLCollection``Document``document.links``document.forms``document.images`

```javascript
document.links instanceof HTMLCollection // true
```

`HTMLCollection`

`id``name``HTMLCollection``id``name``null`

```javascript
// HTML 
// <img id="pic" src="http://example.com/foo.jpg">

var pic = document.getElementById('pic');
document.images.pic === pic // true
```

`document.images``HTMLCollection``<img>``id``HTMLCollection`

### HTMLCollection.prototype.length

`length``HTMLCollection`

```javascript
document.links.length // 18
```

### HTMLCollection.prototype.item()

`item`

```javascript
var c = document.images;
var img0 = c.item(0);
```

`item(0)`0

0`item``null`

### HTMLCollection.prototype.namedItem()

`namedItem``id``name``null`

```javascript
// HTML 
// <img id="pic" src="http://example.com/foo.jpg">

var pic = document.getElementById('pic');
document.images.namedItem('pic') === pic // true
```

`Collection.namedItem('value')``Collection['value']`

