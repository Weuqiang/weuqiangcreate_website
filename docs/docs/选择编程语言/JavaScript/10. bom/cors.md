# CORS 

CORS  W3C “”Cross-origin resource sharing“”`XMLHttpRequest` AJAX 

## 

CORS 

 CORS CORS  AJAX  AJAX  CORS  CORS 

## 

CORS simple requestnot-so-simple request



1

> - HEAD
> - GET
> - POST

2HTTP 

> - Accept
> - Accept-Language
> - Content-Language
> - Last-Event-ID
> - Content-Type`application/x-www-form-urlencoded``multipart/form-data``text/plain`

 HTTP  HTTP 

 CORS 

## 

### 

 CORS `Origin`

 AJAX `Origin`

```http
GET /cors HTTP/1.1
Origin: http://api.bob.com
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
```

`Origin` +  + 

`Origin` HTTP `Access-Control-Allow-Origin``XMLHttpRequest``onerror` HTTP 200

`Origin`

```http
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Credentials: true
Access-Control-Expose-Headers: FooBar
Content-Type: text/html; charset=utf-8
```

 CORS `Access-Control-`

**1`Access-Control-Allow-Origin`**

`Origin``*`

**2`Access-Control-Allow-Credentials`**

 CookieCookie  CORS `true` Cookie `true` Cookie

**3`Access-Control-Expose-Headers`**

CORS `XMLHttpRequest``getResponseHeader()`6`Cache-Control``Content-Language``Content-Type``Expires``Last-Modified``Pragma``Access-Control-Expose-Headers``getResponseHeader('FooBar')``FooBar`

### withCredentials 

CORS  Cookie  HTTP  CSRF  Cookie`Access-Control-Allow-Credentials` Cookie

```http
Access-Control-Allow-Credentials: true
```

 AJAX `withCredentials`

```javascript
var xhr = new XMLHttpRequest();
xhr.withCredentials = true;
```

 Cookie Cookie

`withCredentials``true``withCredentials` Cookie`withCredentials`

```javascript
xhr.withCredentials = false;
```

 Cookie`Access-Control-Allow-Origin`Cookie  Cookie  Cookie `document.cookie` Cookie

## 

### 

`PUT``DELETE``Content-Type``application/json`

 CORS  HTTP “”preflight HTTP `XMLHttpRequest` CORS `DELETE``PUT`

 JavaScript 

```javascript
var url = 'http://api.alice.com/cors';
var xhr = new XMLHttpRequest();
xhr.open('PUT', url, true);
xhr.setRequestHeader('X-Custom-Header', 'value');
xhr.send();
```

HTTP `PUT``X-Custom-Header`

“”“” HTTP 

```http
OPTIONS /cors HTTP/1.1
Origin: http://api.bob.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: X-Custom-Header
Host: api.alice.com
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
```

“”`OPTIONS``Origin`

`Origin`“”

**1`Access-Control-Request-Method`**

 CORS  HTTP `PUT`

**2`Access-Control-Request-Headers`**

 CORS `X-Custom-Header`

### 

“”`Origin``Access-Control-Request-Method``Access-Control-Request-Headers`

```http
HTTP/1.1 200 OK
Date: Mon, 01 Dec 2008 01:15:39 GMT
Server: Apache/2.0.61 (Unix)
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: X-Custom-Header
Content-Type: text/html; charset=utf-8
Content-Encoding: gzip
Content-Length: 0
Keep-Alive: timeout=2, max=100
Connection: Keep-Alive
```

 HTTP `Access-Control-Allow-Origin``http://api.bob.com`

```http
Access-Control-Allow-Origin: *
```

“” HTTP  CORS 

```http
OPTIONS http://api.bob.com HTTP/1.1
Status: 200
Access-Control-Allow-Origin: https://notyourdomain.com
Access-Control-Allow-Method: POST
```

`Access-Control-Allow-Origin``http://api.bob.com`

`XMLHttpRequest``onerror`

```bash
XMLHttpRequest cannot load http://api.alice.com.
Origin http://api.bob.com is not allowed by Access-Control-Allow-Origin.
```

 CORS 

```http
Access-Control-Allow-Methods: GET, POST, PUT
Access-Control-Allow-Headers: X-Custom-Header
Access-Control-Allow-Credentials: true
Access-Control-Max-Age: 1728000
```

**1`Access-Control-Allow-Methods`**

“”

**2`Access-Control-Allow-Headers`**

`Access-Control-Request-Headers``Access-Control-Allow-Headers`“”

**3`Access-Control-Allow-Credentials`**



**4`Access-Control-Max-Age`**

201728000172800020

### 

“” CORS `Origin``Access-Control-Allow-Origin`

“” CORS 

```http
PUT /cors HTTP/1.1
Origin: http://api.bob.com
Host: api.alice.com
X-Custom-Header: value
Accept-Language: en-US
Connection: keep-alive
User-Agent: Mozilla/5.0...
```

`Origin`



```http
Access-Control-Allow-Origin: http://api.bob.com
Content-Type: text/html; charset=utf-8
```

`Access-Control-Allow-Origin`

##  JSONP 

CORS  JSONP  JSONP JSONP `GET`CORS  HTTP JSONP  CORS 

## 

- [Using CORS](http://www.html5rocks.com/en/tutorials/cors/), Monsur Hossain
- [HTTP access control (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS), MDN
- [CORS](https://frontendian.co/cors), Ryan Miller
- [Do You Really Know CORS?](http://performantcode.com/web/do-you-really-know-cors), Grzegorz Mirek
