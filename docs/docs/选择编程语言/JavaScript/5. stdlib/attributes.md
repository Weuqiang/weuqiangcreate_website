# 

## 

JavaScript “”attributes object



```javascript
{
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false,
  get: undefined,
  set: undefined
}
```

6

1`value`

`value``undefined`

2`writable`

`writable`value`true`

3`enumerable`

`enumerable``true``false``for...in``Object.keys()`

4`configurable`

`configurable``true``false``value``configurable`

5`get`

`get`getter`undefined`

6`set`

`set`setter`undefined`

## Object.getOwnPropertyDescriptor()

`Object.getOwnPropertyDescriptor()`

```javascript
var obj = { p: 'a' };

Object.getOwnPropertyDescriptor(obj, 'p')
// Object { value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }
```

`Object.getOwnPropertyDescriptor()``obj.p`

`Object.getOwnPropertyDescriptor()`

```javascript
var obj = { p: 'a' };

Object.getOwnPropertyDescriptor(obj, 'toString')
// undefined
```

`toString``obj``Object.getOwnPropertyDescriptor()`

## Object.getOwnPropertyNames()

`Object.getOwnPropertyNames`

```javascript
var obj = Object.defineProperties({}, {
  p1: { value: 1, enumerable: true },
  p2: { value: 2, enumerable: false }
});

Object.getOwnPropertyNames(obj)
// ["p1", "p2"]
```

`obj.p1``obj.p2``Object.getOwnPropertyNames`

`Object.keys``Object.keys`

```javascript
Object.keys([]) // []
Object.getOwnPropertyNames([]) // [ 'length' ]

Object.keys(Object.prototype) // []
Object.getOwnPropertyNames(Object.prototype)
// ['hasOwnProperty',
//  'valueOf',
//  'constructor',
//  'toLocaleString',
//  'isPrototypeOf',
//  'propertyIsEnumerable',
//  'toString']
```

`length``Object.keys``Object.prototype`

## Object.defineProperty()Object.defineProperties()

`Object.defineProperty()`

```javascript
Object.defineProperty(object, propertyName, attributesObject)
```

`Object.defineProperty`

- object
- propertyName
- attributesObject

`obj.p`

```javascript
var obj = Object.defineProperty({}, 'p', {
  value: 123,
  writable: false,
  enumerable: true,
  configurable: false
});

obj.p // 123

obj.p = 246;
obj.p // 123
```

`Object.defineProperty()``obj.p``writable``false``obj.p``Object.defineProperty``{}``p``Object.defineProperty()`

`Object.defineProperty()`

`Object.defineProperties()`

```javascript
var obj = Object.defineProperties({}, {
  p1: { value: 123, enumerable: true },
  p2: { value: 'abc', enumerable: true },
  p3: { get: function () { return this.p1 + this.p2 },
    enumerable:true,
    configurable:true
  }
});

obj.p1 // 123
obj.p2 // "abc"
obj.p3 // "123abc"
```

`Object.defineProperties()``obj``p3``get`

`get``set``writable``true``value`

```javascript
var obj = {};

Object.defineProperty(obj, 'p', {
  value: 123,
  get: function() { return 456; }
});
// TypeError: Invalid property.
// A property cannot both have accessors and be writable or have a value

Object.defineProperty(obj, 'p', {
  writable: true,
  get: function() { return 456; }
});
// TypeError: Invalid property descriptor.
// Cannot both specify accessors and a value or writable attribute
```

`get``value``writable``true`

`Object.defineProperty()``Object.defineProperties()``writable``configurable``enumerable``false`

```javascript
var obj = {};
Object.defineProperty(obj, 'foo', {});
Object.getOwnPropertyDescriptor(obj, 'foo')
// {
//   value: undefined,
//   writable: false,
//   enumerable: false,
//   configurable: false
// }
```

`obj.foo`

## Object.prototype.propertyIsEnumerable()

`propertyIsEnumerable()``false`

```javascript
var obj = {};
obj.p = 123;

obj.propertyIsEnumerable('p') // true
obj.propertyIsEnumerable('toString') // false
```

`obj.p``obj.toString`

## 

“”

### value

`value`

```javascript
var obj = {};
obj.p = 123;

Object.getOwnPropertyDescriptor(obj, 'p').value
// 123

Object.defineProperty(obj, 'p', { value: 246 });
obj.p // 246
```

`value``obj.p`

### writable

`writable`value

```javascript
var obj = {};

Object.defineProperty(obj, 'a', {
  value: 37,
  writable: false
});

obj.a // 37
obj.a = 25;
obj.a // 37
```

`obj.a``writable``false``obj.a`

`writable``false``a`

```javascript
'use strict';
var obj = {};

Object.defineProperty(obj, 'a', {
  value: 37,
  writable: false
});

obj.a = 37;
// Uncaught TypeError: Cannot assign to read only property 'a' of object
```

`obj.a`

`writable``false`

```javascript
var proto = Object.defineProperty({}, 'foo', {
  value: 'a',
  writable: false
});

var obj = Object.create(proto);

obj.foo = 'b';
obj.foo // 'a'
```

`proto``foo``obj``proto`



```javascript
var proto = Object.defineProperty({}, 'foo', {
  value: 'a',
  writable: false
});

var obj = Object.create(proto);
Object.defineProperty(obj, 'foo', {
  value: 'b'
});

obj.foo // "b"
```

### enumerable

`enumerable`

JavaScript `for...in``in``in``true`

```javascript
var obj = {};
'toString' in obj // true
```

`toString``obj``in``true``toString``for...in`

“”`for...in``toString``for...in`

`enumerable``false`

- `for..in`
- `Object.keys`
- `JSON.stringify`

`enumerable`“”

```javascript
var obj = {};

Object.defineProperty(obj, 'x', {
  value: 123,
  enumerable: false
});

obj.x // 123

for (var key in obj) {
  console.log(key);
}
// undefined

Object.keys(obj)  // []
JSON.stringify(obj) // "{}"
```

`obj.x``enumerable``false`“”

`for...in``Object.keys``Object.getOwnPropertyNames`

`JSON.stringify``enumerable``false` JSON `enumerable``false`

### configurable

`configurable`(`configurable``false``writable``enumerable``configurable`

```javascript
var obj = Object.defineProperty({}, 'p', {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: false
});

Object.defineProperty(obj, 'p', {writable: true})
// TypeError: Cannot redefine property: p

Object.defineProperty(obj, 'p', {enumerable: true})
// TypeError: Cannot redefine property: p

Object.defineProperty(obj, 'p', {configurable: true})
// TypeError: Cannot redefine property: p

Object.defineProperty(obj, 'p', {value: 2})
// TypeError: Cannot redefine property: p
```

`obj.p``configurable``false``writable``enumerable``configurable`

`writable``false``true``true``false`

```javascript
var obj = Object.defineProperty({}, 'p', {
  writable: true,
  configurable: false
});

Object.defineProperty(obj, 'p', {writable: false})
// 
```

`value``writable``configurable``true``value`

```javascript
var o1 = Object.defineProperty({}, 'p', {
  value: 1,
  writable: true,
  configurable: false
});

Object.defineProperty(o1, 'p', {value: 2})
// 

var o2 = Object.defineProperty({}, 'p', {
  value: 1,
  writable: false,
  configurable: true
});

Object.defineProperty(o2, 'p', {value: 2})
// 
```

`writable``false`

```javascript
var obj = Object.defineProperty({}, 'p', {
  value: 1,
  writable: false,
  configurable: false
});

obj.p = 2;
obj.p // 1
```

`obj.p``writable``false``obj.p`

delete

```javascript
var obj = Object.defineProperties({}, {
  p1: { value: 1, configurable: true },
  p2: { value: 2, configurable: false }
});

delete obj.p1 // true
delete obj.p2 // false

obj.p1 // undefined
obj.p2 // 2
```

`obj.p1``configurable``true``obj.p2`

## 

accessor`setter``set``getter``get`



```javascript
var obj = Object.defineProperty({}, 'p', {
  get: function () {
    return 'getter';
  },
  set: function (value) {
    console.log('setter: ' + value);
  }
});

obj.p // "getter"
obj.p = 123 // "setter: 123"
```

`obj.p``get``set``obj.p``get``set`

JavaScript 

```javascript
// 
var obj = {
  get p() {
    return 'getter';
  },
  set p(value) {
    console.log('setter: ' + value);
  }
};
```

`p``p``configurable``enumerable``false``p``p``configurable``enumerable``true``p`

`get``set`



```javascript
var obj ={
  $n : 5,
  get next() { return this.$n++ },
  set next(n) {
    if (n >= this.$n) this.$n = n;
    else throw new Error('');
  }
};

obj.next // 5

obj.next = 10;
obj.next // 10

obj.next = 5;
// Uncaught Error: 
```

`next``$n`

## 



```javascript
var extend = function (to, from) {
  for (var property in from) {
    to[property] = from[property];
  }

  return to;
}

extend({}, {
  a: 1
})
// {a: 1}
```



```javascript
extend({}, {
  get a() { return 1 }
})
// {a: 1}
```

`Object.defineProperty`

```javascript
var extend = function (to, from) {
  for (var property in from) {
    if (!from.hasOwnProperty(property)) continue;
    Object.defineProperty(
      to,
      property,
      Object.getOwnPropertyDescriptor(from, property)
    );
  }

  return to;
}

extend({}, { get a(){ return 1 } })
// { get a(){ return 1 } })
```

`hasOwnProperty``Object.getOwnPropertyDescriptor`

## 

JavaScript `Object.preventExtensions``Object.seal``Object.freeze`

### Object.preventExtensions()

`Object.preventExtensions`

```javascript
var obj = new Object();
Object.preventExtensions(obj);

Object.defineProperty(obj, 'p', {
  value: 'hello'
});
// TypeError: Cannot define property:p, object is not extensible.

obj.p = 1;
obj.p // undefined
```

`obj``Object.preventExtensions`

### Object.isExtensible()

`Object.isExtensible``Object.preventExtensions`

```javascript
var obj = new Object();

Object.isExtensible(obj) // true
Object.preventExtensions(obj);
Object.isExtensible(obj) // false
```

`obj``Object.preventExtensions``Object.isExtensible``false`

### Object.seal()

`Object.seal`

```javascript
var obj = { p: 'hello' };
Object.seal(obj);

delete obj.p;
obj.p // "hello"

obj.x = 'world';
obj.x // undefined
```

`obj``Object.seal`

`Object.seal``configurable``false`

```javascript
var obj = {
  p: 'a'
};

// seal
Object.getOwnPropertyDescriptor(obj, 'p')
// Object {
//   value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

Object.seal(obj);

// seal
Object.getOwnPropertyDescriptor(obj, 'p')
// Object {
//   value: "a",
//   writable: true,
//   enumerable: true,
//   configurable: false
// }

Object.defineProperty(obj, 'p', {
  enumerable: false
})
// TypeError: Cannot redefine property: p
```

`Object.seal``configurable``false``enumerable`

`Object.seal`

```javascript
var obj = { p: 'a' };
Object.seal(obj);
obj.p = 'b';
obj.p // 'b'
```

`Object.seal``p``value``p``writable`

### Object.isSealed()

`Object.isSealed``Object.seal`

```javascript
var obj = { p: 'a' };

Object.seal(obj);
Object.isSealed(obj) // true
```

`Object.isExtensible``false`

```javascript
var obj = { p: 'a' };

Object.seal(obj);
Object.isExtensible(obj) // false
```

### Object.freeze()

`Object.freeze`

```javascript
var obj = {
  p: 'hello'
};

Object.freeze(obj);

obj.p = 'world';
obj.p // "hello"

obj.t = 'hello';
obj.t // undefined

delete obj.p // false
obj.p // "hello"
```

`obj``Object.freeze()`

### Object.isFrozen()

`Object.isFrozen``Object.freeze`

```javascript
var obj = {
  p: 'hello'
};

Object.freeze(obj);
Object.isFrozen(obj) // true
```

`Object.freeze``Object.isSealed``true``Object.isExtensible``false`

```javascript
var obj = {
  p: 'hello'
};

Object.freeze(obj);

Object.isSealed(obj) // true
Object.isExtensible(obj) // false
```

`Object.isFrozen`

```javascript
var obj = {
  p: 'hello'
};

Object.freeze(obj);

if (!Object.isFrozen(obj)) {
  obj.p = 'world';
}
```

`obj`

### 



```javascript
var obj = new Object();
Object.preventExtensions(obj);

var proto = Object.getPrototypeOf(obj);
proto.t = 'hello';
obj.t
// hello
```

`obj``obj`

`obj`

```javascript
var obj = new Object();
Object.preventExtensions(obj);

var proto = Object.getPrototypeOf(obj);
Object.preventExtensions(proto);

proto.t = 'hello';
obj.t // undefined
```



```javascript
var obj = {
  foo: 1,
  bar: ['a', 'b']
};
Object.freeze(obj);

obj.bar.push('c');
obj.bar // ["a", "b", "c"]
```

`obj.bar``obj`
