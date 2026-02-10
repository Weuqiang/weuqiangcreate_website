# 

## 

 JavaScript ————“”wrapper

“”`Number``String``Boolean`

```javascript
var v1 = new Number(123);
var v2 = new String('abc');
var v3 = new Boolean(true);

typeof v1 // "object"
typeof v2 // "object"
typeof v3 // "object"

v1 === 123 // false
v2 === 'abc' // false
v3 === true // false
```

`v1``v2``v3`

“” JavaScript 

`Number``String``Boolean``new`

```javascript
// 
Number('123') // 123

// 
String(123) // "123"

// 
Boolean(123) // true
```



`new``new`

## 

`Object``valueOf()``toString()`

### valueOf()

`valueOf()`

```javascript
new Number(123).valueOf()  // 123
new String('abc').valueOf() // "abc"
new Boolean(true).valueOf() // true
```

### toString()

`toString()`

```javascript
new Number(123).toString() // "123"
new String('abc').toString() // "abc"
new Boolean(true).toString() // "true"
```

## 

JavaScript 

`length`

```javascript
'abc'.length // 3
```

`abc``length`JavaScript `length`

```javascript
var str = 'abc';
str.length // 3

// 
var strObj = new String(str)
// String {
//   0: "a", 1: "b", 2: "c", length: 3, [[PrimitiveValue]]: "abc"
// }
strObj.length // 3
```

`abc``length`



```javascript
var s = 'Hello World';
s.x = 123;
s.x // undefined
```

`s``x``undefined`

`String.prototype`

## 



`double`

```javascript
String.prototype.double = function () {
  return this.valueOf() + this.valueOf();
};

'abc'.double()
// abcabc

Number.prototype.double = function () {
  return this.valueOf() + this.valueOf();
};

(123).double() // 246
```

`String``Number``123``.`

