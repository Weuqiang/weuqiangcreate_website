# 

JavaScript timer`setTimeout()``setInterval()`

## setTimeout()

`setTimeout`

```javascript
var timerId = setTimeout(func|code, delay);
```

`setTimeout``func|code``delay`

```javascript
console.log(1);
setTimeout('console.log(2)',1000);
console.log(3);
// 1
// 3
// 2
```

1310002`console.log(2)``setTimeout`

`setTimeout`

```javascript
function f() {
  console.log(2);
}

setTimeout(f, 1000);
```

`setTimeout`0

```javascript
setTimeout(f)
// 
setTimeout(f, 0)
```

`setTimeout`

```javascript
setTimeout(function (a,b) {
  console.log(a + b);
}, 1000, 1, 1);
```

`setTimeout`41000

`setTimeout``this`

```javascript
var x = 1;

var obj = {
  x: 2,
  y: function () {
    console.log(this.x);
  }
};

setTimeout(obj.y, 1000) // 1
```

12`obj.y`1000`this``obj`

`obj.y`

```javascript
var x = 1;

var obj = {
  x: 2,
  y: function () {
    console.log(this.x);
  }
};

setTimeout(function () {
  obj.y();
}, 1000);
// 2
```

`obj.y``obj.y``obj`

`bind``obj.y``obj`

```javascript
var x = 1;

var obj = {
  x: 2,
  y: function () {
    console.log(this.x);
  }
};

setTimeout(obj.y.bind(obj), 1000)
// 2
```

## setInterval()

`setInterval``setTimeout``setInterval`

```javascript
var i = 1
var timer = setInterval(function() {
  console.log(2);
}, 1000)
```

10002

`setTimeout``setInterval`

`setInterval`

```javascript
var div = document.getElementById('someDiv');
var opacity = 1;
var fader = setInterval(function() {
  opacity -= 0.1;
  if (opacity >= 0) {
    div.style.opacity = opacity;
  } else {
    clearInterval(fader);
  }
}, 100);
```

100`div`

`setInterval` URL  Hash 

```javascript
var hash = window.location.hash;
var hashWatcher = setInterval(function() {
  if (window.location.hash != hash) {
    updatePage();
  }
}, 1000);
```

`setInterval`“”`setInterval` 100ms  5ms95105

`setInterval``setTimeout`

```javascript
var i = 1;
var timer = setTimeout(function f() {
  // ...
  timer = setTimeout(f, 2000);
}, 2000);
```

2000

## clearTimeout()clearInterval()

`setTimeout``setInterval``clearTimeout``clearInterval`

```javascript
var id1 = setTimeout(f, 1000);
var id2 = setInterval(f, 1000);

clearTimeout(id1);
clearInterval(id2);
```

`f`

`setTimeout``setInterval``setTimeout`1

```javascript
function f() {}
setTimeout(f, 1000) // 10
setTimeout(f, 1000) // 11
setTimeout(f, 1000) // 12
```

`setTimeout`1

`setTimeout`

```javascript
(function() {
  // 
  var gid = setInterval(clearAllTimeouts, 0);

  function clearAllTimeouts() {
    var id = setTimeout(function() {}, 0);
    while (id > 0) {
      if (id !== gid) {
        clearTimeout(id);
      }
      id--;
    }
  }
})();
```

`setTimeout`

## debounce 

 Ajax jQuery 

```javascript
$('textarea').on('keydown', ajaxAction);
```

`keydown` Ajax  Ajax `keydown` Ajax `keydown`

 debounce Ajax 2500

```javascript
$('textarea').on('keydown', debounce(ajaxAction, 2500));

function debounce(fn, delay){
  var timer = null; // 
  return function() {
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(context, args);
    }, delay);
  };
}
```

25002500

## 

`setTimeout``setInterval`

`setTimeout``setInterval``setTimeout``setInterval`

```javascript
setTimeout(someTask, 100);
veryLongTask();
```

`setTimeout`100`veryLongTask`100`someTask``veryLongTask`

`setInterval`

```javascript
setInterval(function () {
  console.log(2);
}, 1000);

sleep(3000);

function sleep(ms) {
  var start = Date.now();
  while ((Date.now() - start) < ms) {
  }
}
```

`setInterval`10002`sleep`3000`setInterval`3000`setInterval`22

## setTimeout(f, 0)

### 

`setTimeout``0``setTimeout(f, 0)`

`setTimeout``f``setTimeout(f, 0)`

```javascript
setTimeout(function () {
  console.log(1);
}, 0);
console.log(2);
// 2
// 1
```

`2``1``2``1`

`setTimeout(f, 0)``f``f`

`setTimeout(f, 0)`0 Edge 416 Tab 10001

### 

`setTimeout(f, 0)``setTimeout(f, 0)`

```javascript
// HTML 
// <input type="button" id="myButton" value="click">

var input = document.getElementById('myButton');

input.onclick = function A() {
  setTimeout(function B() {
    input.value +=' input';
  }, 0)
};

document.body.onclick = function C() {
  input.value += ' body'
};
```

`A``C``A``setTimeout``B``C`

`keypress`

```javascript
// HTML 
// <input type="text" id="input-box">

document.getElementById('input-box').onkeypress = function (event) {
  this.value = this.value.toUpperCase();
}
```

`this.value``setTimeout`

```javascript
document.getElementById('input-box').onkeypress = function() {
  var self = this;
  setTimeout(function() {
    self.value = self.value.toUpperCase();
  }, 0);
}
```

`setTimeout`

`setTimeout(f, 0)``setTimeout(f, 0)`

```javascript
var div = document.getElementsByTagName('div')[0];

// 
for (var i = 0xA00000; i < 0xFFFFFF; i++) {
  div.style.backgroundColor = '#' + i.toString(16);
}

// 
var timer;
var i=0x100000;

function func() {
  timer = setTimeout(func, 0);
  div.style.backgroundColor = '#' + i.toString(16);
  if (i++ == 0xFFFFFF) clearTimeout(timer);
}

timer = setTimeout(func, 0);
```

“” JavaScript  DOM DOM “”`setTimeout(f, 0)`

`setTimeout(highlightNext, 50)`
