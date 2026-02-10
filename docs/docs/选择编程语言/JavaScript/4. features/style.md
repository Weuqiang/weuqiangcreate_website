# 

## 

“”programming style

“”grammar“”programming style

 JavaScript 

“”

## 

 Tab indent

Tab  Tab 

 Tab 

## 

JavaScript block

```javascript
if (a)
  b();
  c();
```



```javascript
if (a) {
  b();
  c();
}
```



```javascript
if (a) {
  b();
}
  c();
```





```javascript
block
{
  // ...
}
```



```javascript
block {
  // ...
}
```

JavaScript  JavaScript 

```javascript
return
{
  key: value
};

// 
return;
{
  key: value
};
```

`undefined` JavaScript `return`

```javascript
return {
  key : value
};
```



## 

parentheses JavaScript grouping

```javascript
// 
console.log('abc');

// 
(1 + 2) * 3
```



> 1. 
>
> 2. 
>
> 3. 



```javascript
foo (bar)
return(a+b);
if(a === 0) {...}
function foo (b) {...}
function(x) {...}
```

`function`

## 

JavaScript 

### 



**1for  while **

```javascript
for ( ; ; ) {
} // 

while (true) {
} // 
```

`do...while`

```javascript
do {
  a--;
} while(a > 0); // 
```

**2ifswitchtry**

```javascript
if (true) {
} // 

switch () {
} // 

try {
} catch {
} // 
```

**3**

```javascript
function f() {
} // 
```



```javascript
var f = function f() {
};
```



### 

JavaScript 

```javascript
var a = 1
// 
var a = 1;
```

“”Automatic Semicolon Insertion ASI

JavaScript 

```javascript
//  var a = 3
var
a
=
3

//  'abc'.length
'abc'
.length

//  return a + b;
return a +
b;

//  obj.foo(arg1, arg2);
obj.foo(arg1,
arg2);

//  3 * 2 + 10 * (27 / 6)
3 * 2
+
10 * (27 / 6)
```



```javascript
x = y
(function () {
  // ...
})();

// 
x = y(function () {...})();
```



```javascript
//  c(d+e)
var a = b + c
(d+e).toString();

//  a = b/hi/g.exec(c).map(d)
// 
a = b
/hi/g.exec(c).map(d);

// 'b'['red', 'green']
// 
var a = 'b'
['red', 'green'].forEach(function (c) {
  console.log(c);
})

//  function (x) { return x }(a++)
// f0
var a = 0;
var f = function (x) { return x }
(a++)
```

JavaScript 

```javascript
if (a < 0) a = 0
console.log(a)

// 
//  0console 
if (a < 0) a = 0;
console.log(a)
```

“”`++`“”`--`

```javascript
a = b = c = 1

a
++
b
--
c

console.log(a, b, c)
// 1 2 0
```

`1 2 0`

```javascript
a = b = c = 1;
a;
++b;
--c;
```

`continue``break``return``throw``return`

```javascript
return
{ first: 'Jane' };

// 
return;
{ first: 'Jane' };
```



 JavaScript uglifier



```javascript
;var a = 1;
// ...
```



## 

JavaScript 

`UPPER_CASE`

## 

JavaScript “”hoistblock

```javascript
if (!x) {
  var x = {};
}

// 
var x;
if (!x) {
  x = {};
}
```

`x``if`

```javascript
for (var i = 0; i < 10; i++) {
  // ...
}

// 
var i;
for (i = 0; i < 10; i++) {
  // ...
}
```

`i`



## with 

`with`

```javascript
with (o) {
foo = bar;
}
```



```javascript
o.foo = bar;
o.foo = o.bar;
foo = bar;
foo = o.bar;
```

`with`

## 

JavaScript “”`==`“”`===`



```javascript
0 == ''// true
1 == true // true
2 == true // false
0 == '0' // true
false == 'false' // false
false == '0' // true
' \t\r\n ' == 0 // true
```

`==``===`

## 



```javascript
a = b;
if (a) {
  // ...
}
```



```javascript
if (a = b) {
  // ...
}
```



```javascript
if a === b{
  // ...
}
```



## 

`++``--``++``+= 1`

```javascript
++x
// 
x += 1;
```

`+= 1`

`++``--``+=``-=`

## switch...case 

`switch...case``case``break``case`

`switch...case``goto`

```javascript
function doAction(action) {
  switch (action) {
    case 'hack':
      return 'hack';
    case 'slash':
      return 'slash';
    case 'run':
      return 'run';
    default:
      throw new Error('Invalid action.');
  }
}
```



```javascript
function doAction(action) {
  var actions = {
    'hack': function () {
      return 'hack';
    },
    'slash': function () {
      return 'slash';
    },
    'run': function () {
      return 'run';
    }
  };

  if (typeof actions[action] !== 'function') {
    throw new Error('Invalid action.');
  }

  return actions[action]();
}
```

`switch...case`

## 

- Eric Elliott, Programming JavaScript Applications, [Chapter 2. JavaScript Style Guide](https://www.oreilly.com/library/view/programming-javascript-applications/9781491950289/), O'Reilly, 2014
- Axel Rauschmayer, [A meta style guide for JavaScript](http://www.2ality.com/2013/07/meta-style-guide.html)
- Axel Rauschmayer, [Automatic semicolon insertion in JavaScript](http://www.2ality.com/2011/05/semicolon-insertion.html)
- Rod Vagg, [JavaScript and Semicolons](http://dailyjs.com/2012/04/19/semicolons/)
