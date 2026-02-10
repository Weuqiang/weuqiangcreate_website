# Node 

 DOM  Node  DOM 

## 

### Node.prototype.nodeType

`nodeType`

```javascript
document.nodeType // 9
```

9

Node 

```javascript
document.nodeType === Node.DOCUMENT_NODE // true
```

`nodeType``Node.DOCUMENT_NODE`

`nodeType`

- document9`Node.DOCUMENT_NODE`
- element1`Node.ELEMENT_NODE`
- attr2`Node.ATTRIBUTE_NODE`
- text3`Node.TEXT_NODE`
- DocumentFragment11`Node.DOCUMENT_FRAGMENT_NODE`
- DocumentType10`Node.DOCUMENT_TYPE_NODE`
- Comment8`Node.COMMENT_NODE`

`nodeType`

```javascript
var node = document.documentElement.firstChild;
if (node.nodeType === Node.ELEMENT_NODE) {
  console.log('');
}
```

### Node.prototype.nodeName

`nodeName`

```javascript
// HTML 
// <div id="d1">hello world</div>
var div = document.getElementById('d1');
div.nodeName // "DIV"
```

`<div>``nodeName``DIV`

`nodeName`

- document`#document`
- element
- attr
- text`#text`
- DocumentFragment`#document-fragment`
- DocumentType
- Comment`#comment`

### Node.prototype.nodeValue

`nodeValue`

textcommentattr`nodeValue``null``nodeValue`

```javascript
// HTML 
// <div id="d1">hello world</div>
var div = document.getElementById('d1');
div.nodeValue // null
div.firstChild.nodeValue // "hello world"
```

`div``nodeValue``null``div.firstChild`

### Node.prototype.textContent

`textContent`

```javascript
// HTML 
// <div id="divA">This is <span>some</span> text</div>

document.getElementById('divA').textContent
// This is some text
```

`textContent` HTML 

 HTML 

```javascript
document.getElementById('foo').textContent = '<p>GoodBye!</p>';
```

`<p>`

textcommentattr`textContent``nodeValue`

documentdoctype`textContent``null``document.documentElement.textContent`

### Node.prototype.baseURI

`baseURI` URL

```javascript
// 
// http://www.example.com/index.html
document.baseURI
// "http://www.example.com/index.html"
```

 URL`baseURI``null`

 URL`window.location` HTML `<base>`

```html
<base href="http://www.example.com/page.html">
```

`baseURI``<base>`

### Node.prototype.ownerDocument

`Node.ownerDocument``document`

```javascript
var d = p.ownerDocument;
d === document // true
```

`document``ownerDocument``null`

### Node.prototype.nextSibling

`Node.nextSibling``null`

```javascript
// HTML 
// <div id="d1">hello</div><div id="d2">world</div>
var d1 = document.getElementById('d1');
var d2 = document.getElementById('d2');

d1.nextSibling === d2 // true
```

`d1.nextSibling``d1``d2`

`<!-- comment -->`

`nextSibling`

```javascript
var el = document.getElementById('div1').firstChild;

while (el !== null) {
  console.log(el.nodeName);
  el = el.nextSibling;
}
```

`div1`

### Node.prototype.previousSibling

`previousSibling``null`

```javascript
// HTML 
// <div id="d1">hello</div><div id="d2">world</div>
var d1 = document.getElementById('d1');
var d2 = document.getElementById('d2');

d2.previousSibling === d1 // true
```

`d2.previousSibling``d2``d1`



### Node.prototype.parentNode

`parentNode`elementdocumentdocumentfragment

```javascript
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

`node.parentNode``node`

documentdocumentfragment`null` DOM `null`

### Node.prototype.parentElement

`parentElement``null`

```javascript
if (node.parentElement) {
  node.parentElement.style.color = 'red';
}
```



documentdocumentfragment`parentElement`

### Node.prototype.firstChildNode.prototype.lastChild

`firstChild``null`

```javascript
// HTML 
// <p id="p1"><span>First span</span></p>
var p1 = document.getElementById('p1');
p1.firstChild.nodeName // "SPAN"
```

`p``span`

`firstChild`

```javascript
// HTML 
// <p id="p1">
//   <span>First span</span>
//  </p>
var p1 = document.getElementById('p1');
p1.firstChild.nodeName // "#text"
```

`p``span``firstChild`

`lastChild``null``firstChild`

### Node.prototype.childNodes

`childNodes``NodeList`

```javascript
var children = document.querySelector('ul').childNodes;
```

`children``ul`



```javascript
var div = document.getElementById('div1');
var children = div.childNodes;

for (var i = 0; i < children.length; i++) {
  // ...
}
```

documentdocType HTML 

```javascript
var children = document.childNodes;
for (var i = 0; i < children.length; i++) {
  console.log(children[i].nodeType);
}
// 10
// 1
```

101

`childNodes``NodeList``NodeList`

### Node.prototype.isConnected

`isConnected`

```javascript
var test = document.createElement('p');
test.isConnected // false

document.body.appendChild(test);
test.isConnected // true
```

`test``isConnected``false``true`

## 

### Node.prototype.appendChild()

`appendChild()`

```javascript
var p = document.createElement('p');
document.body.appendChild(p);
```

`<p>``document.body`

 DOM `appendChild()`

```javascript
var div = document.getElementById('myDiv');
document.body.appendChild(div);
```

`myDiv``document.body`

`appendChild()``DocumentFragment``DocumentFragment``DocumentFragment``DocumentFragment`

### Node.prototype.hasChildNodes()

`hasChildNodes`

```javascript
var foo = document.getElementById('foo');

if (foo.hasChildNodes()) {
  foo.removeChild(foo.childNodes[0]);
}
```

`foo`

`hasChildNodes``true`



- `node.hasChildNodes()`
- `node.firstChild !== null`
- `node.childNodes && node.childNodes.length > 0`

`hasChildNodes``firstChild``nextSibling`

```javascript
function DOMComb(parent, callback) {
  if (parent.hasChildNodes()) {
    for (var node = parent.firstChild; node; node = node.nextSibling) {
      DOMComb(node, callback);
    }
  }
  callback(parent);
}

// 
DOMComb(document.body, console.log)
```

`DOMComb`

### Node.prototype.cloneNode()

`cloneNode`

```javascript
var cloneUL = document.querySelector('ul').cloneNode(true);
```



1`addEventListener``on-``node.onclick = fn`

2`Node.appendChild`

3DOM `id``id="xxx"``id``name`

### Node.prototype.insertBefore()

`insertBefore`

```javascript
var insertedNode = parentNode.insertBefore(newNode, referenceNode);
```

`insertBefore``newNode``parentNode``referenceNode``newNode``referenceNode``newNode`

```javascript
var p = document.createElement('p');
document.body.insertBefore(p, document.body.firstChild);
```

`<p>``document.body.firstChild``document.body`

`insertBefore``null`

```javascript
var p = document.createElement('p');
document.body.insertBefore(p, null);
```

`p``document.body``insertBefore`

 DOM 

`insertAfter``insertBefore``nextSibling`

```javascript
parent.insertBefore(s1, s2.nextSibling);
```

`parent``s1``s2``s1``s2``s2``s2.nextSibling``null``s1``s2`

`DocumentFragment``DocumentFragment``DocumentFragment``DocumentFragment`

### Node.prototype.removeChild()

`removeChild`

```javascript
var divA = document.getElementById('A');
divA.parentNode.removeChild(divA);
```

`divA``divA``divA`



```javascript
var element = document.getElementById('top');
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

 DOM 

`removeChild`

### Node.prototype.replaceChild()

`replaceChild`

```javascript
var replacedNode = parentNode.replaceChild(newChild, oldChild);
```

`replaceChild``newChild``oldChild``oldChild`

```javascript
var divA = document.getElementById('divA');
var newSpan = document.createElement('span');
newSpan.textContent = 'Hello World!';
divA.parentNode.replaceChild(newSpan, divA);
```

`divA`

### Node.prototype.contains()

`contains`

- 
- 
- 

```javascript
document.body.contains(node)
```

`node`

`contains``true`

```javascript
nodeA.contains(nodeA) // true
```

### Node.prototype.compareDocumentPosition()

`compareDocumentPosition``contains`

 |  | 
---------|------|-----
000000 | 0 | 
000001 | 1 | 
000010 | 2 | 
000100 | 4 | 
001000 | 8 | 
010000 | 16 | 
100000 | 32 | 

```javascript
// HTML 
// <div id="mydiv">
//   <form><input id="test" /></form>
// </div>

var div = document.getElementById('mydiv');
var input = document.getElementById('test');

div.compareDocumentPosition(input) // 20
input.compareDocumentPosition(div) // 10
```

`div``input``010000``input``div``000100``compareDocumentPosition``20``010100``010000 + 000100``compareDocumentPosition``10``001010`

`compareDocumentPosition`

```javascript
var head = document.head;
var body = document.body;
if (head.compareDocumentPosition(body) & 4) {
  console.log('');
} else {
  console.log('<body>  <head> ');
}
```

`compareDocumentPosition``4``&``<head>``<body>`

### Node.prototype.isEqualNode()Node.prototype.isSameNode()

`isEqualNode`

```javascript
var p1 = document.createElement('p');
var p2 = document.createElement('p');

p1.isEqualNode(p2) // true
```

`isSameNode`

```javascript
var p1 = document.createElement('p');
var p2 = document.createElement('p');

p1.isSameNode(p2) // false
p1.isSameNode(p1) // true
```

### Node.prototype.normalize()

`normalize`text

```javascript
var wrapper = document.createElement('div');

wrapper.appendChild(document.createTextNode('Part 1 '));
wrapper.appendChild(document.createTextNode('Part 2 '));

wrapper.childNodes.length // 2
wrapper.normalize();
wrapper.childNodes.length // 1
```

`normalize``wrapper``normalize`

`Text.splitText`Text 

### Node.prototype.getRootNode()

`getRootNode()``document``ownerDocument`

```javascript
document.body.firstChild.getRootNode() === document
// true
document.body.firstChild.getRootNode() === document.body.firstChild.ownerDocument
// true
```

`document``document.ownerDocument`

```javascript
document.getRootNode() // document
document.ownerDocument // null
```
