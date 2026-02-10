# Object 

JavaScript `Object`

## Object.getPrototypeOf()

`Object.getPrototypeOf`

```javascript
var F = function () {};
var f = new F();
Object.getPrototypeOf(f) === F.prototype // true
```

`f``F.prototype`



```javascript
//  Object.prototype
Object.getPrototypeOf({}) === Object.prototype // true

// Object.prototype  null
Object.getPrototypeOf(Object.prototype) === null // true

//  Function.prototype
function f() {}
Object.getPrototypeOf(f) === Function.prototype // true
```

## Object.setPrototypeOf()

`Object.setPrototypeOf`

```javascript
var a = {};
var b = {x: 1};
Object.setPrototypeOf(a, b);

Object.getPrototypeOf(a) === b // true
a.x // 1
```

`Object.setPrototypeOf``a``b``a``b`

`new``Object.setPrototypeOf`

```javascript
var F = function () {
  this.foo = 'bar';
};

var f = new F();
// 
var f = Object.setPrototypeOf({}, F.prototype);
F.call(f);
```

`new``prototype``F.prototype``this``this``this.foo`

## Object.create()

`new`

JavaScript `Object.create()`

```javascript
// 
var A = {
  print: function () {
    console.log('hello');
  }
};

// 
var B = Object.create(A);

Object.getPrototypeOf(B) === A // true
B.print() // hello
B.print === A.print // true
```

`Object.create()``A``B``B``A`

`Object.create()`

```javascript
if (typeof Object.create !== 'function') {
  Object.create = function (obj) {
    function F() {}
    F.prototype = obj;
    return new F();
  };
}
```

`Object.create()``F``F.prototype``obj``F``obj`



```javascript
var obj1 = Object.create({});
var obj2 = Object.create(Object.prototype);
var obj3 = new Object();
```

`toString()``valueOf()``Object.create()``null`

```javascript
var obj = Object.create(null);

obj.valueOf()
// TypeError: Object [object Object] has no method 'valueOf'
```

`obj``null``Object.prototype``valueOf()`

`Object.create()`

```javascript
Object.create()
// TypeError: Object prototype may only be an Object or null
Object.create(123)
// TypeError: Object prototype may only be an Object or null
```

`Object.create()`

```javascript
var obj1 = { p: 1 };
var obj2 = Object.create(obj1);

obj1.p = 2;
obj2.p // 2
```

`obj1``obj2`

`Object.create()`

```javascript
var obj = Object.create({}, {
  p1: {
    value: 123,
    enumerable: true,
    configurable: true,
    writable: true,
  },
  p2: {
    value: 'abc',
    enumerable: true,
    configurable: true,
    writable: true,
  }
});

// 
var obj = Object.create({});
obj.p1 = 123;
obj.p2 = 'abc';
```

`Object.create()`

```javascript
function A() {}
var a = new A();
var b = Object.create(a);

b.constructor === A // true
b instanceof A // true
```

`b``a``a``A`

## Object.prototype.isPrototypeOf()

`isPrototypeOf`

```javascript
var o1 = {};
var o2 = Object.create(o1);
var o3 = Object.create(o2);

o2.isPrototypeOf(o3) // true
o1.isPrototypeOf(o3) // true
```

`o1``o2``o3``isPrototypeOf``true`

```javascript
Object.prototype.isPrototypeOf({}) // true
Object.prototype.isPrototypeOf([]) // true
Object.prototype.isPrototypeOf(/xyz/) // true
Object.prototype.isPrototypeOf(Object.create(null)) // false
```

`Object.prototype``true``null`

## Object.prototype.\_\_proto\_\_

`__proto__`

```javascript
var obj = {};
var p = {};

obj.__proto__ = p;
Object.getPrototypeOf(obj) === p // true
```

`__proto__``p``obj`

`__proto__``Object.getPrototypeOf()``Object.setPrototypeOf()`

`__proto__`

```javascript
var A = {
  name: ''
};
var B = {
  name: ''
};

var proto = {
  print: function () {
    console.log(this.name);
  }
};

A.__proto__ = proto;
B.__proto__ = proto;

A.print() // 
B.print() // 

A.print === B.print // true
A.print === proto.print // true
B.print === proto.print // true
```

`A``B``proto``proto``print``A``B``print``proto``print`

## 

`__proto__``prototype`

```javascript
var obj = new Object();

obj.__proto__ === Object.prototype
// true
obj.__proto__ === obj.constructor.prototype
// true
```

`obj``__proto__``Object``obj.constructor``prototype`

`obj`

- `obj.__proto__`
- `obj.constructor.prototype`
- `Object.getPrototypeOf(obj)`

`__proto__``obj.constructor.prototype`

```javascript
var P = function () {};
var p = new P();

var C = function () {};
C.prototype = p;
var c = new C();

c.constructor.prototype === p // false
```

`C``p``c.constructor.prototype``p``constructor`

```javascript
C.prototype = p;
C.prototype.constructor = C;

var c = new C();
c.constructor.prototype === p // true
```

`Object.getPrototypeOf`

## Object.getOwnPropertyNames()

`Object.getOwnPropertyNames`

```javascript
Object.getOwnPropertyNames(Date)
// ["parse", "arguments", "UTC", "caller", "name", "prototype", "now", "length"]
```

`Object.getOwnPropertyNames``Date`

enumerable`Object.getOwnPropertyNames``Object.keys`

```javascript
Object.keys(Date) // []
```

`Date`

## Object.prototype.hasOwnProperty()

`hasOwnProperty`

```javascript
Date.hasOwnProperty('length') // true
Date.hasOwnProperty('toString') // false
```

`Date.length``Date``Date``Date.toString`

`hasOwnProperty` JavaScript 

## in  for...in 

`in`

```javascript
'length' in Date // true
'toString' in Date // true
```

`in`

`for...in`

```javascript
var o1 = { p1: 123 };

var o2 = Object.create(o1, {
  p2: { value: "abc", enumerable: true }
});

for (p in o2) {
  console.info(p);
}
// p2
// p1
```

`o2``p2``p1``for...in`

`for...in``hasOwnProperty`

```javascript
for ( var name in object ) {
  if ( object.hasOwnProperty(name) ) {
    /* loop code */
  }
}
```



```javascript
function inheritedPropertyNames(obj) {
  var props = {};
  while(obj) {
    Object.getOwnPropertyNames(obj).forEach(function(p) {
      props[p] = true;
    });
    obj = Object.getPrototypeOf(obj);
  }
  return Object.getOwnPropertyNames(props);
}
```

`obj`“”`obj`“”

`Date`

```javascript
inheritedPropertyNames(Date)
// [
//  "caller",
//  "constructor",
//  "toString",
//  "UTC",
//  ...
// ]
```

## 



- 
- 



```javascript
function copyObject(orig) {
  var copy = Object.create(Object.getPrototypeOf(orig));
  copyOwnPropertiesFrom(copy, orig);
  return copy;
}

function copyOwnPropertiesFrom(target, source) {
  Object
    .getOwnPropertyNames(source)
    .forEach(function (propKey) {
      var desc = Object.getOwnPropertyDescriptor(source, propKey);
      Object.defineProperty(target, propKey, desc);
    });
  return target;
}
```

 ES2017 `Object.getOwnPropertyDescriptors`

```javascript
function copyObject(orig) {
  return Object.create(
    Object.getPrototypeOf(orig),
    Object.getOwnPropertyDescriptors(orig)
  );
}
```

## 

- Dr. Axel Rauschmayer, [JavaScript properties: inheritance and enumerability](http://www.2ality.com/2011/07/js-properties.html)
