# 

## 

array0

```javascript
var arr = ['a', 'b', 'c'];
```

`a``b``c``a`0`b`1`c`2



```javascript
var arr = [];

arr[0] = 'a';
arr[1] = 'b';
arr[2] = 'c';
```



```javascript
var arr = [
  {a: 1},
  [1, 2, 3],
  function() {return true;}
];

arr[0] // Object {a: 1}
arr[1] // [1, 2, 3]
arr[2] // function (){return true;}
```

`arr`3



```javascript
var a = [[1, 2], [3, 4]];
a[0][1] // 2
a[1][1] // 4
```

## 

`typeof``object`

```javascript
typeof [1, 2, 3] // "object"
```

`typeof`

012...

```javascript
var arr = ['a', 'b', 'c'];

Object.keys(arr)
// ["0", "1", "2"]
```

`Object.keys`012

012...JavaScript 

```javascript
var arr = ['a', 'b', 'c'];

arr['0'] // 'a'
arr[0] // 'a'
```





```javascript
var a = [];

a[1.00] = 6;
a[1] // 6
```

`1.00``1``1`

`object.key``object[key]`

```javascript
var arr = [1, 2, 3];
arr.0 // SyntaxError
```

`arr.0`identifier`arr[0]`

## length 

`length`

```javascript
['a', 'b', 'c'].length // 3
```

JavaScript 32 4294967295 2<sup>32</sup> - 1`length` 4294967295

`length``1`

```javascript
var arr = ['a', 'b'];
arr.length // 2

arr[2] = 'c';
arr.length // 3

arr[9] = 'd';
arr.length // 10

arr[1000] = 'e';
arr.length // 1001
```

`length``1`

`length``length`

```javascript
var arr = [ 'a', 'b', 'c' ];
arr.length // 3

arr.length = 2;
arr // ["a", "b"]
```

`length`212`c`

`length`0

```javascript
var arr = [ 'a', 'b', 'c' ];

arr.length = 0;
arr // []
```

`length`

```javascript
var a = ['a'];

a.length = 3;
a[1] // undefined
```

`length``undefined`

`length`JavaScript 

```javascript
// 
[].length = -1
// RangeError: Invalid array length

// 232
[].length = Math.pow(2, 32)
// RangeError: Invalid array length

// 
[].length = 'abc'
// RangeError: Invalid array length
```

`length`

```javascript
var a = [];

a['p'] = 'abc';
a.length // 0

a[2.1] = 'abc';
a.length // 0
```

`length``length`1`length``0`



```javascript
var arr = [];
arr[-1] = 'a';
arr[Math.pow(2, 32)] = 'b';

arr.length // 0
arr[-1] // "a"
arr[4294967296] // "b"
```

`arr``length`

## in 

`in`

```javascript
var arr = [ 'a', 'b', 'c' ];
2 in arr  // true
'2' in arr // true
4 in arr // false
```

`2``2`

`in``false`

```javascript
var arr = [];
arr[100] = 'a';

100 in arr // true
1 in arr // false
```

`arr``arr[100]``false`

## for...in 

`for...in`

```javascript
var a = [1, 2, 3];

for (var i in a) {
  console.log(a[i]);
}
// 1
// 2
// 3
```

`for...in`

```javascript
var a = [1, 2, 3];
a.foo = true;

for (var key in a) {
  console.log(key);
}
// 0
// 1
// 2
// foo
```

`foo``for...in`

`for``while`

```javascript
var a = [1, 2, 3];

// for
for(var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

// while
var i = 0;
while (i < a.length) {
  console.log(a[i]);
  i++;
}

var l = a.length;
while (l--) {
  console.log(a[l]);
}
```



`forEach` Array 

```javascript
var colors = ['red', 'green', 'blue'];
colors.forEach(function (color) {
  console.log(color);
});
// red
// green
// blue
```

## 

hole

```javascript
var a = [1, , 1];
a.length // 3
```

`length`



```javascript
var a = [1, 2, 3,];

a.length // 3
a // [1, 2, 3]
```

`length`

`undefined`

```javascript
var a = [, , ,];
a[1] // undefined
```

`delete``length`

```javascript
var a = [1, 2, 3];
delete a[1];

a[1] // undefined
a.length // 3
```

`delete``length``length``length`

`undefined``forEach``for...in``Object.keys`

```javascript
var a = [, , ,];

a.forEach(function (x, i) {
  console.log(i + '. ' + x);
})
// 

for (var i in a) {
  console.log(i);
}
// 

Object.keys(a)
// []
```

`undefined`

```javascript
var a = [undefined, undefined, undefined];

a.forEach(function (x, i) {
  console.log(i + '. ' + x);
});
// 0. undefined
// 1. undefined
// 2. undefined

for (var i in a) {
  console.log(i);
}
// 0
// 1
// 2

Object.keys(a)
// ['0', '1', '2']
```

`undefined``undefined`

## 

`length`“”array-like object

```javascript
var obj = {
  0: 'a',
  1: 'b',
  2: 'c',
  length: 3
};

obj[0] // 'a'
obj[1] // 'b'
obj.length // 3
obj.push('d') // TypeError: obj.push is not a function
```

`obj`“”`obj``push`

“”`length``length``length`

```javascript
var obj = {
  length: 0
};
obj[3] = 'd';
obj.length // 0
```

`obj``length``obj`

“”`arguments` DOM 

```javascript
// arguments
function args() { return arguments }
var arrayLike = args('a', 'b');

arrayLike[0] // 'a'
arrayLike.length // 2
arrayLike instanceof Array // false

// DOM
var elts = document.getElementsByTagName('h3');
elts.length // 3
elts instanceof Array // false

// 
'abc'[1] // 'b'
'abc'.length // 3
'abc' instanceof Array // false
```

`instanceof``false`

`slice`“”

```javascript
var arr = Array.prototype.slice.call(arrayLike);
```

“”`call()`

```javascript
function print(value, index) {
  console.log(index + ' : ' + value);
}

Array.prototype.forEach.call(arrayLike, print);
```

`arrayLike``forEach()``call()``forEach()``arrayLike`

`arguments``forEach`

```javascript
// forEach 
function logArgs() {
  Array.prototype.forEach.call(arguments, function (elem, i) {
    console.log(i + '. ' + elem);
  });
}

//  for 
function logArgs() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(i + '. ' + arguments[i]);
  }
}
```

`Array.prototype.forEach.call`

```javascript
Array.prototype.forEach.call('abc', function (chr) {
  console.log(chr);
});
// a
// b
// c
```

`forEach`“”`forEach`

```javascript
var arr = Array.prototype.slice.call('abc');
arr.forEach(function (chr) {
  console.log(chr);
});
// a
// b
// c
```

## 

- Axel Rauschmayer, [Arrays in JavaScript](http://www.2ality.com/2012/12/arrays.html)
- Axel Rauschmayer, [JavaScript: sparse arrays vs. dense arrays](http://www.2ality.com/2012/06/dense-arrays.html)
- Felix Bohm, [What They Didn’t Tell You About ES5′s Array Extras](http://net.tutsplus.com/tutorials/javascript-ajax/what-they-didnt-tell-you-about-es5s-array-extras/)
- Juriy Zaytsev, [How ECMAScript 5 still does not allow to subclass an array](http://perfectionkills.com/how-ecmascript-5-still-does-not-allow-to-subclass-an-array/)
