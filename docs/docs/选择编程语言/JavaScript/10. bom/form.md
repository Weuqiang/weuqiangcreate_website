# FormData 

## 

`<form>` HTML  JavaScript 

```html
<form action="/handling-page" method="post">
  <div>
    <label for="name"></label>
    <input type="text" id="name" name="user_name" />
  </div>
  <div>
    <label for="passwd"></label>
    <input type="password" id="passwd" name="user_passwd" />
  </div>
  <div>
    <input type="submit" id="submit" name="submit_button" value="" />
  </div>
</form>
```



“”`name``value``name``user_name``value`“”`user_name=`

`<form>``method` HTTP  GET  URL `/handling-page?user_name=&user_passwd=123&submit_button=` GET  HTTP 

```http
GET /handling-page?user_name=&user_passwd=123&submit_button=
Host: example.com
```

 POST  HTTP `user_name=&user_passwd=123&submit_button=` POST 

```http
POST /handling-page HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 74

user_name=&user_passwd=123&submit_button=
```

 URL “”“”

`submit`

```html
<form>
  <input type="submit" value="">
</form>
```

`submit`

`<button>``type``submit`

```html
<form>
  <button></button>
</form>
```

`<button>`

`submit``submit()`

```javascript
formElement.submit();
```

`reset()`

```javascript
formElement.reset()
```

## FormData 

### 

 FormData 

`FormData()`

```javascript
var formdata = new FormData(form);
```

`FormData()` DOM 



```html
<form id="myForm" name="myForm">
  <div>
    <label for="username"></label>
    <input type="text" id="username" name="username">
  </div>
  <div>
    <label for="useracc"></label>
    <input type="text" id="useracc" name="useracc">
  </div>
  <div>
    <label for="userfile"></label>
    <input type="file" id="userfile" name="userfile">
  </div>
<input type="submit" value="Submit!">
</form>
```

`FormData()`

```javascript
var myForm = document.getElementById('myForm');
var formData = new FormData(myForm);

// 
formData.get('username') // ""

// 
formData.set('username', '');

formData.get('username') // ""
```

### 

FormData 

- `FormData.get(key)`
- `FormData.getAll(key)`
- `FormData.set(key, value)`
- `FormData.delete(key)`
- `FormData.append(key, value)`
- `FormData.has(key)`
- `FormData.keys()``for...of`
- `FormData.values()``for...of`
- `FormData.entries()``for...of``for...of` FormData 

`get()``getAll()``set()``append()`

```javascript
var formData = new FormData();

formData.set('username', '');
formData.append('username', '');
formData.get('username') // ""
formData.getAll('username') // ["", ""]

formData.append('userpic[]', myFileInput.files[0], 'user1.jpg');
formData.append('userpic[]', myFileInput.files[1], 'user2.jpg');
```



```javascript
var formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

for (var key of formData.keys()) {
  console.log(key);
}
// "key1"
// "key2"

for (var value of formData.values()) {
  console.log(value);
}
// "value1"
// "value2"

for (var pair of formData.entries()) {
  console.log(pair[0] + ': ' + pair[1]);
}
// key1: value1
// key2: value2

//  formData.entries()
for (var pair of formData) {
  console.log(pair[0] + ': ' + pair[1]);
}
// key1: value1
// key2: value2
```

## 

### 



```html
<!--  -->
<input required>

<!--  -->
<input pattern="banana|cherry">

<!-- 6 -->
<input minlength="6" maxlength="6">

<!-- 110 -->
<input type="number" min="1" max="10">

<!--  Email  -->
<input type="email">

<!--  URL -->
<input type="URL">
```

`:valid` CSS `:invalid` CSS 

```css
input:invalid {
  border-color: red;
}
input,
input:valid {
  border-color: #ccc;
}
```

### checkValidity()

`checkValidity()`

```javascript
// 
form.checkValidity()

// 
formControl.checkValidity()
```

`checkValidity()``true``false`

```javascript
function submitForm(action) {
  var form = document.getElementById('form');
  form.action = action;
  if (form.checkValidity()) {
    form.submit();
  }
}
```

### willValidate 

`willValidate`

```javascript
// HTML 
// <form novalidate>
//   <input id="name" name="name" required />
// </form>

var input = document.querySelector('#name');
input.willValidate // true
```

### validationMessage 

`validationMessage`

- 
- 

```javascript
// HTML 
// <form><input type="text" required></form>
document.querySelector('form input').validationMessage
// ""
```



```javascript
var myInput = document.getElementById('myinput');
if (!myInput.checkValidity()) {
  document.getElementById('prompt').innerHTML = myInput.validationMessage;
}
```

### setCustomValidity()

`setCustomValidity()`



```html
<form action="somefile.php">
  <input
    type="text"
    name="username"
    placeholder="Username"
    pattern="[a-z]{1,15}"
    id="username"
  >
  <input type="submit">
</form>
```

15“ABC”Chrome “Please match the requested format.”`setCustomValidity()`

```javascript
var input = document.getElementById('username');
input.oninvalid = function (event) {
  event.target.setCustomValidity(
    '15'
  );
}
```

`setCustomValidity()``invalid`

```javascript
/* HTML 
<form>
  <p><input type="file" id="fs"></p>
  <p><input type="submit"></p>
</form>
*/

document.getElementById('fs').onchange = checkFileSize;

function checkFileSize() {
  var fs = document.getElementById('fs');
  var files = fs.files;
  if (files.length > 0) {
     if (files[0].size > 75 * 1024) {
       fs.setCustomValidity(' 75KB');
       return;
     }
  }
  fs.setCustomValidity('');
}
```

 75KB

### validity 

`validity``ValidityState`



- `ValidityState.badInput`
- `ValidityState.customError``setCustomValidity()`
- `ValidityState.patternMismatch`
- `ValidityState.rangeOverflow`
- `ValidityState.rangeUnderflow`
- `ValidityState.stepMismatch`
- `ValidityState.tooLong`
- `ValidityState.tooShort`
- `ValidityState.typeMismatch` Email  URL 
- `ValidityState.valid`
- `ValidityState.valueMissing`



```javascript
var input = document.getElementById('myinput');
if (input.validity.valid) {
  console.log('');
} else {
  console.log('');
}
```



```javascript
var txt = '';
if (document.getElementById('myInput').validity.rangeOverflow) {
  txt = '';
}
document.getElementById('prompt').innerHTML = txt;
```

`invalid`

```javascript
var input = document.getElementById('username');
var form  = document.getElementById('form');

var elem = document.createElement('div');
elem.id  = 'notify';
elem.style.display = 'none';
form.appendChild(elem);

input.addEventListener('invalid', function (event) {
  event.preventDefault();
  if (!event.target.validity.valid) {
    elem.textContent   = '';
    elem.className     = 'error';
    elem.style.display = 'block';
    input.className    = 'invalid animated shake';
  }
});

input.addEventListener('input', function(event){
  if ( 'block' === elem.style.display ) {
    input.className = '';
    elem.style.display = 'none';
  }
});
```

`invalid``event.preventDefault()`

###  novalidate 

 HTML `novalidate`

```html
<form novalidate>
</form>
```



```javascript
form.noValidate = true;
```

`novalidate``<button>``<input>``formnovalidate`

```html
<form>
  <input type="submit" value="submit" formnovalidate>
</form>
```

## enctype 

`enctype`

`foo``baz``foo``bar``baz`

```
The first line.
The second line.
```



**1GET **

`GET``enctype`

```html
<form
  action="register.php"
  method="get"
  onsubmit="AJAXSubmit(this); return false;"
>
</form>
```

 URL 

```http
?foo=bar&baz=The%20first%20line.%0AThe%20second%20line.
```

**2application/x-www-form-urlencoded**

`POST``enctype``application/x-www-form-urlencoded`

```html
<form
  action="register.php"
  method="post"
  onsubmit="AJAXSubmit(this); return false;"
>
</form>
```

 HTTP 

```http
Content-Type: application/x-www-form-urlencoded

foo=bar&baz=The+first+line.%0D%0AThe+second+line.%0D%0A
```

`%0D%0A``\r\n`

**3text/plain**

`POST``enctype``text/plain`

```html
<form
  action="register.php"
  method="post"
  enctype="text/plain"
  onsubmit="AJAXSubmit(this); return false;"
>
</form>
```

 HTTP 

```http
Content-Type: text/plain

foo=bar
baz=The first line.
The second line.
```

**4multipart/form-data**

`POST``enctype``multipart/form-data`

```html
<form
  action="register.php"
  method="post"
  enctype="multipart/form-data"
  onsubmit="AJAXSubmit(this); return false;"
>
</form>
```

 HTTP 

```http
Content-Type: multipart/form-data; boundary=---------------------------314911788813839

-----------------------------314911788813839
Content-Disposition: form-data; name="foo"

bar
-----------------------------314911788813839
Content-Disposition: form-data; name="baz"

The first line.
The second line.

-----------------------------314911788813839--
```



## 



```html
<input type="file" id="file" name="myFile">
```

`<form>``method``POST``enctype``multipart/form-data``enctype` HTTP `Content-Type``application/x-www-form-urlencoded``multipart/form-data`

```html
<form method="post" enctype="multipart/form-data">
  <div>
    <label for="file"></label>
    <input type="file" id="file" name="myFile" multiple>
  </div>
  <div>
    <input type="submit" id="submit" name="submit_button" value="" />
  </div>
</form>
```

 HTML file `multiple`

```javascript
var fileSelect = document.getElementById('file');
var files = fileSelect.files;
```

 FormData 

```javascript
var formData = new FormData();

for (var i = 0; i < files.length; i++) {
  var file = files[i];

  // 
  if (!file.type.match('image.*')) {
    continue;
  }

  formData.append('photos[]', file, file.name);
}
```

 Ajax 

```javascript
var xhr = new XMLHttpRequest();

xhr.open('POST', 'handler.php', true);

xhr.onload = function () {
  if (xhr.status !== 200) {
    console.log('An error occurred!');
  }
};

xhr.send(formData);
```

 FormData  AJAX 

```javascript
var file = document.getElementById('test-input').files[0];
var xhr = new XMLHttpRequest();

xhr.open('POST', 'myserver/uploads');
xhr.setRequestHeader('Content-Type', file.type);
xhr.send(file);
```

## 

- [HTML5 Form Validation With the “pattern” Attribute](https://webdesign.tutsplus.com/tutorials/html5-form-validation-with-the-pattern-attribute--cms-25145), Thoriq Firdaus
