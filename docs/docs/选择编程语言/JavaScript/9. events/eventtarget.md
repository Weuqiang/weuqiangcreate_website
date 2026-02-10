# EventTarget 

DOM  DOM 

 DOM 

## 

DOM `EventTarget``XMLHttpRequest``AudioNode``AudioContext`



- `addEventListener()`
- `removeEventListener()`
- `dispatchEvent()`

## EventTarget.addEventListener()

`EventTarget.addEventListener()` EventTarget 

```javascript
target.addEventListener(type, listener[, useCapture]);
```



- `type`
- `listener`
- `useCapture``true`capture`false`



```javascript
function hello() {
  console.log('Hello world');
}

var button = document.getElementById('btn');
button.addEventListener('click', hello, false);
```

`button``addEventListener()``click``hello()`



`handleEvent`

```javascript
buttonElement.addEventListener('click', {
  handleEvent: function (event) {
    console.log('click');
  }
});
```

`addEventListener()``handleEvent()`

`useCapture`

> - `capture``true``false`
> - `once``true``false`
> - `passive``true``preventDefault()``false`
> - `signal` AbortSignal 

`once`

```javascript
element.addEventListener('click', function (event) {
  // 
}, {once: true});
```

`addEventListener()``removeEventListener()`

```javascript
function hello() {
  console.log('Hello world');
}

document.addEventListener('click', hello, false);
document.addEventListener('click', hello, false);
```

`Hello world`



```javascript
function print(x) {
  console.log(x);
}

var el = document.getElementById('div1');
el.addEventListener('click', function () { print('Hello'); }, false);
```

`print`

`this`

```javascript
// HTML 
// <p id="para">Hello</p>
var para = document.getElementById('para');
para.addEventListener('click', function (e) {
  console.log(this.nodeName); // "P"
}, false);
```

`this``para`

## EventTarget.removeEventListener()

`EventTarget.removeEventListener()``addEventListener()`

```javascript
div.addEventListener('click', listener, false);
div.removeEventListener('click', listener, false);
```

`removeEventListener()``addEventListener()`“”

`removeEventListener()``addEventListener()`

```javascript
div.addEventListener('click', function (e) {}, false);
div.removeEventListener('click', function (e) {}, false);
```

`removeEventListener()`

```javascript
element.addEventListener('mousedown', handleMouseDown, true);
element.removeEventListener("mousedown", handleMouseDown, false);
```

`removeEventListener()`

## EventTarget.dispatchEvent()

`EventTarget.dispatchEvent()``Event.preventDefault()``false``true`

```javascript
target.dispatchEvent(event)
```

`dispatchEvent()``Event`Event 

```javascript
para.addEventListener('click', hello, false);
var event = new Event('click');
para.dispatchEvent(event);
```

`click`

`dispatchEvent()`

`dispatchEvent()`

```javascript
var canceled = !cb.dispatchEvent(event);
if (canceled) {
  console.log('');
} else {
  console.log('');
}
```

