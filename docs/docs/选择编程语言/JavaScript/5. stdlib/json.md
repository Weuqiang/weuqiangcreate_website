# JSON 

## JSON 

JSON JavaScript Object Notation 2001 Douglas Crockford  XML 

 XML JSON  JavaScript JSON 

 JSON 

JSON 

> 1. 
>
> 1. `null``NaN`, `Infinity`, `-Infinity``undefined`
>
> 1. 
>
> 1. 
>
> 1. 

 JSON

```javascript
["one", "two", "three"]

{ "one": 1, "two": 2, "three": 3 }

{"names": ["", ""] }

[ { "name": ""}, {"name": ""} ]
```

 JSON

```javascript
{ name: "", 'age': 32 }  // 

[32, 64, 128, 0xFFF] // 

{ "name": "", "age": undefined } //  undefined

{ "name": "",
  "birthday": new Date('Fri, 26 Aug 2011 07:13:10 GMT'),
  "getName": function () {
      return this.name;
  }
} // 
```

`null` JSON 

## JSON 

`JSON` JavaScript  JSON `JSON.stringify()``JSON.parse()`

## JSON.stringify()

### 

`JSON.stringify()` JSON  JSON `JSON.parse()`

```javascript
JSON.stringify('abc') // ""abc""
JSON.stringify(1) // "1"
JSON.stringify(false) // "false"
JSON.stringify([]) // "[]"
JSON.stringify({}) // "{}"

JSON.stringify([1, "false", false])
// '[1,"false",false]'

JSON.stringify({ name: "" })
// '{"name":""}'
```

 JSON 



```javascript
JSON.stringify('foo') === "foo" // false
JSON.stringify('foo') === "\"foo\"" // true
```

`foo``"\"foo\""` JavaScript 

```javascript
JSON.stringify(false) // "false"
JSON.stringify('false') // "\"false\""
```



`undefined` XML `JSON.stringify()`

```javascript
var obj = {
  a: undefined,
  b: function () {}
};

JSON.stringify(obj) // "{}"
```

`obj``a``undefined``b``JSON.stringify`

`undefined` XML `null`

```javascript
var arr = [undefined, function () {}];
JSON.stringify(arr) // "[null,null]"
```

`arr``undefined``null`



```javascript
JSON.stringify(/foo/) // "{}"
```

`JSON.stringify()`

```javascript
var obj = {};
Object.defineProperties(obj, {
  'foo': {
    value: 1,
    enumerable: true
  },
  'bar': {
    value: 2,
    enumerable: false
  }
});

JSON.stringify(obj); // "{"foo":1}"
```

`bar``obj``JSON.stringify`

### 

`JSON.stringify()`

```javascript
var obj = {
  'prop1': 'value1',
  'prop2': 'value2',
  'prop3': 'value3'
};

var selectedProperties = ['prop1', 'prop2'];

JSON.stringify(obj, selectedProperties)
// "{"prop1":"value1","prop2":"value2"}"
```

`JSON.stringify()``prop1``prop2`



```javascript
JSON.stringify(['a', 'b'], ['0'])
// "["a","b"]"

JSON.stringify({0: 'a', 1: 'b'}, ['0'])
// "{"0":"a"}"
```

 JSON `0`

`JSON.stringify()`

```javascript
function f(key, value) {
  if (typeof value === "number") {
    value = 2 * value;
  }
  return value;
}

JSON.stringify({ a: 1, b: 2 }, f)
// '{"a": 2,"b": 4}'
```

`f``2`



```javascript
var obj = {a: {b: 1}};

function f(key, value) {
  console.log("["+ key +"]:" + value);
  return value;
}

JSON.stringify(obj, f)
// []:[object Object]
// [a]:[object Object]
// [b]:1
// '{"a":{"b":1}}'
```

`obj``f``JSON.stringify()``obj``a``{b: 1}``b`1



```javascript
var obj = {a: 1};

function f(key, value) {
  if (typeof value === 'object') {
    return {b: 2};
  }
  return value * 2;
}

JSON.stringify(obj, f)
// "{"b": 4}"
```

`f``obj``JSON.stringify()``obj`

`undefined`

```javascript
function f(key, value) {
  if (typeof(value) === "string") {
    return undefined;
  }
  return value;
}

JSON.stringify({ a: "abc", b: 123 }, f)
// '{"b": 123}'
```

`a``undefined`

### 

`JSON.stringify()` JSON 

 JSON 10

```javascript
// 
JSON.stringify({ p1: 1, p2: 2 })
// JSON.stringify({ p1: 1, p2: 2 })

// 
JSON.stringify({ p1: 1, p2: 2 }, null, '\t')
// {
// 	"p1": 1,
// 	"p2": 2
// }
```

`\t`

10

```javascript
JSON.stringify({ p1: 1, p2: 2 }, null, 2);
/*
"{
  "p1": 1,
  "p2": 2
}"
*/
```

###  toJSON() 

`toJSON()``JSON.stringify()`



```javascript
var user = {
  firstName: '',
  lastName: '',

  get fullName(){
    return this.lastName + this.firstName;
  }
};

JSON.stringify(user)
// "{"firstName":"","lastName":"","fullName":""}"
```

`toJSON()`

```javascript
var user = {
  firstName: '',
  lastName: '',

  get fullName(){
    return this.lastName + this.firstName;
  },

  toJSON: function () {
    return {
      name: this.lastName + this.firstName
    };
  }
};

JSON.stringify(user)
// "{"name":""}"
```

`JSON.stringify()``toJSON()`

`Date``toJSON()`

```javascript
var date = new Date('2015-01-01');
date.toJSON() // "2015-01-01T00:00:00.000Z"
JSON.stringify(date) // ""2015-01-01T00:00:00.000Z""
```

`JSON.stringify()``Date``toJSON()`

`toJSON()``JSON.stringify()``toJSON()`

```javascript
var obj = {
  reg: /foo/
};

//  toJSON 
JSON.stringify(obj) // "{"reg":{}}"

//  toJSON 
RegExp.prototype.toJSON = RegExp.prototype.toString;
JSON.stringify(/foo/) // ""/foo/""
```

`toJSON()``toString()` JSON `toJSON()``JSON.stringify()`

## JSON.parse()

`JSON.parse()` JSON 

```javascript
JSON.parse('{}') // {}
JSON.parse('true') // true
JSON.parse('"foo"') // "foo"
JSON.parse('[1, 5, "false"]') // [1, 5, "false"]
JSON.parse('null') // null

var o = JSON.parse('{"name": ""}');
o.name // 
```

 JSON `JSON.parse()`

```javascript
JSON.parse("'String'") // illegal single quotes
// SyntaxError: Unexpected token ILLEGAL
```

 JSON 

`JSON.parse()``try...catch`

```javascript
try {
  JSON.parse("'String'");
} catch(e) {
  console.log('parsing error');
}
```

`JSON.parse()``JSON.stringify()`

```javascript
function f(key, value) {
  if (key === 'a') {
    return value + 10;
  }
  return value;
}

JSON.parse('{"a": 1, "b": 2}', f)
// {a: 11, b: 2}
```

`JSON.parse()``a`10

`JSON.parse()``JSON.stringify()`

```javascript
JSON.parse(JSON.stringify(obj))
```

 JSON


## 

- MDN, [Using native JSON](https://developer.mozilla.org/en-US/docs/Using_native_JSON)
- MDN, [JSON.parse](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/JSON/parse)
- Dr. Axel Rauschmayer, [JavaScript’s JSON API](http://www.2ality.com/2011/08/json-api.html)
- Jim Cowart, [What You Might Not Know About JSON.stringify()](http://freshbrewedcode.com/jimcowart/2013/01/29/what-you-might-not-know-about-json-stringify/)
- Marco Rogers, [What is JSON?](https://docs.nodejitsu.com/articles/javascript-conventions/what-is-json/)
