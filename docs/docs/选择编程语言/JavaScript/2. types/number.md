# 

## 

### 

JavaScript 64`1``1.0`

```javascript
1 === 1.0 // true
```

JavaScript 64 JavaScript 6432“”



```javascript
0.1 + 0.2 === 0.3
// false

0.3 / 0.1
// 2.9999999999999996

(0.3 - 0.2) === (0.2 - 0.1)
// false
```

### 

 IEEE 754JavaScript 64

- 1`0``1`
- 21211
- 136452



1102047IEEE 754 02047164`1.xx...xx``xx..xx`6452JavaScript 53

```
(-1)^ * 1.xx...xx * 2^
```

02047 JavaScript 

53253-2<sup>53</sup> + 1  2<sup>53</sup> - 1

```javascript
Math.pow(2, 53)
// 9007199254740992

Math.pow(2, 53) + 1
// 9007199254740992

Math.pow(2, 53) + 2
// 9007199254740994

Math.pow(2, 53) + 3
// 9007199254740996

Math.pow(2, 53) + 4
// 9007199254740996
```

25325325316JavaScript 15

```javascript
Math.pow(2, 53)
// 9007199254740992

// 
9007199254740992111
// 9007199254740992000
```

253`111`0

### 

641120472111642047 JavaScript 2<sup>1024</sup>2<sup>-1023</sup>

21024“” JavaScript `Infinity`

```javascript
Math.pow(2, 1024) // Infinity
```

2-1075-102352“” JavaScript 0

```javascript
Math.pow(2, -1075) // 0
```



```javascript
var x = 0.5;

for(var i = 0; i < 25; i++) {
  x = x * x;
}

x // 0
```

`0.5`250JavaScript 0

JavaScript `Number``MAX_VALUE``MIN_VALUE`

```javascript
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MIN_VALUE // 5e-324
```

## 

JavaScript `35``0xFF`



```javascript
123e3 // 123000
123e-3 // 0.123
-3.1E+12
.1e-23
```

`e``E`

JavaScript 

**121**

```javascript
1234567890123456789012
// 1.2345678901234568e+21

123456789012345678901
// 123456789012345680000
```

**25**

```javascript
// 5
// 
0.0000003 // 3e-7

// 
0.000003 // 0.000003
```

## 

literalJavaScript 

- 0
- `0o``0O`00-7
- `0x``0X`
- `0b``0B`

JavaScript 

```javascript
0xff // 255
0o377 // 255
0b11 // 3
```



```javascript
0xzz // 
0o88 // 
0b22 // 
```

`z``8``2`

00`8``9`

```javascript
0888 // 888
0777 // 511
```

0ES5  ES6

## 

JavaScript 

### 

JavaScript 64`0`

JavaScript 2`0``+0``-0`64

```javascript
-0 === +0 // true
0 === -0 // true
0 === +0 // true
```

`0`

```javascript
+0 // 0
-0 // 0
(-0).toString() // '0'
(+0).toString() // '0'
```

`+0``-0`

```javascript
(1 / +0) === (1 / -0) // false
```

`+Infinity``-Infinity``Infinity`

### NaN

**1**

`NaN` JavaScript “”Not a Number

```javascript
5 - 'x' // NaN
```

`x``x``NaN`“”`NaN`

`NaN`

```javascript
Math.acos(2) // NaN
Math.log(-1) // NaN
Math.sqrt(-1) // NaN
```

`0``0``NaN`

```javascript
0 / 0 // NaN
```

`NaN``Number``typeof`

```javascript
typeof NaN // 'number'
```

**2**

`NaN`

```javascript
NaN === NaN // false
```

`indexOf``NaN`

```javascript
[NaN].indexOf(NaN) // -1
```

`NaN``false`

```javascript
Boolean(NaN) // false
```

`NaN``NaN`

```javascript
NaN + 32 // NaN
NaN - 32 // NaN
NaN * 32 // NaN
NaN / 32 // NaN
```

### Infinity

**1**

`Infinity`“”00`Infinity`

```javascript
// 
Math.pow(2, 1024)
// Infinity

// 
0 / 0 // NaN
1 / 0 // Infinity
```

`Infinity``0``0``NaN`0`0``Infinity`

`Infinity``Infinity``-Infinity`

```javascript
Infinity === -Infinity // false

1 / -0 // -Infinity
-1 / -0 // Infinity
```

`-0``-Infinity``-0``Infinity`

overflowunderflow`0`JavaScript 

`Infinity``NaN``-Infinity``NaN`

```javascript
Infinity > 1000 // true
-Infinity < -1000 // true
```

`Infinity``NaN``false`

```javascript
Infinity > NaN // false
-Infinity > NaN // false

Infinity < NaN // false
-Infinity < NaN // false
```

**2**

`Infinity`

```javascript
5 * Infinity // Infinity
5 - Infinity // -Infinity
Infinity / 5 // Infinity
5 / Infinity // 0
```

0`Infinity``NaN`0`Infinity``0``Infinity`0`Infinity`

```javascript
0 * Infinity // NaN
0 / Infinity // 0
Infinity / 0 // Infinity
```

`Infinity``Infinity``Infinity`

```javascript
Infinity + Infinity // Infinity
Infinity * Infinity // Infinity
```

`Infinity``Infinity``NaN`

```javascript
Infinity - Infinity // NaN
Infinity / Infinity // NaN
```

`Infinity``null``null`0`0`

```javascript
null * Infinity // NaN
null / Infinity // 0
Infinity / null // Infinity
```

`Infinity``undefined``NaN`

```javascript
undefined + Infinity // NaN
undefined - Infinity // NaN
undefined * Infinity // NaN
undefined / Infinity // NaN
Infinity / undefined // NaN
```

## 

### parseInt()

**1**

`parseInt`

```javascript
parseInt('123') // 123
```



```javascript
parseInt('   81') // 81
```

`parseInt`

```javascript
parseInt(1.23) // 1
// 
parseInt('1.23') // 1
```



```javascript
parseInt('8a') // 8
parseInt('12**') // 12
parseInt('12.34') // 12
parseInt('15e2') // 15
parseInt('15px') // 15
```

`parseInt`

`NaN`

```javascript
parseInt('abc') // NaN
parseInt('.3') // NaN
parseInt('') // NaN
parseInt('+') // NaN
parseInt('+1') // 1
```

`parseInt``NaN`

`0x``0X``parseInt`

```javascript
parseInt('0x10') // 16
```

`0`10

```javascript
parseInt('011') // 11
```

`parseInt`

```javascript
parseInt(1000000000000000000000.5) // 1
// 
parseInt('1e+21') // 1

parseInt(0.0000008) // 8
// 
parseInt('8e-7') // 8
```

**2**

`parseInt`236`parseInt`10

```javascript
parseInt('1000') // 1000
// 
parseInt('1000', 10) // 1000
```



```javascript
parseInt('1000', 2) // 8
parseInt('1000', 6) // 216
parseInt('1000', 8) // 512
```

`1000`8216512`parseInt`

236`NaN``0``undefined``null`

```javascript
parseInt('10', 37) // NaN
parseInt('10', 1) // NaN
parseInt('10', 0) // 10
parseInt('10', null) // 10
parseInt('10', undefined) // 10
```

`NaN`

```javascript
parseInt('1546', 2) // 1
parseInt('546', 2) // NaN
```

`1``5``4``6`1`NaN`

`parseInt`

```javascript
parseInt(0x11, 36) // 43
parseInt(0x11, 2) // 1

// 
parseInt(String(0x11), 36)
parseInt(String(0x11), 2)

// 
parseInt('17', 36)
parseInt('17', 2)
```

`0x11`1736`17``43``1`

0

```javascript
parseInt(011, 2) // NaN

// 
parseInt(String(011), 2)

// 
parseInt(String(9), 2)
```

`011``9``9``NaN``parseInt('011', 2)``011`3

JavaScript 0`0`

### parseFloat()

`parseFloat`

```javascript
parseFloat('3.14') // 3.14
```



```javascript
parseFloat('314e-2') // 3.14
parseFloat('0.0314E+2') // 3.14
```



```javascript
parseFloat('3.14more non-digit characters') // 3.14
```

`parseFloat`

```javascript
parseFloat('\t\v\r12.34\n ') // 12.34
```



```javascript
parseFloat([1.23]) // 1.23
// 
parseFloat(String([1.23])) // 1.23
```

`NaN`

```javascript
parseFloat([]) // NaN
parseFloat('FF2') // NaN
parseFloat('') // NaN
```

`parseFloat``NaN`

`parseFloat``Number`

```javascript
parseFloat(true)  // NaN
Number(true) // 1

parseFloat(null) // NaN
Number(null) // 0

parseFloat('') // NaN
Number('') // 0

parseFloat('123.45#') // 123.45
Number('123.45#') // NaN
```

### isNaN()

`isNaN``NaN`

```javascript
isNaN(NaN) // true
isNaN(123) // false
```

`isNaN``NaN``true``isNaN``true``NaN`

```javascript
isNaN('Hello') // true
// 
isNaN(Number('Hello')) // true
```

`isNaN``true`

```javascript
isNaN({}) // true
// 
isNaN(Number({})) // true

isNaN(['xzy']) // true
// 
isNaN(Number(['xzy'])) // true
```

`isNaN``false`

```javascript
isNaN([]) // false
isNaN([123]) // false
isNaN(['123']) // false
```

`false``Number`

`isNaN`

```javascript
function myIsNaN(value) {
  return typeof value === 'number' && isNaN(value);
}
```

`NaN``NaN`

```javascript
function myIsNaN(value) {
  return value !== value;
}
```

### isFinite()

`isFinite`

```javascript
isFinite(Infinity) // false
isFinite(-Infinity) // false
isFinite(NaN) // false
isFinite(undefined) // false
isFinite(null) // true
isFinite(-1) // true
```

`Infinity``-Infinity``NaN``undefined``false``isFinite``true`

## 

- Dr. Axel Rauschmayer, [How numbers are encoded in JavaScript](http://www.2ality.com/2012/04/number-encoding.html)
- Humphry, [JavaScript  Number /](https://segmentfault.com/a/1190000000407658)
