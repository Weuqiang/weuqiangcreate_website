# window 

## 

`window``w`

```javascript
a = 1;
window.a // 1
```

`a`

`window` Brendan Eich `window``window`

## window 

### window.name

`window.name``target`

```javascript
window.name = 'Hello World!';
console.log(window.name)
// "Hello World!"
```

MB

`a.com``window.name``b.com``window.name`

### window.closedwindow.opener

`window.closed`

```javascript
window.closed // false
```



```javascript
var popup = window.open();

if ((popup !== null) && !popup.closed) {
  // 
}
```

`window.opener``null`

```javascript
window.open().opener === window // true
```

`true`

`opener``null`

```javascript
var newWin = window.open('example.html', 'newWindow', 'height=400,width=400');
newWin.opener = null;
```

`opener``null`

`opener``<a>``rel="noopener"` URL 

```html
<a href="https://an.evil.site" target="_blank" rel="noopener">

</a>
```

### window.selfwindow.window

`window.self``window.window`

```javascript
window.self === window // true
window.window === window // true
```

### window.frameswindow.length

`window.frames``frame``iframe``window.frames[0]`

`iframe``id``name``iframe``<iframe name="myIFrame">``frames['myIFrame']``frames.myIFrame`

`frames``window`

```javascript
frames === window // true
```

`frames[0]``window[0]``frames``window``frames[0]`

`window.length``frame``iframe``window.length``0`

```javascript
window.frames.length === window.length // true
```

`window.frames.length``window.length`

### window.frameElement

`window.frameElement``<object>``<iframe>``<embed>``null`

```javascript
// HTML 
// <iframe src="about.html"></iframe>

//  about.html 
var frameEl = window.frameElement;
if (frameEl) {
  frameEl.src = 'other.html';
}
```

`frameEl``<iframe>`

### window.topwindow.parent

`window.top`frame

`window.parent``window.parent`

```javascript
if (window.parent !== window.top) {
  // 
}
```

`window`

### window.status

`window.status`

### window.devicePixelRatio

`window.devicePixelRatio` CSS  CSS 

### 

`window`

**1window.screenXwindow.screenY**

`window.screenX``window.screenY`

**2 window.innerHeightwindow.innerWidth**

`window.innerHeight``window.innerWidth`“”viewport

100%200%960



**3window.outerHeightwindow.outerWidth**

`window.outerHeight``window.outerWidth`

**4window.scrollXwindow.scrollY**

`window.scrollX``window.scrollY`

`0`

75`window.scrollY`75200`window.scrollX`200

```javascript
if (window.scrollY < 75) {
  window.scroll(0, 75);
}
```

7575

**5window.pageXOffsetwindow.pageYOffset**

`window.pageXOffset``window.pageYOffset``window.scrollX``window.scrollY`

### 



- `window.locationbar`
- `window.menubar`
- `window.scrollbars`
- `window.toolbar`
- `window.statusbar`
- `window.personalbar`

`visible`

```javascript
window.locationbar.visible
window.menubar.visible
window.scrollbars.visible
window.toolbar.visible
window.statusbar.visible
window.personalbar.visible
```

### 



- `window.document``document`document 
- `window.location``Location` URL `document.location`Location 
- `window.navigator``Navigator`Navigator 
- `window.history``History`History 
- `window.localStorage` localStorage Storage 
- `window.sessionStorage` sessionStorage Storage 
- `window.console``console`console 
- `window.screen``Screen`Screen 

### window.isSecureContext

`window.isSecureContext` HTTPS `true``false`

## window 

### window.alert()window.prompt()window.confirm()

`window.alert()``window.prompt()``window.confirm()`

**1window.alert()**

`window.alert()`“”

```javascript
window.alert('Hello World');
```

“”“”

`window.alert()` CSS `\n`

```javascript
alert('\n');
```

**2window.prompt()**

`window.prompt()`“”“”

```javascript
var result = prompt('', 25)
```

“”25`result`

`window.prompt()``null`

1. “”
2. “”
3. “” ESC `null`

`window.prompt()`

**3window.confirm()**

`window.confirm()`“”“”

```javascript
var result = confirm('');
```

“”“”“”

`confirm`“”`true`“”`false`

```javascript
var okay = confirm('Please confirm this message.');
if (okay) {
  // “”
} else {
  // “”
}
```

`confirm`

```javascript
window.onunload = function () {
  return window.confirm('');
}
```



### window.open(), window.close()window.stop()

**1window.open()**

`window.open``null`

```javascript
var popup = window.open('somefile.html');
```

`somefile.html`

`open`

```javascript
window.open(url, windowName, [windowFeatures])
```

- `url``about:blank`
- `windowName``_blank``_self``_top``_parent`
- `windowFeatures` UI 



```javascript
var popup = window.open(
  'somepage.html',
  'DefinitionsWindows',
  'height=200,width=200,location=no,status=yes,resizable=yes,scrollbars=yes'
);
```

200



- left
- top
- height100
- width100
- outerHeight100
- outerWidth100
- menubar
- toolbar
- location
- personalbar
- status
- dependent
- minimizable`dialog=yes`
- noopener`window.opener``null``window.open()``null`
- resizable
- scrollbars
- dialog
- titlebar
- alwaysRaised
- alwaysLowered
- close

`yes``1``status=yes``status=1``status``no``yes/no``no``titlebar``yes`



```javascript
'height=200,width=200,location=no,status=yes,resizable=yes,scrollbars=yes'
```

`open()``open`

`window.open`

```javascript
var windowB = window.open('windowB.html', 'WindowB');
windowB.window.name // "WindowB"
```





```javascript
var w = window.open();
console.log('');
w.location = 'http://example.com';
```

`example.com`

`open`

```javascript
var popup = window.open();
if (popup === null) {
  // 
}
```

**2window.close()**

`window.close``window.open`

```javascript
popup.close()
```

`iframe`

**3window.stop()**

`window.stop()`

```javascript
window.stop()
```

### window.moveTo()window.moveBy()

`window.moveTo()`

```javascript
window.moveTo(100, 200)
```

`(100, 200)`

`window.moveBy()`

```javascript
window.moveBy(25, 50)
```

2550

`window.open()` Tab 

### window.resizeTo()window.resizeBy()

`window.resizeTo()`

`outerWidth``outerHeight`

```javascript
window.resizeTo(
  window.screen.availWidth / 2,
  window.screen.availHeight / 2
)
```



`window.resizeBy()``window.resizeTo()``window.resizeTo()`



```javascript
window.resizeBy(-200, -200)
```

200

### window.scrollTo()window.scroll()window.scrollBy()

`window.scrollTo`

```javascript
window.scrollTo(x-coord, y-coord)
```



```javascript
window.scrollTo(options)
```

`options`

- `top` y 
- `left` x 
- `behavior``smooth``instant``auto``auto`

```javascript
window.scrollTo({
  top: 1000,
  behavior: 'smooth'
});
```

`window.scroll()``window.scrollTo()`

`window.scrollBy()`

```javascript
window.scrollBy(0, window.innerHeight)
```





- Element.scrollTop
- Element.scrollLeft
- Element.scrollIntoView()

### window.print()

`window.print`“”



```javascript
document.getElementById('printLink').onclick = function () {
  window.print();
}
```



```javascript
if (typeof window.print === 'function') {
  // 
}
```

### window.focus()window.blur()

`window.focus()`

```javascript
var popup = window.open('popup.html', 'Popup Window');

if ((popup !== null) && !popup.closed) {
  popup.focus();
}
```

`popup`

`window.blur()`

`focus``blur`

### window.getSelection()

`window.getSelection``Selection`

```javascript
var selObj = window.getSelection();
```

`Selection``toString`

```javascript
var selectedText = selObj.toString();
```

### window.getComputedStyle()window.matchMedia()

`window.getComputedStyle()`CSS 

`window.matchMedia()` CSS `mediaQuery`CSS 

### window.requestAnimationFrame()

`window.requestAnimationFrame()``setTimeout``setTimeout``window.requestAnimationFrame()` 16ms  Tab `requestAnimationFrame()`

`window.requestAnimationFrame()`



```javascript
window.requestAnimationFrame(callback)
```

`callback``callback``performance.now()`

`window.requestAnimationFrame()``window.cancelAnimationFrame()`

`window.requestAnimationFrame()`

```javascript
var element = document.getElementById('animate');
element.style.position = 'absolute';

var start = null;

function step(timestamp) {
  if (!start) start = timestamp;
  var progress = timestamp - start;
  // 200
  element.style.left = Math.min(progress / 10, 200) + 'px';
  //  2000 
  // 
  if (progress < 2000) {
    window.requestAnimationFrame(step);
  }
}

window.requestAnimationFrame(step);
```

2

### window.requestIdleCallback()

`window.requestIdleCallback()``setTimeout``window.requestIdleCallback()`

`window.requestAnimationFrame()`16`window.requestIdleCallback()`



```javascript
window.requestIdleCallback(callback[, options])
```

`callback``IdleDeadline``IdleDeadline``didTimeout``timeRemaining()`

`options``timeout`

`window.requestIdleCallback()``window.cancelIdleCallback()`



```javascript
requestIdleCallback(myNonEssentialWork);

function myNonEssentialWork(deadline) {
  while (deadline.timeRemaining() > 0) {
    doWorkIfNeeded();
  }
}
```

`requestIdleCallback()``myNonEssentialWork`

`timeout`

```javascript
requestIdleCallback(processPendingAnalyticsEvents, { timeout: 2000 });
```

`processPendingAnalyticsEvents`2

`deadline.timeRemaining()``0``deadline.didTimeout``true`

`window.requestIdleCallback()`

## 

`window`

### load  onload 

`load``window.onload`

```javascript
window.onload = function() {
  var elements = document.getElementsByClassName('example');
  for (var i = 0; i < elements.length; i++) {
    var elt = elements[i];
    // ...
  }
};
```



### error  onerror 

`window``error``window.onerror`

```javascript
window.onerror = function (message, filename, lineno, colno, error) {
  console.log("--> %s", error.stack);
};
```

`window``error`

- 
- 
- 
- 
- 



 JavaScript `error` JavaScript  JavaScript 

3

```javascript
window.onerror = function(msg, url, line) {
  if (onerror.num++ > onerror.max) {
    alert('ERROR: ' + msg + '\n' + url + ':' + line);
    return true;
  }
}
onerror.max = 3;
onerror.num = 0;
```

 CDN“Script error.”0`Access-Control-Allow-Origin` HTTP 

```bash
Access-Control-Allow-Origin: *
```

`<script>``crossorigin`

```html
<script crossorigin="anonymous" src="//example.com/file.js"></script>
```

`crossorigin="anonymous"` cookie  HTTP `crossorigin="use-credentials"` cookie  HTTP  HTTP `Access-Control-Allow-Credentials`

### window 

 GlobalEventHandlers `window`

- `window.onafterprint``afterprint`
- `window.onbeforeprint``beforeprint`
- `window.onbeforeunload``beforeunload`
- `window.onhashchange``hashchange`
- `window.onlanguagechange`: `languagechange`
- `window.onmessage``message`
- `window.onmessageerror``MessageError`
- `window.onoffline``offline`
- `window.ononline``online`
- `window.onpagehide``pagehide`
- `window.onpageshow``pageshow`
- `window.onpopstate``popstate`
- `window.onstorage``storage`
- `window.onunhandledrejection` Promise `reject`
- `window.onunload``unload`

## 

`iframe`

### 



- `top`
- `parent`
- `self`



```javascript
if (window.top === window.self) {
  // 
} else {
  // 
}
```



```javascript
window.parent.history.back();
```

`window.open()``<a>``<form>`

- `_top`
- `_parent`
- `_blank`



```html
<a href="somepage.html" target="_top">Link</a>
```

### iframe 

`iframe``document.getElementById` DOM `contentWindow``iframe``window`

```javascript
var frame = document.getElementById('theFrame');
var frameWindow = frame.contentWindow;
```

`frame.contentWindow``window`

```javascript
// 
frameWindow.title
```

`<iframe>``contentDocument``document`

```javascript
var frame = document.getElementById('theFrame');
var frameDoc = frame.contentDocument;

// 
var frameDoc = frame.contentWindow.document;
```

`<iframe>``window.postMessage`

`<iframe>``window.parent``window.parent``window.parent``window.self``iframe`

```javascript
if (window.parent !== window.self) {
  // 
}
```

`<iframe>``window``frameElement``<iframe>` DOM `null`

```javascript
var f1Element = document.getElementById('f1');
var f1Window = f1Element.contentWindow;

f1Window.frameElement === f1Element // true
window.frameElement === null // true
```

### window.frames 

`window.frames``window``frames[0]``frames[1].frames[2]``parent.frames[1]`

`window.frames``window``iframe` DOM  DOM `window.frames[0].document`

`<iframe>``name``id``window.frames``window`

```javascript
// HTML  <iframe id="myFrame">
window.myFrame // [HTMLIFrameElement]
frames.myframe === myFrame // true
```

`name``window.open``<a>``<frame>``target`
