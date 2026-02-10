# input 

`<input>` HTMLInputElement 

## HTMLInputElement 

### 

- `name``<input>`
- `type``<input>`
- `disabled``<input>``<input>`
- `autofocus`
- `required``<input>`
- `value``<input>`
- `validity``ValidityState``<input>`
- `validationMessage``<input>`
- `willValidate``<input>`

### 

- `form``<input>``<form>`
- `formAction``action`
- `formEncType``enctype`
- `formMethod` HTTP `method`
- `formNoValidate``formNoValidate`
- `formTarget``target`

### 

`<input>`

- `autocomplete``on``off``<input>`
- `maxLength`
- `size``<input>``text``password`
- `pattern``<input>`
- `placeholder``<input>`
- `readOnly`
- `min``max`
- `max``min`
- `selectionStart``<input>`
- `selectionEnd``<input>`
- `selectionDirection``forward``backward``none`

### 

`<input>`checkboxradio

- `checked``<input>`
- `defaultChecked``<input>`
- `indeterminate``<input>``false`

### 

`<input>``image`

- `alt`
- `height`
- `src`
- `width`

### 

`<input>``file`

- `accept`
- `files``FileList``File`

### 

- `defaultValue``<input>`
- `dirName`
- `accessKey``<input>`
- `list``<datalist>``<input>``<input>`
- `multiple`
- `labels``NodeList``<input>``<label>`
- `step``min``max`
- `valueAsDate``Date``<input>``<input>``null`
- `valueAsNumber``<input>``NaN`

`valueAsNumber`

```javascript
/* HTML 
   <input type="number" value="1.234" />
*/

input.value // "1.234"
input.valueAsNumber // 1.234
```

## HTMLInputElement 

- `focus()``<input>`
- `blur()``<input>`
- `select()``<input>``<input>``focus()`
- `click()``<input>`
- `setSelectionRange()``<input>`0`forward``backward``none`
- `setRangeText()`(`0`)`select``start``end``preserve`
- `setCustomValidity()`
- `checkValidity()``false`
- `stepDown()``<input>``n``n``1``<input>``step``<input>``min``max`
- `stepUp()``<input>``stepDown()`

`setSelectionRange()`

```javascript
/* HTML 
  <p><input type="text" id="mytextbox" size="20" value="HelloWorld"/></p>
  <p><button onclick="SelectText()"></button></p>
*/

function SelectText() {
  var input = document.getElementById('mytextbox');
  input.focus();
  input.setSelectionRange(2, 5);
}
```

`llo`

`setCustomValidity()`

```javascript
/* HTML 
  <form id="form">
    <input id="field" type="text" pattern="[a-f,0-9]{4}" autocomplete=off>
  </form>
*/

const form   = document.querySelector('#form');
const field  = document.querySelector('#field');

form.addEventListener('submit', (e) => {
  e.preventDefault(); //  POST 
});

field.oninvalid = (event) => {
  event.target.setCustomValidity(' 4 ');
}

field.oninput = (event) => {
  event.target.setCustomValidity('');
}
```

4`xxx``autocomplete`
