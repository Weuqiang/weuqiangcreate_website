# form 

`<form>` HTMLFormElement 

## HTMLFormElement 

- `elements`
- `length`
- `name`
- `method` HTTP 
- `target`
- `action` URL
- `enctype``encoding``application/x-www-form-urlencoded``multipart/form-data``text/plain`
- `acceptCharset`
- `autocomplete``on``off``<input>`
- `noValidate`

## HTMLFormElement 

- `submit()``submit`
- `reset()`
- `checkValidity()``true``false``invalid`



```javascript
var f = document.createElement('form');
document.body.appendChild(f);
f.action = '/cgi-bin/some.cgi';
f.method = 'POST';
f.submit();
```
