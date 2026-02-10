# GlobalEventHandlers 

`addEventListener`

```javascript
div.addEventListener('click', clickHandler, false);
```



```javascript
div.onclick = clickHandler;
```

`GlobalEventHandlers`

`HTMLElement``Document``Window` HTML `document``window``GlobalEventHandlers`

## GlobalEventHandlers.onabort

`abort``onabort`

`<img>`

```javascript
// HTML 
// <img src="example.jpg" id="img">
var img = document.getElementById('img');
img.onabort = function () {
  console.log('image load aborted.');
}
```

## GlobalEventHandlers.onerror

`error``onerror`

`error`

 JavaScript `window``window.onerror()`

```javascript
window.onerror = function (message, source, lineno, colno, error) {
  // ...
}
```

`window.onerror`

- message
- source URL
- lineno
- colno
- error 

`<img>``<script>`Error `onerror`

```javascript
element.onerror = function (event) {
  // ...
}
```

`window.onerror`

## GlobalEventHandlers.onloadGlobalEventHandlers.onloadstart

`load``onload()``window``<img>``window``load`

`<img>``<video>``loadstart``onloadstart`

## GlobalEventHandlers.onfocusGlobalEventHandlers.onblur

`element.onfocus``element.onblur`

```javascript
element.onfocus = function () {
  console.log("onfocus event detected!");
};
element.onblur = function () {
  console.log("onblur event detected!");
};
```

`onfocus``tabindex`

## GlobalEventHandlers.onscroll

`scroll``onscroll()`

## GlobalEventHandlers.oncontextmenuGlobalEventHandlers.onshow

`contextmenu``oncontextmenu()``false``document.oncontextmenu``window.oncontextmenu`

```javascript
document.oncontextmenu = function () {
  return false;
};
```

`oncontextmenu``false`

`onshow`

## 



- onclick
- ondblclick
- onmousedown
- onmouseenter
- onmouseleave
- onmousemove
- onmouseout
- onmouseover
- onmouseup
- onwheel



- onkeydown
- onkeypress
- onkeyup



- onblur
- onfocus



- oninput
- onchange
- onsubmit
- onreset
- oninvalid
- onselect



- ontouchcancel
- ontouchend
- ontouchmove
- ontouchstart





- ondragstart
- ondrag
- ondragend



- ondragenter
- ondragleave
- ondragover
- ondrop

`<dialog>`

- oncancel
- onclose
