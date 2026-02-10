# 



## 

### 

JavaScript 

**1function **

`function``function`

```javascript
function print(s) {
  console.log(s);
}
```

`print``print()`Function Declaration

**2**

`function`

```javascript
var print = function(s) {
  console.log(s);
};
```

Function Expression

`function`

```javascript
var print = function x(){
  console.log(typeof x);
};

x
// ReferenceError: x is not defined

print()
// function
```

`x``x`

```javascript
var f = function f() {};
```



**3Function **

`Function`

```javascript
var add = new Function(
  'x',
  'y',
  'return x + y'
);

// 
function add(x, y) {
  return x + y;
}
```

`Function``add`“”`add`

`Function`

```javascript
var foo = new Function(
  'return "hello world";'
);

// 
function foo() {
  return 'hello world';
}
```

`Function``new`



### 



```javascript
function f() {
  console.log(1);
}
f() // 2

function f() {
  console.log(2);
}
f() // 2
```



### return 



```javascript
function add(x, y) {
  return x + y;
}

add(1, 1) // 2
```



`return`JavaScript `return``return``return``return``undefined`

recursion

```javascript
function fib(num) {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 2) + fib(num - 1);
}

fib(6) // 8
```

`fib``fib`68

### 

JavaScript 

 JavaScript 

```javascript
function add(x, y) {
  return x + y;
}

// 
var operator = add;

// 
function a(op){
  return op;
}
a(add)(1, 1)
// 2
```

### 

JavaScript `function`

```javascript
f();

function f() {}
```

`f`“”`f`JavaScript 

```javascript
f();
var f = function (){};
// TypeError: undefined is not a function
```



```javascript
var f;
f();
f = function () {};
```

`f``f``undefined`

`function``var``var`

```javascript
var f = function () {
  console.log('1');
}

function f() {
  console.log('2');
}

f() // 1
```

`f``var`

## 

### name 

`name`

```javascript
function f1() {}
f1.name // "f1"
```

`name`

```javascript
var f2 = function () {};
f2.name // "f2"
```

`name``function`

```javascript
var f3 = function myName() {};
f3.name // 'myName'
```

`f3.name``f3``myName`

`name`

```javascript
var myFunc = function () {};

function test(f) {
  console.log(f.name);
}

test(myFunc) // myFunc
```

`test``name`

### length 

`length`

```javascript
function f(a, b) {}
f.length // 2
```

`f``length``length`2

`length`“”overload

### toString()

`toString()`

```javascript
function f() {
  a();
  b();
  c();
}

f.toString()
// function f() {
//  a();
//  b();
//  c();
// }
```

`f``toString()``f`

`toString()``function (){[native code]}`

```javascript
Math.sqrt.toString()
// "function sqrt() { [native code] }"
```

`Math.sqrt()` JavaScript `toString()`



```javascript
function f() {/*
  
  
*/}

f.toString()
// "function f(){/*
//   
//   
// */}"
```



```javascript
var multiline = function (fn) {
  var arr = fn.toString().split('\n');
  return arr.slice(1, arr.length - 1).join('\n');
};

function f() {/*
  
  
*/}

multiline(f);
// " 
//   "
```

`f``toString()``f`

## 

### 

scope ES5 JavaScript ES6 

global variable

```javascript
var v = 1;

function f() {
  console.log(v);
}

f()
// 1
```

`f``v`

“”local variable

```javascript
function f(){
  var v = 1;
}

v // ReferenceError: v is not defined
```

`v`



```javascript
var v = 1;

function f(){
  var v = 2;
  console.log(v);
}

f() // 2
v // 1
```

`v``v``v`

`var`

```javascript
if (true) {
  var x = 5;
}
console.log(x);  // 5
```

`x`

### 

“”`var`

```javascript
function foo(x) {
  if (x > 100) {
    var tmp = x - 100;
  }
}

// 
function foo(x) {
  var tmp;
  if (x > 100) {
    tmp = x - 100;
  };
}
```

### 



```javascript
var a = 1;
var x = function () {
  console.log(a);
};

function f() {
  var a = 2;
  x();
}

f() // 1
```

`x``f``a``f``1``2`



`A``B``B``A`

```javascript
var x = function () {
  console.log(a);
};

function y(f) {
  var a = 2;
  f();
}

y(x)
// ReferenceError: a is not defined
```

`x``y``x``y``y``a`



```javascript
function foo() {
  var x = 1;
  function bar() {
    console.log(x);
  }
  return bar;
}

var x = 2;
var f = foo();
f() // 1
```

`foo``bar``bar``foo``foo``bar``x``foo``x``foo``x`“”

## 

### 



```javascript
function square(x) {
  return x * x;
}

square(2) // 4
square(3) // 9
```

`x``square`

### 

JavaScript 

```javascript
function f(a, b) {
  return a;
}

f(1, 2, 3) // 1
f(1) // 1
f() // undefined

f.length // 2
```

`f`JavaScript `undefined``length`

`undefined`

```javascript
function f(a, b) {
  return a;
}

f( , 1) // SyntaxError: Unexpected token ,(…)
f(undefined, 1) // undefined
```



### 

passes by value

```javascript
var p = 2;

function f(p) {
  p = 3;
}
f(p);

p // 2
```

`p``f``p`

pass by reference

```javascript
var obj = { p: 1 };

function f(o) {
  o.p = 2;
}
f(obj);

obj.p // 2
```

`f``obj``obj``p`



```javascript
var obj = [1, 2, 3];

function f(o) {
  o = [2, 3, 4];
}
f(obj);

obj // [1, 2, 3]
```

`f()``obj``o``obj``o``o`

### 



```javascript
function f(a, a) {
  console.log(a);
}

f(1, 2) // 2
```

`f()``a``a``a`

```javascript
function f(a, a) {
  console.log(a);
}

f(1) // undefined
```

`f()``a``undefined``a``arguments`

```javascript
function f(a, a) {
  console.log(arguments[0]);
}

f(1) // 1
```

### arguments 

**1**

 JavaScript `arguments`

`arguments``arguments[0]``arguments[1]`

```javascript
var f = function (one) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

f(1, 2, 3)
// 1
// 2
// 3
```

`arguments`

```javascript
var f = function(a, b) {
  arguments[0] = 3;
  arguments[1] = 2;
  return a + b;
}

f(1, 1) // 5
```

`f()``3``2`

`arguments``arguments`

```javascript
var f = function(a, b) {
  'use strict'; // 
  arguments[0] = 3;
  arguments[1] = 2;
  return a + b;
}

f(1, 1) // 2
```

`arguments``a``b`

`arguments``length`

```javascript
function f() {
  return arguments.length;
}

f(1, 2, 3) // 3
f(1) // 1
f() // 0
```

**2**

`arguments``slice``forEach``arguments`

`arguments``arguments``slice`

```javascript
var args = Array.prototype.slice.call(arguments);

// 
var args = [];
for (var i = 0; i < arguments.length; i++) {
  args.push(arguments[i]);
}
```

**3callee **

`arguments``callee`

```javascript
var f = function () {
  console.log(arguments.callee === f);
}

f() // true
```

`arguments.callee`

## 

### 

closure JavaScript 

JavaScript 

```javascript
var n = 999;

function f1() {
  console.log(n);
}
f1() // 999
```

`f1``n`



```javascript
function f1() {
  var n = 999;
}

console.log(n)
// Uncaught ReferenceError: n is not defined(
```

`f1``n`



```javascript
function f1() {
  var n = 999;
  function f2() {
console.log(n); // 999
  }
}
```

`f2``f1``f1``f2``f2``f1` JavaScript ""chain scope

`f2``f1``f2``f1`

```javascript
function f1() {
  var n = 999;
  function f2() {
    console.log(n);
  }
  return f2;
}

var result = f1();
result(); // 999
```

`f1``f2``f2``f1``f1`

`f2` JavaScript “”“”`f2``f1``f2``f1`



```javascript
function createIncrementor(start) {
  return function () {
    return start++;
  };
}

var inc = createIncrementor(5);

inc() // 5
inc() // 6
inc() // 7
```

`start``createIncrementor``start``inc``createIncrementor`

`inc``start``createIncrementor`



```javascript
function Person(name) {
  var _age;
  function setAge(n) {
    _age = n;
  }
  function getAge() {
    return _age;
  }

  return {
    name: name,
    getAge: getAge,
    setAge: setAge
  };
}

var p1 = Person('');
p1.setAge(25);
p1.getAge() // 25
```

`Person``_age``getAge``setAge``p1`



### IIFE

 JavaScript `()``print()``print`



```javascript
function(){ /* code */ }();
// SyntaxError: Unexpected token (
```

`function`

```javascript
// 
function f() {}

// 
var f = function f() {}
```



```javascript
var f = function f(){ return 1}();
f // 1
```

`function`

JavaScript `function``function`

`function`

```javascript
(function(){ /* code */ }());
// 
(function(){ /* code */ })();
```

“”Immediately-Invoked Function Expression IIFE

 IIFE

```javascript
// 
(function(){ /* code */ }())
(function(){ /* code */ }())
```

JavaScript 



```javascript
var i = function(){ return 10; }();
true && function(){ /* code */ }();
0, function(){ /* code */ }();
```



```javascript
!function () { /* code */ }();
~function () { /* code */ }();
-function () { /* code */ }();
+function () { /* code */ }();
```

“” IIFE 

```javascript
// 
var tmp = newData;
processData(tmp);
storeData(tmp);

// 
(function () {
  var tmp = newData;
  processData(tmp);
  storeData(tmp);
}());
```



## eval 

### 

`eval`

```javascript
eval('var a = 1;');
a // 1
```

`a`



```javascript
eval('3x') // Uncaught SyntaxError: Invalid or unexpected token
```

`eval``eval`

```javascript
eval('return;'); // Uncaught SyntaxError: Illegal return statement
```

`return`

`eval`

```javascript
eval(123) // 123
```

`eval`

```javascript
var a = 1;
eval('a = 2');

a // 2
```

`eval``a``eval`

JavaScript `eval`

```javascript
(function f() {
  'use strict';
  eval('var foo = 123');
  console.log(foo);  // ReferenceError: foo is not defined
})()
```

`f``eval``foo`

`eval`

```javascript
(function f() {
  'use strict';
  var foo = 1;
  eval('foo = 2');
  console.log(foo);  // 2
})()
```

`eval`

`eval` JavaScript `eval` JSON `JSON.parse`

### eval 

`eval``eval`

```javascript
var m = eval;
m('var x = 1');
x // 1
```

`m``eval``m('var x = 1')``eval`

`eval`JavaScript `eval``eval`

```javascript
var a = 1;

function f() {
  var a = 2;
  var e = eval;
  e('console.log(a)');
}

f() // 1
```

`eval``a``e()`

`eval``eval()`

```javascript
eval.call(null, '...')
window.eval('...')
(1, eval)('...')
(eval, eval)('...')
```

`eval`

## 

- Ben Alman, [Immediately-Invoked Function Expression (IIFE)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
- Mark Daggett, [Functions Explained](https://web.archive.org/web/20160911170816/http://markdaggett.com/blog/2013/02/15/functions-explained/)
- Juriy Zaytsev, [Named function expressions demystified](http://kangax.github.io/nfe/)
- Marco Rogers polotek, [What is the arguments object?](http://docs.nodejitsu.com/articles/javascript-conventions/what-is-the-arguments-object)
- Juriy Zaytsev, [Global eval. What are the options?](http://perfectionkills.com/global-eval-what-are-the-options/)
- Axel Rauschmayer, [Evaluating JavaScript code via eval() and new Function()](http://www.2ality.com/2014/01/eval.html)
