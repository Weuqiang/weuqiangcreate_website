# 

## 



```javascript
2 > 1 // true
```

`2``1``true`

> 

JavaScript 8

- `>` 
- `<` 
- `<=` 
- `>=` 
- `==` 
- `===` 
- `!=` 
- `!==` 

 Unicode 

## 



```javascript
'cat' > 'dog' // false
'cat' > 'catalog' // false
```

JavaScript  Unicode  Unicode 

```javascript
'cat' > 'Cat' // true'
```

`c` Unicode `99``C` Unicode `67``true`

 Unicode 

```javascript
'' > '' // false
```

“” Unicode 22823“”23567`false`

## 



**1**



```javascript
5 > '4' // true
//  5 > Number('4')
//  5 > 4

true > false // true
//  Number(true) > Number(false)
//  1 > 0

2 > true // true
//  2 > Number(true)
//  2 > 1
```



`NaN``NaN``NaN``false`

```javascript
1 > NaN // false
1 <= NaN // false
'1' > NaN // false
'1' <= NaN // false
NaN > NaN // false
NaN <= NaN // false
```

**2**



`valueOf``toString`

```javascript
var x = [2];
x > '11' // true
//  [2].valueOf().toString() > '11'
//  '2' > '11'

x.valueOf = function () { return '1' };
x > '11' // false
//  (function () { return '1' })() > '11'
//  '1' > '11'
```



```javascript
[2] > [1] // true
//  [2].valueOf().toString() > [1].valueOf().toString()
//  '2' > '1'

[2] > [11] // true
//  [2].valueOf().toString() > [11].valueOf().toString()
//  '2' > '11'

({ x: 2 }) >= ({ x: 1 }) // true
//  ({ x: 2 }).valueOf().toString() >= ({ x: 1 }).valueOf().toString()
//  '[object Object]' >= '[object Object]'
```

## 

JavaScript `==``===`

`==``===`“”`===``false``==`



**1**

`false`

```javascript
1 === "1" // false
true === "true" // false
```

`1`“1”`true``"true"``false`

**2**

`true``false`

```javascript
1 === 0x1 // true
```

`1``1``true`

`NaN``0``0`

```javascript
NaN === NaN  // false
+0 === -0 // true
```

**3**



```javascript
{} === {} // false
[] === [] // false
(function () {} === function () {}) // false
```

`false`



```javascript
var v1 = {};
var v2 = v1;
v1 === v2 // true
```



```javascript
var obj1 = {};
var obj2 = {};

obj1 > obj2 // false
obj1 < obj2 // false
obj1 === obj2 // false
```

`false`

**4undefined  null**

`undefined``null`

```javascript
undefined === undefined // true
null === null // true
```

`undefined`

```javascript
var v1;
var v2;
v1 === v2 // true
```

## 

“”`!==`

```javascript
1 !== '1' // true
// 
!(1 === '1')
```

`!`

## 



```javascript
1 == 1.0
// 
1 === 1.0
```



**1**



```javascript
1 == true // true
//  1 === Number(true)

0 == false // true
//  0 === Number(false)

2 == true // false
//  2 === Number(true)

2 == false // false
//  2 === Number(false)

'true' == true // false
//  Number('true') === Number(true)
//  NaN === 1

'' == 0 // true
//  Number('') === 0
//  0 === 0

'' == false  // true
//  Number('') === Number(false)
//  0 === 0

'1' == true  // true
//  Number('1') === Number(true)
//  1 === 1

'\n  123  \t' == 123 // true
// 
```



**2**



`valueOf()``toString()`



```javascript
// 
[1] == 1 // true

// 
[1] == '1' // true
[1, 2] == '1,2' // true

// 
[1] == true // true
[2] == true // false
```

JavaScript `[1]``valueOf()``toString()`



```javascript
const obj = {
  valueOf: function () {
    console.log(' valueOf()');
    return obj;
  },
  toString: function () {
    console.log(' toString()');
    return 'foo';
  }
};

obj == 'foo'
//  valueOf()
//  toString()
// true
```

`obj``valueOf()``toString()``'foo'``valueOf()``toString()``'foo'``true`

**3undefined  null**

`undefined``null``true``false`

```javascript
undefined == undefined // true
null == null // true
undefined == null // true

false == null // false
false == undefined // false

0 == null // false
0 == undefined // false
```

**4**



```javascript
0 == ''             // true
0 == '0'            // true

2 == true           // false
2 == false          // false

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

' \t\r\n ' == 0     // true
```

`==``===`

## 

“”`!=`

```javascript
1 != '1' // false

// 
!(1 == '1')
```
