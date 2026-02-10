# Math 

`Math` JavaScript `Math`

## 

`Math`

- `Math.E``e`
- `Math.LN2`2 
- `Math.LN10`10 
- `Math.LOG2E` 2 `e`
- `Math.LOG10E` 10 `e`
- `Math.PI``π`
- `Math.SQRT1_2`0.5 
- `Math.SQRT2`2 

```javascript
Math.E // 2.718281828459045
Math.LN2 // 0.6931471805599453
Math.LN10 // 2.302585092994046
Math.LOG2E // 1.4426950408889634
Math.LOG10E // 0.4342944819032518
Math.PI // 3.141592653589793
Math.SQRT1_2 // 0.7071067811865476
Math.SQRT2 // 1.4142135623730951
```



## 

`Math`

- `Math.abs()`
- `Math.ceil()`
- `Math.floor()`
- `Math.max()`
- `Math.min()`
- `Math.pow()`
- `Math.sqrt()`
- `Math.log()`
- `Math.exp()``e`
- `Math.round()`
- `Math.random()`

### Math.abs()

`Math.abs`

```javascript
Math.abs(1) // 1
Math.abs(-1) // 1
```

### Math.max()Math.min()

`Math.max``Math.min`, `Math.min``Infinity`, `Math.max``-Infinity`

```javascript
Math.max(2, -1, 5) // 5
Math.min(2, -1, 5) // -1
Math.min() // Infinity
Math.max() // -Infinity
```

### Math.floor()Math.ceil()

`Math.floor`

```javascript
Math.floor(3.2) // 3
Math.floor(-3.2) // -4
```

`Math.ceil`

```javascript
Math.ceil(3.2) // 4
Math.ceil(-3.2) // -3
```



```javascript
function ToInteger(x) {
  x = Number(x);
  return x < 0 ? Math.ceil(x) : Math.floor(x);
}

ToInteger(3.2) // 3
ToInteger(3.5) // 3
ToInteger(3.8) // 3
ToInteger(-3.2) // -3
ToInteger(-3.5) // -3
ToInteger(-3.8) // -3
```

`ToInteger`

### Math.round()

`Math.round`

```javascript
Math.round(0.1) // 0
Math.round(0.5) // 1
Math.round(0.6) // 1

// 
Math.floor(x + 0.5)
```

`0.5`

```javascript
Math.round(-1.1) // -1
Math.round(-1.5) // -1
Math.round(-1.6) // -2
```

### Math.pow()

`Math.pow`

```javascript
//  2 ** 2
Math.pow(2, 2) // 4
//  2 ** 3
Math.pow(2, 3) // 8
```



```javascript
var radius = 20;
var area = Math.PI * Math.pow(radius, 2);
```

### Math.sqrt()

`Math.sqrt``NaN`

```javascript
Math.sqrt(4) // 2
Math.sqrt(-4) // NaN
```

### Math.log()

`Math.log``e`

```javascript
Math.log(Math.E) // 1
Math.log(10) // 2.302585092994046
```

10`Math.log``Math.LN10`2`Math.LN2`

```javascript
Math.log(100)/Math.LN10 // 2
Math.log(8)/Math.LN2 // 3
```

### Math.exp()

`Math.exp``e`

```javascript
Math.exp(1) // 2.718281828459045
Math.exp(3) // 20.085536923187668
```

### Math.random()

`Math.random()`0101

```javascript
Math.random() // 0.7151307314634323
```



```javascript
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

getRandomArbitrary(1.5, 6.5)
// 2.4942810038223864
```



```javascript
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

getRandomInt(1, 6) // 5
```



```javascript
function random_str(length) {
  var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  ALPHABET += 'abcdefghijklmnopqrstuvwxyz';
  ALPHABET += '0123456789-_';
  var str = '';
  for (var i = 0; i < length; ++i) {
    var rand = Math.floor(Math.random() * ALPHABET.length);
    str += ALPHABET.substring(rand, rand + 1);
  }
  return str;
}

random_str(6) // "NdQKOr"
```

`random_str``ALPHABET`

### 

`Math`

- `Math.sin()`
- `Math.cos()`
- `Math.tan()`
- `Math.asin()`
- `Math.acos()`
- `Math.atan()`

```javascript
Math.sin(0) // 0
Math.cos(0) // 1
Math.tan(0) // 0

Math.sin(Math.PI / 2) // 1

Math.asin(1) // 1.5707963267948966
Math.acos(1) // 0
Math.atan(1) // 0.7853981633974483
```
