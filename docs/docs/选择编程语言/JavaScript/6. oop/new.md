#  new 

JavaScript  JavaScript 

## 

Object Oriented Programming OOP

procedural programming

“”object

**1**



**2propertymethod**

`animal`“”“”

## 



 C++  Java“”class“”“”JavaScript “”constructorprototype

JavaScript constructor””



```javascript
var Vehicle = function () {
  this.price = 1000;
};
```

`Vehicle`



- `this`
- `new`

`new`

## new 

### 

`new`

```javascript
var Vehicle = function () {
  this.price = 1000;
};

var v = new Vehicle();
v.price // 1000
```

`new``Vehicle``v``Vehicle``price``new``this``this.price``price`1000

`new`

```javascript
var Vehicle = function (p) {
  this.price = p;
};

var v = new Vehicle(500);
```

`new`

```javascript
// 
var v = new Vehicle();
// 
var v = new Vehicle;
```

`new`

`this`

```javascript
var Vehicle = function (){
  this.price = 1000;
};

var v = Vehicle();
v // undefined
price // 1000
```

`Vehicle``new``v``undefined``price``new`

`new``use strict``new`

```javascript
function Fubar(foo, bar){
  'use strict';
  this._foo = foo;
  this._bar = bar;
}

Fubar()
// TypeError: Cannot set property '_foo' of undefined
```

`Fubar``use strict``this``undefined``new`JavaScript `undefined`

`new`

```javascript
function Fubar(foo, bar) {
  if (!(this instanceof Fubar)) {
    return new Fubar(foo, bar);
  }

  this._foo = foo;
  this._bar = bar;
}

Fubar(1, 2)._foo // 1
(new Fubar(1, 2))._foo // 1
```

`new`

### new 

`new`

1. 
1. `prototype`
1. `this`
1. 

`this``this`“”`this`“”

`return``return``new``return``return``this`

```javascript
var Vehicle = function () {
  this.price = 1000;
  return 1000;
};

(new Vehicle()) === 1000
// false
```

`Vehicle``return``new``return`“”`this`

`return``this``new``this`

```javascript
var Vehicle = function (){
  this.price = 1000;
  return { price: 2000 };
};

(new Vehicle()).price
// 2000
```

`Vehicle``return``new``this`

`this``new`

```javascript
function getMessage() {
  return 'this is a message';
}

var msg = new getMessage();

msg // {}
typeof msg // "object"
```

`getMessage``new``new``return``return``new`

`new`

```javascript
function _new(/*  */ constructor, /*  */ params) {
  //  arguments 
  var args = [].slice.call(arguments);
  // 
  var constructor = args.shift();
  //  prototype 
  var context = Object.create(constructor.prototype);
  // 
  var result = constructor.apply(context, args);
  //  context 
  return (typeof result === 'object' && result != null) ? result : context;
}

// 
var actor = _new(Person, '', 28);
```

### new.target

`new.target``new``new.target``undefined`

```javascript
function f() {
  console.log(new.target === f);
}

f() // false
new f() // true
```

`new`

```javascript
function f() {
  if (!new.target) {
    throw new Error(' new ');
  }
  // ...
}

f() // Uncaught Error:  new 
```

`f``new`

## Object.create() 

`Object.create()`

```javascript
var person1 = {
  name: '',
  age: 38,
  greeting: function() {
    console.log('Hi! I\'m ' + this.name + '.');
  }
};

var person2 = Object.create(person1);

person2.name // 
person2.greeting() // Hi! I'm .
```

`person1``person2`

`Object.create()`
