# Object 

## 

JavaScript `Object``O`

JavaScript `Object``Object`

`Object``Object``Object`

**1`Object`**

“”`Object`

```javascript
Object.print = function (o) { console.log(o) };
```

`print``Object`

**2`Object`**

`Object``Object.prototype``Object`

```javascript
Object.prototype.print = function () {
  console.log(this);
};

var obj = new Object();
obj.print() // Object
```

`Object.prototype``print``Object``obj``obj``Object.prototype``obj.print``print``obj``print``Object.prototype.print`

`object.prototype``Object.prototype`

`Object``Object`“”

## Object()

`Object`

`undefined``null``Object()`

```javascript
var obj = Object();
// 
var obj = Object(undefined);
var obj = Object(null);

obj instanceof Object // true
```

`undefined``null``obj`

`instanceof``obj instanceof Object``true``obj``Object`

`Object`

```javascript
var obj = Object(1);
obj instanceof Object // true
obj instanceof Number // true

var obj = Object('foo');
obj instanceof Object // true
obj instanceof String // true

var obj = Object(true);
obj instanceof Object // true
obj instanceof Boolean // true
```

`Object`

`Object`

```javascript
var arr = [];
var obj = Object(arr); // 
obj === arr // true

var value = {};
var obj = Object(value) // 
obj === value // true

var fn = function () {};
var obj = Object(fn); // 
obj === fn // true
```



```javascript
function isObject(value) {
  return value === Object(value);
}

isObject([]) // true
isObject(true) // false
```

## Object 

`Object``new`

`Object`

```javascript
var obj = new Object();
```

> `var obj = new Object()``var obj = {}`

`Object`

```javascript
var o1 = {a: 1};
var o2 = new Object(o1);
o1 === o2 // true

var obj = new Object(123);
obj instanceof Number // true
```

`Object(value)``new Object(value)``Object(value)``value``new Object(value)``value`

## Object 

“”`Object`

### Object.keys()Object.getOwnPropertyNames()

`Object.keys``Object.getOwnPropertyNames`

`Object.keys`

```javascript
var obj = {
  p1: 123,
  p2: 456
};

Object.keys(obj) // ["p1", "p2"]
```

`Object.getOwnPropertyNames``Object.keys`

```javascript
var obj = {
  p1: 123,
  p2: 456
};

Object.getOwnPropertyNames(obj) // ["p1", "p2"]
```

`Object.keys()``Object.getOwnPropertyNames()``Object.keys``Object.getOwnPropertyNames`

```javascript
var a = ['Hello', 'World'];

Object.keys(a) // ["0", "1"]
Object.getOwnPropertyNames(a) // ["0", "1", "length"]
```

`length``Object.getOwnPropertyNames`

 JavaScript 

```javascript
var obj = {
  p1: 123,
  p2: 456
};

Object.keys(obj).length // 2
Object.getOwnPropertyNames(obj).length // 2
```

`Object.keys`

### 

`Object`

**1**

- `Object.getOwnPropertyDescriptor()`
- `Object.defineProperty()`
- `Object.defineProperties()`

**2**

- `Object.preventExtensions()`
- `Object.isExtensible()`
- `Object.seal()`
- `Object.isSealed()`
- `Object.freeze()`
- `Object.isFrozen()`

**3**

- `Object.create()`
- `Object.getPrototypeOf()``Prototype`

## Object 

`Object.prototype``Object`

`Object`

- `Object.prototype.valueOf()`
- `Object.prototype.toString()`
- `Object.prototype.toLocaleString()`
- `Object.prototype.hasOwnProperty()`
- `Object.prototype.isPrototypeOf()`
- `Object.prototype.propertyIsEnumerable()`



### Object.prototype.valueOf()

`valueOf`“”

```javascript
var obj = new Object();
obj.valueOf() === obj // true
```

`obj.valueOf()``obj`

`valueOf`JavaScript 

```javascript
var obj = new Object();
1 + obj // "1[object Object]"
```

`obj``1` JavaScript `valueOf()``obj``1``valueOf`

```javascript
var obj = new Object();
obj.valueOf = function () {
  return 2;
};

1 + obj // 3
```

`obj``valueOf``1 + obj``3``obj.valueOf``Object.prototype.valueOf`

### Object.prototype.toString()

`toString`

```javascript
var o1 = new Object();
o1.toString() // "[object Object]"

var o2 = {a:1};
o2.toString() // "[object Object]"
```

`toString``[object Object]`

`[object Object]``toString`

```javascript
var obj = new Object();

obj.toString = function () {
  return 'hello';
};

obj + ' ' + 'world' // "hello world"
```

`toString``toString``hello world`

Date `toString``Object.prototype.toString`

```javascript
[1, 2, 3].toString() // "1,2,3"

'123'.toString() // "123"

(function () {
  return 123;
}).toString()
// "function () {
//   return 123;
// }"

(new Date()).toString()
// "Tue May 10 2016 09:11:31 GMT+0800 (CST)"
```

Date `toString``[object Object]``toString`

### toString() 

`Object.prototype.toString`

```javascript
var obj = {};
obj.toString() // "[object Object]"
```

`toString``[object Object]``Object`

`toString``Object.prototype.toString``Object.prototype.toString``call`

```javascript
Object.prototype.toString.call(value)
```

`value``Object.prototype.toString`

`Object.prototype.toString`

- `[object Number]`
- `[object String]`
- `[object Boolean]`
- undefined`[object Undefined]`
- null`[object Null]`
- `[object Array]`
- arguments `[object Arguments]`
- `[object Function]`
- Error `[object Error]`
- Date `[object Date]`
- RegExp `[object RegExp]`
- `[object Object]`

`Object.prototype.toString`

```javascript
Object.prototype.toString.call(2) // "[object Number]"
Object.prototype.toString.call('') // "[object String]"
Object.prototype.toString.call(true) // "[object Boolean]"
Object.prototype.toString.call(undefined) // "[object Undefined]"
Object.prototype.toString.call(null) // "[object Null]"
Object.prototype.toString.call(Math) // "[object Math]"
Object.prototype.toString.call({}) // "[object Object]"
Object.prototype.toString.call([]) // "[object Array]"
```

`typeof`

```javascript
var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

type({}); // "object"
type([]); // "array"
type(5); // "number"
type(null); // "null"
type(); // "undefined"
type(/abcd/); // "regex"
type(new Date()); // "date"
```

`type`

```javascript
var type = function (o){
  var s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

['Null',
 'Undefined',
 'Object',
 'Array',
 'String',
 'Number',
 'Boolean',
 'Function',
 'RegExp'
].forEach(function (t) {
  type['is' + t] = function (o) {
    return type(o) === t.toLowerCase();
  };
});

type.isObject({}) // true
type.isNumber(NaN) // true
type.isRegExp(/abc/) // true
```

### Object.prototype.toLocaleString()

`Object.prototype.toLocaleString``toString`

```javascript
var obj = {};
obj.toString(obj) // "[object Object]"
obj.toLocaleString(obj) // "[object Object]"
```

`toLocaleString`

```javascript
var person = {
  toString: function () {
    return 'Henry Norman Bethune';
  },
  toLocaleString: function () {
    return '';
  }
};

person.toString() // Henry Norman Bethune
person.toLocaleString() // 
```

`toString()``toLocaleString()`

`toLocaleString`

- Array.prototype.toLocaleString()
- Number.prototype.toLocaleString()
- Date.prototype.toLocaleString()

`toString``toLocaleString``toLocaleString`

```javascript
var date = new Date();
date.toString() // "Tue Jan 01 2018 12:01:33 GMT+0800 (CST)"
date.toLocaleString() // "1/01/2018, 12:01:33 PM"
```

### Object.prototype.hasOwnProperty()

`Object.prototype.hasOwnProperty`

```javascript
var obj = {
  p: 123
};

obj.hasOwnProperty('p') // true
obj.hasOwnProperty('toString') // false
```

`obj``p``true``toString``false`

## 

- Axel Rauschmayer, [Protecting objects in JavaScript](http://www.2ality.com/2013/08/protecting-objects.html)
- kangax, [Understanding delete](http://perfectionkills.com/understanding-delete/)
- Jon Bretman, [Type Checking in JavaScript](http://techblog.badoo.com/blog/2013/11/01/type-checking-in-javascript/)
- Cody Lindley, [Thinking About ECMAScript 5 Parts](http://tech.pro/tutorial/1671/thinking-about-ecmascript-5-parts)
- Bjorn Tipling, [Advanced objects in JavaScript](http://bjorn.tipling.com/advanced-objects-in-javascript)
- Javier Márquez, [JavaScript properties are enumerable, writable and configurable](http://arqex.com/967/javascript-properties-enumerable-writable-configurable)
- Sella Rafaeli, [Native JavaScript Data-Binding](http://www.sellarafaeli.com/blog/native_javascript_data_binding): modelview
- Lea Verou, [Copying object properties, the robust way](http://lea.verou.me/2015/08/copying-properties-the-robust-way/)
