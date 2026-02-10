# 

## 

JavaScript JavaScript 

JavaScript  JavaScript JavaScript 

JavaScript JavaScript  JavaScript  DOM JavaScript 

 JavaScript JavaScript  Ajax 

CPU  CPU  IO  Ajax JavaScript  CPU  IO  IO  JavaScript “”Event Loop

 JavaScript JavaScript  Node.js 

 CPU HTML5  Web Worker  JavaScript  DOM JavaScript 

## 

synchronousasynchronous



 Ajax “”

Ajax  Ajax  Ajax  Ajax 

## 

JavaScript task queue





JavaScript Event Loop[](http://en.wikipedia.org/wiki/Event_loop)“a programming construct that waits for and dispatches events or messages in a program”

## 



### 



`f1``f2``f2``f1`

```javascript
function f1() {
  // ...
}

function f2() {
  // ...
}

f1();
f2();
```

`f1``f2``f1`

`f1``f2``f1`

```javascript
function f1(callback) {
  // ...
  callback();
}

function f2() {
  // ...
}

f1(f2);
```

[](http://en.wikipedia.org/wiki/Coupling_(computer_programming))coupling

### 



`f1``f2``f1` jQuery [](http://api.jquery.com/on/)

```javascript
f1.on('done', f2);
```

`f1``done``f2``f1`

```javascript
function f1() {
  setTimeout(function () {
    // ...
    f1.trigger('done');
  }, 1000);
}
```

`f1.trigger('done')``done``f2`

“[](http://en.wikipedia.org/wiki/Decoupling)”decoupling

### /

“”“”“”publish“”subscribe”[/](http://en.wikipedia.org/wiki/Publish-subscribe_pattern)”publish-subscribe pattern“[](http://en.wikipedia.org/wiki/Observer_pattern)”observer pattern

[](http://msdn.microsoft.com/en-us/magazine/hh201955.aspx) Ben Alman  [Tiny Pub/Sub](https://gist.github.com/661855) jQuery 

`f2``jQuery``done`

```javascript
jQuery.subscribe('done', f2);
```

`f1`

```javascript
function f1() {
  setTimeout(function () {
    // ...
    jQuery.publish('done');
  }, 1000);
}
```

`jQuery.publish('done')``f1``jQuery``done``f2`

`f2`unsubscribe

```javascript
jQuery.unsubscribe('done', f2);
```

“”“”

## 



```javascript
function async(arg, callback) {
  console.log(' ' + arg +' , 1');
  setTimeout(function () { callback(arg * 2); }, 1000);
}
```

`async`1

`final`

```javascript
function final(value) {
  console.log(': ', value);
}

async(1, function (value) {
  async(2, function (value) {
    async(3, function (value) {
      async(4, function (value) {
        async(5, function (value) {
          async(6, final);
        });
      });
    });
  });
});
//  1 , 1
//  2 , 1
//  3 , 1
//  4 , 1
//  5 , 1
//  6 , 1
// :  12
```



### 



```javascript
var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];

function async(arg, callback) {
  console.log(' ' + arg +' , 1');
  setTimeout(function () { callback(arg * 2); }, 1000);
}

function final(value) {
  console.log(': ', value);
}

function series(item) {
  if(item) {
    async( item, function(result) {
      results.push(result);
      return series(items.shift());
    });
  } else {
    return final(results[results.length - 1]);
  }
}

series(items.shift());
```

`series``final``items``results`



### 

`final`

```javascript
var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];

function async(arg, callback) {
  console.log(' ' + arg +' , 1');
  setTimeout(function () { callback(arg * 2); }, 1000);
}

function final(value) {
  console.log(': ', value);
}

items.forEach(function(item) {
  async(item, function(result){
    results.push(result);
    if(results.length === items.length) {
      final(results[results.length - 1]);
    }
  })
});
```

`forEach``final`



### 

`n`

```javascript
var items = [ 1, 2, 3, 4, 5, 6 ];
var results = [];
var running = 0;
var limit = 2;

function async(arg, callback) {
  console.log(' ' + arg +' , 1');
  setTimeout(function () { callback(arg * 2); }, 1000);
}

function final(value) {
  console.log(': ', value);
}

function launcher() {
  while(running < limit && items.length > 0) {
    var item = items.shift();
    async(item, function(result) {
      results.push(result);
      running--;
      if(items.length > 0) {
        launcher();
      } else if(running === 0) {
        final(results);
      }
    });
    running++;
  }
}

launcher();
```

`running``0``final`

`limit`
