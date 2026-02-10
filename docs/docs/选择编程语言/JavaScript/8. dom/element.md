# Element 

## 

`Element` HTML  HTML  DOM `Element`

`nodeType``1`

```javascript
var p = document.querySelector('p');
p.nodeName // "P"
p.nodeType // 1
```

`Element``Node``Node``Element`

 HTML `<a>``HTMLAnchorElement()``<button>``HTMLButtonElement()``Element`

## 

### 

**1Element.id**

`Element.id``id`

```javascript
// HTML  <p id="foo">
var p = document.querySelector('p');
p.id // "foo"
```

`id``<p id="foo">``<p id="FOO">``id`

**2Element.tagName**

`Element.tagName``nodeName`

```javascript
// HTML
// <span id="myspan">Hello</span>
var span = document.getElementById('myspan');
span.id // "myspan"
span.tagName // "SPAN"
```

**3Element.dir**

`Element.dir``"ltr"``"rtl"`

**4Element.accessKey**

`Element.accessKey`

```javascript
// HTML 
// <button accesskey="h" id="btn"></button>
var btn = document.getElementById('btn');
btn.accessKey // "h"
```

`btn``h``Alt + h`

**5Element.draggable**

`Element.draggable`

**6Element.lang**

`Element.lang`

```javascript
// HTML 
// <html lang="en">
document.documentElement.lang // "en"
```

**7Element.tabIndex**

`Element.tabIndex` Tab 

`tabIndex``-1` Tab `tabIndex``tabIndex``tabIndex``0``tabIndex`

**8Element.title**

`Element.title` HTML `title`

### 

**1Element.hidden**

`Element.hidden` HTML `hidden`

```javascript
var btn = document.getElementById('btn');
var mydiv = document.getElementById('mydiv');

btn.addEventListener('click', function () {
  mydiv.hidden = !mydiv.hidden;
}, false);
```

 CSS CSS `Element.hidden`

CSS `Element.hidden` CSS `display: none``visibility: visible``Element.hidden` CSS 

**2Element.contentEditableElement.isContentEditable**

HTML `contentEditable`

```html
<div contenteditable>123</div>
```

`<div>``contenteditable`

`Element.contentEditable``contenteditable`

- `"true"`
- `"false"`
- `"inherit"`

`Element.isContentEditable``contenteditable`

### Element.attributes

`Element.attributes`

```javascript
var p = document.querySelector('p');
var attrs = p.attributes;

for (var i = attrs.length - 1; i >= 0; i--) {
  console.log(attrs[i].name + '->' + attrs[i].value);
}
```

`p`

### Element.classNameElement.classList

`className``class``class`

`classList``class`

```javascript
// HTML  <div class="one two three" id="myDiv"></div>
var div = document.getElementById('myDiv');

div.className
// "one two three"

div.classList
// {
//   0: "one"
//   1: "two"
//   2: "three"
//   length: 3
// }
```

`className``classList``length``class`

`classList`

- `add()` class
- `remove()` class
- `contains()` class
- `toggle()` class 
- `item()` class
- `toString()` class 

```javascript
var div = document.getElementById('myDiv');

div.classList.add('myCssClass');
div.classList.add('foo', 'bar');
div.classList.remove('myCssClass');
div.classList.toggle('myCssClass'); //  myCssClass 
div.classList.contains('myCssClass'); //  true  false
div.classList.item(0); //  Class
div.classList.toString();
```

`className``classList` class 

```javascript
var foo = document.getElementById('foo');

// class
foo.className += 'bold';
foo.classList.add('bold');

// class
foo.classList.remove('bold');
foo.className = foo.className.replace(/^bold$/, '');
```

`toggle``true``false`

```javascript
el.classList.toggle('abc', boolValue);

// 
if (boolValue) {
  el.classList.add('abc');
} else {
  el.classList.remove('abc');
}
```

### Element.dataset

`data-`

```html
<div data-timestamp="1522907809292"></div>
```

`<div>``data-timestamp`

`Element.dataset``data-`

```javascript
// <article
//   id="foo"
//   data-columns="3"
//   data-index-number="12314"
//   data-parent="cars">
//   ...
// </article>
var article = document.getElementById('foo');
article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"
```

`dataset`

HTML `data-``-``.``:``_` JavaScript `dataset`

- `data-`
- 
- 

`data-abc-def``dataset.abcDef``data-abc-1``dataset["abc-1"]`

`dataset``data-``Element.getAttribute()``Element.setAttribute()`

```javascript
var mydiv = document.getElementById('mydiv');

mydiv.dataset.foo = 'bar';
mydiv.getAttribute('data-foo') // "bar"
```

### Element.innerHTML

`Element.innerHTML` HTML `<HTML>``<body>`

`innerHTML`

```javascript
el.innerHTML = '';
```

`el``el`

`&``<``>``innerHTML``&amp;``&lt;``&gt;``element.textContent`

```javascript
// HTML <p id="para"> 5 > 3 </p>
document.getElementById('para').innerHTML
// 5 &gt; 3
```

 HTML  DOM`<script>``script`

```javascript
var name = "<script>alert('haha')</script>";
el.innerHTML = name;
```

`innerHTML`

```javascript
var name = "<img src=x onerror=alert(1)>";
el.innerHTML = name;
```

`alert``textContent``innerHTML`

### Element.outerHTML

`Element.outerHTML` HTML 

```javascript
// HTML 
// <div id="d"><p>Hello</p></div>
var d = document.getElementById('d');
d.outerHTML
// '<div id="d"><p>Hello</p></div>'
```

`outerHTML`

```javascript
// HTML 
// <div id="container"><div id="d">Hello</div></div>
var container = document.getElementById('container');
var d = document.getElementById('d');
container.firstChild.nodeName // "DIV"
d.nodeName // "DIV"

d.outerHTML = '<p>Hello</p>';
container.firstChild.nodeName // "P"
d.nodeName // "DIV"
```

`d``outerHTML``div``p``d``div``DIV`

`outerHTML`

```javascript
var div = document.createElement('div');
div.outerHTML = '<p>test</p>';
// DOMException: This element has no parent node.
```

`div``outerHTML`

### Element.clientHeightElement.clientWidth

`Element.clientHeight` CSS `0` CSS 

`padding``border``margin`

`Element.clientWidth` CSS `padding`

`document.documentElement``clientHeight``window.innerHeight``document.body``document.body.clientHeight``document.documentElement.clientHeight`

```javascript
// 
document.documentElement.clientHeight

// 
document.body.clientHeight
```

### Element.clientLeftElement.clientTop

`Element.clientLeft`left border`padding``margin``display: inline``0`

`Element.clientTop``clientLeft`

### Element.scrollHeightElement.scrollWidth

`Element.scrollHeight``padding``border``margin``::before``::after`

`Element.scrollWidth``scrollHeight`

`document.documentElement``document.body`

```javascript
// 
document.documentElement.scrollHeight
document.body.scrollHeight
```

`scrollHeight`

```javascript
// HTML 
// <div id="myDiv" style="height: 200px; overflow: hidden;">...</div>
document.getElementById('myDiv').scrollHeight // 200
```

`myDiv` CSS 200`scrollHeight`

### Element.scrollLeftElement.scrollTop

`Element.scrollLeft``Element.scrollTop`0

`document.documentElement`

```javascript
document.documentElement.scrollLeft
document.documentElement.scrollTop
```



### Element.offsetParent

`Element.offsetParent` CSS `position``static`

```html
<div style="position: absolute;">
  <p>
    <span>Hello</span>
  </p>
</div>
```

`span``offsetParent``div`

`Element.offsetTop``Element.offsetLeft``offsetParent`

`display``none``position``fixed``offsetParent``null`

```html
<div style="position: absolute;">
  <p>
    <span style="display: none;">Hello</span>
  </p>
</div>
```

`span``offsetParent``null`

`position``static``Element.offsetParent``<body>`

### Element.offsetHeightElement.offsetWidth

`Element.offsetHeight` CSS padding  border

`Element.offsetWidth` CSS `Element.offsetHeight`

`Element.clientHeight``Element.clientWidth` CSS `display: none;``0`

### Element.offsetLeftElement.offsetTop

`Element.offsetLeft``Element.offsetParent``Element.offsetTop`



```javascript
function getElementPosition(e) {
  var x = 0;
  var y = 0;
  while (e !== null)  {
    x += e.offsetLeft;
    y += e.offsetTop;
    e = e.offsetParent;
  }
  return {x: x, y: y};
}
```

### Element.style

`style`CSS 

### Element.childrenElement.childElementCount

`Element.children``HTMLCollection`

```javascript
if (para.children.length) {
  var children = para.children;
    for (var i = 0; i < children.length; i++) {
      // ...
    }
}
```

`para`

`Node.childNodes`

`Element.childElementCount``Element.children.length`

### Element.firstElementChildElement.lastElementChild

`Element.firstElementChild``Element.lastElementChild`

`null`

### Element.nextElementSiblingElement.previousElementSibling

`Element.nextElementSibling``null`

```javascript
// HTML 
// <div id="div-01">Here is div-01</div>
// <div id="div-02">Here is div-02</div>
var el = document.getElementById('div-01');
el.nextElementSibling
// <div id="div-02">Here is div-02</div>
```

`Element.previousElementSibling``null`

## 

### 



- `getAttribute()`
- `getAttributeNames()`
- `setAttribute()`
- `hasAttribute()`
- `hasAttributes()`
- `removeAttribute()`



### Element.querySelector()

`Element.querySelector` CSS `null`

```javascript
var content = document.getElementById('content');
var el = content.querySelector('p');
```

`content``p`

`Element.querySelector` CSS 

```javascript
document.body.querySelector("style[type='text/css'], style:not([type])");
```





```javascript
element.querySelector('div, p')
```

`element``div``p`

`querySelector` CSS  HTML 

```html
<div>
<blockquote id="outer">
  <p>Hello</p>
  <div id="inner">
    <p>World</p>
  </div>
</blockquote>
</div>
```

`p`

```javascript
var outer = document.getElementById('outer');
outer.querySelector('div p')
// <p>Hello</p>
```

### Element.querySelectorAll()

`Element.querySelectorAll` CSS `NodeList`

```javascript
var el = document.querySelector('#test');
var matches = el.querySelectorAll('div.highlighted > p');
```

`querySelector`

 CSS `NodeList`

### Element.getElementsByClassName()

`Element.getElementsByClassName``HTMLCollection` class `document.getElementsByClassName`

```javascript
element.getElementsByClassName('red test');
```



`HTMLCollection``document`

```javascript
// HTML 
// <div id="example">
//   <p class="foo"></p>
//   <p class="foo"></p>
// </div>
var element = document.getElementById('example');
var matches = element.getElementsByClassName('foo');

for (var i = 0; i< matches.length; i++) {
  matches[i].classList.remove('foo');
  matches.item(i).classList.add('bar');
}
// HTML 
// <div id="example">
//   <p></p>
//   <p class="foo bar"></p>
// </div>
```

`matches` class `foo``matches`

### Element.getElementsByTagName()

`Element.getElementsByTagName()``HTMLCollection``document.getElementsByClassName()`

```javascript
var table = document.getElementById('forecast-table');
var cells = table.getElementsByTagName('td');
```

 HTML 

### Element.closest()

`Element.closest` CSS  CSS `null`

```javascript
// HTML 
// <article>
//   <div id="div-01">Here is div-01
//     <div id="div-02">Here is div-02
//       <div id="div-03">Here is div-03</div>
//     </div>
//   </div>
// </article>

var div03 = document.getElementById('div-03');

// div-03 
div03.closest("#div-02") // div-02
div03.closest("div div") // div-03
div03.closest("article > div") //div-01
div03.closest(":not(div)") // article
```

`closest``closest``div-03`

### Element.matches()

`Element.matches` CSS 

```javascript
if (el.matches('.someClass')) {
  console.log('Match!');
}
```

### 

`Element``EventTarget`

- `Element.addEventListener()`
- `Element.removeEventListener()`
- `Element.dispatchEvent()`

```javascript
element.addEventListener('click', listener, false);
element.removeEventListener('click', listener, false);

var event = new Event('click');
element.dispatchEvent(event);
```

### Element.scrollIntoView()

`Element.scrollIntoView``window.location.hash`

```javascript
el.scrollIntoView(); // el.scrollIntoView(true)
el.scrollIntoView(false);
```

`true``false``true`

### Element.getBoundingClientRect()

`Element.getBoundingClientRect` CSS 

```javascript
var rect = obj.getBoundingClientRect();
```

`getBoundingClientRect``rect`

- `x`
- `y`
- `height`
- `width`
- `left``x`
- `right``x + width`
- `top``y`
- `bottom``y + height`

viewport`left``window.scrollX``top``window.scrollY`

`getBoundingClientRect``border``width``height` + `padding` + `border`

`Object.keys`

```javascript
var rect = document.body.getBoundingClientRect();
Object.keys(rect) // []
```

`rect``Object.keys`

### Element.getClientRects()

`Element.getClientRects``Rect``bottom``height``left``right``top``width`

`<div>``<p>``<span>``<a>``<em>``Element.getBoundingClientRect()`

```html
<span id="inline">Hello World Hello World Hello World</span>
```

`<span>``getClientRects``getClientRects`

```javascript
var el = document.getElementById('inline');
el.getClientRects().length // 3
el.getClientRects()[0].left // 8
el.getClientRects()[0].right // 113.908203125
el.getClientRects()[0].bottom // 31.200000762939453
el.getClientRects()[0].height // 23.200000762939453
el.getClientRects()[0].width // 105.908203125
```





```html
<span id="inline">
  Hello World
  Hello World
  Hello World
</span>
```

`<span>` HTML `getClientRects()``<span>`6

### Element.insertAdjacentElement()

`Element.insertAdjacentElement``null`

```javascript
element.insertAdjacentElement(position, element);
```

`Element.insertAdjacentElement`

- `beforebegin`
- `afterbegin`
- `beforeend`
- `afterend`

`beforebegin``afterend`

```javascript
var p1 = document.createElement('p')
var p2 = document.createElement('p')
p1.insertAdjacentElement('afterend', p2) // null
```

`p1``p2`



### Element.insertAdjacentHTML()Element.insertAdjacentText()

`Element.insertAdjacentHTML` HTML  DOM 

```javascript
element.insertAdjacentHTML(position, text);
```

 HTML 

- `beforebegin`
- `afterbegin`
- `beforeend`
- `afterend`

```javascript
// HTML <div id="one">one</div>
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');
//  HTML 
// <div id="one">one</div><div id="two">two</div>
```

 DOM `innerHTML`

 HTML 

`Element.insertAdjacentText``Element.insertAdjacentHTML`

```javascript
// HTML <div id="one">one</div>
var d1 = document.getElementById('one');
d1.insertAdjacentText('afterend', 'two');
//  HTML 
// <div id="one">one</div>two
```

### Element.remove()

`Element.remove` ChildNode 

```javascript
var el = document.getElementById('mydiv');
el.remove();
```

`el` DOM 

### Element.focus()Element.blur()

`Element.focus`

```javascript
document.getElementById('my-span').focus();
```

`preventScroll`

```javascript
function getFocus() {
  document.getElementById('btn').focus({preventScroll:false});
}
```

`btn`

`document.activeElement`

`Element.blur`

### Element.click()

`Element.click``click`

## 

- Craig Buckler[How to Translate from DOM to SVG Coordinates and Back Again](https://www.sitepoint.com/how-to-translate-from-dom-to-svg-coordinates-and-back-again/)
