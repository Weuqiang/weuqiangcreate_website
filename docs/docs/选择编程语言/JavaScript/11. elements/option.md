# option 

`<option>``<select>``<optgroup>``<datalist>` HTMLOptionElement 

## 

 HTMLElement HTMLOptionElement 

- `disabled`
- `defaultSelected``true``<select>`
- `form``<option>``null`
- `index`
- `label`
- `selected`
- `text`
- `value`

## Option() 

`Option()` HTMLOptionElement 

```javascript
new Option(text, value, defaultSelected, selected)
```



- text
- value`text`
- defaultSelected`false``true``selected``true`
- selected`false`

```javascript
var newOption = new Option('hello', 'world', true);

newOption.text // "hello"
newOption.value // "world"
newOption.defaultSelected // true
newOption.selected // false
```

`newOption``defaultSelected``true``selected``false`
