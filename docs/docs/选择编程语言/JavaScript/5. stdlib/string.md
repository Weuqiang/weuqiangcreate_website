# String 

## 

`String` JavaScript 

```javascript
var s1 = 'abc';
var s2 = new String('abc');

typeof s1 // "string"
typeof s2 // "object"

s2.valueOf() // "abc"
```

`s1``s2``s2``s2.valueOf`



```javascript
new String('abc')
// String {0: "a", 1: "b", 2: "c", length: 3}

(new String('abc'))[1] // "b"
```

`abc``0``1``2``length`

`String`

```javascript
String(true) // "true"
String(5) // "5"
```

`true``5`

## 

### String.fromCharCode()

`String``String.fromCharCode()` Unicode 

```javascript
String.fromCharCode() // ""
String.fromCharCode(97) // "a"
String.fromCharCode(104, 101, 108, 108, 111)
// "hello"
```

`String.fromCharCode` Unicode 

 Unicode `0xFFFF``0xFFFF` 65535

```javascript
String.fromCharCode(0x20BB7)
// "ஷ"
String.fromCharCode(0x20BB7) === String.fromCharCode(0x0BB7)
// true
```

`String.fromCharCode``0x20BB7``0xFFFF``0x20BB7``𠮷``0x0BB7``String.fromCharCode``0xFFFF``0x20BB7``2`

`0xFFFF` JavaScript `0x20BB7`

```javascript
String.fromCharCode(0xD842, 0xDFB7)
// "𠮷"
```

`0x20BB7``0xD842``0xDFB7``0xFFFF` UTF-16 

## 

### String.prototype.length

`length`

```javascript
'abc'.length // 3
```

## 

### String.prototype.charAt()

`charAt``0`

```javascript
var s = new String('abc');

s.charAt(1) // "b"
s.charAt(s.length - 1) // "c"
```



```javascript
'abc'.charAt(1) // "b"
'abc'[1] // "b"
```

`charAt`

```javascript
'abc'.charAt(-1) // ""
'abc'.charAt(3) // ""
```

### String.prototype.charCodeAt()

`charCodeAt()` Unicode `String.fromCharCode()`

```javascript
'abc'.charCodeAt(1) // 98
```

`abc``1``b` Unicode `98`

`charCodeAt` Unicode 

```javascript
'abc'.charCodeAt() // 97
```

`charCodeAt``NaN`

```javascript
'abc'.charCodeAt(-1) // NaN
'abc'.charCodeAt(4) // NaN
```

`charCodeAt` Unicode 655360xFFFF 65536 `charCodeAt``charCodeAt(i)``charCodeAt(i+1)`

### String.prototype.concat()

`concat`

```javascript
var s1 = 'abc';
var s2 = 'def';

s1.concat(s2) // "abcdef"
s1 // "abc"
```



```javascript
'a'.concat('b', 'c') // "abc"
```

`concat`

```javascript
var one = 1;
var two = 2;
var three = '3';

''.concat(one, two, three) // "123"
one + two + three // "33"
```

`concat`

### String.prototype.slice()

`slice()`

```javascript
'JavaScript'.slice(0, 4) // "Java"
```



```javascript
'JavaScript'.slice(4) // "Script"
```



```javascript
'JavaScript'.slice(-6) // "Script"
'JavaScript'.slice(0, -6) // "Java"
'JavaScript'.slice(-2, -1) // "p"
```

`slice()`

```javascript
'JavaScript'.slice(2, 1) // ""
```

### String.prototype.substring()

`substring``slice`

```javascript
'JavaScript'.substring(0, 4) // "Java"
```



```javascript
'JavaScript'.substring(4) // "Script"
```

`substring`

```javascript
'JavaScript'.substring(10, 4) // "Script"
// 
'JavaScript'.substring(4, 10) // "Script"
```

`substring`

`substring`0

```javascript
'JavaScript'.substring(-3) // "JavaScript"
'JavaScript'.substring(4, -3) // "Java"
```

`-3``0``'JavaScript'.substring(4, 0)``Java`

`substring``slice`

### String.prototype.substr()

`substr``slice``substring`

`substr`0

```javascript
'JavaScript'.substr(4, 6) // "Script"
```



```javascript
'JavaScript'.substr(4) // "Script"
```

0

```javascript
'JavaScript'.substr(-6) // "Script"
'JavaScript'.substr(4, -1) // ""
```

`-1``0``0`

### String.prototype.indexOf()String.prototype.lastIndexOf()

`indexOf``-1`

```javascript
'hello world'.indexOf('o') // 4
'JavaScript'.indexOf('script') // -1
```

`indexOf`

```javascript
'hello world'.indexOf('o', 6) // 7
```

`lastIndexOf``indexOf``lastIndexOf``indexOf`

```javascript
'hello world'.lastIndexOf('o') // 7
```

`lastIndexOf`

```javascript
'hello world'.lastIndexOf('o', 6) // 4
```

### String.prototype.trim()

`trim`

```javascript
'  hello world  '.trim()
// "hello world"
```

`\t``\v``\n``\r`

```javascript
'\r\nabc \t'.trim() // 'abc'
```

### String.prototype.toLowerCase()String.prototype.toUpperCase()

`toLowerCase``toUpperCase`

```javascript
'Hello World'.toLowerCase()
// "hello world"

'Hello World'.toUpperCase()
// "HELLO WORLD"
```

### String.prototype.match()

`match``null`

```javascript
'cat, bat, sat, fat'.match('at') // ["at"]
'cat, bat, sat, fat'.match('xt') // null
```

`index``input`

```javascript
var matches = 'cat, bat, sat, fat'.match('at');
matches.index // 1
matches.input // "cat, bat, sat, fat"
```

`match`

### String.prototype.search()String.prototype.replace()

`search``match``-1`

```javascript
'cat, bat, sat, fat'.search('at') // 1
```

`search`

`replace``g`

```javascript
'aaa'.replace('a', 'b') // "baa"
```

`replace`

### String.prototype.split()

`split`

```javascript
'a|b|c'.split('|') // ["a", "b", "c"]
```



```javascript
'a|b|c'.split('') // ["a", "|", "b", "|", "c"]
```



```javascript
'a|b|c'.split() // ["a|b|c"]
```



```javascript
'a||c'.split('|') // ['a', '', 'c']
```



```javascript
'|b|c'.split('|') // ["", "b", "c"]
'a|b|'.split('|') // ["a", "b", ""]
```

`split`

```javascript
'a|b|c'.split('|', 0) // []
'a|b|c'.split('|', 1) // ["a"]
'a|b|c'.split('|', 2) // ["a", "b"]
'a|b|c'.split('|', 3) // ["a", "b", "c"]
'a|b|c'.split('|', 4) // ["a", "b", "c"]
```

`split`

`split`

### String.prototype.localeCompare()

`localeCompare`000

```javascript
'apple'.localeCompare('banana') // -1
'apple'.localeCompare('apple') // 0
```



```javascript
'B' > 'a' // false
```

`B``a` JavaScript  Unicode `B`66`a`97

`localeCompare``B``a`

```javascript
'B'.localeCompare('a') // 1
```

`localeCompare`1`B`

`localeCompare`

```javascript
'ä'.localeCompare('z', 'de') // -1
'ä'.localeCompare('z', 'sv') // 1
```

`de``sv``ä``z``-1``ä``z``1`

## 

- Ariya Hidayat, [JavaScript String: substring, substr, slice](http://ariya.ofilabs.com/2014/02/javascript-string-substring-substr-slice.html)
