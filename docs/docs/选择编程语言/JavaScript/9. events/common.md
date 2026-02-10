# 

## 

### beforeunload 

`beforeunload`

`returnValue`“”

```javascript
window.addEventListener('beforeunload', function (event) {
  event.returnValue = '';
});
```



`event.preventDefault()`IE 

```javascript
window.addEventListener('beforeunload', function (e) {
  var confirmationMessage = '';

  e.returnValue = confirmationMessage;
  return confirmationMessage;
});
```

 Safari

`beforeunload`“”

### unload 

`unload``document``beforeunload``pagehide`

`unload`UI 

```javascript
window.addEventListener('unload', function(event) {
  console.log('');
});
```

`beforeunload``unload`

`pagehide`

### load error 

`load``load`

```javascript
window.addEventListener('load', function(event) {
  console.log('');
});
```

`error``abort`

`document`imagestyle sheetscriptvideoaudioAjaxXMLHttpRequest`document``window`XMLHttpRequestUpload `load``error`

`load``pageshow`

## session 

### pageshow pagehide 

session“/”

`pageshow`

`load``load``load` JavaScript  DOMContentLoaded 

```javascript
window.addEventListener('pageshow', function(event) {
  console.log('pageshow: ', event);
});
```

`pageshow``persisted``false``true`

```javascript
window.addEventListener('pageshow', function(event){
  if (event.persisted) {
    // ...
  }
});
```

`pagehide``pageshow`“/” unload  window `unload``pagehide`

`pagehide``persisted``true``false`unload  pagehide 

`<frame>``<iframe>``<frame>``pageshow``pagehide`

`history`

### popstate 

`popstate``history``history.pushState()``history.replaceState()``popstate``history`“/”`history.back()``history.forward()``history.go()`

`state``history.pushState``history.replaceState``state`

```javascript
window.onpopstate = function (event) {
  console.log('state: ' + event.state);
};
history.pushState({page: 1}, 'title 1', '?page=1');
history.pushState({page: 2}, 'title 2', '?page=2');
history.replaceState({page: 3}, 'title 3', '?page=3');
history.back(); // state: {"page":1}
history.back(); // state: null
history.go(2);  // state: {"page":3}
```

`pushState``history``replaceState``back``state``state``null``replaceState`

`popstate`Firefox 

### hashchange 

`hashchange` URL  hash `#``#``window`

`hashchange``oldURL``newURL` URL

```javascript
// URL  http://www.example.com/
window.addEventListener('hashchange', myFunction);

function myFunction(e) {
  console.log(e.oldURL);
  console.log(e.newURL);
}

location.hash = 'part2';
// http://www.example.com/
// http://www.example.com/#part2
```

## 

### DOMContentLoaded 

`document` DOMContentLoaded  DOM iframe `load`

```javascript
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM');
});
```

 JavaScript `DOMContentLoaded`

```javascript
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('DOM ');
});

//  DOMContentLoaded 
for(var i = 0; i < 1000000000; i++) {
  // ...
}
```

### readystatechange 

`readystatechange` Document  XMLHttpRequest `readyState``document.readyState``loading``interactive``complete``load`

```javascript
document.onreadystatechange = function () {
  if (document.readyState === 'interactive') {
    // ...
  }
}
```

`DOMContentLoaded`

## 

### scroll 

`scroll`

```javascript
window.addEventListener('scroll', callback);
```

`requestAnimationFrame``setTimeout``customEvent`

```javascript
(function () {
  var throttle = function (type, name, obj) {
    var obj = obj || window;
    var running = false;
    var func = function () {
      if (running) { return; }
      running = true;
      requestAnimationFrame(function() {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  //  scroll  optimizedScroll 
  throttle('scroll', 'optimizedScroll');
})();

window.addEventListener('optimizedScroll', function() {
  console.log('Resource conscious scroll callback!');
});
```

`throttle()``func()``scroll``func()``requestAnimationFrame()`60`optimizedScroll``scroll``optimizedScroll`60

`setTimeout()`

```javascript
(function() {
  window.addEventListener('scroll', scrollThrottler, false);

  var scrollTimeout;
  function scrollThrottler() {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(function () {
        scrollTimeout = null;
        actualScrollHandler();
      }, 66);
    }
  }

  function actualScrollHandler() {
    // ...
  }
}());
```

`scroll``scrollThrottler``setTimeout`6615`actualScrollHandler`

`throttle`

```javascript
function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if ((time + wait - Date.now()) < 0) {
      fn();
      time = Date.now();
    }
  }
}

window.addEventListener('scroll', throttle(callback, 1000));
```

`scroll`

`lodash``throttle`

```javascript
window.addEventListener('scroll', _.throttle(callback, 1000));
```

`debounce``throttle``throttle`“”`debounce`“”`debounce``throttle`

### resize 

`resize``window`

```javascript
var resizeMethod = function () {
  if (document.body.clientWidth < 768) {
    console.log('');
  }
};

window.addEventListener('resize', resizeMethod, true);
```

`scroll``throttle`

### fullscreenchange fullscreenerror 

`fullscreenchange``document`

```javascript
document.addEventListener('fullscreenchange', function (event) {
  console.log(document.fullscreenElement);
});
```

`fullscreenerror`

## 



- `cut`
- `copy`
- `paste`



```javascript
inputElement.addEventListener('paste', e => e.preventDefault());
```

`<input>`

`cut``copy``paste``ClipboardEvent``ClipboardEvent``clipboardData` DataTransfer  API  DataTransfer 

```javascript
document.addEventListener('copy', function (e) {
  e.clipboardData.setData('text/plain', 'Hello, world!');
  e.clipboardData.setData('text/html', '<b>Hello, world!</b>');
  e.preventDefault();
});
```



## 

`document`

- `focus`
- `blur`
- `focusin``focus`
- `focusout``blur`

`FocusEvent``FocusEvent`

- `FocusEvent.target`
- `FocusEvent.relatedTarget``focusin``focusout``focus``blur``null`

`focus``blur``addEventListener``true`

```javascript
form.addEventListener('focus', function (event) {
  event.target.style.background = 'pink';
}, true);

form.addEventListener('blur', function (event) {
  event.target.style.background = '';
}, true);
```



## CustomEvent 

CustomEvent  CustomEvent 

`CustomEvent()` CustomEvent 

```javascript
new CustomEvent(type, options)
```

`CustomEvent()``CustomEvent` Event 

- `detail``null`



```javascript
var event = new CustomEvent('build', { 'detail': 'hello' });

function eventHandler(e) {
  console.log(e.detail);
}

document.body.addEventListener('build', function (e) {
  console.log(e.detail);
});

document.body.dispatchEvent(event);
```

`build``detail``hello`



```javascript
var myEvent = new CustomEvent('myevent', {
  detail: {
    foo: 'bar'
  },
  bubbles: true,
  cancelable: false
});

el.addEventListener('myevent', function (event) {
  console.log('Hello ' + event.detail.foo);
});

el.dispatchEvent(myEvent);
```

CustomEvent  Event `detail`
