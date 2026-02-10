# 

JavaScript strict mode JavaScript 



## 

 JavaScript 

 ES5 

-  JavaScript 
- 
- 
-  JavaScript 

 JavaScript 

## 

`use strict`

```javascript
'use strict';
```





**1 **

`use strict`(`use strict`)

```html
<script>
  'use strict';
  console.log('');
</script>

<script>
  console.log('');
</script>
```

 JavaScript `<script>`

`use strict`

```html
<script>
  console.log('');
  'use strict';
</script>
```

**2**

`use strict`

```javascript
function strict() {
  'use strict';
  return '';
}

function strict2() {
  'use strict';
  function f() {
    return '';
  }
  return f();
}

function notStrict() {
  return '';
}
```



```javascript
(function () {
  'use strict';
  // some code here
})();
```

## 

 JavaScript 

### 

`length`

```javascript
'use strict';
'abc'.length = 5;
// TypeError: Cannot assign to read only property 'length' of string 'abc'
```

`length``length`

non-configurable

```javascript
// 
'use strict';
Object.defineProperty({}, 'a', {
  value: 37,
  writable: false
});
obj.a = 123;
// TypeError: Cannot assign to read only property 'a' of object #<Object>

// 
'use strict';
var obj = Object.defineProperty({}, 'p', {
  value: 1,
  configurable: false
});
delete obj.p
// TypeError: Cannot delete property 'p' of #<Object>
```

### 

gettersetter

```javascript
'use strict';
var obj = {
  get v() { return 1; }
};
obj.v = 2;
// Uncaught TypeError: Cannot set property v of #<Object> which has only a getter
```

`obj.v`

### 



```javascript
'use strict';
var obj = {};
Object.preventExtensions(obj);
obj.v = 1;
// Uncaught TypeError: Cannot add property v, object is not extensible
```

`obj`

### evalarguments 

`eval``arguments`

```javascript
'use strict';
var eval = 17;
var arguments = 17;
var obj = { set p(arguments) { } };
try { } catch (arguments) { }
function x(eval) { }
function arguments() { }
var y = function eval() { };
var f = new Function('arguments', "'use strict'; return 17;");
// SyntaxError: Unexpected eval or arguments in strict mode
```

### 

`arguments[i]`

```javascript
function f(a, a, b) {
  'use strict';
  return a + b;
}
// Uncaught SyntaxError: Duplicate parameter name not allowed in this context
```

### 0

`0``0100`64`0`

```javascript
'use strict';
var n = 0100;
// Uncaught SyntaxError: Octal literals are not allowed in strict mode.
```

## 



### 



```javascript
'use strict';

v = 1; // v

for (i = 0; i < 2; i++) { // i 
  // ...
}

function f() {
  x = 123;
}
f() // 
```



###  this 

`this`

```javascript
// 
function f() {
  console.log(this === window);
}
f() // true

// 
function f() {
  'use strict';
  console.log(this === undefined);
}
f() // true
```

`this``undefined`

`new``this`

```javascript
function f() {
  'use strict';
  this.a = 1;
};

f();// this 
```

`new``this``undefined``call``apply``bind``this``this``null``undefined`

```javascript
// 
function fun() {
  return this;
}

fun() // window
fun.call(2) // Number {2}
fun.call(true) // Boolean {true}
fun.call(null) // window
fun.call(undefined) // window

// 
'use strict';
function fun() {
  return this;
}

fun() //undefined
fun.call(2) // 2
fun.call(true) // true
fun.call(null) // null
fun.call(undefined) // undefined
```

`this`

###  fn.calleefn.caller

`fn.caller``fn.arguments`

```javascript
function f1() {
  'use strict';
  f1.caller;    // 
  f1.arguments; // 
}

f1();
```

###  arguments.calleearguments.caller

`arguments.callee``arguments.caller``arguments.callee``arguments.caller`

```javascript
'use strict';
var f = function () {
  return arguments.callee;
};

f(); // 
```

### 

`delete``configurable``true``delete`

```javascript
'use strict';
var x;
delete x; // 

var obj = Object.create(null, {
  x: {
    value: 1,
    configurable: true
  }
});
delete obj.x; // 
```

## 

JavaScript “”runtime





###  with 

`with``with`

```javascript
'use strict';
var v  = 1;
var obj = {};

with (obj) {
  v = 2;
}
// Uncaught SyntaxError: Strict mode code may not include a with statement
```

###  eval 

JavaScript scope`eval`

`eval``eval``eval``eval`

```javascript
(function () {
  'use strict';
  var x = 2;
  console.log(eval('var x = 5; x')) // 5
  console.log(x) // 2
})()
```

`eval``x`

`eval`

```javascript
// 
function f1(str){
  'use strict';
  return eval(str);
}
f1('undeclared_variable = 1'); // 

// 
function f2(str){
  return eval(str);
}
f2('"use strict";undeclared_variable = 1')  // 
```

`eval`

### arguments 

`arguments``arguments`

```javascript
function f(a) {
  a = 2;
  return [a, arguments[0]];
}
f(1); // [2, 2]

function f(a) {
  'use strict';
  a = 2;
  return [a, arguments[0]];
}
f(1); // [2, 1]
```

`arguments`

##  JavaScript 

JavaScript  ECMAScript 6 ES6 

### 

ES6 ES5 

```javascript
'use strict';
if (true) {
  function f1() { } // 
}

for (var i = 0; i < 5; i++) {
  function f2() { } // 
}
```

`if``for`ES5 

 ES6  ES6 

### 

 JavaScript implementsinterfaceletpackageprivateprotectedpublicstaticyield

```javascript
function package(protected) { // 
  'use strict';
  var implements; // 
}
```

## 

- MDN, [Strict mode](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Functions_and_function_scope/Strict_mode)
- Dr. Axel Rauschmayer, [JavaScript: Why the hatred for strict mode?](http://www.2ality.com/2011/10/strict-mode-hatred.html)
- Dr. Axel Rauschmayer[JavaScript’s strict mode: a summary](http://www.2ality.com/2011/01/javascripts-strict-mode-summary.html)
- Douglas Crockford, [Strict Mode Is Coming To Town](http://www.yuiblog.com/blog/2010/12/14/strict-mode-is-coming-to-town/)
- [JavaScript Strict Mode Support](http://java-script.limewebs.com/strictMode/test_hosted.html)
