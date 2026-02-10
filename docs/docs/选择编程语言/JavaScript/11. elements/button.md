# button 

`<button>``HTMLButtonElement`

**1HTMLButtonElement.accessKey**

`HTMLButtonElement.accessKey``Alt + `

**2HTMLButtonElement.autofocus**

`HTMLButtonElement.autofocus`

**3HTMLButtonElement.disabled**

`HTMLButtonElement.disabled`

**4HTMLButtonElement.form**

`HTMLButtonElement.form``null`

**5HTMLButtonElement.formAction**

`HTMLButtonElement.formAction` URL URL`<form>` URL

**6HTMLButtonElement.formEnctype**

`HTMLButtonElement.formEnctype``<form>`



- `application/x-www-form-urlencoded`
- `multipart/form-data`
- `text/plain`

**7HTMLButtonElement.formMethod**

`HTMLButtonElement.formMethod` HTTP  HTTP `<form>`

**8HTMLButtonElement.formNoValidate**

`HTMLButtonElement.formNoValidate``<form>``novalidate`

**9HTMLButtonElement.formTarget**

`HTMLButtonElement.formTarget``<form>``target`

**10HTMLButtonElement.labels**

`HTMLButtonElement.labels``NodeList``<label>`

```javascript
/* HTML 
  <label id="label1" for="test">Label 1</label>
  <button id="test">Button</button>
  <label id="label2" for="test">Label 2</label>
*/

const button = document.getElementById('test');

for(var i = 0; i < button.labels.length; i++) {
  console.log(button.labels[i].textContent);
}
// "Label 1"
// "Label 2"
```

`<label>``<button>``button.labels``<label>`

**11HTMLButtonElement.name**

`HTMLButtonElement.name``name``name`

**12HTMLButtonElement.tabIndex**

`HTMLButtonElement.tabIndex` Tab 

**13HTMLButtonElement.type**

`HTMLButtonElement.type`

- `submit`
- `reset`
- `button`

**14HTMLButtonElement.validationMessage**

`HTMLButtonElement.validationMessage`

**15HTMLButtonElement.validity**

`HTMLButtonElement.validity``ValidityState`

**16HTMLButtonElement.value**

`HTMLButtonElement.value`

**17HTMLButtonElement.willValidate**

`HTMLButtonElement.willValidate``false`
