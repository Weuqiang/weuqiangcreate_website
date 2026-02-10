# Boolean 

## 

`Boolean` JavaScript 

```javascript
var b = new Boolean(true);

typeof b // "object"
b.valueOf() // true
```

`b``Boolean``true`

`false``true`

```javascript
if (new Boolean(false)) {
  console.log('true');
} // true

if (new Boolean(false).valueOf()) {
  console.log('true');
} // 
```

`true``false``true``true``valueOf``false`

## Boolean 

`Boolean``Boolean`

```javascript
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean('') // false
Boolean(NaN) // false

Boolean(1) // true
Boolean('false') // true
Boolean([]) // true
Boolean({}) // true
Boolean(function () {}) // true
Boolean(/foo/) // true
```

`true`

`!`

```javascript
!!undefined // false
!!null // false
!!0 // false
!!'' // false
!!NaN // false

!!1 // true
!!'false' // true
!![] // true
!!{} // true
!!function(){} // true
!!/foo/ // true
```

`Boolean``new`

```javascript
if (Boolean(false)) {
  console.log('true');
} // 

if (new Boolean(false)) {
  console.log('true');
} // true

if (Boolean(null)) {
  console.log('true');
} // 

if (new Boolean(null)) {
  console.log('true');
} // true
```
