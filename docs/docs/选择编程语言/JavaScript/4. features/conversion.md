# 

## 

JavaScript 

```javascript
var x = y ? 1 : 'a';
```

`x``y``y``true``x``y``false``x``x`



```javascript
'4' - '3' // 1
```

`1` JavaScript 



## 

`Number()``String()``Boolean()`

### Number()

`Number`



**1**



```javascript
// 
Number(324) // 324

// 
Number('324') // 324

//  NaN
Number('324abc') // NaN

// 0
Number('') // 0

// true  1false  0
Number(true) // 1
Number(false) // 0

// undefined NaN
Number(undefined) // NaN

// null0
Number(null) // 0
```

`Number``parseInt``NaN`

```javascript
parseInt('42 cats') // 42
Number('42 cats') // NaN
```

`parseInt``Number`

`parseInt``Number`

```javascript
parseInt('\t\v\r12.34\n') // 12
Number('\t\v\r12.34\n') // 12.34
```

**2**

`Number``NaN`

```javascript
Number({a: 1}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5
```

`Number`

`valueOf``Number`

`valueOf``toString``toString``Number`

`toString`



```javascript
var obj = {x: 1};
Number(obj) // NaN

// 
if (typeof obj.valueOf() === 'object') {
  Number(obj.toString());
} else {
  Number(obj.valueOf());
}
```

`Number``obj``obj.valueOf`, `obj.toString``[object Object]``Number``NaN`

`valueOf``toString``toString``[object Object]`

```javascript
Number({}) // NaN
```

`toString`

```javascript
var obj = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return {};
  }
};

Number(obj)
// TypeError: Cannot convert object to primitive value
```

`valueOf``toString`

`valueOf``toString`

```javascript
Number({
  valueOf: function () {
    return 2;
  }
})
// 2

Number({
  toString: function () {
    return 3;
  }
})
// 3

Number({
  valueOf: function () {
    return 2;
  },
  toString: function () {
    return 3;
  }
})
// 2
```

`Number``valueOf``toString``valueOf``toString`

### String()

`String`

**1**

- ****
- ****
- ****`true``"true"``false``"false"`
- **undefined**`"undefined"`
- **null**`"null"`

```javascript
String(123) // "123"
String('abc') // "abc"
String(true) // "true"
String(undefined) // "undefined"
String(null) // "null"
```

**2**

`String`

```javascript
String({a: 1}) // "[object Object]"
String([1, 2, 3]) // "1,2,3"
```

`String``Number``valueOf``toString`

1. `toString``String`

2. `toString``valueOf``valueOf``String`

3. `valueOf`



```javascript
String({a: 1})
// "[object Object]"

// 
String({a: 1}.toString())
// "[object Object]"
```

`toString``[object Object]``valueOf`

`toString``valueOf`

```javascript
var obj = {
  valueOf: function () {
    return {};
  },
  toString: function () {
    return {};
  }
};

String(obj)
// TypeError: Cannot convert object to primitive value
```

`toString`

```javascript
String({
  toString: function () {
    return 3;
  }
})
// "3"

String({
  valueOf: function () {
    return 2;
  }
})
// "[object Object]"

String({
  valueOf: function () {
    return 2;
  },
  toString: function () {
    return 3;
  }
})
// "3"
```

`String``toString`3`toString``[object Object]``toString``valueOf`

### Boolean()

`Boolean()`

`false``true`

- `undefined`
- `null`
- `0``-0``+0`
- `NaN`
- `''`

```javascript
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean('') // false
```

`true``false`

```javascript
Boolean(true) // true
Boolean(false) // false
```

`true``false``new Boolean(false)``true`

```javascript
Boolean({}) // true
Boolean([]) // true
Boolean(new Boolean(false)) // true
```

`true` JavaScript `obj1 && obj2``true`

## 

JavaScript JavaScript ****

JavaScript 



####  1`b - a`

```javascript
var a = "10";
var b = 5;
var result = b - a; 
console.log(result); // -5
```

****

- `a`  `"10"` `b`  `5`
-  `b - a`  `-` JavaScript 
- JavaScript  `"10"`  `10`
-  `5 - 10` `-5`

####  2`b + a`

```javascript
var a = "10";
var b = 5;
var result = b + a; 
console.log(result); // "510"
```

****

-  `+`  JavaScript 
- JavaScript 
- `b`  `5``a`  `"10"` `a`  `b`  `"5"`
- `"5"`  `"10"`  `"510"` `"510"`

### 

1. ** `-``*``/``%`**JavaScript 
2. **`+`**
   - JavaScript 
   - 
3. **** `Number()``String()` 

   ```javascript
   var result = b + Number(a); // 15
   var result = String(b) + a; // "510"
   ```



```javascript
if ('abc') {
  console.log('hello')
}  // "hello"
```

`+``-`

```javascript
+ {foo: 'bar'} // NaN
- [1, 2, 3] // NaN
```

`String()`

`Boolean()``Number()``String()`

### 

JavaScript `if``Boolean()`

`true`

- `undefined`
- `null`
- `+0``-0`
- `NaN`
- `''`

`false``true`

```javascript
if ( !undefined
  && !null
  && !0
  && !NaN
  && !''
) {
  console.log('true');
} // true
```

`Boolean()`

```javascript
// 
expression ? true : false

// 
!! expression
```

### 

JavaScript 



```javascript
'5' + 1 // '51'
'5' + true // "5true"
'5' + false // "5false"
'5' + {} // "5[object Object]"
'5' + [] // "5"
'5' + function (){} // "5function (){}"
'5' + undefined // "5undefined"
'5' + null // "5null"
```



```javascript
var obj = {
  width: '100'
};

obj.width + 20 // "10020"
```

`120``10020`

### 

JavaScript `Number()`

`+`

```javascript
'5' - '2' // 3
'5' * '2' // 10
true - 1  // 0
false - 1 // -1
'1' - 1   // 0
'5' * []    // 0
false / '5' // 0
'abc' - 1   // NaN
null + 1 // 1
undefined + 1 // NaN
```



> `null``0``undefined``NaN`



```javascript
+'abc' // NaN
-'abc' // NaN
+true // 1
-false // 0
```

## 

- Axel Rauschmayer, [What is {} + {} in JavaScript?](http://www.2ality.com/2012/01/object-plus-object.html)
- Axel Rauschmayer, [JavaScript quirk 1: implicit conversion of values](http://www.2ality.com/2013/04/quirk-implicit-conversion.html)
- Benjie Gillam, [Quantum JavaScript?](http://www.benjiegillam.com/2013/06/quantum-javascript/)
