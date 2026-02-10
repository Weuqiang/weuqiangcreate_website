# Array 

## 

`Array` JavaScript 

```javascript
var arr = new Array(2);
arr.length // 2
arr // [ empty x 2 ]
```

`Array()``2`

`new`

```javascript
var arr = Array(2);
// 
var arr = new Array(2);
```

`new`

`Array()`

```javascript
// 
new Array() // []

// 
new Array(1) // [ empty ]
new Array(2) // [ empty x 2 ]

// 
new Array(3.2) // RangeError: Invalid array length
new Array(-3) // RangeError: Invalid array length

// 
// 
new Array('abc') // ['abc']
new Array([1]) // [Array[1]]

// 
new Array(1, 2) // [1, 2]
new Array('a', 'b', 'c') // ['a', 'b', 'c']
```

`Array()`

```javascript
// bad
var arr = new Array(1, 2);

// good
var arr = [1, 2];
```

`undefined``length`

```javascript
var a = new Array(3);
var b = [undefined, undefined, undefined];

a.length // 3
b.length // 3

a[0] // undefined
b[0] // undefined

0 in a // false
0 in b // true
```

`a``Array()`3`b``undefined``a``b``undefined``a``b`

## 

### Array.isArray()

`Array.isArray``typeof`

```javascript
var arr = [1, 2, 3];

typeof arr // "object"
Array.isArray(arr) // true
```

`typeof``Object``Array.isArray`

## 

### valueOf()toString()

`valueOf``valueOf``valueOf`

```javascript
var arr = [1, 2, 3];
arr.valueOf() // [1, 2, 3]
```

`toString``toString`

```javascript
var arr = [1, 2, 3];
arr.toString() // "1,2,3"

var arr = [1, 2, 3, [4, 5, 6]];
arr.toString() // "1,2,3,4,5,6"
```

### push()pop()

`push`

```javascript
var arr = [];

arr.push(1) // 1
arr.push('a') // 2
arr.push(true, {}) // 4
arr // [1, 'a', true, {}]
```

`push`

`pop`

```javascript
var arr = ['a', 'b', 'c'];

arr.pop() // 'c'
arr // ['a', 'b']
```

`pop``undefined`

```javascript
[].pop() // undefined
```

`push``pop`“”stack

```javascript
var arr = [];
arr.push(1, 2);
arr.push(3);
arr.pop();
arr // [1, 2]
```

`3`

### shift()unshift()

`shift()`

```javascript
var a = ['a', 'b', 'c'];

a.shift() // 'a'
a // ['b', 'c']
```

`shift()`

`shift()`

```javascript
var list = [1, 2, 3, 4];
var item;

while (item = list.shift()) {
  console.log(item);
}

list // []
```

`list.shift()``0``false`

`push()``shift()`“”queue

`unshift()`

```javascript
var a = ['a', 'b', 'c'];

a.unshift('x'); // 4
a // ['x', 'a', 'b', 'c']
```

`unshift()`

```javascript
var arr = [ 'c', 'd' ];
arr.unshift('a', 'b') // 4
arr // [ 'a', 'b', 'c', 'd' ]
```

### join()

`join()`

```javascript
var a = [1, 2, 3, 4];

a.join(' ') // '1 2 3 4'
a.join(' | ') // "1 | 2 | 3 | 4"
a.join() // "1,2,3,4"
```

`undefined``null`

```javascript
[undefined, null].join('#')
// '#'

['a',, 'b'].join('-')
// 'a--b'
```

`call`

```javascript
Array.prototype.join.call('hello', '-')
// "h-e-l-l-o"

var obj = { 0: 'a', 1: 'b', length: 2 };
Array.prototype.join.call(obj, '-')
// 'a-b'
```

### concat()

`concat`

```javascript
['hello'].concat(['world'])
// ["hello", "world"]

['hello'].concat(['world'], ['!'])
// ["hello", "world", "!"]

[].concat({a: 1}, {b: 2})
// [{ a: 1 }, { b: 2 }]

[2].concat({a: 1})
// [2, {a: 1}]
```

`concat`

```javascript
[1, 2, 3].concat(4, 5, 6)
// [1, 2, 3, 4, 5, 6]
```

`concat`“”

```javascript
var obj = { a: 1 };
var oldArray = [obj];

var newArray = oldArray.concat();

obj.a = 2;
newArray[0].a // 2
```

`concat`

### reverse()

`reverse`

```javascript
var a = ['a', 'b', 'c'];

a.reverse() // ["c", "b", "a"]
a // ["c", "b", "a"]
```

### slice()

`slice()`

```javascript
arr.slice(start, end);
```

0

```javascript
var a = ['a', 'b', 'c'];

a.slice(0) // ["a", "b", "c"]
a.slice(1) // ["b", "c"]
a.slice(1, 2) // ["b"]
a.slice(2, 6) // ["c"]
a.slice() // ["a", "b", "c"]
```

`slice()`

`slice()`

```javascript
var a = ['a', 'b', 'c'];
a.slice(-2) // ["b", "c"]
a.slice(-2, -1) // ["b"]
```

`-2``-1`



```javascript
var a = ['a', 'b', 'c'];
a.slice(4) // []
a.slice(2, 1) // []
```

`slice()`

```javascript
Array.prototype.slice.call({ 0: 'a', 1: 'b', length: 2 })
// ['a', 'b']

Array.prototype.slice.call(document.querySelectorAll("div"));
Array.prototype.slice.call(arguments);
```

`call``slice()`

### splice()

`splice()`

```javascript
arr.splice(start, count, addElement1, addElement2, ...);
```

`splice`0

```javascript
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2) // ["e", "f"]
a // ["a", "b", "c", "d"]
```

4

```javascript
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(4, 2, 1, 2) // ["e", "f"]
a // ["a", "b", "c", "d", 1, 2]
```





```javascript
var a = ['a', 'b', 'c', 'd', 'e', 'f'];
a.splice(-4, 2) // ["c", "d"]
```

`c`

`splice``0`

```javascript
var a = [1, 1, 1];

a.splice(1, 0, 2) // []
a // [1, 2, 1, 1]
```



```javascript
var a = [1, 2, 3, 4];
a.splice(2) // [3, 4]
a // [1, 2]
```

### sort()

`sort`

```javascript
['d', 'c', 'b', 'a'].sort()
// ['a', 'b', 'c', 'd']

[4, 3, 2, 1].sort()
// [1, 2, 3, 4]

[11, 101].sort()
// [101, 11]

[10111, 1101, 111].sort()
// [10111, 1101, 111]
```

`sort()``101``11`

`sort`

```javascript
[10111, 1101, 111].sort(function (a, b) {
  return a - b;
})
// [111, 1101, 10111]
```

`sort``0`

```javascript
[
  { name: "", age: 30 },
  { name: "", age: 24 },
  { name: "", age: 28  }
].sort(function (o1, o2) {
  return o1.age - o2.age;
})
// [
//   { name: "", age: 24 },
//   { name: "", age: 28  },
//   { name: "", age: 30 }
// ]
```



```javascript
// bad
[1, 4, 2, 6, 0, 6, 2, 6].sort((a, b) => a > b)

// good
[1, 4, 2, 6, 0, 6, 2, 6].sort((a, b) => a - b)
```



### map()

`map()`

```javascript
var numbers = [1, 2, 3];

numbers.map(function (n) {
  return n + 1;
});
// [2, 3, 4]

numbers
// [1, 2, 3]
```

`numbers`

`map()``map()`

```javascript
[1, 2, 3].map(function(elem, index, arr) {
  return elem * index;
});
// [0, 2, 6]
```

`map()``elem``index``arr``[1, 2, 3]`

`map()``this`this 

```javascript
var arr = ['a', 'b', 'c'];

[1, 2].map(function (e) {
  return this[e];
}, arr)
// ['b', 'c']
```

`map()``this``arr`

`map()`

```javascript
var f = function (n) { return 'a' };

[1, undefined, 2].map(f) // ["a", "a", "a"]
[1, null, 2].map(f) // ["a", "a", "a"]
[1, , 2].map(f) // ["a", , "a"]
```

`map()``undefined``null`

### forEach()

`forEach()``map()``forEach()``map()``forEach()`

`forEach()``map()`

```javascript
function log(element, index, array) {
  console.log('[' + index + '] = ' + element);
}

[2, 5, 9].forEach(log);
// [0] = 2
// [1] = 5
// [2] = 9
```

`forEach()``map()`

`forEach()``this`

```javascript
var out = [];

[1, 2, 3].forEach(function(elem) {
  this.push(elem * elem);
}, out);

out // [1, 4, 9]
```

`out``forEach()``this``out`

`forEach()``for`

```javascript
var arr = [1, 2, 3];

for (var i = 0; i < arr.length; i++) {
  if (arr[i] === 2) break;
  console.log(arr[i]);
}
// 1
```

`forEach()`

`forEach()`

```javascript
var log = function (n) {
  console.log(n + 1);
};

[1, undefined, 2].forEach(log)
// 2
// NaN
// 3

[1, null, 2].forEach(log)
// 2
// 1
// 3

[1, , 2].forEach(log)
// 2
// 3
```

`forEach()``undefined``null`

### filter()

`filter()`

`true`

```javascript
[1, 2, 3, 4, 5].filter(function (elem) {
  return (elem > 3);
})
// [4, 5]
```

`3`

```javascript
var arr = [0, 1, 'a', false];

arr.filter(Boolean)
// [1, "a"]
```

`filter()``arr``true`

`filter()`

```javascript
[1, 2, 3, 4, 5].filter(function (elem, index, arr) {
  return index % 2 === 0;
});
// [1, 3, 5]
```



`filter()``this`

```javascript
var obj = { MAX: 3 };
var myFilter = function (item) {
  if (item > this.MAX) return true;
};

var arr = [2, 8, 3, 4, 1, 3, 2, 9];
arr.filter(myFilter, obj) // [8, 4, 9]
```

`myFilter()``this``filter()``obj``3`

### some()every()

“”assert



`some``true``some``true``false`

```javascript
var arr = [1, 2, 3, 4, 5];
arr.some(function (elem, index, arr) {
  return elem >= 3;
});
// true
```

`arr`3`some``true`

`every``true``every``true``false`

```javascript
var arr = [1, 2, 3, 4, 5];
arr.every(function (elem, index, arr) {
  return elem >= 3;
});
// false
```

`arr``3``false`

`some``false``every``true`

```javascript
function isEven(x) { return x % 2 === 0 }

[].some(isEven) // false
[].every(isEven) // true
```

`some``every``this`

### reduce()reduceRight()

`reduce()``reduceRight()``reduce()``reduceRight()`

```javascript
[1, 2, 3, 4, 5].reduce(function (a, b) {
  console.log(a, b);
  return a + b;
})
// 1 2
// 3 3
// 6 4
// 10 5
//15
```

`reduce()``reduce()` n  n - 1 

- `a``1``b``2`
- `a``3``b``3`
- `a``6``b``4`
- `a``10``b``5``15`

`reduce()``reduceRight()`

1. 
2. 
3. `1`
4. 



```javascript
[1, 2, 3, 4, 5].reduce(function (
  a,   // 
  b,   // 
  i,   // 
  arr  // 
) {
  // ... ...
```

`reduce()``reduceRight()`

```javascript
[1, 2, 3, 4, 5].reduce(function (a, b) {
  return a + b;
}, 10);
// 25
```

`a`101025`b`5

`reduce()`

```javascript
function add(prev, cur) {
  return prev + cur;
}

[].reduce(add)
// TypeError: Reduce of empty array with no initial value
[].reduce(add, 1)
// 1
```

`reduce()`

`reduceRight()`

```javascript
function subtract(prev, cur) {
  return prev - cur;
}

[3, 2, 1].reduce(subtract) // 0
[3, 2, 1].reduceRight(subtract) // -4
```

`reduce()``3``2``1``reduceRight``1``2``3`



```javascript
function findLongest(entries) {
  return entries.reduce(function (longest, entry) {
    return entry.length > longest.length ? entry : longest;
  }, '');
}

findLongest(['aaa', 'bb', 'c']) // "aaa"
```

`reduce()`

### indexOf()lastIndexOf()

`indexOf``-1`

```javascript
var a = ['a', 'b', 'c'];

a.indexOf('b') // 1
a.indexOf('y') // -1
```

`indexOf`

```javascript
['a', 'b', 'c'].indexOf('a', 1) // -1
```

1`a``-1`

`lastIndexOf``-1`

```javascript
var a = [2, 5, 9, 2];
a.lastIndexOf(2) // 3
a.lastIndexOf(7) // -1
```

`NaN``NaN`

```javascript
[NaN].indexOf(NaN) // -1
[NaN].lastIndexOf(NaN) // -1
```

`===``NaN`

### 



```javascript
var users = [
  {name: 'tom', email: 'tom@example.com'},
  {name: 'peter', email: 'peter@example.com'}
];

users
.map(function (user) {
  return user.email;
})
.filter(function (email) {
  return /^t/.test(email);
})
.forEach(function (email) {
  console.log(email);
});
// "tom@example.com"
```

 Email `t` Email 

## 

- Nicolas Bevacqua, [Fun with JavaScript Native Array Functions](http://flippinawesome.org/2013/11/25/fun-with-javascript-native-array-functions/)
