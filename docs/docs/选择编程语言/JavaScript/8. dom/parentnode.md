# ParentNode ChildNode 

 Node `ParentNode``ChildNode`

## ParentNode 

mixin`ParentNode`elementdocumentdocumentFragment`ParentNode`

### ParentNode.children

`children``HTMLCollection`



```javascript
for (var i = 0; i < el.children.length; i++) {
  // ...
}
```

`children``HTMLCollection``length``0`

`HTMLCollection` DOM 

### ParentNode.firstElementChild

`firstElementChild``null`

```javascript
document.firstElementChild.nodeName
// "HTML"
```

`document``<HTML>`

### ParentNode.lastElementChild

`lastElementChild``null`

```javascript
document.lastElementChild.nodeName
// "HTML"
```

`document``<HTML>``document`

### ParentNode.childElementCount

`childElementCount``0`

```javascript
document.body.childElementCount // 13
```

### ParentNode.append()ParentNode.prepend()

**1ParentNode.append()**

`append()`



```javascript
var parent = document.body;

// 
var p = document.createElement('p');
parent.append(p);

// 
parent.append('Hello');

// 
var p1 = document.createElement('p');
var p2 = document.createElement('p');
parent.append(p1, p2);

// 
var p = document.createElement('p');
parent.append('Hello', p);
```



`Node.prototype.appendChild()`

- `append()``appendChild()`
- `append()``appendChild()`
- `append()``appendChild()`

**2ParentNode.prepend()**

`prepend()``append()`

## ChildNode 

`ChildNode`

### ChildNode.remove()

`remove()`

```javascript
el.remove()
```

 DOM `el`

### ChildNode.before()ChildNode.after()

**1ChildNode.before()**

`before()`



```javascript
var p = document.createElement('p');
var p1 = document.createElement('p');

// 
el.before(p);

// 
el.before('Hello');

// 
el.before(p, p1);

// 
el.before(p, 'Hello');
```

**2ChildNode.after()**

`after()``before`

### ChildNode.replaceWith()

`replaceWith()`

```javascript
var span = document.createElement('span');
el.replaceWith(span);
```

`el``span`

