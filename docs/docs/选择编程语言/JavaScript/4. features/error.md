# 

## Error 

JavaScript JavaScript `Error`

```javascript
var err = new Error('');
err.message // ""
```

`Error()``err``Error()``message``Error`

JavaScript `Error``message` JavaScript `Error``name``stack`

- **message**
- **name**
- **stack**

`name``message`

```javascript
if (error.name) {
  console.log(error.name + ': ' + error.message);
}
```

`stack`

```javascript
function throwit() {
  throw new Error('');
}

function catchit() {
  try {
    throwit();
  } catch(e) {
    console.log(e.stack); // print stack trace
  }
}

catchit()
// Error
//    at throwit (~/examples/throwcatch.js:9:11)
//    at catchit (~/examples/throwcatch.js:3:9)
//    at repl:1:5
```

`throwit``catchit`

## 

`Error`JavaScript 6`Error`6

### SyntaxError 

`SyntaxError`

```javascript
// 
var 1a;
// Uncaught SyntaxError: Invalid or unexpected token

// 
console.log 'hello');
// Uncaught SyntaxError: Unexpected string
```

`SyntaxError`“token ”“”

### ReferenceError 

`ReferenceError`

```javascript
// 
unknownVariable
// Uncaught ReferenceError: unknownVariable is not defined
```



```javascript
// 
console.log() = 1
// Uncaught ReferenceError: Invalid left-hand side in assignment
```

`console.log``ReferenceError`

### RangeError 

`RangeError``Number`

```javascript
// 
new Array(-1)
// Uncaught RangeError: Invalid array length
```

### TypeError 

`TypeError``new``new`

```javascript
new 123
// Uncaught TypeError: 123 is not a constructor

var obj = {};
obj.unknownMethod()
// Uncaught TypeError: obj.unknownMethod is not a function
```

`TypeError``obj.unknownMethod``undefined`

### URIError 

`URIError` URI `encodeURI()``decodeURI()``encodeURIComponent()``decodeURIComponent()``escape()``unescape()`

```javascript
decodeURI('%2')
// URIError: URI malformed
```

### EvalError 

`eval``EvalError`

### 

6`Error`message

```javascript
var err1 = new Error('');
var err2 = new RangeError('');
var err3 = new TypeError('');

err1.message // ""
err2.message // ""
err3.message // ""
```

## 

 JavaScript 

```javascript
function UserError(message) {
  this.message = message || '';
  this.name = 'UserError';
}

UserError.prototype = new Error();
UserError.prototype.constructor = UserError;
```

`UserError``Error`

```javascript
new UserError('');
```

## throw 

`throw`

```javascript
var x = -1;

if (x <= 0) {
  throw new Error('x ');
}
// Uncaught Error: x 
```

`x``0``x``throw``Error`

`throw`

```javascript
function UserError(message) {
  this.message = message || '';
  this.name = 'UserError';
}

throw new UserError('');
// Uncaught UserError {message: "", name: "UserError"}
```

`throw``UserError`

`throw`

```javascript
// 
throw 'Error';
// Uncaught Error

// 
throw 42;
// Uncaught 42

// 
throw true;
// Uncaught true

// 
throw {
  toString: function () {
    return 'Error!';
  }
};
// Uncaught {toString: ƒ}
```

 JavaScript `throw``throw`

## try...catch 

JavaScript `try...catch`

```javascript
try {
  throw new Error('!');
} catch (e) {
  console.log(e.name + ": " + e.message);
  console.log(e.stack);
}
// Error: !
//   at <anonymous>:3:9
//   ...
```

`try``throw`JavaScript `catch``catch``catch``try`

`try...catch`

```javascript
try {
  f();
} catch(e) {
  // 
}
```

`f``catch`

`catch`

```javascript
try {
  throw "";
} catch (e) {
  console.log(111);
}
console.log(222);
// 111
// 222
```

`try``catch`

`catch``try...catch`

```javascript
var n = 100;

try {
  throw n;
} catch (e) {
  if (e <= 50) {
    // ...
  } else {
    throw e;
  }
}
// Uncaught 100
```

`catch`

`catch`

```javascript
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.log(e.name + ": " + e.message);
  } else if (e instanceof RangeError) {
    console.log(e.name + ": " + e.message);
  }
  // ...
}
```

`catch``EvalError``RangeError`

## finally 

`try...catch``finally`

```javascript
function cleansUp() {
  try {
    throw new Error('……');
    console.log('');
  } finally {
    console.log('');
  }
}

cleansUp()
// 
// Uncaught Error: ……
//    at cleansUp (<anonymous>:3:11)
//    at <anonymous>:10:1
```

`catch``finally`

```javascript
function idle(x) {
  try {
    console.log(x);
    return 'result';
  } finally {
    console.log('FINALLY');
  }
}

idle('hello')
// hello
// FINALLY
```

`try``return``finally``result`

`return``finally``finally`

```javascript
var count = 0;
function countUp() {
  try {
    return count;
  } finally {
    count++;
  }
}

countUp()
// 0
count
// 1
```

`return``count``finally`

`finally`

```javascript
openFile();

try {
  writeFile(Data);
} catch(e) {
  handleError(e);
} finally {
  closeFile();
}
```

`try``finally``catch``finally`

`try...catch...finally`

```javascript
function f() {
  try {
    console.log(0);
    throw 'bug';
  } catch(e) {
    console.log(1);
    return true; //  finally 
    console.log(2); // 
  } finally {
    console.log(3);
    return false; //  return
    console.log(4); // 
  }

  console.log(5); // 
}

var result = f();
// 0
// 1
// 3

result
// false
```

`catch``finally`

`catch``finally``return``throw`

```javascript
function f() {
  try {
    throw '';
  } catch(e) {
    console.log('');
    throw e; // finally
  } finally {
    return false; // 
  }
}

try {
  f();
} catch(e) {
  // 
  console.log('caught outer "bogus"');
}

//  
```

`catch``throw``finally``return false``catch`

`try``try`

```javascript
try {
  try {
    consle.log('Hello world!'); // 
  }
  finally {
    console.log('Finally');
  }
  console.log('Will I run?');
} catch(error) {
  console.error(error.message);
}
// Finally
// consle is not defined
```

`try``try``try``console``finally``catch`

## 

- Jani Hartikainen, [JavaScript Errors and How to Fix Them](http://davidwalsh.name/fix-javascript-errors)
