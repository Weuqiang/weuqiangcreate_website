# 

## 

### 



```javascript
'abc'
"abc"
```



```javascript
'key = "value"'
"It's a long journey"
```





```javascript
'Did she say \'Hello\'?'
// "Did she say 'Hello'?"

"Did she say \"Hello\"?"
// "Did she say "Hello"?"
```

 HTML  JavaScript 



```javascript
'a
b
c'
// SyntaxError: Unexpected token ILLEGAL
```

JavaScript 



```javascript
var longString = 'Long \
long \
long \
string';

longString
// "Long long long string"
```



`+`

```javascript
var longString = 'Long '
  + 'long '
  + 'long '
  + 'string';
```



```javascript
(function () { /*
line 1
line 2
line 3
*/}).toString().split('\n').slice(1, -1).join('\n')
// "line 1
// line 2
// line 3"
```



### 

\



- `\0` null`\u0000`
- `\b` `\u0008`
- `\f` `\u000C`
- `\n` `\u000A`
- `\r` `\u000D`
- `\t` `\u0009`
- `\v` `\u000B`
- `\'` `\u0027`
- `\"` `\u0022`
- `\\` `\u005C`



```javascript
console.log('1\n2')
// 1
// 2
```

`\n`



1`\HHH`

`000``377``HHH` Unicode `\251`256

2`\xHH`

`\x``00``FF``HH` Unicode `\xA9`256

3`\uXXXX`

`\u``0000``FFFF``XXXX` Unicode `\u00A9`



```javascript
'\251' // "©"
'\xA9' // "©"
'\u00A9' // "©"

'\172' === 'z' // true
'\x7A' === 'z' // true
'\u007A' === 'z' // true
```



```javascript
'\a'
// "a"
```

`a`



```javascript
"Prev \\ Next"
// "Prev \ Next"
```

### 

0

```javascript
var s = 'hello';
s[0] // "h"
s[1] // "e"
s[4] // "o"

// 
'hello'[1] // "e"
```

`undefined`

```javascript
'abc'[3] // undefined
'abc'[-1] // undefined
'abc'['x'] // undefined
```



```javascript
var s = 'hello';

delete s[0];
s // "hello"

s[1] = 'a';
s // "hello"

s[5] = '!';
s // "hello"
```



### length 

`length`

```javascript
var s = 'hello';
s.length // 5

s.length = 3;
s.length // 5

s.length = 7;
s.length // 5
```

`length`

## 

JavaScript  Unicode JavaScript  Unicode 

JavaScript  Unicode  Unicode `\uxxxx``xxxx` Unicode `\u00A9`

```javascript
var s = '\u00A9';
s // "©"
```

JavaScript  Unicode 

```javascript
var f\u006F\u006F = 'abc';
foo // "abc"
```

`foo` Unicode JavaScript 

 JavaScript 162 UTF-16 JavaScript 162

UTF-16 `U+0000``U+FFFF`162`U+10000``U+10FFFF`324`0xD800``0xDBFF``0xDC00``0xDFFF``U+1D306``` UTF-16 `0xD834 0xDF06`

JavaScript  UTF-16  JavaScript Unicode `U+FFFF`Unicode JavaScript `` JavaScript 

```javascript
''.length // 2
```

JavaScript ``21

`U+10000``U+10FFFF`JavaScript `length`2JavaScript 

## Base64 

 ASCII 031 Base64  Base64 

 Base64  09AZa-z`+``/`64

JavaScript  Base64 

- `btoa()` Base64 
- `atob()`Base64 

```javascript
var string = 'Hello World!';
btoa(string) // "SGVsbG8gV29ybGQh"
atob('SGVsbG8gV29ybGQh') // "Hello World!"
```

 ASCII 

```javascript
btoa('') // 
```

 ASCII  Base64 

```javascript
function b64Encode(str) {
  return btoa(encodeURIComponent(str));
}

function b64Decode(str) {
  return decodeURIComponent(atob(str));
}

b64Encode('') // "JUU0JUJEJUEwJUU1JUE1JUJE"
b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // ""
```

## 

- Mathias Bynens, [JavaScript’s internal character encoding: UCS-2 or UTF-16?](http://mathiasbynens.be/notes/javascript-encoding)
- Mathias Bynens, [JavaScript has a Unicode problem](http://mathiasbynens.be/notes/javascript-unicode)
- Mozilla Developer Network, [Window.btoa](https://developer.mozilla.org/en-US/docs/Web/API/Window.btoa)
