# 

## 

`MouseEvent`

1



- `click`
- `dblclick`
- `mousedown`
- `mouseup`

`click``mousedown``mouseup``mousedown``mouseup``click`

`dblclick``mousedown``mouseup``click`

2



- `mousemove`
- `mouseenter`
- `mouseover`
- `mouseout`
- `mouseleave`

`mouseover``mouseenter``mouseenter``mouseover`

```javascript
/* HTML 
 <ul>
   <li>item 1</li>
   <li>item 2</li>
   <li>item 3</li>
 </ul>
*/

var ul = document.querySelector('ul');

//  ul mouseenter 
// 
// event.target  ul 
ul.addEventListener('mouseenter', function (event) {
  event.target.style.color = 'purple';
  setTimeout(function () {
    event.target.style.color = '';
  }, 500);
}, false);

//  ul mouseover 
// event.target  li 
ul.addEventListener('mouseover', function (event) {
  event.target.style.color = 'orange';
  setTimeout(function () {
    event.target.style.color = '';
  }, 500);
}, false);
```

`mouseenter``mouseover`

`mouseout``mouseleave``mouseleave``mouseout`

```javascript
/* HTML 
 <ul>
   <li>item 1</li>
   <li>item 2</li>
   <li>item 3</li>
 </ul>
*/

var ul = document.querySelector('ul');

//  ul  mouseleave 
//  ul  mouseleave
// event.target  ul 
ul.addEventListener('mouseleave', function (event) {
  event.target.style.color = 'purple';
  setTimeout(function () {
    event.target.style.color = '';
  }, 500);
}, false);

//  ul mouseout 
// event.target  li 
ul.addEventListener('mouseout', function (event) {
  event.target.style.color = 'orange';
  setTimeout(function () {
    event.target.style.color = '';
  }, 500);
}, false);
```

`mouseleave``mouseout`

3

- `contextmenu`“”
- `wheel``WheelEvent`

## MouseEvent 

`MouseEvent`clickdblclickmouseupmousedown`MouseEvent``MouseEvent`

`MouseEvent``Event``Event`

`MouseEvent()``MouseEvent`

```javascript
var event = new MouseEvent(type, options);
```

`MouseEvent()``Event`

- `screenX`0
- `screenY``screenX`
- `clientX`0
- `clientY``clientX`
- `ctrlKey` Ctrl `false`
- `shiftKey` Shift `false`
- `altKey` Alt `false`
- `metaKey` Meta `false`
- `button``0``1``2`
- `buttons``0``1``001``2``010``4``100``3``011`
- `relatedTarget``null``mouseenter``mouseover``mouseout``mouseleave`



```javascript
function simulateClick() {
  var event = new MouseEvent('click', {
    'bubbles': true,
    'cancelable': true
  });
  var cb = document.getElementById('checkbox');
  cb.dispatchEvent(event);
}
```



## MouseEvent 

### MouseEvent.altKeyMouseEvent.ctrlKeyMouseEvent.metaKeyMouseEvent.shiftKey

`MouseEvent.altKey``MouseEvent.ctrlKey``MouseEvent.metaKey``MouseEvent.shiftKey`

- `altKey`Alt 
- `ctrlKey`Ctrl 
- `metaKey`Meta Mac Windows  Windows 
- `shiftKey`Shift 

```javascript
// HTML 
// <body onclick="showKey(event)">
function showKey(e) {
  console.log('ALT key pressed: ' + e.altKey);
  console.log('CTRL key pressed: ' + e.ctrlKey);
  console.log('META key pressed: ' + e.metaKey);
  console.log('SHIFT key pressed: ' + e.shiftKey);
}
```



### MouseEvent.buttonMouseEvent.buttons

`MouseEvent.button`

- 0`mousemove`
- 1
- 2

```javascript
// HTML 
// <button onmouseup="whichButton(event)"></button>
var whichButton = function (e) {
  switch (e.button) {
    case 0:
      console.log('Left button clicked.');
      break;
    case 1:
      console.log('Middle button clicked.');
      break;
    case 2:
      console.log('Right button clicked.');
      break;
    default:
      console.log('Unexpected code: ' + e.button);
  }
}
```

`MouseEvent.buttons`

- 1`001`1
- 2`010`2
- 4`100`4

3011

### MouseEvent.clientXMouseEvent.clientY

`MouseEvent.clientX``MouseEvent.clientY`

```javascript
// HTML 
// <body onmousedown="showCoords(event)">
function showCoords(evt){
  console.log(
    'clientX value: ' + evt.clientX + '\n' +
    'clientY value: ' + evt.clientY + '\n'
  );
}
```

`MouseEvent.x``MouseEvent.y`

### MouseEvent.movementXMouseEvent.movementY

`MouseEvent.movementX``mousemove`

```javascript
currentEvent.movementX = currentEvent.screenX - previousEvent.screenX
```

`MouseEvent.movementY``mousemove`

```javascript
currentEvent.movementY = currentEvent.screenY - previousEvent.screenY
```



### MouseEvent.screenXMouseEvent.screenY

`MouseEvent.screenX``MouseEvent.screenY`

```javascript
// HTML 
// <body onmousedown="showCoords(event)">
function showCoords(evt) {
  console.log(
    'screenX value: ' + evt.screenX + '\n',
    'screenY value: ' + evt.screenY + '\n'
  );
}
```

### MouseEvent.offsetXMouseEvent.offsetY

`MouseEvent.offsetX``padding``MouseEvent.offsetY``padding`

```javascript
/* HTML 
  <style>
    p {
      width: 100px;
      height: 100px;
      padding: 100px;
    }
  </style>
  <p>Hello</p>
*/
var p = document.querySelector('p');
p.addEventListener(
  'click',
  function (e) {
    console.log(e.offsetX);
    console.log(e.offsetY);
  },
  false
);
```

`p``150 150``padding``padding`10050

### MouseEvent.pageXMouseEvent.pageY

`MouseEvent.pageX``MouseEvent.pageY`

```javascript
/* HTML 
  <style>
    body {
      height: 2000px;
    }
  </style>
*/
document.body.addEventListener(
  'click',
  function (e) {
    console.log(e.pageX);
    console.log(e.pageY);
  },
  false
);
```

2000`pageY`2000

### MouseEvent.relatedTarget

`MouseEvent.relatedTarget``null`

`target``relatedTarget`

| |target  |relatedTarget  |
|---------|-----------|------------------|
|focusin | | |
|focusout | | |
|mouseenter | | |
|mouseleave | | |
|mouseout | | |
|mouseover | | |
|dragenter | | |
|dragexit | | |



```javascript
/*
  HTML 
  <div id="outer" style="height:50px;width:50px;border:1px solid black;">
    <div id="inner" style="height:25px;width:25px;border:1px solid black;"></div>
  </div>
*/

var inner = document.getElementById('inner');
inner.addEventListener('mouseover', function (event) {
  console.log('' + event.target.id + ' ' + event.relatedTarget.id);
}, false);
inner.addEventListener('mouseenter', function (event) {
  console.log('' + event.target.id + ' ' + event.relatedTarget.id);
});
inner.addEventListener('mouseout', function (event) {
  console.log('' + event.target.id + ' ' + event.relatedTarget.id);
});
inner.addEventListener("mouseleave", function (event){
  console.log('' + event.target.id + ' ' + event.relatedTarget.id);
});

//  outer inner
// inner outer
// inner outer

//  inner outer
// inner outer
// inner outer
```

## MouseEvent 

### MouseEvent.getModifierState()

`MouseEvent.getModifierState`[](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState#Modifier_keys_on_Gecko)

```javascript
document.addEventListener('click', function (e) {
  console.log(e.getModifierState('CapsLock'));
}, false);
```



## WheelEvent 

### 

WheelEvent  MouseEvent `wheel`

`WheelEvent()``WheelEvent`

```javascript
var wheelEvent = new WheelEvent(type, options);
```

`WheelEvent()``wheel``Event``UIEvent`

- `deltaX` 0.0
- `deltaY` 0.0
- `deltaZ` Z  0.0
- `deltaMode``0``1``2``0`

### 

`WheelEvent``Event``MouseEvent`



- `WheelEvent.deltaX`
- `WheelEvent.deltaY`
- `WheelEvent.deltaZ` Z 
- `WheelEvent.deltaMode``0``1``2`

