# 

“”[same-origin policy](https://en.wikipedia.org/wiki/Same-origin_policy)

## 

### 

1995 Netscape 

A  CookieB “”“”“”

> - 
> - 
> - 

`http://www.example.com/dir/page.html``http://``www.example.com``80`

- `http://www.example.com/dir2/other.html`
- `http://example.com/dir/other.html`
- `http://v2.www.example.com/dir/other.html`
- `http://www.example.com:81/dir/other.html`
- `https://www.example.com/dir/page.html`

80008001 Cookie 

### 



A A  Cookie A  B B  A  CookieCookie 

 Cookie 

### 



> 1  CookieLocalStorage  IndexedDB
>
> 2  DOM
>
> 3  AJAX 

 JavaScript `window``window`

- window.closed
- window.frames
- window.length
- window.location
- window.opener
- window.parent
- window.self
- window.top
- window.window
- window.blur()
- window.close()
- window.focus()
- window.postMessage()

`window.location``location``location.replace()``location.href`



## Cookie

Cookie `document.domain` Cookie

A `http://w1.example.com/a.html`B `http://w2.example.com/b.html``document.domain` Cookie`document.domain`

```javascript
// 
document.domain = 'example.com';
```

A  B `document.domain``document.domain``null``document.domain`

A  Cookie

```javascript
document.cookie = "test1=hello";
```

B  Cookie

```javascript
var allCookie = document.cookie;
```

 Cookie  iframe LocalStorage  IndexedDB  PostMessage API

 Cookie  Cookie `example.com`

```http
Set-Cookie: key=value; domain=example.com; path=/
```

 Cookie

## iframe 

`iframe``iframe``window``iframe` DOM

`iframe`

```javascript
document
.getElementById("myIFrame")
.contentWindow
.document
// Uncaught DOMException: Blocked a frame from accessing a cross-origin frame.
```

 DOM

 DOM 

```javascript
window.parent.document.body
// 
```

`iframe``window.open`

`document.domain` DOM



> - fragment identifier
> - APICross-document messaging

### 

fragment identifierURL `#``http://example.com/x.html#fragment``#fragment`



```javascript
var src = originURL + '#' + data;
document.getElementById('myIFrame').src = src;
```

 iframe 

`hashchange`

```javascript
window.onhashchange = checkMessage;

function checkMessage() {
  var message = window.location.hash;
  // ...
}
```



```javascript
parent.location.href = target + '#' + hash;
```

### window.postMessage()

HTML5 API APICross-document messaging

 API `window``window.postMessage``aaa.com``bbb.com``postMessage`

```javascript
// 
var popup = window.open('http://bbb.com', 'title');
// 
popup.postMessage('Hello World!', 'http://bbb.com');
```

`postMessage`origin“ +  + ”`*`



```javascript
// 
window.opener.postMessage('Nice to see you', 'http://aaa.com');
```

`message`

```javascript
// 
//  message 
window.addEventListener('message', function (e) {
  console.log(e.data);
},false);
```

`message``event`

> - `event.source`
> - `event.origin`: origin
> - `event.data`: 

`event.source`

```javascript
window.addEventListener('message', receiveMessage);
function receiveMessage(event) {
  event.source.postMessage('Nice to see you!', '*');
}
```

`receiveMessage``postMessage`

`event.origin`

```javascript
window.addEventListener('message', receiveMessage);
function receiveMessage(event) {
  if (event.origin !== 'http://aaa.com') return;
  if (event.data === 'Hello World') {
    event.source.postMessage('Hello', event.origin);
  } else {
    console.log(event.data);
  }
}
```

### LocalStorage

`window.postMessage` LocalStorage 

 iframe `localStorage`

```javascript
window.onmessage = function(e) {
  if (e.origin !== 'http://bbb.com') {
    return;
  }
  var payload = JSON.parse(e.data);
  localStorage.setItem(payload.key, JSON.stringify(payload.data));
};
```

 LocalStorage



```javascript
var win = document.getElementsByTagName('iframe')[0].contentWindow;
var obj = { name: 'Jack' };
win.postMessage(
  JSON.stringify({key: 'storage', data: obj}),
  'http://bbb.com'
);
```



```javascript
window.onmessage = function(e) {
  if (e.origin !== 'http://bbb.com') return;
  var payload = JSON.parse(e.data);
  switch (payload.method) {
    case 'set':
      localStorage.setItem(payload.key, JSON.stringify(payload.data));
      break;
    case 'get':
      var parent = window.parent;
      var data = localStorage.getItem(payload.key);
      parent.postMessage(data, 'http://aaa.com');
      break;
    case 'remove':
      localStorage.removeItem(payload.key);
      break;
  }
};
```



```javascript
var win = document.getElementsByTagName('iframe')[0].contentWindow;
var obj = { name: 'Jack' };
// 
win.postMessage(
  JSON.stringify({key: 'storage', method: 'set', data: obj}),
  'http://bbb.com'
);
// 
win.postMessage(
  JSON.stringify({key: 'storage', method: "get"}),
  "*"
);
window.onmessage = function(e) {
  if (e.origin != 'http://aaa.com') return;
  console.log(JSON.parse(e.data).name);
};
```

## AJAX

AJAX 



> - JSONP
> - WebSocket
> - CORS

### JSONP

JSONP 



`<script>`

```html
<script src="http://api.foo.com?callback=bar"></script>
```

`callback``?callback=bar``bar`

 JSON `bar({...})`

`<script>``bar()` JSON 

`<script>`

```javascript
function addScriptTag(src) {
  var script = document.createElement('script');
  script.setAttribute('type', 'text/javascript');
  script.src = src;
  document.body.appendChild(script);
}

window.onload = function () {
  addScriptTag('http://example.com/ip?callback=foo');
}

function foo(data) {
  console.log('Your public IP address is: ' + data.ip);
};
```

`<script>``example.com``callback` JSONP 



```javascript
foo({
  'ip': '8.8.8.8'
});
```

`<script>``foo` JSON  JavaScript `JSON.parse`

### WebSocket

WebSocket `ws://``wss://`

 WebSocket [](https://en.wikipedia.org/wiki/WebSocket)

```http
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: x3JJHMbDL1EzLkh9GBhXDw==
Sec-WebSocket-Protocol: chat, superchat
Sec-WebSocket-Version: 13
Origin: http://example.com
```

`Origin`origin

`Origin` WebSocket 

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: HSmrc0sMlYUkAGmm5OPpG2HaGWk=
Sec-WebSocket-Protocol: chat
```

### CORS

CORS Cross-Origin Resource Sharing W3C  AJAX  JSONP `GET`CORS 

 CORS  AJAX 

## 

- Mozilla Developer Network, [Window.postMessage](https://developer.mozilla.org/en-US/docs/Web/API/window.postMessage)
- Jakub Jankiewicz, [Cross-Domain LocalStorage](http://jcubic.wordpress.com/2014/06/20/cross-domain-localstorage/)
- David Baron, [setTimeout with a shorter delay](http://dbaron.org/log/20100309-faster-timeouts):  window.postMessage 0
