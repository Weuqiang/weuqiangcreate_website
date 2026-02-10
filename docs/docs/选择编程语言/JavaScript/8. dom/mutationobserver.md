# Mutation Observer API

## 

Mutation Observer API  DOM DOM  API 

 DOM  Mutation Observer DOM Mutation Observer DOM  DOM 

 DOM 1000`<p>`1000 Mutation Observer 1000

Mutation Observer 

- 
-  DOM  DOM 
-  DOM 

## MutationObserver 

`MutationObserver`

```javascript
var observer = new MutationObserver(callback);
```

 DOM 

```javascript
var observer = new MutationObserver(function (mutations, observer) {
  mutations.forEach(function(mutation) {
    console.log(mutation);
  });
});
```

## MutationObserver 

### observe()

`observe()`

-  DOM 
- 

```javascript
var article = document.querySelector('article');

var options = {
  'childList': true,
  'attributes':true
} ;

observer.observe(article, options);
```

`observe()`DOM`article`

 DOM `options`

- **childList**
- **attributes**
- **characterData**

`option``true`

`options`

- `subtree`
- `attributeOldValue``attributes`
- `characterDataOldValue``characterData`
- `attributeFilter``['class','src']`

```javascript
// <html>
mutationObserver.observe(document.documentElement, {
  attributes: true,
  characterData: true,
  childList: true,
  subtree: true,
  attributeOldValue: true,
  characterDataOldValue: true
});
```

`addEventListener()``options`



```javascript
var insertedNodes = [];
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    for (var i = 0; i < mutation.addedNodes.length; i++) {
      insertedNodes.push(mutation.addedNodes[i]);
    }
  });
  console.log(insertedNodes);
});
observer.observe(document, { childList: true, subtree: true });
```

### disconnect()takeRecords()

`disconnect()`DOM 

```javascript
observer.disconnect();
```

`takeRecords()`

```javascript
observer.takeRecords();
```



```javascript
// 
var changes = mutationObserver.takeRecords();

// 
mutationObserver.disconnect();
```

## MutationRecord 

DOM MutationRecord Mutation Observer `MutationRecord`

`MutationRecord`DOM

- `type``attributes``characterData``childList`
- `target`DOM
- `addedNodes`DOM
- `removedNodes`DOM
- `previousSibling``null`
- `nextSibling``null`
- `attributeName``attributeFilter`
- `oldValue``attribute``characterData``childList``null`

## 

### 



```javascript
var callback = function (records){
  records.map(function(record){
    console.log('Mutation type: ' + record.type);
    console.log('Mutation target: ' + record.target);
  });
};

var mo = new MutationObserver(callback);

var option = {
  'childList': true,
  'subtree': true
};

mo.observe(document.body, option);
```

`<body>``childList``subtree`

### 



```javascript
var callback = function (records) {
  records.map(function (record) {
    console.log('Previous attribute value: ' + record.oldValue);
  });
};

var mo = new MutationObserver(callback);

var element = document.getElementById('#my_element');

var options = {
  'attributes': true,
  'attributeOldValue': true
}

mo.observe(element, options);
```

`'attributes': true`

###  DOMContentLoaded 

DOM  DOM `DOMContentLoaded`

```javascript
var observer = new MutationObserver(callback);
observer.observe(document.documentElement, {
  childList: true,
  subtree: true
});
```

`document.documentElement``<html>`HTML `subtree`

`MutationObserver` DOM 

```javascript
(function(win){
  'use strict';

  var listeners = [];
  var doc = win.document;
  var MutationObserver = win.MutationObserver || win.WebKitMutationObserver;
  var observer;

  function ready(selector, fn){
    // 
    listeners.push({
      selector: selector,
      fn: fn
    });
    if(!observer){
      // document
      observer = new MutationObserver(check);
      observer.observe(doc.documentElement, {
        childList: true,
        subtree: true
      });
    }
    // DOM
    check();
  }

  function check(){
  // 
    for(var i = 0; i < listeners.length; i++){
      var listener = listeners[i];
      // 
      var elements = doc.querySelectorAll(listener.selector);
      for(var j = 0; j < elements.length; j++){
        var element = elements[j];
        // 
        if(!element.ready){
          element.ready = true;
          // 
          listener.fn.call(element, element);
        }
      }
    }
  }

  // ready
  win.ready = ready;

})(this);

// 
ready('.foo', function(element){
  // ...
});
```

## 

- Paul Kinlan, [Detect DOM changes with Mutation Observers](https://developers.google.com/web/updates/2012/02/Detect-DOM-changes-with-Mutation-Observers)
- Tiffany Brown, [Getting to know mutation observers](http://dev.opera.com/articles/view/mutation-observers-tutorial/)
- Michal Budzynski, [JavaScript: The less known parts. DOM Mutations](http://michalbe.blogspot.com/2013/04/javascript-less-known-parts-dom.html)
- Jeff Griffiths, [DOM MutationObserver – reacting to DOM changes without killing browser performance](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
- Addy Osmani, [Detect, Undo And Redo DOM Changes With Mutation Observers](http://addyosmani.com/blog/mutation-observers/)
- Ryan Morr, [Using Mutation Observers to Watch for Element Availability](http://ryanmorr.com/using-mutation-observers-to-watch-for-element-availability/)
