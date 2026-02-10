# XMLHttpRequest 

## 

 HTTP  HTTP 

1999 IE 5.0 JavaScript  HTTP 2004 Gmail 2005 Google Map 20052AJAX  Asynchronous JavaScript and XML  JavaScript  XML AJAX  JavaScript  HTTP  AJAX W3C 2006

AJAX 

1.  XMLHttpRequest 
1.  HTTP 
1. 
1. 

AJAX `XMLHttpRequest` HTTP  JSON XML  AJAX 

`XMLHttpRequest` AJAX `XML``Http``file``ftp`

`XMLHttpRequest``new`

```javascript
var xhr = new XMLHttpRequest();
```

`open()` HTTP 

```javascript
xhr.open('GET', 'http://www.example.com/page.php', true);
```

 GET `true`

`readyState`

```javascript
xhr.onreadystatechange = handleStateChange;

function handleStateChange() {
  // ...
}
```

`XMLHttpRequest``handleStateChange`

`send()`

```javascript
xhr.send(null);
```

`send()``null` POST 

AJAX 

AJAX  HTTP CORS 

`XMLHttpRequest`

```javascript
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
  // 4
  if (xhr.readyState === 4){
    if (xhr.status === 200){
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};

xhr.onerror = function (e) {
  console.error(xhr.statusText);
};

xhr.open('GET', '/endpoint', true);
xhr.send(null);
```

## XMLHttpRequest 

### XMLHttpRequest.readyState

`XMLHttpRequest.readyState`

- 0 XMLHttpRequest `open()`
- 1`open()``send()``setRequestHeader()` HTTP 
- 2`send()`
- 3body `responseType``text``responseText`
- 4

`readyState``readyStateChange`

```javascript
var xhr = new XMLHttpRequest();

if (xhr.readyState === 4) {
  // 
} else {
  // “……”
}
```

`xhr.readyState``4` HTTP  HTTP 

### XMLHttpRequest.onreadystatechange

`XMLHttpRequest.onreadystatechange``readystatechange``readyState`

`abort()` XMLHttpRequest `readyState``XMLHttpRequest.onreadystatechange`



```javascript
var xhr = new XMLHttpRequest();
xhr.open( 'GET', 'http://example.com' , true );
xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4 || xhr.status !== 200) {
    return;
  }
  console.log(xhr.responseText);
};
xhr.send();
```

### XMLHttpRequest.response

`XMLHttpRequest.response` HTTP  body `XMLHttpRequest.responseType`

`null``responseType``text``readyState`3`response`

```javascript
var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    handler(xhr.response);
  }
}
```

### XMLHttpRequest.responseType

`XMLHttpRequest.responseType``open()``send()``responseType``text`

`XMLHttpRequest.responseType`

- ""`text`
- "arraybuffer"ArrayBuffer 
- "blob"Blob 
- "document"Document 
- "json"JSON 
- "text"

`text``document` HTML / XML  CORS  Ajax  HTML  DOM `blob`

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', '/path/to/image.png', true);
xhr.responseType = 'blob';

xhr.onload = function(e) {
  if (this.status === 200) {
    var blob = new Blob([xhr.response], {type: 'image/png'});
    // 
    var blob = xhr.response;
  }
};

xhr.send();
```

`ArrayBuffer`

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', '/path/to/image.png', true);
xhr.responseType = 'arraybuffer';

xhr.onload = function(e) {
  var uInt8Array = new Uint8Array(this.response);
  for (var i = 0, len = uInt8Array.length; i < len; ++i) {
    // var byte = uInt8Array[i];
  }
};

xhr.send();
```

`json``JSON.parse()``xhr.response``xhr.responseText` JSON 

### XMLHttpRequest.responseText

`XMLHttpRequest.responseText` HTTP 

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

xhr.responseType = 'text';
xhr.onload = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseText);
  }
};

xhr.send(null);
```

### XMLHttpRequest.responseXML

`XMLHttpRequest.responseXML` HTML  XML  XML  HTML`null`

 HTTP `Content-Type``text/xml``application/xml``XMLHttpRequest.responseType``document` HTTP `Content-Type``text/xml``application/xml``responseXML` DOM `XMLHttpRequest.overrideMimeType()` XML 

 DOM 

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

xhr.responseType = 'document';
xhr.overrideMimeType('text/xml');

xhr.onload = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    console.log(xhr.responseXML);
  }
};

xhr.send(null);
```

### XMLHttpRequest.responseURL

`XMLHttpRequest.responseURL`

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/test', true);
xhr.onload = function () {
  //  http://example.com/test
  console.log(xhr.responseURL);
};
xhr.send(null);
```

`open()` URL fragment

### XMLHttpRequest.statusXMLHttpRequest.statusText

`XMLHttpRequest.status` HTTP 200200`0`

- 200, OK
- 301, Moved Permanently
- 302, Moved temporarily
- 304, Not Modified
- 307, Temporary Redirect
- 401, Unauthorized
- 403, Forbidden
- 404, Not Found
- 500, Internal Server Error

2xx304

```javascript
if (xhr.readyState === 4) {
  if ( (xhr.status >= 200 && xhr.status < 300)
    || (xhr.status === 304) ) {
    // 
  } else {
    // 
  }
}
```

`XMLHttpRequest.statusText``status`“OK”“Not Found”`open()`“OK”

### XMLHttpRequest.timeoutXMLHttpRequestEventTarget.ontimeout

`XMLHttpRequest.timeout`0

`XMLHttpRequestEventTarget.ontimeout` timeout 



```javascript
var xhr = new XMLHttpRequest();
var url = '/server';

xhr.ontimeout = function () {
  console.error('The request for ' + url + ' timed out.');
};

xhr.onload = function() {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      // 
    } else {
      console.error(xhr.statusText);
    }
  }
};

xhr.open('GET', url, true);
//  10 
xhr.timeout = 10 * 1000;
xhr.send(null);
```

### 

XMLHttpRequest 

- XMLHttpRequest.onloadstartloadstart HTTP 
- XMLHttpRequest.onprogressprogress
- XMLHttpRequest.onabortabort `abort()`
- XMLHttpRequest.onerrorerror 
- XMLHttpRequest.onloadload 
- XMLHttpRequest.ontimeouttimeout 
- XMLHttpRequest.onloadendloadend 



```javascript
xhr.onload = function() {
 var responseText = xhr.responseText;
 console.log(responseText);
 // process the response.
};

xhr.onabort = function () {
  console.log('The request was aborted');
};

xhr.onprogress = function (event) {
  console.log(event.loaded);
  console.log(event.total);
};

xhr.onerror = function() {
  console.log('There was an error!');
};
```

`progress``loaded``total``lengthComputable``progress`

`onerror`

### XMLHttpRequest.withCredentials

`XMLHttpRequest.withCredentials` Cookie  HTTP `false``example.com``example.com` Cookie

 AJAX  Cookie`withCredentials``true`

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://example.com/', true);
xhr.withCredentials = true;
xhr.send(null);
```

`Access-Control-Allow-Credentials`

```javascript
Access-Control-Allow-Credentials: true
```

`withCredentials` Cookie Cookie`withCredentials` AJAX  Cookie

`document.cookie` HTTP  Cookie`withCredentials`

### XMLHttpRequest.upload

XMLHttpRequest  AJAX `XMLHttpRequest.upload`loadstartloadendloadaborterrorprogresstimeout

`<progress>`

```http
<progress min="0" max="100" value="0">0% complete</progress>
```

`upload``progress`

```javascript
function upload(blobOrFile) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/server', true);
  xhr.onload = function (e) {};

  var progressBar = document.querySelector('progress');
  xhr.upload.onprogress = function (e) {
    if (e.lengthComputable) {
      progressBar.value = (e.loaded / e.total) * 100;
      //  <progress> 
      progressBar.textContent = progressBar.value;
    }
  };

  xhr.send(blobOrFile);
}

upload(new Blob(['hello world'], {type: 'text/plain'}));
```

## XMLHttpRequest 

### XMLHttpRequest.open()

`XMLHttpRequest.open()` HTTP  XMLHttpRequest 

```javascript
void open(
   string method,
   string url,
   optional boolean async,
   optional string user,
   optional string password
);
```

- `method` HTTP `GET``POST``PUT``DELETE``HEAD`
- `url`:  URL
- `async`: `true``false``send()` AJAX  Worker `false`
- `user`
- `password`

`open()` AJAX `abort()`

 POST 

```javascript
var xhr = new XMLHttpRequest();
xhr.open('POST', encodeURI('someURL'));
```

### XMLHttpRequest.send()

`XMLHttpRequest.send()` HTTP  HTTP  URL GET  POST 

 GET 

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET',
  'http://www.example.com/?id=' + encodeURIComponent(id),
  true
);
xhr.send(null);
```

`GET` URL 

 POST 

```javascript
var xhr = new XMLHttpRequest();
var data = 'email='
  + encodeURIComponent(email)
  + '&password='
  + encodeURIComponent(password);

xhr.open('POST', 'http://www.example.com', true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send(data);
```

 XMLHttpRequest `send()`

`send`

```javascript
void send();
void send(ArrayBufferView data);
void send(Blob data);
void send(Document data);
void send(String data);
void send(FormData data);
```

`send()` DOM `ArrayBufferView``Blob` Ajax 

`FormData`

```javascript
var formData = new FormData();

formData.append('username', '');
formData.append('email', 'zhangsan@example.com');
formData.append('birthDate', 1940);

var xhr = new XMLHttpRequest();
xhr.open('POST', '/register');
xhr.send(formData);
```

`FormData``send()`

```html
<form id='registration' name='registration' action='/register'>
  <input type='text' name='username' value=''>
  <input type='email' name='email' value='zhangsan@example.com'>
  <input type='number' name='birthDate' value='1940'>
  <input type='submit' onclick='return sendForm(this.form);'>
</form>
```

`FormData`

```javascript
function sendForm(form) {
  var formData = new FormData(form);
  formData.append('csrf', 'e69a18d7db1286040586e6da1950128c');

  var xhr = new XMLHttpRequest();
  xhr.open('POST', form.action, true);
  xhr.onload = function() {
    // ...
  };
  xhr.send(formData);

  return false;
}

var form = document.querySelector('#registration');
sendForm(form);
```

### XMLHttpRequest.setRequestHeader()

`XMLHttpRequest.setRequestHeader()` HTTP `open()``send()`



```javascript
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.setRequestHeader('Content-Length', JSON.stringify(data).length);
xhr.send(JSON.stringify(data));
```

`Content-Type` JSON `Content-Length` JSON 

### XMLHttpRequest.overrideMimeType()

`XMLHttpRequest.overrideMimeType()` MIME  MIME `text/xml` MIME `text/plain`

```javascript
xhr.overrideMimeType('text/plain')
```

`send()`

`responseType``overrideMimeType()`

```javascript
var xhr = new XMLHttpRequest();
xhr.onload = function(e) {
  var arraybuffer = xhr.response;
  // ...
}
xhr.open('GET', url);
xhr.responseType = 'arraybuffer';
xhr.send();
```

### XMLHttpRequest.getResponseHeader()

`XMLHttpRequest.getResponseHeader()` HTTP `null`

```javascript
function getHeaderTime() {
  console.log(this.getResponseHeader("Last-Modified"));
}

var xhr = new XMLHttpRequest();
xhr.open('HEAD', 'yourpage.html');
xhr.onload = getHeaderTime;
xhr.send();
```

“+”

### XMLHttpRequest.getAllResponseHeaders()

`XMLHttpRequest.getAllResponseHeaders()` HTTP `CRLF`+`null`

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'foo.txt', true);
xhr.send();

xhr.onreadystatechange = function () {
  if (this.readyState === 4) {
    var headers = xhr.getAllResponseHeaders();
  }
}
```



```http
date: Fri, 08 Dec 2017 21:04:30 GMT\r\n
content-encoding: gzip\r\n
x-content-type-options: nosniff\r\n
server: meinheld/0.6.1\r\n
x-frame-options: DENY\r\n
content-type: text/html; charset=utf-8\r\n
connection: keep-alive\r\n
strict-transport-security: max-age=63072000\r\n
vary: Cookie, Accept-Encoding\r\n
content-length: 6502\r\n
x-xss-protection: 1; mode=block\r\n
```



```javascript
var arr = headers.trim().split(/[\r\n]+/);
var headerMap = {};

arr.forEach(function (line) {
  var parts = line.split(': ');
  var header = parts.shift();
  var value = parts.join(': ');
  headerMap[header] = value;
});

headerMap['content-length'] // "6502"
```

### XMLHttpRequest.abort()

`XMLHttpRequest.abort()` HTTP `readyState``4``status``0`

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://www.example.com/page.php', true);
setTimeout(function () {
  if (xhr) {
    xhr.abort();
    xhr = null;
  }
}, 5000);
```

5 AJAX 

## XMLHttpRequest 

### readyStateChange 

`readyState` readyStateChange 

`onReadyStateChange``4`

### progress 

XMLHttpRequest `upload``progress`

```javascript
var xhr = new XMLHttpRequest();

function updateProgress (oEvent) {
  if (oEvent.lengthComputable) {
    var percentComplete = oEvent.loaded / oEvent.total;
  } else {
    console.log('');
  }
}

xhr.addEventListener('progress', updateProgress);

xhr.open();
```

### load error abort 

load error abort 

```javascript
var xhr = new XMLHttpRequest();

xhr.addEventListener('load', transferComplete);
xhr.addEventListener('error', transferFailed);
xhr.addEventListener('abort', transferCanceled);

xhr.open();

function transferComplete() {
  console.log('');
}

function transferFailed() {
  console.log('');
}

function transferCanceled() {
  console.log('');
}
```

### loadend 

`abort``load``error``loadend`

```javascript
xhr.addEventListener('loadend', loadEnd);

function loadEnd(e) {
  console.log('');
}
```

### timeout 

 timeout `timeout`

## Navigator.sendBeacon()

`unload``beforeunload``XMLHttpRequest``XMLHttpRequest`

`unload` AJAX 

```javascript
function log() {
  let xhr = new XMLHttpRequest();
  xhr.open('post', '/log', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send('foo=bar');
}

window.addEventListener('unload', function(event) {
  log();

  // a time-consuming operation
  for (let i = 1; i < 10000; i++) {
    for (let m = 1; m < 10000; m++) { continue; }
  }
});
```

`unload` AJAX 

`setTimeout()`

```javascript
// HTML 
// <a id="target" href="https://baidu.com">click</a>
const clickTime = 350;
const theLink = document.getElementById('target');

function log() {
  let xhr = new XMLHttpRequest();
  xhr.open('post', '/log', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.send('foo=bar');
}

theLink.addEventListener('click', function (event) {
  event.preventDefault();
  log();

  setTimeout(function () {
    window.location.href = theLink.getAttribute('href');
  }, clickTime);
});
```

`setTimeout()`350 AJAX 



`Navigator.sendBeacon()`

```javascript
window.addEventListener('unload', logData, false);

function logData() {
  navigator.sendBeacon('/log', JSON.stringify({
    some: "data"
  }));
}
```

`Navigator.sendBeacon()` URL

```javascript
navigator.sendBeacon(url, data)
```

`true``false`

 HTTP  POST



```javascript
// HTML 
// <body onload="analytics('start')" onunload="analytics('end')">

function analytics(state) {
  if (!navigator.sendBeacon) return;

  var URL = 'http://example.com/analytics';
  var data = 'state=' + state + '&location=' + window.location;
  navigator.sendBeacon(URL, data);
}
```

 HTTP “application/json” Blob 

```javascript
const blob = new Blob(
  [ JSON.stringify({ some: "data" }) ],
  { type: 'application/json; charset=UTF-8' }
);
navigator.sendBeacon('/log', blob));
```



