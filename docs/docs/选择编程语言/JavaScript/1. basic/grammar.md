# JavaScript 

## 

JavaScript line

statement

```javascript
var a = 1 + 3;
```

`var``a``1 + 3``a`

`1 + 3`expression JavaScript 



```javascript
var a = 1 + 3 ; var b = 'abc';
```

JavaScript 

```javascript
;;;
```

3

 JavaScript 

```javascript
1 + 3;
'abc';
```



## 

### 

“”“”

```javascript
var a = 1;
```

`a``a`11“”`a``a`1`var``a`

JavaScript `A``a`



```javascript
var a;
a = 1;
```

`undefined``undefined`“”

```javascript
var a;
a // undefined
```

`var`

```javascript
var a = 1;
// 
a = 1;
```

`var``var`

JavaScript 

```javascript
x
// ReferenceError: x is not defined
```

`x``x`

`var`

```javascript
var a, b;
```

JavaScript 

```javascript
var a = 1;
a = 'hello';
```

`a``a``var`

`var`

```javascript
var x = 1;
var x;
x // 1
```

`x`



```javascript
var x = 1;
var x = 2;

// 

var x = 1;
var x;
x = 2;
```

### 

JavaScript hoisting

```javascript
console.log(a);
var a = 1;
```

`console.log`console`a``a`

```javascript
var a;
console.log(a);
a = 1;
```

`undefined``a`

## 

identifierJavaScript `a``A`

JavaScript 



-  Unicode `$``_`
-  Unicode `0-9`



```javascript
arg0
_tmp
$elem
π
```



```javascript
1a  // 
23  // 
***  // 
a+b  // 
-d  // 
```



```javascript
var  = 1;
```

> JavaScript argumentsbreakcasecatchclassconstcontinuedebuggerdefaultdeletedoelseenumevalexportextendsfalsefinallyforfunctionifimplementsimportininstanceofinterfaceletnewnullpackageprivateprotectedpublicreturnstaticsuperswitchthisthrowtruetrytypeofvarvoidwhilewithyield

## 

 JavaScript JavaScript `//``/*``*/`

```javascript
// 

/*
 
 
 
*/
```

 JavaScript  HTML `<!--``-->`

```javascript
x = 1; <!-- x = 2;
--> x = 3;
```

`x = 1`

`-->`

```javascript
function countdown(n) {
  while (n --> 0) console.log(n);
}
countdown(3)
// 2
// 1
// 0
```

`n --> 0``n-- > 0`210

## 

JavaScript “”block

`var`JavaScript scope

```javascript
{
  var a = 1;
}

a // 1
```

`var``a``a``var` JavaScript `for``if``while``function`

## 

JavaScript `if``switch`

### if 

`if` JavaScript `true`“”`false`“”

```javascript
if ()
  ;

// 
if () ;
```

`if`“”`true``false`

```javascript
if (m === 3)
  m = m + 1;
```

`m`31

`if`

```javascript
if (m === 3) {
  m += 1;
}
```

`if`

`if``=``===``==`

```javascript
var x = 1;
var y = 2;
if (x = y) {
  console.log(x);
}
// "2"
```

`x``y``y``x``x`2`true`



```javascript
if (x = 2) { // 
if (2 = x) { // 
```

“”`===`“”`==`

### if...else 

`if``else`

```javascript
if (m === 3) {
  // 
} else {
  // 
}
```

`m`3`if``else`

`if...else`

```javascript
if (m === 0) {
  // ...
} else if (m === 1) {
  // ...
} else if (m === 2) {
  // ...
} else {
  // ...
}
```

`else``if`

```javascript
var m = 1;
var n = 2;

if (m !== 1)
if (n === 2) console.log('hello');
else console.log('world');
```

`else``if`

```javascript
if (m !== 1) {
  if (n === 2) {
    console.log('hello');
  } else {
    console.log('world');
  }
}
```

`else``if`

```javascript
if (m !== 1) {
  if (n === 2) {
    console.log('hello');
  }
} else {
  console.log('world');
}
// world
```

### switch 

`if...else``switch`

```javascript
switch (fruit) {
  case "banana":
    // ...
    break;
  case "apple":
    // ...
    break;
  default:
    // ...
}
```

`fruit``case``case``default``case``break``case``switch`

```javascript
var x = 1;

switch (x) {
  case 1:
    console.log('x 1');
  case 2:
    console.log('x 2');
  default:
    console.log('x ');
}
// x1
// x2
// x
```

`case``break``switch`

```javascript
switch (x) {
  case 1:
    console.log('x 1');
    break;
  case 2:
    console.log('x 2');
    break;
  default:
    console.log('x ');
}
```

`switch``case`

```javascript
switch (1 + 3) {
  case 2 + 2:
    f();
    break;
  default:
    neverHappens();
}
```

`default`

`switch``case``===``==`

```javascript
var x = 1;

switch (x) {
  case true:
    console.log('x ');
    break;
  default:
    console.log('x ');
}
// x 
```

`x``case true``switch`“”

###  ?:

JavaScript `?:`

```javascript
() ? 1 : 2
```

“”`true`“1”“2”

```javascript
var even = (n % 2 === 0) ? true : false;
```

`n`2`even``true``false`

```javascript
var even;
if (n % 2 === 0) {
  even = true;
} else {
  even = false;
}
```

`if...else...`

```javascript
var myVar;
console.log(
  myVar ?
  'myVar has a value' :
  'myVar does not have a value'
)
// myVar does not have a value
```



```javascript
var msg = '' + n + '' + (n % 2 === 0 ? '' : '');
```



## 



### while 

`while`

```javascript
while ()
  ;

// 
while () ;
```

`while`

```javascript
while () {
  ;
}
```

`while`

```javascript
var i = 0;

while (i < 100) {
  console.log('i ' + i);
  i = i + 1;
}
```

100`i`100



```javascript
while (true) {
  console.log('Hello, world');
}
```

### for 

`for`

```javascript
for (; ; )
  

// 

for (; ; ) {
  
}
```

`for`

- initialize
- test
- increment



```javascript
var x = 3;
for (var i = 0; i < x; i++) {
  console.log(i);
}
// 0
// 1
// 2
```

`var i = 0``i``i < x``i``x``i++``i`1

`for``while``while`

```javascript
var x = 3;
var i = 0;

while (i < x) {
  console.log(i);
  i++;
}
```

`for`initializetestincrement

```javascript
for ( ; ; ){
  console.log('Hello World');
}
```

`for`

### do...while 

`do...while``while`

```javascript
do
  
while ();

// 
do {
  
} while ();
```

`do...while``while`



```javascript
var x = 3;
var i = 0;

do {
  console.log(i);
  i++;
} while(i < x);
```

### break  continue 

`break``continue`

`break`

```javascript
var i = 0;

while(i < 100) {
  console.log('i ' + i);
  i++;
  if (i === 10) break;
}
```

10`i`10

`for``break`

```javascript
for (var i = 0; i < 5; i++) {
  console.log(i);
  if (i === 3)
    break;
}
// 0
// 1
// 2
// 3
```

`i`3

`continue`

```javascript
var i = 0;

while (i < 100){
  i++;
  if (i % 2 === 0) continue;
  console.log('i ' + i);
}
```

`i``i``i`

`break``continue`

### label

JavaScript label

```javascript
label:
  
```



`break``continue`

```javascript
top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) break top;
      console.log('i=' + i + ', j=' + j);
    }
  }
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
```

`break``top``top``break`



```javascript
foo: {
  console.log(1);
  break foo;
  console.log('');
}
console.log(2);
// 1
// 2
```

`break foo`

`continue`

```javascript
top:
  for (var i = 0; i < 3; i++){
    for (var j = 0; j < 3; j++){
      if (i === 1 && j === 1) continue top;
      console.log('i=' + i + ', j=' + j);
    }
  }
// i=0, j=0
// i=0, j=1
// i=0, j=2
// i=1, j=0
// i=2, j=0
// i=2, j=1
// i=2, j=2
```

`continue``continue`

## 

- Axel Rauschmayer, [Basic JavaScript for the impatient programmer](https://2ality.com/2013/06/basic-javascript.html)
