# Document 

## 

`document``document``window.document` HTML 

`document`

- `document``window.document`
- `iframe``iframe``contentDocument`
- Ajax `XMLHttpRequest``responseXML`
- `ownerDocument`

`document``EventTarget``Node`mixin`ParentNode``document``document`

## 

### 



**1document.defaultView**

`document.defaultView``document``window``window``null`

```javascript
document.defaultView === window // true
```

**2document.doctype**

 HTML `document``document.doctype``<DOCTYPE>`Document Type DeclarationDTDHTML `<!DOCTYPE html>` DTD`null`

```javascript
var doctype = document.doctype;
doctype // "<!DOCTYPE html>"
doctype.name // "html"
```

`document.firstChild`

**3document.documentElement**

`document.documentElement`root`document``document.doctype`HTML`<html>`

**4document.bodydocument.head**

`document.body``<body>``document.head``<head>`

`<head>``<body>`

**5document.scrollingElement**

`document.scrollingElement`

`document.documentElement``<html>`quirk`<body>``null`

```javascript
// 
document.scrollingElement.scrollTop = 0;
```

**6document.activeElement**

`document.activeElement`focus DOM `<input>``<textarea>``<select>``<body>``null`

**7document.fullscreenElement**

`document.fullscreenElement` DOM `null`

```javascript
if (
  document.fullscreenElement && 
  document.fullscreenElement.nodeName == 'VIDEO'
) {
  console.log('');
}
```

`document.fullscreenElement``<video>`

### 

`HTMLCollection`

**1document.links**

`document.links``href``<a>``<area>`

```javascript
// 
var links = document.links;
for(var i = 0; i < links.length; i++) {
  console.log(links[i]);
}
```

**2document.forms**

`document.forms``<form>`

```javascript
var selectForm = document.forms[0];
```



`id``name`

```javascript
/* HTML 
  <form name="foo" id="bar"></form>
*/
document.forms[0] === document.forms.foo // true
document.forms.bar === document.forms.foo // true
```

**3document.images**

`document.images``<img>`

```javascript
var imglist = document.images;

for(var i = 0; i < imglist.length; i++) {
  if (imglist[i].src === 'banner.gif') {
    // ...
  }
}
```

`img`

**4document.embedsdocument.plugins**

`document.embeds``document.plugins``<embed>`

**5document.scripts**

`document.scripts``<script>`

```javascript
var scripts = document.scripts;
if (scripts.length !== 0 ) {
  console.log('');
}
```

**6document.styleSheets**

`document.styleSheets` CSS CSS 

**7**

`document.styleSheets``HTMLCollection``document.styleSheets``StyleSheetList`

```javascript
document.links instanceof HTMLCollection // true
document.images instanceof HTMLCollection // true
document.forms instanceof HTMLCollection // true
document.embeds instanceof HTMLCollection // true
document.scripts instanceof HTMLCollection // true
```

`HTMLCollection``length``id``name``HTMLCollection`

```javascript
// HTML 
// <form name="myForm">
document.myForm === document.forms.myForm // true
```

### 



**1document.documentURIdocument.URL**

`document.documentURI``document.URL``documentURI``Document``URL``HTMLDocument` HTML 

```javascript
document.URL
// http://www.example.com/about

document.documentURI === document.URL
// true
```

`#anchor`

**2document.domain**

`document.domain``http://www.example.com:80/hello.html``document.domain``www.example.com``null`

`document.domain``document.domain``a.sub.example.com``document.domain``sub.example.com``example.com``document.domain` Cookie

`document.domain``null``document.domain`

**3document.location**

`Location` URL `window.location``document.location`

Location 

**4document.lastModified**

`document.lastModified`

```javascript
document.lastModified
// "03/07/2018 11:18:27"
```

`document.lastModified``Date.parse``Date`

```javascript
var lastVisitedDate = Date.parse('01/01/2018');
if (Date.parse(document.lastModified) > lastVisitedDate) {
  console.log('');
}
```

 JavaScript `document.lastModified`

**5document.title**

`document.title``<title>`

```javascript
document.title = '';
document.title // ""
```

**6document.characterSet**

`document.characterSet``UTF-8``ISO-8859-1`

**7document.referrer**

`document.referrer`

```javascript
document.referrer
// "https://example.com/path"
```

`document.referrer`

`document.referrer` HTTP `Referer``document.referrer``r``Referer``r`

**8document.dir**

`document.dir``rtl``ltr`

**9document.compatMode**

`compatMode``BackCompat``CSS1Compat`

`DOCTYPE``<!doctype html>``document.compatMode``CSS1Compat`

### 

**1document.hidden**

`document.hidden` Tab`document.hidden``true`

 Page Visibility API  API 

**2document.visibilityState**

`document.visibilityState`



> - `visible`
> - `hidden` Tab
> - `prerender`
> - `unloaded`



**3document.readyState**

`document.readyState`

- `loading` HTML 
- `interactive`
- `complete`



1.  HTML `document.readyState``loading`
1.  HTML `<script>``async``defer``document.readyState``loading`
1. HTML `document.readyState``interactive`
1. `document.readyState``complete`



```javascript
// 
if (document.readyState === 'complete') {
  // ...
}

// 
var interval = setInterval(function() {
  if (document.readyState === 'complete') {
    clearInterval(interval);
    // ...
  }
}, 100);
```

`readystatechange`

### document.cookie

`document.cookie` CookieCookie

### document.designMode

`document.designMode``on``off``off``on`

`iframe``designMode`

```javascript
// HTML 
// <iframe id="editor" src="about:blank"></iframe>
var editor = document.getElementById('editor');
editor.contentDocument.designMode = 'on';
```

### document.currentScript

`document.currentScript``<script>` DOM `<script>` DOM 

```html
<script id="foo">
  console.log(
    document.currentScript === document.getElementById('foo')
  ); // true
</script>
```

`document.currentScript``<script>`

### document.implementation

`document.implementation``DOMImplementation` Document 

- `DOMImplementation.createDocument()` XML 
- `DOMImplementation.createHTMLDocument()` HTML 
- `DOMImplementation.createDocumentType()` DocumentType 

 HTML 

```javascript
var doc = document.implementation.createHTMLDocument('Title');
var p = doc.createElement('p');
p.innerHTML = 'hello world';
doc.body.appendChild(p);

document.replaceChild(
  doc.documentElement,
  document.documentElement
);
```

 HTML `doc``doc.documentElement``document.documentElement``hello world`

## 

### document.open()document.close()

`document.open``document.write`

`document.close``document.open()`

```javascript
document.open();
document.write('hello world');
document.close();
```

### document.write()document.writeln()

`document.write`

`document.close()``document.write`

```javascript
// “helloworld”
document.open();
document.write('hello');
document.write('world');
document.close();
```

`document.write` HTML 

```javascript
document.write('<p>hello world</p>');
```

`document.write``<p>` HTML 

`DOMContentLoaded``write``open`

```javascript
document.addEventListener('DOMContentLoaded', function (event) {
  document.write('<p>Hello World!</p>');
});

// 
document.addEventListener('DOMContentLoaded', function (event) {
  document.open();
  document.write('<p>Hello World!</p>');
  document.close();
});
```

`write``open``open``close`

```html
<html>
<body>
hello
<script type="text/javascript">
  document.write("world")
</script>
</body>
</html>
```

`hello world`

`document.write` JavaScript `innerHTML``document.write`

`document.writeln``write`

```javascript
document.write(1);
document.write(2);
// 12

document.writeln(1);
document.writeln(2);
// 1
// 2
//
```

`writeln` ASCII  HTML `<br>`

### document.querySelector()document.querySelectorAll()

`document.querySelector` CSS `null`

```javascript
var el1 = document.querySelector('.myclass');
var el2 = document.querySelector('#myParent > [ng-click]');
```

`document.querySelectorAll``querySelector``NodeList`

```javascript
elementList = document.querySelectorAll('.myclass');
```

 CSS  CSS 

```javascript
var matches = document.querySelectorAll('div.note, div.alert');
```

`class``note``alert``div`

 CSS 

```javascript
//  data-foo-bar  someval 
document.querySelectorAll('[data-foo-bar="someval"]');

//  myForm 
document.querySelectorAll('#myForm :invalid');

// div class  ignore 
document.querySelectorAll('DIV:not(.ignore)');

//  divascript 
document.querySelectorAll('DIV, A, SCRIPT');
```

 CSS `:first-line``:first-letter``:link``:visited`

`querySelectorAll``*``querySelectorAll`

`document`

### document.getElementsByTagName()

`document.getElementsByTagName()` HTML `HTMLCollection` HTML 

```javascript
var paras = document.getElementsByTagName('p');
paras instanceof HTMLCollection // true
```

`p`

HTML `getElementsByTagName()`

`*` HTML 

```javascript
var allElements = document.getElementsByTagName('*');
```

`getElementsByTagName``document`

```javascript
var firstPara = document.getElementsByTagName('p')[0];
var spans = firstPara.getElementsByTagName('span');
```

`p``span`

### document.getElementsByClassName()

`document.getElementsByClassName()``HTMLCollection``class`

```javascript
var elements = document.getElementsByClassName(names);
```

`class` JavaScript `className` CSS `class`

`class`

```javascript
var elements = document.getElementsByClassName('foo bar');
```

`foo``bar``class``foo``bar`

CSS `class``quirks mode`

`getElementsByTagName()``getElementsByClassName()``document`

```javascript
// document
var elements = rootElement.getElementsByClassName(names);
```

### document.getElementsByName()

`document.getElementsByName()``name` HTML `<form>``<radio>``<img>``<frame>``<embed>``<object>``NodeList``name`

```javascript
//  <form name="x"></form>
var forms = document.getElementsByName('x');
forms[0].tagName // "FORM"
```

### document.getElementById()

`document.getElementById()``id``null`

```javascript
var elem = document.getElementById('para1');
```

`id``main``document.getElementById('Main')``null`

`document.getElementById()``document.querySelector()``document.querySelector()` CSS `document.getElementById()``id`

```javascript
document.getElementById('myElement')
document.querySelector('#myElement')
```

`id``myElement``document.getElementById()``document.querySelector()`

`document`

### document.elementFromPoint()document.elementsFromPoint()

`document.elementFromPoint()`

```javascript
var element = document.elementFromPoint(50, 50);
```

`(50, 50)` HTML 

`elementFromPoint` HTML `null`

`document.elementsFromPoint()`

```javascript
var elements = document.elementsFromPoint(x, y);
```

### document.createElement()

`document.createElement`

```javascript
var newDiv = document.createElement('div');
```

`createElement``tagName` HTML `div``DIV``<``>`

```javascript
document.createElement('<div>');
// DOMException: The tag name provided ('<div>') is not a valid name
```

`document.createElement`

```javascript
document.createElement('foo');
```

### document.createTextNode()

`document.createTextNode``Text`

```javascript
var newDiv = document.createElement('div');
var newContent = document.createTextNode('Hello');
newDiv.appendChild(newContent);
```

`div``div`

 HTML  XSS 

```javascript
var div = document.createElement('div');
div.appendChild(document.createTextNode('<span>Foo & bar</span>'));
console.log(div.innerHTML)
// &lt;span&gt;Foo &amp; bar&lt;/span&gt;
```

`createTextNode`

 HTML 

```html
function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

var userWebsite = '" onmouseover="alert(\'derp\')" "';
var profileLink = '<a href="' + escapeHtml(userWebsite) + '">Bob</a>';
var div = document.getElementById('target');
div.innerHTML = profileLink;
// <a href="" onmouseover="alert('derp')" "">Bob</a>
```

`createTextNode``onmouseover`

### document.createAttribute()

`document.createAttribute``Attr`

```javascript
var attribute = document.createAttribute(name);
```

`document.createAttribute``name`

```javascript
var node = document.getElementById('div1');

var a = document.createAttribute('my_attrib');
a.value = 'newVal';

node.setAttributeNode(a);
// 
node.setAttribute('my_attrib', 'newVal');
```

`div1``newVal``my_attrib`

### document.createComment()

`document.createComment`

```javascript
var CommentNode = document.createComment(data);
```

`document.createComment`

### document.createDocumentFragment()

`document.createDocumentFragment``DocumentFragment`

```javascript
var docFragment = document.createDocumentFragment();
```

`DocumentFragment` DOM  DOM `DocumentFragment` DOM 

```javascript
var docfrag = document.createDocumentFragment();

[1, 2, 3, 4].forEach(function (e) {
  var li = document.createElement('li');
  li.textContent = e;
  docfrag.appendChild(li);
});

var element  = document.getElementById('ul');
element.appendChild(docfrag);
```

`docfrag``<li>`

### document.createEvent()

`document.createEvent``Event``element.dispatchEvent`

```javascript
var event = document.createEvent(type);
```

`document.createEvent``UIEvents``MouseEvents``MutationEvents``HTMLEvents`

```javascript
var event = document.createEvent('Event');
event.initEvent('build', true, true);
document.addEventListener('build', function (e) {
  console.log(e.type); // "build"
}, false);
document.dispatchEvent(event);
```

`build`

### document.addEventListener()document.removeEventListener()document.dispatchEvent()

`document``EventTarget`EventTarget 

```javascript
// 
document.addEventListener('click', listener, false);

// 
document.removeEventListener('click', listener, false);

// 
var event = new Event('click');
document.dispatchEvent(event);
```

### document.hasFocus()

`document.hasFocus`

```javascript
var focused = document.hasFocus();
```

active

### document.adoptNode()document.importNode()

`document.adoptNode``DocumentFragment``document``ownerDocument``document``parentNode``null`

```javascript
var node = document.adoptNode(externalNode);
document.appendChild(node);
```

`document.adoptNode``appendChild``insertBefore`

`document.importNode``DocumentFragment``document``ownerDocument``document``parentNode``null`

```javascript
var node = document.importNode(externalNode, deep);
```

`document.importNode`false`true`

`document.importNode``null`

```javascript
var iframe = document.getElementsByTagName('iframe')[0];
var oldNode = iframe.contentWindow.document.getElementById('myNode');
var newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

`iframe``myNode`

### document.createNodeIterator()

`document.createNodeIterator`

```javascript
var nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT
);
```

`<body>`

`document.createNodeIterator``NodeFilter.SHOW_ELEMENT`

- NodeFilter.SHOW_ALL
- NodeFilter.SHOW_ELEMENT
- NodeFilter.SHOW_TEXT
- NodeFilter.SHOW_COMMENT

`document.createNodeIterator`“”`NodeFilter``nextNode()``previousNode()`

```javascript
var nodeIterator = document.createNodeIterator(document.body);
var pars = [];
var currentNode;

while (currentNode = nodeIterator.nextNode()) {
  pars.push(currentNode);
}
```

`nextNode``nextNode``null``previousNode`

```javascript
var nodeIterator = document.createNodeIterator(
  document.body,
  NodeFilter.SHOW_ELEMENT
);

var currentNode = nodeIterator.nextNode();
var previousNode = nodeIterator.previousNode();

currentNode === previousNode // true
```

`currentNode``previousNode`



```javascript
pars[0] === document.body // true
```

### document.createTreeWalker()

`document.createTreeWalker` DOM `document.createNodeIterator``TreeWalker``NodeIterator`

`document.createTreeWalker``document.createNodeIterator`

```javascript
var treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT
);

var nodeList = [];

while(treeWalker.nextNode()) {
  nodeList.push(treeWalker.currentNode);
}
```

`<body>``nodeList`

### document.execCommand()document.queryCommandSupported()document.queryCommandEnabled()

**1document.execCommand()**

`document.designMode``on``contenteditable``true``document.execCommand()``document.execCommand('bold')`

```javascript
document.execCommand(command, showDefaultUI, input)
```



- `command`
- `showDefaultUI``false`
- `input``true`

```javascript
var url = window.prompt('');

if (url) {
  document.execCommand('createlink', false, url);
}
```

`false`

`document.execCommand()``false`



`document.execCommand()`boldinsertLineBreakselectAllcreateLinkinsertOrderedListsubscriptdeleteinsertUnorderedListsuperscriptformatBlockinsertParagraphundoforwardDeleteinsertTextunlinkinsertImageitalicunselectinsertHTMLredo

**2document.queryCommandSupported()**

`document.queryCommandSupported()``document.execCommand()`

```javascript
if (document.queryCommandSupported('SelectAll')) {
  console.log('');
}
```

**3document.queryCommandEnabled()**

`document.queryCommandEnabled()``document.execCommand()``bold`

```javascript
// HTML 
// <input type="button" value="Copy" onclick="doCopy()">

function doCopy(){
  //  copy 
  if (document.queryCommandSupported('copy')) {
    copyText('');
  }else{
    console.log('');
  }
}

function copyText(text) {
  var input = document.createElement('textarea');
  document.body.appendChild(input);
  input.value = text;
  input.focus();
  input.select();

  // 
  if (document.queryCommandEnabled('copy')) {
    var success = document.execCommand('copy');
    input.remove();
    console.log('Copy Ok');
  } else {
    console.log('queryCommandEnabled is false');
  }
}
```

`copy`“”“”

### document.getSelection()

`window.getSelection()``window`

