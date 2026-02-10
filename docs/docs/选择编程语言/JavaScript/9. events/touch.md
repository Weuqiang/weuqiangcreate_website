# 

## 

 API 

- Touch
- TouchList
- TouchEvent

`Touch``TouchList``TouchEvent`

`event.preventDefault`

## Touch 

### Touch 

Touch 

`Touch``Touch`

```javascript
var touch = new Touch(touchOptions);
```

`Touch`

- `identifier` ID
- `target`
- `clientX`0
- `clientY`0
- `screenX`0
- `screenY`0
- `pageX`0
- `pageY`0
- `radiusX` X 0
- `radiusY` Y 0
- `rotationAngle`0900
- `force``0``1``0``1``0`

### Touch 

**1Touch.identifier**

`Touch.identifier` ID

```javascript
someElement.addEventListener('touchmove', function (e) {
  for (var i = 0; i < e.changedTouches.length; i++) {
    console.log(e.changedTouches[i].identifier);
  }
}, false);
```

**2Touch.screenXTouch.screenYTouch.clientXTouch.clientYpageXpageY**

`Touch.screenX``Touch.screenY`

`Touch.clientX``Touch.clientY`

`Touch.pageX``Touch.pageY`

**3Touch.radiusXTouch.radiusYTouch.rotationAngle**

`Touch.radiusX``Touch.radiusY` X  Y  2 

`Touch.rotationAngle``0``90`





```javascript
div.addEventListener('touchstart', rotate);
div.addEventListener('touchmove', rotate);
div.addEventListener('touchend', rotate);

function rotate(e) {
  var touch = e.changedTouches.item(0);
  e.preventDefault();

  src.style.width = touch.radiusX * 2 + 'px';
  src.style.height = touch.radiusY * 2 + 'px';
  src.style.transform = 'rotate(' + touch.rotationAngle + 'deg)';
};
```

**4Touch.force**

`Touch.force``0``1``0``1`

**5Touch.target**

`Touch.target`

## TouchList 

`TouchList``Touch``TouchList``Touch`

`TouchEvent.touches``TouchEvent.changedTouches``TouchEvent.targetTouches`



- `TouchList.length`
- `TouchList.item()`

## TouchEvent 

### 

TouchEvent  Event 

`TouchEvent()`

```javascript
new TouchEvent(type, options)
```

`TouchEvent()``Event`

- `touches``TouchList``[]`
- `targetTouches``TouchList``[]`
- `changedTouches``TouchList``[]`
- `ctrlKey` Ctrl `false`
- `shiftKey` Shift `false`
- `altKey` Alt `false`
- `metaKey` Meta  Windows `false`

### 

TouchEvent `Event`

**1TouchEvent.altKeyTouchEvent.ctrlKeyTouchEvent.shiftKeyTouchEvent.metaKey**

- `TouchEvent.altKey` Alt 
- `TouchEvent.ctrlKey` Ctrl 
- `TouchEvent.shiftKey` Shift 
- `TouchEvent.metaKey` Meta  Windows 



```javascript
someElement.addEventListener('touchstart', function (e) {
  console.log('altKey = ' + e.altKey);
  console.log('ctrlKey = ' + e.ctrlKey);
  console.log('metaKey = ' + e.metaKey);
  console.log('shiftKey = ' + e.shiftKey);
}, false);
```

**2TouchEvent.changedTouches**

`TouchEvent.changedTouches``TouchList``Touch`



- `touchstart`
- `touchmove`
- `touchend`



```javascript
someElement.addEventListener('touchmove', function (e) {
  for (var i = 0; i < e.changedTouches.length; i++) {
    console.log(e.changedTouches[i].identifier);
  }
}, false);
```

**3TouchEvent.touches**

`TouchEvent.touches``TouchList`



```javascript
someElement.addEventListener('touchstart', function (e) {
  switch (e.touches.length) {
    // 
    case 1: handle_one_touch(e); break;
    // 
    case 2: handle_two_touches(e); break;
    // 
    case 3: handle_three_touches(e); break;
    // 
    default: console.log('Not supported'); break;
  }
}, false);
```

**4TouchEvent.targetTouches**

`TouchEvent.targetTouches``TouchList`

```javascript
function touches_in_target(ev) {
  return (ev.touches.length === ev.targetTouches.length ? true : false);
}
```



## 

`TouchEvent.type`

- `touchstart``target`
- `touchend``target``touchstart``changedTouches``TouchList``Touch`
- `touchmove``target``touchstart`
- `touchcancel`modal window



```javascript
var el = document.getElementsByTagName('canvas')[0];
el.addEventListener('touchstart', handleStart, false);
el.addEventListener('touchmove', handleMove, false);

function handleStart(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;
  for (var i = 0; i < touches.length; i++) {
    console.log(touches[i].pageX, touches[i].pageY);
  }
}

function handleMove(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;
  for (var i = 0; i < touches.length; i++) {
    var touch = touches[i];
    console.log(touch.pageX, touch.pageY);
  }
}
```
