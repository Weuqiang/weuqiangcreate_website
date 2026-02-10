# Promise 

## 

Promise  JavaScript proxyPromise 

 Promise [ES6 ](http://es6.ruanyifeng.com/)[Promise ](http://es6.ruanyifeng.com/#docs/promise)

Promise 

```javascript
function f1(resolve, reject) {
  // ...
}

var p1 = new Promise(f1);
```

`Promise``f1``f1``p1` Promise 

Promise  Promise Promise `then`

```javascript
var p1 = new Promise(f1);
p1.then(f2);
```

`f1``f2`

`f2``f1``f1(f2)``f1``f2`Promise `f1``f2`

```javascript
// 
step1(function (value1) {
  step2(value1, function(value2) {
    step3(value2, function(value3) {
      step4(value3, function(value4) {
        // ...
      });
    });
  });
});

// Promise 
(new Promise(step1))
  .then(step2)
  .then(step3)
  .then(step4);
```

 Promises `Promise`

Promise 

Promise ECMAScript 6  JavaScript  Promise 

## Promise 

Promise Promise 

- pending
- fulfilled
- rejected

`fulfilled``rejected``resolved`



- “”“”
- “”“”

 Promise “”Promise 

Promise 

- Promise value`fulfilled`
- Promise error`rejected`

## Promise 

JavaScript `Promise` Promise 

```javascript
var promise = new Promise(function (resolve, reject) {
  // ...

  if (/*  */){
    resolve(value);
  } else { /*  */
    reject(new Error());
  }
});
```

`Promise``resolve``reject` JavaScript 

`resolve``Promise`“”“”`pending``fulfilled``reject``Promise`“”“”`pending``rejected`



```javascript
function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

timeout(100)
```

`timeout(100)` Promise 100`fulfilled`

## Promise.prototype.then()

Promise `then`

`then``fulfilled``rejected`

```javascript
var p1 = new Promise(function (resolve, reject) {
  resolve('');
});
p1.then(console.log, console.error);
// ""

var p2 = new Promise(function (resolve, reject) {
  reject(new Error(''));
});
p2.then(console.log, console.error);
// Error: 
```

`p1``p2`Promise `then``console.log``console.error``p1``p2`

`then`

```javascript
p1
  .then(step1)
  .then(step2)
  .then(step3)
  .then(
    console.log,
    console.error
  );
```

`p1``then``fulfilled`

`then``console.log``console.error``console.log``step3``console.error``p1``step1``step2``step3``step1``rejected``step2``step3``resolved`Promise `rejected``console.error`Promise 

## then() 

Promise `then`

```javascript
// 
f1().then(function () {
  return f2();
});

// 
f1().then(function () {
  f2();
});

// 
f1().then(f2());

// 
f1().then(f2);
```

`then``f3``f3``f2`

```javascript
f1().then(function () {
  return f2();
}).then(f3);
```

`f3``undefined`

```javascript
f1().then(function () {
  f2();
  return;
}).then(f3);
```

`f3``f2`

```javascript
f1().then(f2())
  .then(f3);
```

`f2``f1()`

```javascript
f1().then(f2)
  .then(f3);
```

## 

 Promise 

```javascript
var preloadImage = function (path) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.onload  = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
```

`image``onload``onerror`

`preloadImage()`

```javascript
preloadImage('https://example.com/my.jpg')
  .then(function (e) { document.body.append(e.target) })
  .then(function () { console.log('') })
```

`onload``then()``target` DOM 

## 

Promise 

Promise  Promise 

Promise `then``then`

## 

Promise 

```javascript
new Promise(function (resolve, reject) {
  resolve(1);
}).then(console.log);

console.log(2);
// 2
// 1
```

21`console.log(2)``then`

Promise microtask

```javascript
setTimeout(function() {
  console.log(1);
}, 0);

new Promise(function (resolve, reject) {
  resolve(2);
}).then(console.log);

console.log(3);
// 3
// 2
// 1
```

`321``then``setTimeout(fn, 0)``then``setTimeout(fn, 0)`

## 

- Sebastian Porto, [Asynchronous JS: Callbacks, Listeners, Control Flow Libs and Promises](https://sporto.github.io/blog/2012/12/09/callbacks-listeners-promises/)
- Rhys Brett-Bowen, [Promises/A+ - understanding the spec through implementation](http://modernjavascript.blogspot.com/2013/08/promisesa-understanding-by-doing.html)
- Matt Podwysocki, Amanda Silver, [Asynchronous Programming in JavaScript with “Promises”](http://blogs.msdn.com/b/ie/archive/2011/09/11/asynchronous-programming-in-javascript-with-promises.aspx)
- Marc Harter, [Promise A+ Implementation](https://gist.github.com//wavded/5692344)
- Bryan Klimt, [What’s so great about JavaScript Promises?](http://blog.parse.com/2013/01/29/whats-so-great-about-javascript-promises/)
- Jake Archibald, [JavaScript Promises There and back again](http://www.html5rocks.com/en/tutorials/es6/promises/)
- Mikito Takada, [7. Control flow, Mixu's Node book](http://book.mixu.net/node/ch7.html)
