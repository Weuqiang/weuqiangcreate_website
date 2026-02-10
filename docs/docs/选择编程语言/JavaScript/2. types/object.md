# 

## 

### 

object JavaScript 

“”key-value

```javascript
var obj = {
  foo: 'Hello',
  bar: 'World'
};
```

`obj``obj`“”`foo: 'Hello'``foo`“”`Hello`“”`bar: 'World'``bar``World`

### 

ES6  Symbol 

```javascript
var obj = {
  'foo': 'Hello',
  'bar': 'World'
};
```



```javascript
var obj = {
  1: 'a',
  3.2: 'b',
  1e2: true,
  1e-2: true,
  .234: true,
  0xFF: true
};

obj
// Object {
//   1: "a",
//   3.2: "b",
//   100: true,
//   0.01: true,
//   0.234: true,
//   255: true
// }

obj['100'] // true
```

`obj`



```javascript
// 
var obj = {
  1p: 'Hello World'
};

// 
var obj = {
  '1p': 'Hello World',
  'h w': 'Hello World',
  'p+q': 'Hello World'
};
```



“”property“”“”

```javascript
var obj = {
  p: function (x) {
    return 2 * x;
  }
};

obj.p(1) // 2
```

`obj``p`



```javascript
var o1 = {};
var o2 = { bar: 'hello' };

o1.foo = o2;
o1.foo.bar // "hello"
```

`o1``foo``o2``o2`

trailing comma

```javascript
var obj = {
  p: 123,
  m: function () { ... },
}
```

`m`



```javascript
var obj = {};
obj.foo = 123;
obj.foo // 123
```

`obj``foo``foo`

### 



```javascript
var o1 = {};
var o2 = o1;

o1.a = 1;
o2.a // 1

o2.b = 2;
o1.b // 2
```

`o1``o2`



```javascript
var o1 = {};
var o2 = o1;

o1 = 1;
o2 // {}
```

`o1``o2``o1`1`o2``o2`



```javascript
var x = 1;
var y = x;

x = 2;
y // 1
```

`x``y``y``x`

### 



```javascript
{ foo: 123 }
```

JavaScript `foo``foo``123`

JavaScript 

```javascript
{ console.log(123) } // 123
```





```javascript
({ foo: 123 }) // 
({ console.log(123) }) // 
```

`eval`

```javascript
eval('{foo: 123}') // 123
eval('({foo: 123})') // {foo: 123}
```

`eval`

## 

### 



```javascript
var obj = {
  p: 'Hello World'
};

obj.p // "Hello World"
obj['p'] // "Hello World"
```

`p`



```javascript
var foo = 'bar';

var obj = {
  foo: 1,
  bar: 2
};

obj.foo  // 1
obj[foo]  // 2
```

`obj``foo``foo``foo``bar`



```javascript
obj['hello' + ' world']
obj[3 + 3]
```



```javascript
var obj = {
  0.7: 'Hello World'
};

obj['0.7'] // "Hello World"
obj[0.7] // "Hello World"
```

`obj``0.7`



```javascript
var obj = {
  123: 'hello world'
};

obj.123 // 
obj[123] // "hello world"
```

`123`

### 



```javascript
var obj = {};

obj.foo = 'Hello';
obj['bar'] = 'World';
```



JavaScript “”

```javascript
var obj = { p: 1 };

// 

var obj = {};
obj.p = 1;
```

### 

`Object.keys`

```javascript
var obj = {
  key1: 1,
  key2: 2
};

Object.keys(obj);
// ['key1', 'key2']
```

### delete 

`delete``true`

```javascript
var obj = { p: 1 };
Object.keys(obj) // ["p"]

delete obj.p // true
obj.p // undefined
Object.keys(obj) // []
```

`delete``obj``p``p``undefined``Object.keys`

`delete``true`

```javascript
var obj = {};
delete obj.p // true
```

`obj``p``delete``true``delete`

`delete``false`

```javascript
var obj = Object.defineProperty({}, 'p', {
  value: 123,
  configurable: false
});

obj.p // 123
delete obj.p // false
```

`obj``p``delete``false``Object.defineProperty` Object 

`delete`

```javascript
var obj = {};
delete obj.toString // true
obj.toString // function toString() { [native code] }
```

`toString``obj``delete``true``delete``true`

### in 

`in``true``false`

```javascript
var obj = { p: 1 };
'p' in obj // true
'toString' in obj // true
```

`in``obj``toString``in``true`

`hasOwnProperty`

```javascript
var obj = {};
if ('toString' in obj) {
  console.log(obj.hasOwnProperty('toString')) // false
}
```

### for...in 

`for...in`

```javascript
var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log('', i);
  console.log('', obj[i]);
}
//  a
//  1
//  b
//  2
//  c
//  3
```

`for...in`

- enumerable
- 

`toString``for...in`

```javascript
var obj = {};

// toString 
obj.toString // toString() { [native code] }

for (var p in obj) {
  console.log(p);
} // 
```

`obj``toString``for...in`“” Object 

`for...in``for...in``hasOwnProperty`

```javascript
var person = { name: '' };

for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}
// name
```

## with 

`with`

```javascript
with () {
  ;
}
```



```javascript
// 
var obj = {
  p1: 1,
  p2: 2,
};
with (obj) {
  p1 = 4;
  p2 = 5;
}
// 
obj.p1 = 4;
obj.p2 = 5;

// 
with (document.links[0]){
  console.log(href);
  console.log(title);
  console.log(style);
}
// 
console.log(document.links[0].href);
console.log(document.links[0].title);
console.log(document.links[0].style);
```

`with`

```javascript
var obj = {};
with (obj) {
  p1 = 4;
  p2 = 5;
}

obj.p1 // undefined
p1 // 4
```

`obj``p1``p1``p1``obj``p1``with`

`with``with`

```javascript
with (obj) {
  console.log(x);
}
```

`x``obj``with``with`

```javascript
with(obj1.obj2.obj3) {
  console.log(p1 + p2);
}

// 
var temp = obj1.obj2.obj3;
console.log(temp.p1 + temp.p2);
```

## 

- Dr. Axel Rauschmayer[Object properties in JavaScript](http://www.2ality.com/2012/10/javascript-properties.html)
- Lakshan Perera, [Revisiting JavaScript Objects](http://www.laktek.com/2012/12/29/revisiting-javascript-objects/)
- Angus Croll, [The Secret Life of JavaScript Primitives](http://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/)
- Dr. Axel Rauschmayer, [JavaScript’s with statement and why it’s deprecated](http://www.2ality.com/2011/06/with-statement.html)
