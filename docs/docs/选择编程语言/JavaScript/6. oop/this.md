# this 

## 

`this`

`this``this``this`

`this`“”

```javascript
this.property
```

`this``property`



```javascript
var person = {
  name: '',
  describe: function () {
    return ''+ this.name;
  }
};

person.describe()
// ""
```

`this.name``name``this.name``describe``describe``person``this``person``this.name``person.name`

`this`

```javascript
var A = {
  name: '',
  describe: function () {
    return ''+ this.name;
  }
};

var B = {
  name: ''
};

B.describe = A.describe;
B.describe()
// ""
```

`A.describe``B``B.describe``describe``B``this.name``B.name`

`this`

```javascript
function f() {
  return ''+ this.name;
}

var A = {
  name: '',
  describe: f
};

var B = {
  name: '',
  describe: f
};

A.describe() // ""
B.describe() // ""
```

`f``this``f``this`

`this`

```javascript
var A = {
  name: '',
  describe: function () {
    return ''+ this.name;
  }
};

var name = '';
var f = A.describe;
f() // ""
```

`A.describe``f``this``f`



```html
<input type="text" name="age" size=3 onChange="validate(this, 18, 99);">

<script>
function validate(obj, lowval, hival){
  if ((obj.value < lowval) || (obj.value > hival))
    console.log('Invalid Value!');
}
</script>
```

`onChange``this``this.value`

JavaScript `this` JavaScript `this`

## 

JavaScript  this 

```javascript
var obj = { foo:  5 };
```

`obj`JavaScript `{ foo: 5 }``obj``obj`reference`obj.foo``obj``foo`

`foo`

```javascript
{
  foo: {
    [[value]]: 5
    [[writable]]: true
    [[enumerable]]: true
    [[configurable]]: true
  }
}
```

`foo``value`



```javascript
var obj = { foo: function () {} };
```

`foo``value`

```javascript
{
  foo: {
    [[value]]: 
    ...
  }
}
```



```javascript
var f = function () {};
var obj = { f: f };

// 
f()

// obj 
obj.f()
```

JavaScript 

```javascript
var f = function () {
  console.log(x);
};
```

`x`

context`this`

```javascript
var f = function () {
  console.log(this.x);
}
```

`this.x``x`

```javascript
var f = function () {
  console.log(this.x);
}

var x = 1;
var obj = {
  f: f,
  x: 2,
};

// 
f() // 1

// obj 
obj.f() // 2
```

`f``this.x``x``obj``this.x``obj.x`

## 

`this`

**1**

`this``window`

```javascript
this === window // true

function f() {
  console.log(this === window);
}
f() // true
```

`this``window`

**2**

`this`

```javascript
var Obj = function (p) {
  this.p = p;
};
```

`Obj``this``this.p``p`

```javascript
var o = new Obj('Hello World!');
o.p // "Hello World!"
```

**3**

`this``this``this`



```javascript
var obj ={
  foo: function () {
    console.log(this);
  }
};

obj.foo() // obj
```

`obj.foo``this``obj`

`this`

```javascript
// 
(obj.foo = obj.foo)() // window
// 
(false || obj.foo)() // window
// 
(1, obj.foo)() // window
```

`obj.foo``obj``this``obj`

JavaScript `obj``obj.foo``obj.foo()``this``obj``this`

```javascript
// 
(obj.foo = function () {
  console.log(this);
})()
// 
(function () {
  console.log(this);
})()

// 
(false || function () {
  console.log(this);
})()

// 
(1, function () {
  console.log(this);
})()
```

`this``this`

```javascript
var a = {
  p: 'Hello',
  b: {
    m: function() {
      console.log(this.p);
    }
  }
};

a.b.m() // undefined
```

`a.b.m``a``this``a``a.b`

```javascript
var b = {
  m: function() {
   console.log(this.p);
  }
};

var a = {
  p: 'Hello',
  b: b
};

(a.b).m() //  b.m()
```



```javascript
var a = {
  b: {
    m: function() {
      console.log(this.p);
    },
    p: 'Hello'
  }
};
```

`this`

```javascript
var a = {
  b: {
    m: function() {
      console.log(this.p);
    },
    p: 'Hello'
  }
};

var hello = a.b.m;
hello() // undefined
```

`m``hello``this``m``hello``this`

```javascript
var hello = a.b;
hello.m() // Hello
```

## 

###  this

`this``this`

```javascript
var o = {
  f1: function () {
    console.log(this);
    var f2 = function () {
      console.log(this);
    }();
  }
}

o.f1()
// Object
// Window
```

`this``o`

```javascript
var temp = function () {
  console.log(this);
};

var o = {
  f1: function () {
    console.log(this);
    var f2 = temp();
  }
}
```

`this`

```javascript
var o = {
  f1: function() {
    console.log(this);
    var that = this;
    var f2 = function() {
      console.log(that);
    }();
  }
}

o.f1()
// Object
// Object
```

`that``this``that``this`

`this`

JavaScript `this`

```javascript
var counter = {
  count: 0
};
counter.inc = function () {
  'use strict';
  this.count++
};
var f = counter.inc;
f()
// TypeError: Cannot read property 'count' of undefined
```

`inc``'use strict'``this`

###  this

`map``foreach``this`

```javascript
var o = {
  v: 'hello',
  p: [ 'a1', 'a2' ],
  f: function f() {
    this.p.forEach(function (item) {
      console.log(this.v + ' ' + item);
    });
  }
}

o.f()
// undefined a1
// undefined a2
```

`foreach``this``window``o.v``this``this`

`this`

```javascript
var o = {
  v: 'hello',
  p: [ 'a1', 'a2' ],
  f: function f() {
    var that = this;
    this.p.forEach(function (item) {
      console.log(that.v+' '+item);
    });
  }
}

o.f()
// hello a1
// hello a2
```

`this``foreach`

```javascript
var o = {
  v: 'hello',
  p: [ 'a1', 'a2' ],
  f: function f() {
    this.p.forEach(function (item) {
      console.log(this.v + ' ' + item);
    }, this);
  }
}

o.f()
// hello a1
// hello a2
```

###  this

`this`

```javascript
var o = new Object();
o.f = function () {
  console.log(this === o);
}

// jQuery 
$('#button').on('click', o.f);
```

`false``this``o` DOM `f`

`this``this`

##  this 

`this` JavaScript `this`JavaScript `call``apply``bind`/`this`

### Function.prototype.call()

`call``this`

```javascript
var obj = {};

var f = function () {
  return this;
};

f() === window // true
f.call(obj) === obj // true
```

`f``this``window``call``this``this``obj``obj``f`

`call``null``undefined`

```javascript
var n = 123;
var obj = { n: 456 };

function a() {
  console.log(this.n);
}

a.call() // 123
a.call(null) // 123
a.call(undefined) // 123
a.call(window) // 123
a.call(obj) // 456
```

`a``this``123``call``this``obj``456``call``null``undefined`

`call``call`

```javascript
var f = function () {
  return this;
};

f.call(5)
// Number {[[PrimitiveValue]]: 5}
```

`call``5``Number``f``this`

`call`

```javascript
func.call(thisValue, arg1, arg2, ...)
```

`call``this`

```javascript
function add(a, b) {
  return a + b;
}

add.call(this, 1, 2) // 3
```

`call``add``this``1``2``add``3`

`call`

```javascript
var obj = {};
obj.hasOwnProperty('toString') // false

//  hasOwnProperty 
obj.hasOwnProperty = function () {
  return true;
};
obj.hasOwnProperty('toString') // true

Object.prototype.hasOwnProperty.call(obj, 'toString') // false
```

`hasOwnProperty``obj``call``hasOwnProperty``obj``obj`

### Function.prototype.apply()

`apply``call``this`

```javascript
func.apply(thisValue, [arg1, arg2, ...])
```

`apply``this``null``undefined``call``apply`

```javascript
function f(x, y){
  console.log(x + y);
}

f.call(null, 1, 1) // 2
f.apply(null, [1, 1]) // 2
```

`f``apply`



**1**

JavaScript `apply``Math.max`

```javascript
var a = [10, 2, 4, 15, 9];
Math.max.apply(null, a) // 15
```

**2`undefined`**

`apply``Array``undefined`

```javascript
Array.apply(null, ['a', ,'b'])
// [ 'a', undefined, 'b' ]
```

`undefined``forEach``undefined`

```javascript
var a = ['a', , 'b'];

function print(i) {
  console.log(i);
}

a.forEach(print)
// a
// b

Array.apply(null, a).forEach(print)
// a
// undefined
// b
```

**3**

`slice``arguments`

```javascript
Array.prototype.slice.apply({0: 1, length: 1}) // [1]
Array.prototype.slice.apply({0: 1}) // []
Array.prototype.slice.apply({0: 1, length: 2}) // [1, undefined]
Array.prototype.slice.apply({length: 1}) // [undefined]
```

`apply``length`

**4**



```javascript
var obj = new Object();

var func = function () {
  console.log(this === obj);
}

var handler = function (){
  func.apply(obj);
  //  f.call(obj);
};

// jQuery 
$('#button').on('click', handler);
```

`true``apply()``call()``bind()`

### Function.prototype.bind()

`bind()``this`

```javascript
var d = new Date();
d.getTime() // 1481869925657

var print = d.getTime;
print() // Uncaught TypeError: this is not a Date object.
```

`d.getTime()``print``print()``getTime()``this``Date``print``this``Date`

`bind()`

```javascript
var print = d.getTime.bind(d);
print() // 1481869925657
```

`bind()``getTime()``this``d`

`bind``this`

```javascript
var counter = {
  count: 0,
  inc: function () {
    this.count++;
  }
};

var func = counter.inc.bind(counter);
func();
counter.count // 1
```

`counter.inc()``func``bind()``inc()``this``counter`

`this`

```javascript
var counter = {
  count: 0,
  inc: function () {
    this.count++;
  }
};

var obj = {
  count: 100
};
var func = counter.inc.bind(obj);
func();
obj.count // 101
```

`bind()``inc()``this``obj``func``obj``count`

`bind()`

```javascript
var add = function (x, y) {
  return x * this.m + y * this.n;
}

var obj = {
  m: 2,
  n: 2
};

var newAdd = add.bind(obj, 5);
newAdd(5) // 20
```

`bind()``this``add()``x``5``newAdd()``y`

`bind()``null``undefined``this``this``window`

```javascript
function add(x, y) {
  return x + y;
}

var plus5 = add.bind(null, 5);
plus5(10) // 15
```

`add()``this``bind()``x``plus5()``y``add()``this``bind()``null`

`bind()`

**1**

`bind()`

```javascript
element.addEventListener('click', o.m.bind(o));
```

`click``bind()`

```javascript
element.removeEventListener('click', o.m.bind(o));
```



```javascript
var listener = o.m.bind(o);
element.addEventListener('click', listener);
//  ...
element.removeEventListener('click', listener);
```

**2**

 JavaScript `this``bind()``counter.inc()``counter`

```javascript
var counter = {
  count: 0,
  inc: function () {
    'use strict';
    this.count++;
  }
};

function callIt(callback) {
  callback();
}

callIt(counter.inc.bind(counter));
counter.count // 1
```

`callIt()``counter.inc``counter.inc()``this``bind()``counter.inc``counter``this``counter`

`this`

```javascript
var obj = {
  name: '',
  times: [1, 2, 3],
  print: function () {
    this.times.forEach(function (n) {
      console.log(this.name);
    });
  }
};

obj.print()
// 
```

`obj.print``this.times``this``obj``forEach()``this.name`

```javascript
obj.print = function () {
  this.times.forEach(function (n) {
    console.log(this === window);
  });
};

obj.print()
// true
// true
// true
```

`bind()``this`

```javascript
obj.print = function () {
  this.times.forEach(function (n) {
    console.log(this.name);
  }.bind(this));
};

obj.print()
// 
// 
// 
```

**3`call()`**

`bind()` JavaScript `slice()`

```javascript
[1, 2, 3].slice(0, 1) // [1]
// 
Array.prototype.slice.call([1, 2, 3], 0, 1) // [1]
```

`slice``[1, 2, 3]``[1, 2, 3]``Array.prototype.slice()``call`

`call()``Function.prototype.call()``bind()`

```javascript
var slice = Function.prototype.call.bind(Array.prototype.slice);
slice([1, 2, 3], 0, 1) // [1]
```

`Array.prototype.slice``Function.prototype.call``Array.prototype.slice.call`

```javascript
var push = Function.prototype.call.bind(Array.prototype.push);
var pop = Function.prototype.call.bind(Array.prototype.pop);

var a = [1 ,2 ,3];
push(a, 4)
a // [1, 2, 3, 4]

pop(a)
a // [1, 2, 3]
```

`Function.prototype.call``Function.prototype.bind``bind`

```javascript
function f() {
  console.log(this.v);
}

var o = { v: 123 };
var bind = Function.prototype.call.bind(Function.prototype.bind);
bind(f, o)() // 123
```

`Function.prototype.bind``Function.prototype.call``bind`

## 

- Jonathan Creamer, [Avoiding the "this" problem in JavaScript](http://tech.pro/tutorial/1192/avoiding-the-this-problem-in-javascript)
- Erik Kronberg, [Bind, Call and Apply in JavaScript](https://variadic.me/posts/2013-10-22-bind-call-and-apply-in-javascript.html)
- Axel Rauschmayer, [JavaScript’s this: how it works, where it can trip you up](http://www.2ality.com/2014/05/this.html)
