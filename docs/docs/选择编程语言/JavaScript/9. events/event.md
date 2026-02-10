# Event 

## 

`Event``Event.prototype`

`Event`

```javascript
event = new Event(type, options);
```

`Event``type``options`

- `bubbles``false`
- `cancelable``false``Event.preventDefault()`

```javascript
var ev = new Event(
  'look',
  {
    'bubbles': true,
    'cancelable': false
  }
);
document.dispatchEvent(ev);
```

`look``dispatchEvent`

`bubbles``true`“”

```javascript
// HTML 
// <div><p>Hello</p></div>
var div = document.querySelector('div');
var p = document.querySelector('p');

function callback(event) {
  var tag = event.currentTarget.tagName;
  console.log('Tag: ' + tag); // 
}

div.addEventListener('click', callback, false);

var click = new Event('click');
p.dispatchEvent(click);
```

`p``click``div.addEventListener``div.addEventListener('click', callback, true)`“”

`div`

```javascript
div.dispatchEvent(click);
```

`div``div``div`

## 

### Event.bubblesEvent.eventPhase

`Event.bubbles` Event `Event`

`Event.eventPhase`

```javascript
var phase = event.eventPhase;
```

`Event.eventPhase`

- 0
- 1
- 2`Event.target`
- 3

### Event.cancelableEvent.cancelBubbleevent.defaultPrevented

`Event.cancelable` Event 

`click``Event`

```javascript
var evt = new Event('foo');
evt.cancelable  // false
```

`Event.cancelable``true``Event.preventDefault()`

`Event.preventDefault()``Event.cancelable`

```javascript
function preventEvent(event) {
  if (event.cancelable) {
    event.preventDefault();
  } else {
    console.warn('This event couldn\'t be canceled.');
    console.dir(event);
  }
}
```

`Event.cancelBubble``true``Event.stopPropagation()`

`Event.defaultPrevented``Event.preventDefault`

```javascript
if (event.defaultPrevented) {
  console.log('');
}
```

### Event.currentTargetEvent.target

 DOM `Event.target``Event.currentTarget`

`Event.currentTarget`

`Event.target`

`Event.target``Event.currentTarget`

```javascript
// HTML 
// <p id="para">Hello <em>World</em></p>
function hide(e) {
  //  Hello  World true
  console.log(this === e.currentTarget);

  //  Hello true
  //  World false
  console.log(this === e.target);
}

document.getElementById('para').addEventListener('click', hide, false);
```

`<em>``<p>``<em>``<p>``e.target``e.currentTarget``e.currentTarget``this`

### Event.type

`Event.type`

```javascript
var evt = new Event('foo');
evt.type // "foo"
```

### Event.timeStamp

`Event.timeStamp`

```javascript
var evt = new Event('foo');
evt.timeStamp // 3683.6999999995896
```





```javascript
var previousX;
var previousY;
var previousT;

window.addEventListener('mousemove', function(event) {
  if (
    previousX !== undefined &&
    previousY !== undefined &&
    previousT !== undefined
  ) {
    var deltaX = event.screenX - previousX;
    var deltaY = event.screenY - previousY;
    var deltaD = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));

    var deltaT = event.timeStamp - previousT;
    console.log(deltaD / deltaT * 1000);
  }

  previousX = event.screenX;
  previousY = event.screenY;
  previousT = event.timeStamp;
});
```

### Event.isTrusted

`Event.isTrusted``click``Event`

```javascript
var evt = new Event('foo');
evt.isTrusted // false
```

`evt``isTrusted``false`

### Event.detail

`Event.detail` UI `click``dblclick``Event.detail``1``2``3``Event.detail`3

```javascript
// HTML 
// <p>Hello</p>
function giveDetails(e) {
  console.log(e.detail);
}

document.querySelector('p').onclick = giveDetails;
```

## 

### Event.preventDefault()

`Event.preventDefault``cancelable``true``false`

`stopPropagation()``stopImmediatePropagation()`

```javascript
// HTML 
// <input type="checkbox" id="my-checkbox" />
var cb = document.getElementById('my-checkbox');

cb.addEventListener(
  'click',
  function (e){ e.preventDefault(); },
  false
);
```





```javascript
// HTML 
// <input type="text" id="my-input" />
var input = document.getElementById('my-input');
input.addEventListener('keypress', checkName, false);

function checkName(e) {
  if (e.charCode < 97 || e.charCode > 122) {
    e.preventDefault();
  }
}
```

`keypress`

### Event.stopPropagation()

`stopPropagation` DOM 

```javascript
function stopEvent(e) {
  e.stopPropagation();
}

el.addEventListener('click', stopEvent, false);
```

`click``el`

### Event.stopImmediatePropagation()

`Event.stopImmediatePropagation``Event.stopPropagation()`

`Event.stopImmediatePropagation`

```javascript
function l1(e){
  e.stopImmediatePropagation();
}

function l2(e){
  console.log('hello world');
}

el.addEventListener('click', l1, false);
el.addEventListener('click', l2, false);
```

`el``click``l1``l2``l1``event.stopImmediatePropagation``l2`

### Event.composedPath()

`Event.composedPath()`

```javascript
// HTML 
// <div>
//   <p>Hello</p>
// </div>
var div = document.querySelector('div');
var p = document.querySelector('p');

div.addEventListener('click', function (e) {
  console.log(e.composedPath());
}, false);
// [p, div, body, html, document, Window]
```

`click``p``div``body``html``document``Window`
