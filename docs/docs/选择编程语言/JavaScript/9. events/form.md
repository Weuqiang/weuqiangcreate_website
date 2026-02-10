# 

## 

### input 

`input``<input>``<select>``<textarea>``<input type=checkbox>``<input type=radio>``contenteditable``input`

`input``input`

`input``InputEvent`

`change``input``change``input``change`

`<select>`

```javascript
/* HTML 
<select id="mySelect">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
</select>
*/

function inputHandler(e) {
  console.log(e.target.value)
}

var mySelect = document.querySelector('#mySelect');
mySelect.addEventListener('input', inputHandler);
```

`input``inputHandler`

### select 

`select``<input>``<textarea>`

```javascript
// HTML 
// <input id="test" type="text" value="Select me!" />

var elem = document.getElementById('test');
elem.addEventListener('select', function (e) {
  console.log(e.type); // "select"
}, false);
```

`event.target``selectionDirection``selectionEnd``selectionStart``value`

### change 

`change``<input>``<select>``<textarea>``input``input``change`

- radiocheckbox
- select
- `<textarea>`



```javascript
// HTML 
// <select size="1" onchange="changeEventHandler(event);">
//   <option>chocolate</option>
//   <option>strawberry</option>
//   <option>vanilla</option>
// </select>

function changeEventHandler(event) {
  console.log(event.target.value);
}
```

`input``<select>``input``change`

### invalid 

`invalid`

```html
<form>
  <input type="text" required oninvalid="console.log('invalid input')" />
  <button type="submit"></button>
</form>
```

`invalid`

### reset submit 

`<form>`

`reset`

`submit``submit``<form>``<button>`

## InputEvent 

`InputEvent``input``Event`

`InputEvent()`

```javascript
new InputEvent(type, options)
```

`InputEvent``Event`

- `inputType`
- `data``null`
- `dataTransfer` DataTransfer 

`InputEvent`

**1InputEvent.data**

`InputEvent.data`

```javascript
// HTML 
// <input type="text" id="myInput">
var input = document.getElementById('myInput');
input.addEventListener('input', myFunction, false);

function myFunction(e) {
  console.log(e.data);
}
```

`abc``a``b``c``abc``null`

**2InputEvent.inputType**

`InputEvent.inputType`

Chrome [](https://w3c.github.io/input-events/index.html#dom-inputevent-inputtype)

- `insertText`
- `insertFromPaste`
- `deleteContentBackward`
- `deleteContentForward`

**3InputEvent.dataTransfer**

`InputEvent.dataTransfer` DataTransfer insertFromPaste`insertFromDrop`
