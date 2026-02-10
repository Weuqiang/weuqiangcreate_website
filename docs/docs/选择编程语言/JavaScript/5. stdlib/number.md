# Number 

## 

`Number`



```javascript
var n = new Number(1);
typeof n // "object"
```

`Number``1`



```javascript
Number(true) // 1
```

`true``1``Number`

## 

`Number``Number`

- `Number.POSITIVE_INFINITY``Infinity`
- `Number.NEGATIVE_INFINITY``-Infinity`
- `Number.NaN``NaN`
- `Number.MIN_VALUE`064`5e-324`0`-Number.MIN_VALUE`
- `Number.MAX_SAFE_INTEGER``9007199254740991`
- `Number.MIN_SAFE_INTEGER``-9007199254740991`

```javascript
Number.POSITIVE_INFINITY // Infinity
Number.NEGATIVE_INFINITY // -Infinity
Number.NaN // NaN

Number.MAX_VALUE
// 1.7976931348623157e+308
Number.MAX_VALUE < Infinity
// true

Number.MIN_VALUE
// 5e-324
Number.MIN_VALUE > 0
// true

Number.MAX_SAFE_INTEGER // 9007199254740991
Number.MIN_SAFE_INTEGER // -9007199254740991
```

## 

`Number`4

### Number.prototype.toString()

`Number``toString`

```javascript
(10).toString() // "10"
```

`toString`

```javascript
(10).toString(2) // "1010"
(10).toString(8) // "12"
(10).toString(16) // "a"
```

`10` JavaScript 

```javascript
10.toString(2)
// SyntaxError: Unexpected token ILLEGAL
```

 JavaScript `10``10`JavaScript `10.0`

```javascript
10..toString(2)
// "1010"

// 
10 .toString(2) // "1010"
10.0.toString(2) // "1010"
```

`toString`

```javascript
10.5.toString() // "10.5"
10.5.toString(2) // "1010.1"
10.5.toString(8) // "12.4"
10.5.toString(16) // "a.8"
```

`toString`

```javascript
10['toString'](2) // "1010"
```

`toString``parseInt`

### Number.prototype.toFixed()

`toFixed()`

```javascript
(10).toFixed(2) // "10.00"
10.005.toFixed(2) // "10.01"
```

`10``10.005`2`10`

`toFixed()`0100 RangeError 

`5`

```javascript
(10.055).toFixed(2) // 10.05
(10.005).toFixed(2) // 10.01
```

### Number.prototype.toExponential()

`toExponential`

```javascript
(10).toExponential()  // "1e+1"
(10).toExponential(1) // "1.0e+1"
(10).toExponential(2) // "1.00e+1"

(1234).toExponential()  // "1.234e+3"
(1234).toExponential(1) // "1.2e+3"
(1234).toExponential(2) // "1.23e+3"
```

`toExponential`0100 RangeError 

### Number.prototype.toPrecision()

`Number.prototype.toPrecision()`

```javascript
(12.34).toPrecision(1) // "1e+1"
(12.34).toPrecision(2) // "12"
(12.34).toPrecision(3) // "12.3"
(12.34).toPrecision(4) // "12.34"
(12.34).toPrecision(5) // "12.340"
```

1100 RangeError 



```javascript
(12.35).toPrecision(3) // "12.3"
(12.25).toPrecision(3) // "12.3"
(12.15).toPrecision(3) // "12.2"
(12.45).toPrecision(3) // "12.4"
```

### Number.prototype.toLocaleString()

`Number.prototype.toLocaleString()`

```javascript
(123).toLocaleString('zh-Hans-CN-u-nu-hanidec')
// ""
```

`style``decimal``percent`

```javascript
(123).toLocaleString('zh-Hans-CN', { style: 'percent' })
// "12,300%"
```

`style``currency``currency`

```javascript
(123).toLocaleString('zh-Hans-CN', { style: 'currency', currency: 'CNY' })
// "123.00"

(123).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
// "123,00 €"

(123).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
// "$123.00"
```

`Number.prototype.toLocaleString()`

```javascript
(123).toLocaleString('123') // 
```

## 

`Number.prototype``Number`

```javascript
Number.prototype.add = function (x) {
  return this + x;
};

8['add'](2) // 10
```

`Number``add``Number``add``add`

```javascript
Number.prototype.subtract = function (x) {
  return this - x;
};

(8).add(2).subtract(4)
// 6
```

`Number``subtract``add`



```javascript
Number.prototype.iterate = function () {
  var result = [];
  for (var i = 0; i <= this; i++) {
    result.push(i);
  }
  return result;
};

(8).iterate()
// [0, 1, 2, 3, 4, 5, 6, 7, 8]
```

`Number``iterate`

`Number.prototype`

```javascript
var n = 1;
n.x = 1;
n.x // undefined
```

`n``x``undefined``n``Number``n``x`
