# 

## 



- `!`
- `&&`
- `||`
- `?:`

## !

`true``false``false``true`

```javascript
!true // false
!false // true
```

`true``false`

- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- `''`

```javascript
!undefined // true
!null // true
!0 // true
!NaN // true
!"" // true

!54 // false
!'hello' // false
![] // false
!{} // false
```



`Boolean`

```javascript
!!x
// 
Boolean(x)
```

`x``Boolean`

## &&

`&&`

`true``false`

```javascript
't' && '' // ""
't' && 'f' // "f"
't' && (1 + 2) // 3
'' && 'f' // ""
'' && '' // ""

var x = 1;
(1 - 1) && ( x += 1) // 0
x // 1
```

`false``0``x`

“”`if``if`

```javascript
if (i) {
  doSomething();
}

// 

i && doSomething();
```



`false``true`

```javascript
true && 'foo' && '' && 4 && 'foo' && true
// ''

1 && 2 && 3
// 3
```

`false``true``3`

## ||

`||``true``false`

```javascript
't' || '' // "t"
't' || 'f' // "t"
'' || 'f' // "f"
'' || '' // ""
```



```javascript
var x = 1;
true || (x = 2) // true
x // 1
```

`true``true``x`“”short-cut

`true``false`

```javascript
false || 0 || '' || 4 || 'foo' || true
// 4

false || 0 || ''
// ''
```

`true`4`false`



```javascript
function saveText(text) {
  text = text || '';
  // ...
}

// 
saveText(this.text || '')
```



## ?:

?: JavaScript `true`

```javascript
't' ? 'hello' : 'world' // "hello"
0 ? 'hello' : 'world' // "world"
```

`t``0``true``false`

`if...else``if...else``if..else`

```javascript
console.log(true ? 'T' : 'F');
```

`console.log``if...else`
