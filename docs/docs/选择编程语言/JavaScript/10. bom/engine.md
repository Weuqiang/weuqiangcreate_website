# 

JavaScript  JavaScript  JavaScript  JavaScript 

 JavaScript  JavaScript 

## 

 JavaScript 

- `<script>`
- `<script>`
- 
- URL 

### script 

`<script>` JavaScript 

```html
<script>
  var x = 1 + 5;
  console.log(x);
</script>
```

`<script>``type` JavaScript `type`

- `text/javascript``type`
- `application/javascript`

```html
<script type="application/javascript">
  console.log('Hello World');
</script>
```

`<script>` JavaScript  JavaScript `type`

`type``<script>``type`

```html
<script id="mydata" type="x-custom-data">
  console.log('Hello World');
</script>
```

`type``<script>` DOM `<script>``text`

```javascript
document.getElementById('mydata').text
//   console.log('Hello World');
```

### script 

`<script>`

```html
<script src="https://www.example.com/script.js"></script>
```



```html
<script charset="utf-8" src="https://www.example.com/script.js"></script>
```

 JavaScript `HTML``<script>`

`console.log`

```html
<script charset="utf-8" src="example.js">
  console.log('Hello World!');
</script>
```

`script``integrity` Hash 

```html
<script src="/assets/application.js"
  integrity="sha256-TvVUHzSfftWg1rcfL6TIJ0XKEGrgLyEq6lEpcmrG9qs=">
</script>
```

`script``integrity``/assets/application.js` SHA256  SHA256 

### 

`onclick``onmouseover` JavaScript 

```html
<button id="myBtn" onclick="console.log(this.id)"></button>
```



### URL 

URL `javascript:` URL  URL  JavaScript 

```html
<a href="javascript:console.log('Hello')"></a>
```

`javascript:``javascript:console.log('Hello')`

 JavaScript 

```html
<a href="javascript: new Date().toLocaleTimeString();"></a>
```





```javascript
<a href="javascript: console.log(new Date().toLocaleTimeString())"></a>
```



`javascript:` Bookmarklet`javascript:``void``void 0`

```html
<a href="javascript: void new Date().toLocaleTimeString();"></a>
<a href="javascript: new Date().toLocaleTimeString();void 0;"></a>
```



## script 

### 

 JavaScript `<script>`

1.  HTML 
2. `<script>` JavaScript 
3. `<script>`
4. JavaScript  HTML 

 JavaScript  DOM

“”“”

`<script>`

 DOM  DOM JavaScript  DOM 

```html
<head>
  <script>
    console.log(document.body.innerHTML);
  </script>
</head>
<body>
</body>
```

`document.body`

`DOMContentLoaded`

```html
<head>
  <script>
    document.addEventListener(
      'DOMContentLoaded',
      function (event) {
        console.log(document.body.innerHTML);
      }
    );
  </script>
</head>
```

`DOMContentLoaded``DOMContentLoaded` DOM 

`<script>``onload``<script>``load`

```html
<script src="jquery.min.js" onload="console.log(document.body.innerHTML)">
</script>
```



```html
<body>
  <!--   -->
  <script>
    console.log(document.body.innerHTML);
  </script>
</body>
```

`script`

```html
<script src="a.js"></script>
<script src="b.js"></script>
```

`a.js``b.js``a.js``b.js`“”

 CSSFirefox Webkit

620 TCP 

### defer 

`<script>``defer` DOM 

```html
<script src="a.js" defer></script>
<script src="b.js" defer></script>
```

 DOM `a.js``b.js`

`defer`

1.  HTML 
2. `defer``<script>`
3.  HTML `<script>`
4.  HTML 

`defer``DOMContentLoaded``</html>`

`script``script``defer``defer``document.write`

### async 

“”`<script>``async`

```html
<script src="a.js" async></script>
<script src="b.js" async></script>
```

`async`

1.  HTML 
2. `async``script`
3.  HTML `<script>`
4.  HTML 
5.  HTML 

`async``async``document.write`

`defer``async`

`async``defer``async``defer``async`

### 

`<script>`

```javascript
['a.js', 'b.js'].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  document.head.appendChild(script);
});
```

`script`

async`false`

```javascript
['a.js', 'b.js'].forEach(function(src) {
  var script = document.createElement('script');
  script.src = src;
  script.async = false;
  document.head.appendChild(script);
});
```

`b.js``a.js``b.js`



```javascript
function loadScript(src, done) {
  var js = document.createElement('script');
  js.src = src;
  js.onload = function() {
    done();
  };
  js.onerror = function() {
    done(new Error('Failed to load script ' + src));
  };
  document.head.appendChild(js);
}
```

### 

 HTTP 

```html
<script src="example.js"></script>
```

`example.js` HTTP  HTTPS 

```html
<script src="https://example.js"></script>
```



```html
<script src="//example.js"></script>
```

## 

 JavaScript  JavaScript 

### 





- FirefoxGecko 
- SafariWebKit 
- ChromeBlink 
- IE: Trident 
- Edge: EdgeHTML 



1. HTML  DOMCSS  CSSOMCSS Object Model
2.  DOM  CSSOM render tree
3. layout
4. 

 HTML 

### 

“”flow“”paint

“”reflow“”repaint`a:hover`





 DOM  DOM `table``flex`

```javascript
var foo = document.getElementById('foobar');

foo.style.color = 'blue';
foo.style.marginTop = '30px';
```

 DOM 



-  DOM  DOM DOM  DOM 
-  DOM 
-  CSS class 
- `documentFragment` DOM
- `absolute``fixed`
- 
- `window.requestAnimationFrame()`
-  DOMvirtual DOM

`window.requestAnimationFrame()`

```javascript
// 
function doubleHeight(element) {
  var currentHeight = element.clientHeight;
  element.style.height = (currentHeight * 2) + 'px';
}

all_my_elements.forEach(doubleHeight);

// 
function doubleHeight(element) {
  var currentHeight = element.clientHeight;

  window.requestAnimationFrame(function () {
    element.style.height = (currentHeight * 2) + 'px';
  });
}

all_my_elements.forEach(doubleHeight);
```

 DOM DOM 

### JavaScript 

JavaScript  JavaScript 

JavaScript 

 JavaScript bytecode

 JavaScript 

1. Lexical analysistoken
2. parsing“”syntax tree
3. “”translatorbytecode
4. “”bytecode interpreter

“”Just In Time compiler JITinline cache

Virtual Machine JavaScript  JavaScript  JavaScript  JITjust in time Java JavaScript 

- [Chakra](https://en.wikipedia.org/wiki/Chakra_(JScript_engine)) (Microsoft Internet Explorer)
- [Nitro/JavaScript Core](http://en.wikipedia.org/wiki/WebKit#JavaScriptCore) (Safari)
- [Carakan](http://dev.opera.com/articles/view/labs-carakan/) (Opera)
- [SpiderMonkey](https://developer.mozilla.org/en-US/docs/SpiderMonkey) (Firefox)
- [V8](https://en.wikipedia.org/wiki/Chrome_V8) (Chrome, Chromium)

## 

- John Dalziel, [The race for speed part 2: How JavaScript compilers work](http://creativejs.com/2013/06/the-race-for-speed-part-2-how-javascript-compilers-work/)
- Jake Archibald, [Deep dive into the murky waters of script loading](http://www.html5rocks.com/en/tutorials/speed/script-loading/)
- Mozilla Developer Network, [window.setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/window.setTimeout)
- Remy Sharp, [Throttling function calls](http://remysharp.com/2010/07/21/throttling-function-calls/)
- Ayman Farhat, [An alternative to JavaScript's evil setInterval](http://www.thecodeship.com/web-development/alternative-to-javascript-evil-setinterval/)
- Ilya Grigorik, [Script-injected "async scripts" considered harmful](https://www.igvita.com/2014/05/20/script-injected-async-scripts-considered-harmful/)
- Axel Rauschmayer, [ECMAScript 6 promises (1/2): foundations](http://www.2ality.com/2014/09/es6-promises-foundations.html)
- Daniel Imms, [async vs defer attributes](http://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html)
- Craig Buckler, [Load Non-blocking JavaScript with HTML5 Async and Defer](http://www.sitepoint.com/non-blocking-async-defer/)
- Domenico De Felice, [How browsers work](https://domenicodefelice.blogspot.com/2015/08/how-browsers-work.html)
