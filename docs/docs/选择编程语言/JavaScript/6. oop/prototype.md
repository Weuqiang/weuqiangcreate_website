# 

A  B  B 

“”classJavaScript  class“”prototype JavaScript 

ES6  class  class ES6 

## 

### 

JavaScript 

```javascript
function Cat (name, color) {
  this.name = name;
  this.color = color;
}

var cat1 = new Cat('', '');

cat1.name // ''
cat1.color // ''
```

`Cat``name``color``cat1`



```javascript
function Cat(name, color) {
  this.name = name;
  this.color = color;
  this.meow = function () {
    console.log('');
  };
}

var cat1 = new Cat('', '');
var cat2 = new Cat('', '');

cat1.meow === cat2.meow
// false
```

`cat1``cat2``meow``meow``meow``meow`

 JavaScript prototype

### prototype 

JavaScript 

JavaScript `prototype`

```javascript
function f() {}
typeof f.prototype // "object"
```

`f``prototype`



```javascript
function Animal(name) {
  this.name = name;
}
Animal.prototype.color = 'white';

var cat1 = new Animal('');
var cat2 = new Animal('');

cat1.color // 'white'
cat2.color // 'white'
```

`Animal``prototype``cat1``cat2``color`

****

```javascript
Animal.prototype.color = 'yellow';

cat1.color // "yellow"
cat2.color // "yellow"
```

`color``yellow``color``color``color`



```javascript
cat1.color = 'black';

cat1.color // 'black'
cat2.color // 'yellow'
Animal.prototype.color // 'yellow';
```

`cat1``color``black``color``yellow`



```javascript
Animal.prototype.walk = function () {
  console.log(this.name + ' is walking');
};
```

`Animal.prototype``walk``Animal`

### 

JavaScript prototype“”prototype chain……

`Object.prototype``Object``prototype``Object.prototype``valueOf``toString``Object.prototype`

`Object.prototype``Object.prototype``null``null``null`

```javascript
Object.getPrototypeOf(Object.prototype)
// null
```

`Object.prototype``null``null``Object.getPrototypeOf`

JavaScript `Object.prototype``undefined`“”overriding



`prototype`

```javascript
var MyArray = function () {};

MyArray.prototype = new Array();
MyArray.prototype.constructor = MyArray;

var mine = new MyArray();
mine.push(1, 2, 3);
mine.length // 3
mine instanceof Array // true
```

`mine``MyArray``MyArray.prototype``mine``prototype``instanceof``mine``Array``instanceof`

`constructor`

### constructor 

`prototype``constructor``prototype`

```javascript
function P() {}
P.prototype.constructor === P // true
```

`constructor``prototype`

```javascript
function P() {}
var p = new P();

p.constructor === P // true
p.constructor === P.prototype.constructor // true
p.hasOwnProperty('constructor') // false
```

`p``P``p``constructor``P.prototype.constructor`

`constructor`

```javascript
function F() {};
var f = new F();

f.constructor === F // true
f.constructor === RegExp // false
```

`constructor``f``F``RegExp`

`constructor`

```javascript
function Constr() {}
var x = new Constr();

var y = new x.constructor();
y instanceof Constr // true
```

`x``Constr``x.constructor`

```javascript
Constr.prototype.createCopy = function () {
  return new this.constructor();
};
```

`createCopy`

`constructor``constructor`

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.constructor === Person // true

Person.prototype = {
  method: function () {}
};

Person.prototype.constructor === Person // false
Person.prototype.constructor === Object // true
```

`Person``constructor``Person``Person``constructor``Object``Person.prototype.constructor``Object`

`constructor`

```javascript
// 
C.prototype = {
  method1: function (...) { ... },
  // ...
};

// 
C.prototype = {
  constructor: C,
  method1: function (...) { ... },
  // ...
};

// 
C.prototype.method1 = function (...) { ... };
```

`constructor``instanceof`

`constructor``name`

```javascript
function Foo() {}
var f = new Foo();
f.constructor.name // "Foo"
```

## instanceof 

`instanceof`

```javascript
var v = new Vehicle();
v instanceof Vehicle // true
```

`v``Vehicle``true`

`instanceof`prototype

```javascript
v instanceof Vehicle
// 
Vehicle.prototype.isPrototypeOf(v)
```

`Vehicle``v``Vehicle.prototype``isPrototypeOf()` JavaScript 

`instanceof``true`

```javascript
var d = new Date();
d instanceof Date // true
d instanceof Object // true
```

`d``Date``Object``true`

`null``Object``instanceof``null`

```javascript
var obj = { foo: 123 };
obj instanceof Object // true

null instanceof Object // false
```

`null``instanceOf Object``true`

`instanceof``prototype``null``instanceof`

```javascript
var obj = Object.create(null);
typeof obj // "object"
obj instanceof Object // false
```

`Object.create(null)``obj``null``Object.create()``Object``prototype``instanceof``obj``Object``instanceof``null`

`instanceof`

```javascript
var x = [1, 2, 3];
var y = {};
x instanceof Array // true
y instanceof Object // true
```

`instanceof``x``y`

`instanceof`

```javascript
var s = 'hello';
s instanceof String // false
```

`String``false`

`undefined``null``instanceof``false`

```javascript
undefined instanceof Object // false
null instanceof Object // false
```

`instanceof``new`

```javascript
function Fubar (foo, bar) {
  if (this instanceof Fubar) {
    this._foo = foo;
    this._bar = bar;
  } else {
    return new Fubar(foo, bar);
  }
}
```

`instanceof``this``Fubar``new`

## 



```javascript
function Sub(value) {
  Super.call(this);
  this.prop = value;
}
```

`Sub``this``Super`



```javascript
Sub.prototype = Object.create(Super.prototype);
Sub.prototype.constructor = Sub;
Sub.prototype.method = '...';
```

`Sub.prototype``Object.create(Super.prototype)``Super.prototype``Sub.prototype``Super.prototype`

`Sub.prototype`

```javascript
Sub.prototype = new Super();
```



`Shape`

```javascript
function Shape() {
  this.x = 0;
  this.y = 0;
}

Shape.prototype.move = function (x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};
```

`Rectangle``Shape`

```javascript
// 
function Rectangle() {
  Shape.call(this); // 
}
// 
function Rectangle() {
  this.base = Shape;
  this.base();
}

// 
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;
```

`instanceof``true`

```javascript
var rect = new Rectangle();

rect instanceof Rectangle  // true
rect instanceof Shape  // true
```



```javascript
ClassB.prototype.print = function() {
  ClassA.prototype.print.call(this);
  // some code
}
```

`B``print``A``print``A``print`

## 

JavaScript 

```javascript
function M1() {
  this.hello = 'hello';
}

function M2() {
  this.world = 'world';
}

function S() {
  M1.call(this);
  M2.call(this);
}

//  M1
S.prototype = Object.create(M1.prototype);
//  M2
Object.assign(S.prototype, M2.prototype);

// 
S.prototype.constructor = S;

var s = new S();
s.hello // 'hello'
s.world // 'world'
```

`S``M1``M2` Mixin

## 

“” JavaScript ……

JavaScript 

JavaScript ES6 “”“”

### 





```javascript
var module1 = new Object({
_count : 0,
m1 : function (){
//...
},
m2 : function (){
  //...
}
});
```

`m1``m2``module1`

```javascript
module1.m1();
```



```javascript
module1._count = 5;
```

### 



```javascript
function StringBuilder() {
  var buffer = [];

  this.add = function (str) {
     buffer.push(str);
  };

  this.toString = function () {
    return buffer.join('');
  };

}
```

`buffer``buffer`

```javascript
function StringBuilder() {
  this._buffer = [];
}

StringBuilder.prototype = {
  constructor: StringBuilder,
  add: function (str) {
    this._buffer.push(str);
  },
  toString: function () {
    return this._buffer.join('');
  }
};
```



### 

“”Immediately-Invoked Function ExpressionIIFE

```javascript
var module1 = (function () {
var _count = 0;
var m1 = function () {
  //...
};
var m2 = function () {
//...
};
return {
m1 : m1,
m2 : m2
};
})();
```

`_count`

```javascript
console.info(module1._count); //undefined
```

`module1` JavaScript 

### 

“”augmentation

```javascript
var module1 = (function (mod){
mod.m3 = function () {
//...
};
return mod;
})(module1);
```

`module1``m3()``module1`

""Loose augmentation

```javascript
var module1 = (function (mod) {
//...
return mod;
})(window.module1 || {});
```

""“”“”

### 





```javascript
var module1 = (function ($, YAHOO) {
//...
})(jQuery, YAHOO);
```

`module1` jQuery  YUI `module1`



```javascript
(function($, window, document) {

  function go(num) {
  }

  function handleEvents() {
  }

  function initialize() {
  }

  function dieCarouselDie() {
  }

  //attach to the global scope
  window.finalCarousel = {
    init : initialize,
    destroy : dieCarouselDie
  }

})( jQuery, window, document );
```

`finalCarousel``init``destroy``go``handleEvents``initialize``dieCarouselDie`

## 

- [JavaScript Modules: A Beginner’s Guide](https://www.freecodecamp.org/news/javascript-modules-a-beginner-s-guide-783f7d7a5fcc), by Preethi Kasireddy
