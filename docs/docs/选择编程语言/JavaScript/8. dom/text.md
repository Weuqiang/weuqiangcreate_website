# Text  DocumentFragment 

## Text 

`Text``Element``Attribute`

`firstChild``nextSibling``Document``createTextNode`

```javascript
// 
var textNode = document.querySelector('p').firstChild;

// 
var textNode = document.createTextNode('Hi');
document.querySelector('div').appendChild(textNode);
```

`Text`

```javascript
// 
var text1 = new Text();

// 
var text2 = new Text('This is a text node');
```

`<p> </p>`

`Node``CharacterData``Node`Node `CharacterData`

## Text 

### data

`data``nodeValue`

```javascript
// 
document.querySelector('p').firstChild.data
// 
document.querySelector('p').firstChild.nodeValue

// 
document.querySelector('p').firstChild.data = 'Hello World';
```

### wholeText

`wholeText``wholeText``data``textContent`

HTML 

```html
<p id="para">A <em>B</em> C</p>
```

`wholeText``data`

```javascript
var el = document.getElementById('para');
el.firstChild.wholeText // "A "
el.firstChild.data // "A "
```

`<em>``wholeText``data``<p>`

```javascript
el.removeChild(para.childNodes[1]);
el.firstChild.wholeText // "A C"
el.firstChild.data // "A "
```

### length

`length`

```javascript
(new Text('Hello')).length // 5
```

### nextElementSiblingpreviousElementSibling

`nextElementSibling``null`

```javascript
// HTML 
// <div>Hello <em>World</em></div>
var tn = document.querySelector('div').firstChild;
tn.nextElementSibling
// <em>World</em>
```

`previousElementSibling``null`

## Text 

### appendData()deleteData()insertData()replaceData()subStringData()

5`Text`

- `appendData()``Text`
- `deleteData()``Text`
- `insertData()``Text`
- `replaceData()`
- `subStringData()``Text`

```javascript
// HTML 
// <p>Hello World</p>
var pElementText = document.querySelector('p').firstChild;

pElementText.appendData('!');
//  Hello World!
pElementText.deleteData(7, 5);
//  Hello W
pElementText.insertData(7, 'Hello ');
//  Hello WHello
pElementText.replaceData(7, 5, 'World');
//  Hello WWorld
pElementText.substringData(7, 10);
// "World "
```

### remove()

`remove``Text`

```javascript
// HTML 
// <p>Hello World</p>
document.querySelector('p').firstChild.remove()
//  HTML 
// <p></p>
```

### splitText()

`splitText``Text``Text`

`Text`

```javascript
// html  <p id="p">foobar</p>
var p = document.getElementById('p');
var textnode = p.firstChild;

var newText = textnode.splitText(3);
newText // "bar"
textnode // "foo"
```

`normalize``Text`

`splitText``Text``normalize`

```javascript
p.childNodes.length // 2

//  Text 
p.normalize();
p.childNodes.length // 1
```

## DocumentFragment 

`DocumentFragment` DOM `parentNode``null``DocumentFragment` DOM 

 DOM `document.createDocumentFragment``DocumentFragment``DocumentFragment` DOM 

```javascript
var docFrag = document.createDocumentFragment();
// 
var docFrag = new DocumentFragment();

var li = document.createElement('li');
li.textContent = 'Hello World';
docFrag.appendChild(li);

document.querySelector('ul').appendChild(docFrag);
```

`DocumentFragment``li``DocumentFragment`

`DocumentFragment``appendChild()``insertBefore()``replaceChild()``DocumentFragment``textContent``DocumentFragment``cloneNode`

```javascript
document
  .querySelector('ul')
  .appendChild(docFrag.cloneNode(true));
```

`DocumentFragment``DocumentFragment`

`DocumentFragment`

```javascript
function reverse(n) {
  var f = document.createDocumentFragment();
  while(n.lastChild) f.appendChild(n.lastChild);
  n.appendChild(f);
}
```

`DocumentFragment``Node``ParentNode``DocumentFragment``Node`

- `children``HTMLCollection``DocumentFragment`
- `firstElementChild``DocumentFragment``null`
- `lastElementChild``DocumentFragment``null`
- `childElementCount``DocumentFragment`
