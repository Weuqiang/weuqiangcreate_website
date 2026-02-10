# a 

`<a>``Node``Element``HTMLElement``HTMLAnchorElement``HTMLHyperlinkElementUtils`

## 

### URL 

`<a>` URL `Location`

- hash`#`
- host80443
- hostname
- href URL
- origin
- password
- pathname`/`
- port
- protocol`:`
- search`?`
- username

```javascript
// HTML 
// <a id="test" href="http://user:passwd@example.com:8081/index.html?bar=1#foo">test</a>
var a = document.getElementById('test');
a.hash // "#foo"
a.host // "example.com:8081"
a.hostname // "example.com"
a.href // "http://user:passed@example.com:8081/index.html?bar=1#foo"
a.origin // "http://example.com:8081"
a.password // "passwd"
a.pathname // "/index.html"
a.port // "8081"
a.protocol // "http:"
a.search // "?bar=1"
a.username // "user"
```

`origin`

### accessKey 

`accessKey``<a>`

```javascript
// HTML 
// <a id="test" href="http://example.com">test</a>
var a = document.getElementById('test');
a.accessKey = 'k';
```

`<a>``k``example.com`

[](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey)Chrome  Linux `Alt + k``example.com`

### download 

`download`

```javascript
// HTML 
// <a id="test" href="foo.jpg"></a>
var a = document.getElementById('test');
a.download = 'bar.jpg';
```

`<a>``download``bar.jpg`

### hreflang 

`hreflang``<a>` HTML `hreflang``hreflang="en"`

```javascript
// HTML 
// <a id="test" href="https://example.com" hreflang="en">test</a>
var a = document.getElementById('test');
a.hreflang // "en"
```

### referrerPolicy 

`referrerPolicy``<a>` HTML `referrerPolicy` HTTP `referer`

HTTP `referer``<a>``referrerPolicy`

- `no-referrer``referer`
- `origin``referer``<a>``origin` +  + 
- `unsafe-url``referer``origin``#`

```javascript
// HTML 
// <a id="test" href="https://example.com" referrerpolicy="no-referrer">test</a>
var a = document.getElementById('test');
a.referrerPolicy // "no-referrer"
```

### rel 

`rel``<a>` HTML `rel`

```javascript
// HTML 
// <a id="test" href="https://example.com" rel="license">license.html</a>
var a = document.getElementById('test');
a.rel // "license"
```

### tabIndex 

`tabIndex``<a>` Tab 

```javascript
// HTML 
// <a id="test" href="https://example.com">test</a>
var a = document.getElementById('test');
a.tabIndex // 0
```

### target 

`target``<a>` HTML `target`

```javascript
// HTML 
// <a id="test" href="https://example.com" target="_blank">test</a>
var a = document.getElementById('test');
a.target // "_blank"
```

### text 

`text``<a>``textContent`

```javascript
// HTML 
// <a id="test" href="https://example.com">test</a>
var a = document.getElementById('test');
a.text // "test"
```

### type 

`type``<a>` HTML `type` MIME 

```javascript
// HTML 
// <a id="test" type="video/mp4" href="example.mp4">video</a>
var a = document.getElementById('test');
a.type // "video/mp4"
```

## 

`<a>`

- `blur()``HTMLElement`
- `focus()``HTMLElement`
- `toString()``<a>` HTML `href`
