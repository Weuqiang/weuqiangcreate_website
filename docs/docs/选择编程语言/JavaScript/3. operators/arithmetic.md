# 

JavaScript 

## 

JavaScript 10

- ****`x + y`
- **** `x - y`
- **** `x * y`
- ****`x / y`
- ****`x ** y`
- ****`x % y`
- ****`++x`  `x++`
- ****`--x`  `x--`
- **** `+x`
- ****`-x`



## 

### 

`+`

```javascript
1 + 1 // 2
```

JavaScript 

```javascript
true + true // 2
1 + true // 2
```





```javascript
'a' + 'bc' // "abc"
```



```javascript
1 + 'a' // "1a"
false + 'a' // "falsea"
```

“”overload

```javascript
'3' + 4 + 5 // "345"
3 + 4 + '5' // "75"
```





```javascript
1 - '2' // -1
1 * '2' // 2
1 / '2' // 0.5
```



### 



```javascript
var obj = { p: 1 };
obj + 2 // "[object Object]2"
```

`obj``[object Object]``2`



`valueOf`

```javascript
var obj = { p: 1 };
obj.valueOf() // { p: 1 }
```

`valueOf``toString`

```javascript
var obj = { p: 1 };
obj.valueOf().toString() // "[object Object]"
```

`toString``[object Object]`

`valueOf``toString`

```javascript
var obj = {
  valueOf: function () {
    return 1;
  }
};

obj + 2 // 3
```

`obj``valueOf``1``obj + 2``3``valueOf``toString`

`toString`

```javascript
var obj = {
  toString: function () {
    return 'hello';
  }
};

obj + 2 // "hello2"
```

`obj``toString``hello`

`Date``toString`

```javascript
var obj = new Date();
obj.valueOf = function () { return 1 };
obj.toString = function () { return 'hello' };

obj + 2 // "hello2"
```

`obj``Date``valueOf``toString``toString`

## 

`%`

```javascript
12 % 5 // 2
```



```javascript
-1 % 2 // -1
1 % -2 // 1
```



```javascript
// 
function isOdd(n) {
  return n % 2 === 1;
}
isOdd(-5) // false
isOdd(-4) // false

// 
function isOdd(n) {
  return Math.abs(n % 2) === 1;
}
isOdd(-5) // true
isOdd(-4) // false
```



```javascript
6.5 % 2.1
// 0.19999999999999973
```

## 

11

```javascript
var x = 1;
++x // 2
x // 2

--x // 1
x // 1
```

`x``2``1``x`

side effect

//

```javascript
var x = 1;
var y = 1;

x++ // 1
++y // 2
```

`x``1``y``2`

## 

`+`

`Number`

```javascript
+true // 1
+[] // 0
+{} // NaN
```

`NaN`

`-`

```javascript
var x = 1;
-x // -1
-(-x) // 1
```





## 

`**`

```javascript
2 ** 4 // 16
```



```javascript
//  2 ** (3 ** 2)
2 ** 3 ** 2
// 512
```



## 

Assignment Operators

`=`

```javascript
//  1  x
var x = 1;

//  y  x
var x = y;
```



```javascript
//  x = x + y
x += y

//  x = x - y
x -= y

//  x = x * y
x *= y

//  x = x / y
x /= y

//  x = x % y
x %= y

//  x = x ** y
x **= y
```



```javascript
//  x = x >> y
x >>= y

//  x = x << y
x <<= y

//  x = x >>> y
x >>>= y

//  x = x & y
x &= y

//  x = x | y
x |= y

//  x = x ^ y
x ^= y
```


