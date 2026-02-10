# Location URL URLSearchParams 

URL  URL

## Location 

`Location` URL `window.location``document.location`

### 

`Location`

- `Location.href` URL
- `Location.protocol` URL `:`
- `Location.host``80``433``:`
- `Location.hostname`
- `Location.port`
- `Location.pathname`URL `/`
- `Location.search``?`
- `Location.hash``#`
- `Location.username`
- `Location.password`
- `Location.origin`URL 

```javascript
// 
// http://user:passwd@www.example.com:4097/path/a.html?x=111#part1
document.location.href
// "http://user:passwd@www.example.com:4097/path/a.html?x=111#part1"
document.location.protocol
// "http:"
document.location.host
// "www.example.com:4097"
document.location.hostname
// "www.example.com"
document.location.port
// "4097"
document.location.pathname
// "/path/a.html"
document.location.search
// "?x=111"
document.location.hash
// "#part1"
document.location.username
// "user"
document.location.password
// "passwd"
document.location.origin
// "http://user:passwd@www.example.com:4097"
```

`origin`

`Location.href` URL 

```javascript
// 
document.location.href = 'http://www.example.com';
```



```javascript
document.location.href = '#top';
// 
document.location.hash = '#top';
```

`location``href`

```javascript
document.location = 'http://www.example.com';
// 
document.location.href = 'http://www.example.com';
```

`Location.href``Location.href``Location`

### 

**1Location.assign()**

`assign` URL  URL URL 

```javascript
// 
document.location.assign('http://www.example.com')
```

**2Location.replace()**

`replace` URL  URL URL 

`assign``replace``History` URL  URL

```javascript
// 
document.location.replace('http://www.example.com')
```

**3Location.reload()**

`reload`

`true``scrollTop === 0``false`

```javascript
// 
window.location.reload(true);
```

**4Location.toString()**

`toString` URL `Location.href`

## URL 

 URL 

- URL `;``,``/``?``:`at`@``&``=``+``$``#`
- `a-z``A-Z``0-9``-``_``.``!``~``*``'``()`

 URL `%`

UTF-8 `http://www.example.com/q=` URL “” URL `http://www.example.com/q=%E6%98%A5%E8%8A%82`“”`%E6%98%A5`“”`%E8%8A%82`“”“” UTF-8 `E6 98 A5``E8 8A 82` URL 

JavaScript  URL /

- `encodeURI()`
- `encodeURIComponent()`
- `decodeURI()`
- `decodeURIComponent()`

### encodeURI()

`encodeURI()` URL URL

```javascript
encodeURI('http://www.example.com/q=')
// "http://www.example.com/q=%E6%98%A5%E8%8A%82"
```

### encodeURIComponent()

`encodeURIComponent()` URL  URL URL 

```javascript
encodeURIComponent('')
// "%E6%98%A5%E8%8A%82"
encodeURIComponent('http://www.example.com/q=')
// "http%3A%2F%2Fwww.example.com%2Fq%3D%E6%98%A5%E8%8A%82"
```

`encodeURIComponent()` URL  URL 

### decodeURI()

`decodeURI()` URL `encodeURI()` URL

```javascript
decodeURI('http://www.example.com/q=%E6%98%A5%E8%8A%82')
// "http://www.example.com/q="
```

### decodeURIComponent()

`decodeURIComponent()`URL `encodeURIComponent()` URL 

```javascript
decodeURIComponent('%E6%98%A5%E8%8A%82')
// ""
```

## URL 

`URL()` URL`window.URL`

### 

`URL()` URL  URL  URL

```javascript
var url = new URL('http://www.example.com/index.html');
url.href
// "http://www.example.com/index.html"
```

 URL 

`URL()` URL `URL()``href`

 URL 

```javascript
var url1 = new URL('index.html', 'http://example.com');
url1.href
// "http://example.com/index.html"

var url2 = new URL('page2.html', 'http://example.com/page1.html');
url2.href
// "http://example.com/page2.html"

var url3 = new URL('..', 'http://example.com/a/b.html')
url3.href
// "http://example.com/"
```

 URL `..`

### 

URL `Location` URL 

- URL.href URL
- URL.protocol`:`
- URL.hostname
- URL.host`:`80443
- URL.port
- URL.origin
- URL.pathname`/`
- URL.search`?`
- URL.searchParams`URLSearchParams``Location`
- URL.hash`#`
- URL.password
- URL.username

```javascript
var url = new URL('http://user:passwd@www.example.com:4097/path/a.html?x=111#part1');

url.href
// "http://user:passwd@www.example.com:4097/path/a.html?x=111#part1"
url.protocol
// "http:"
url.hostname
// "www.example.com"
url.host
// "www.example.com:4097"
url.port
// "4097"
url.origin
// "http://www.example.com:4097"
url.pathname
// "/path/a.html"
url.search
// "?x=111"
url.searchParams
// URLSearchParams {}
url.hash
// "#part1"
url.password
// "passwd"
url.username
// "user"
```

`origin`

```javascript
var url = new URL('http://example.com/index.html#part1');

url.pathname = 'index2.html';
url.href // "http://example.com/index2.html#part1"

url.hash = '#part2';
url.href // "http://example.com/index2.html#part2"
```

 URL `pathname``hash` URL 

### 

**1URL.createObjectURL()**

`URL.createObjectURL()`/ URL `File``Blob` URL

```javascript
// HTML 
// <div id="display"/>
// <input
//   type="file"
//   id="fileElem"
//   multiple
//   accept="image/*"
//   onchange="handleFiles(this.files)"
//  >
var div = document.getElementById('display');

function handleFiles(files) {
  for (var i = 0; i < files.length; i++) {
    var img = document.createElement('img');
    img.src = window.URL.createObjectURL(files[i]);
    div.appendChild(img);
  }
}
```

`URL.createObjectURL()` URL `<img>`

 URL 

```javascript
blob:http://localhost/c745ef73-ece9-46da-8f66-ebes574789b1
```

`URL.createObjectURL()` URL  URL `URL.revokeObjectURL()`

**2URL.revokeObjectURL()**

`URL.revokeObjectURL()``URL.createObjectURL()` URL `URL.createObjectURL()` URL 

`URL.revokeObjectURL()`

```javascript
var div = document.getElementById('display');

function handleFiles(files) {
  for (var i = 0; i < files.length; i++) {
    var img = document.createElement('img');
    img.src = window.URL.createObjectURL(files[i]);
    div.appendChild(img);
    img.onload = function() {
      window.URL.revokeObjectURL(this.src);
    }
  }
}
```

 URL `img.onload``URL.revokeObjectURL()` URL 

## URLSearchParams 

### 

`URLSearchParams` URL  URL 

`?`

```javascript
// 
var params = new URLSearchParams('?foo=1&bar=2');
// 
var params = new URLSearchParams(document.location.search);

// 
var params = new URLSearchParams([['foo', 1], ['bar', 2]]);

// 
var params = new URLSearchParams({'foo' : 1 , 'bar' : 2});
```

`URLSearchParams`

```javascript
var params = new URLSearchParams({'foo': ''});
params.toString() // "foo=%E4%BD%A0%E5%A5%BD"
```

`foo``URLSearchParams` URL 

`URLSearchParams`

```javascript
const params = new URLSearchParams({foo: 1, bar: 2});
fetch('https://example.com/api', {
  method: 'POST',
  body: params
}).then(...)
```

`fetch``URLSearchParams`

`URLSearchParams``URL()`

```javascript
var url = new URL(window.location);
var foo = url.searchParams.get('foo') || 'somedefault';
```

URL `searchParams``URLSearchParams``URLSearchParams``get`

`URLSearchParams``for...of`ES6 Iterator

```javascript
var params = new URLSearchParams({'foo': 1 , 'bar': 2});

for (var p of params) {
  console.log(p[0] + ': ' + p[1]);
}
// foo: 1
// bar: 2
```

`URLSearchParams`

### URLSearchParams.toString()

`toString`

```javascript
var url = new URL('https://example.com?foo=1&bar=2');
var params = new URLSearchParams(url.search);

params.toString() // "foo=1&bar=2'
```

`toString`

```javascript
var params = new URLSearchParams({version: 2.0});
window.location.href = location.pathname + '?' + params;
```

`location.href``params``toString`

### URLSearchParams.append()

`append()`

```javascript
var params = new URLSearchParams({'foo': 1 , 'bar': 2});
params.append('baz', 3);
params.toString() // "foo=1&bar=2&baz=3"
```

`append()`

```javascript
var params = new URLSearchParams({'foo': 1 , 'bar': 2});
params.append('foo', 3);
params.toString() // "foo=1&bar=2&foo=3"
```

`foo``append`

### URLSearchParams.delete()

`delete()`

```javascript
var params = new URLSearchParams({'foo': 1 , 'bar': 2});
params.delete('bar');
params.toString() // "foo=1"
```

### URLSearchParams.has()

`has()`

```javascript
var params = new URLSearchParams({'foo': 1 , 'bar': 2});
params.has('bar') // true
params.has('baz') // false
```

### URLSearchParams.set()

`set()`



```javascript
var params = new URLSearchParams('?foo=1');
params.set('foo', 2);
params.toString() // "foo=2"
params.set('bar', 3);
params.toString() // "foo=2&bar=3"
```

`foo``bar`

`set`

```javascript
var params = new URLSearchParams('?foo=1&foo=2');
params.set('foo', 3);
params.toString() // "foo=3"
```

 URL 

```javascript
// URL: https://example.com?version=1.0
var params = new URLSearchParams(location.search.slice(1));
params.set('version', '2.0');

window.history.replaceState({}, '', location.pathname + `?` + params);
// URL: https://example.com?version=2.0
```

### URLSearchParams.get()URLSearchParams.getAll()

`get()`

```javascript
var params = new URLSearchParams('?foo=1');
params.get('foo') // "1"
params.get('bar') // null
```

`null`

`get`

```javascript
var params = new URLSearchParams('?foo=3&foo=2&foo=1');
params.get('foo') // "3"
```

`foo``get``3`

`getAll()`

```javascript
var params = new URLSearchParams('?foo=1&foo=2');
params.getAll('foo') // ["1", "2"]
```

`foo``getAll`

### URLSearchParams.sort()

`sort()` Unicode 

`undefined`

```javascript
var params = new URLSearchParams('c=4&a=2&b=3&a=1');
params.sort();
params.toString() // "a=2&a=1&b=3&c=4"
```

`a`

### URLSearchParams.keys()URLSearchParams.values()URLSearchParams.entries()

`for...of``keys``values``entries`

```javascript
var params = new URLSearchParams('a=1&b=2');

for(var p of params.keys()) {
  console.log(p);
}
// a
// b

for(var p of params.values()) {
  console.log(p);
}
// 1
// 2

for(var p of params.entries()) {
  console.log(p);
}
// ["a", "1"]
// ["b", "2"]
```

`URLSearchParams``entries`

```javascript
for (var p of params) {}
// 
for (var p of params.entries()) {}
```

## 

- [Location](https://developer.mozilla.org/en-US/docs/Web/API/Location), by MDN
- [URL](https://developer.mozilla.org/en-US/docs/Web/API/URL), by MDN
- [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams), by MDN
- [Easy URL Manipulation with URLSearchParams](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en), by Eric Bidelman
