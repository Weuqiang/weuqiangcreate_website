# RegExp 

`RegExp`

## 

regular expression“” Email  Email JavaScript  Perl 5 



```javascript
var regex = /xyz/;
```

`RegExp`

```javascript
var regex = new RegExp('xyz');
```

`xyz`

`RegExp`

```javascript
var regex = new RegExp('xyz', 'i');
// 
var regex = /xyz/i;
```

`/xyz/``i`

## 





- `RegExp.prototype.ignoreCase``i`
- `RegExp.prototype.global``g`
- `RegExp.prototype.multiline``m`
- `RegExp.prototype.flags`



```javascript
var r = /abc/igm;

r.ignoreCase // true
r.global // true
r.multiline // true
r.flags // 'gim'
```



- `RegExp.prototype.lastIndex`
- `RegExp.prototype.source`

```javascript
var r = /abc/igm;

r.lastIndex // 0
r.source // "abc"
```

## 

### RegExp.prototype.test()

`test`

```javascript
/cat/.test('cats and dogs') // true
```

`cat``true`

`g``test`

```javascript
var r = /x/g;
var s = '_x_x';

r.lastIndex // 0
r.test(s) // true

r.lastIndex // 2
r.test(s) // true

r.lastIndex // 4
r.test(s) // false
```

`g``test`

`g``lastIndex`

```javascript
var r = /x/g;
var s = '_x_x';

r.lastIndex = 4;
r.test(s) // false

r.lastIndex // 0
r.test(s) // true
```

`false``lastIndex``0``r.test(s)``true`

`g``lastIndex`

```javascript
var r = /bb/g;
r.test('bb') // true
r.test('-bb-') // false
```

`r``lastIndex``test`

`lastIndex`

```javascript
var count = 0;
while (/a/g.test('babaa')) count++;
```

`while``lastIndex`0



```javascript
new RegExp('').test('abc')
// true
```

### RegExp.prototype.exec()

`exec()``null`

```javascript
var s = '_x_x';
var r1 = /x/;
var r2 = /y/;

r1.exec(s) // ["x"]
r2.exec(s) // null
```

`r1``r2``null`

“”`length`1

```javascript
var s = '_x_x';
var r = /_(x)/;

r.exec(s) // ["_x", "x"]
```

`exec()`

`exec()`

- `input`
- `index`0

```javascript
var r = /a(b+)a/;
var arr = r.exec('_abbba_aba_');

arr // ["abbba", "bbb"]

arr.index // 1
arr.input // "_abbba_aba_"
```

`index`1

`g``exec()`

```javascript
var reg = /a/g;
var str = 'abc_abc_abc'

var r1 = reg.exec(str);
r1 // ["a"]
r1.index // 0
reg.lastIndex // 1

var r2 = reg.exec(str);
r2 // ["a"]
r2.index // 4
reg.lastIndex // 5

var r3 = reg.exec(str);
r3 // ["a"]
r3.index // 8
reg.lastIndex // 9

var r4 = reg.exec(str);
r4 // null
reg.lastIndex // 0
```

`exec()``null``lastIndex``0`

`g`

```javascript
var reg = /a/g;
var str = 'abc_abc_abc'

while(true) {
  var match = reg.exec(str);
  if (!match) break;
  console.log('#' + match.index + ':' + match[0]);
}
// #0:a
// #4:a
// #8:a
```

`exec()``null`

`lastIndex``g``lastIndex`

## 

4

- `String.prototype.match()`
- `String.prototype.search()`
- `String.prototype.replace()`
- `String.prototype.split()`

### String.prototype.match()

`match`

```javascript
var s = '_x_x';
var r1 = /x/;
var r2 = /y/;

s.match(r1) // ["x"]
s.match(r2) // null
```

`match``exec``null`

`g``exec`

```javascript
var s = 'abba';
var r = /a/g;

s.match(r) // ["a", "a"]
r.exec(s) // ["a"]
```

`lastIndex``match`

```javascript
var r = /a|b/g;
r.lastIndex = 7;
'xaxb'.match(r) // ['a', 'b']
r.lastIndex // 0
```

`lastIndex`

### String.prototype.search()

`search``-1`

```javascript
'_x_x'.search(/x/)
// 1
```

`1`

### String.prototype.replace()

`replace`

```javascript
str.replace(search, replacement)
```

`g`

```javascript
'aaa'.replace('a', 'b') // "baa"
'aaa'.replace(/a/, 'b') // "baa"
'aaa'.replace(/a/g, 'b') // "bbb"
```

`g``a`

`replace`

```javascript
var str = '  #id div.class  ';

str.replace(/^\s+|\s+$/g, '')
// "#id div.class"
```

`replace``$`

- `$&`
- `` $` ``
- `$'`
- `$n``n``n`1
- `$$``$`

```javascript
'hello world'.replace(/(\w+)\s(\w+)/, '$2 $1')
// "world hello"

'abc'.replace('b', '[$`-$&-$\']')
// "a[a-b-c]c"
```



`replace`

```javascript
'3 and 5'.replace(/[0-9]+/g, function (match) {
  return 2 * match;
})
// "6 and 10"

var a = 'The quick brown fox jumped over the lazy dog.';
var pattern = /quick|brown|lazy/ig;

a.replace(pattern, function replacer(match) {
  return match.toUpperCase();
});
// The QUICK BROWN fox jumped over the LAZY dog.
```

`replace`

```javascript
var prices = {
  'p1': '$1.99',
  'p2': '$9.99',
  'p3': '$5.00'
};

var template = '<span id="p1"></span>'
  + '<span id="p2"></span>'
  + '<span id="p3"></span>';

template.replace(
  /(<span id=")(.*?)(">)(<\/span>)/g,
  function(match, $1, $2, $3, $4){
    return $1 + $2 + $3 + prices[$2] + $4;
  }
);
// "<span id="p1">$1.99</span><span id="p2">$9.99</span><span id="p3">$5.00</span>"
```

`$1``$4`

### String.prototype.split()

`split`

```javascript
str.split(separator, [limit])
```



```javascript
// 
'a,  b,c, d'.split(',')
// [ 'a', '  b', 'c', ' d' ]

// 
'a,  b,c, d'.split(/, */)
// [ 'a', 'b', 'c', 'd' ]

// 
'a,  b,c, d'.split(/, */, 2)
[ 'a', 'b' ]
```



```javascript
// 
'aaa*a*'.split(/a*/)
// [ '', '*', '*' ]

// 
'aaa**a*'.split(/a*/)
// ["", "*", "*", "*"]
```

0`a``aaa``a``aaa`0`a``a`



```javascript
'aaa*a*'.split(/(a*)/)
// [ '', 'aaa', '*', 'a', '*' ]
```

`aaa``a`

## 



### 

`/a/``a``/b/``b``a``b`“”literal characters

```javascript
/dog/.test('old dog') // true
```

`dog``/dog/``old dog``d``o``g`

“”metacharacters

**1.)**

`.``\r`(`\n`) `\u2028``\u2029``0xFFFF`

```javascript
/c.t/
```

`c.t``c``t``cat``c2t``c-t``coot`

**2**



- `^` 
- `$` 

```javascript
// test
/^test/.test('test123') // true

// test
/test$/.test('new test') // true

// test
/^test$/.test('test') // true
/^test$/.test('test test') // false
```

**3`|`**

`|`“”OR`cat|dog``cat``dog`

```javascript
/11|22/.test('911') // true
```

`11``22`



```javascript
// fredbarneybetty
/fred|barney|betty/
```

`/ab|cd/``ab``cd``b``c`

```javascript
/a( |\t)b/.test('a\tb') // true
```

`a``b`

`\``*``+``?``()``[]``{}`

### 

`+``\+`

```javascript
/1+1/.test('1+1')
// false

/1\+1/.test('1+1')
// true
```



12`^``.``[``$``(``)``|``*``+``?``{``\``RegExp`

```javascript
(new RegExp('1\+1')).test('1+1')
// false

(new RegExp('1\\+1')).test('1+1')
// true
```

`RegExp`

### 



- `\cX` `Ctrl-[X]``X`A-Z
- `[\b]` (U+0008)`\b`
- `\n` 
- `\r` 
- `\t`  tabU+0009
- `\v` U+000B
- `\f` U+000C
- `\0` `null`U+0000
- `\xhh` `\x00`-`\xFF`
- `\uhhhh` `\u0000`-`\uFFFF` Unicode 

### 

class`[xyz]` `x``y``z`

```javascript
/[abc]/.test('hello world') // false
/[abc]/.test('apple') // true
```

`hello world``a``b``c``false``apple``a``true`



**1&#94;**

`[^]``[^xyz]``x``y``z`

```javascript
/[^abc]/.test('bbc news') // true
/[^abc]/.test('bbc') // false
```

`bbc news``a``b``c``true``bbc``a``b``c``false`

`[^]``.`

```javascript
var s = 'Please yes\nmake my day!';

s.match(/yes.*day/) // null
s.match(/yes[^]*day/) // [ 'yes\nmake my day']
```

`s``[^]`

> 

**2-**

`-``[abc]``[a-c]``[0123456789]``[0-9]``[A-Z]`26

```javascript
/a-z/.test('b') // false
/[a-z]/.test('b') // true
```

dash`b`



```javascript
[0-9.,]
[0-9a-fA-F]
[a-zA-Z0-9-]
[1-31]
```

`[1-31]``1``31``1``3`

 Unicode 

```javascript
var str = "\u0130\u0131\u0132";
/[\u0128-\uFFFF]/.test(str)
// true
```

`\u0128-\uFFFF``0128``FFFF`

`[A-z]``A``z`52 ASCII 

```javascript
/[A-z]/.test('\\') // true
```

'\\'ASCII

### 



- `\d` 0-9`[0-9]`
- `\D` 0-9`[^0-9]`
- `\w` `[A-Za-z0-9_]`
- `\W` `[^A-Za-z0-9_]`
- `\s` `[ \t\r\n\v\f]`
- `\S` `[^ \t\r\n\v\f]`
- `\b` 
- `\B` 



```javascript
// \s 
/\s\w*/.exec('hello world') // [" world"]

// \b 
/\bworld/.test('hello world') // true
/\bworld/.test('hello-world') // true
/\bworld/.test('helloworld') // false

// \B 
/\Bworld/.test('hello-world') // false
/\Bworld/.test('helloworld') // true
```

`\s``\b``world``\B``world`

`\n`

```javascript
var html = "<b>Hello</b>\n<i>world!</i>";

/.*/.exec(html)[0]
// "<b>Hello</b>"
```

`html``.``\s`

```javascript
var html = "<b>Hello</b>\n<i>world!</i>";

/[\S\s]*/.exec(html)[0]
// "<b>Hello</b>\n<i>world!</i>"
```

`[\S\s]`

### 

`{}``{n}``n``{n,}``n``{n,m}``n``m`

```javascript
/lo{2}k/.test('look') // true
/lo{2,5}k/.test('looook') // true
```

`o`2`o`25

### 



- `?` 01`{0, 1}`
- `*` 0`{0,}`
- `+` 1`{1,}`

```javascript
// t 01
/t?est/.test('test') // true
/t?est/.test('est') // true

// t 1
/t+est/.test('test') // true
/t+est/.test('ttest') // true
/t+est/.test('est') // false

// t 0
/t*est/.test('test') // true
/t*est/.test('ttest') // true
/t*est/.test('tttest') // true
/t*est/.test('est') // true
```

### 



```javascript
var s = 'aaa';
s.match(/a+/) // ["aaa"]
```

`/a+/`1`a``a``a``a`3`a`



```javascript
var s = 'aaa';
s.match(/a+?/) // ["a"]
```

`/a+?/``+?``a`

`+?``*?``??`

- `+?`1
- `*?`0
- `??`01

```javascript
'abb'.match(/ab*/) // ["abb"]
'abb'.match(/ab*?/) // ["a"]

'abb'.match(/ab?/) // ["ab"]
'abb'.match(/ab??/) // ["a"]
```

`/ab*/``a``b``b``/ab*?/``b`0`b`

### 

modifier



```javascript
// 
var regex = /test/i;

// 
var regex = /test/ig;
```

**1g **

`g`global

```javascript
var regex = /b/;
var str = 'abba';

regex.test(str); // true
regex.test(str); // true
regex.test(str); // true
```

`g``true`

```javascript
var regex = /b/g;
var str = 'abba';

regex.test(str); // true
regex.test(str); // true
regex.test(str); // false
```

`g``abba``b``true``false`

**2i **

`i`ignoreCase

```javascript
/abc/.test('ABC') // false
/abc/i.test('ABC') // true
```

`i``abc``ABC`

**3m **

`m`multiline`^``$``m``^``$``m``^``$``^``$``\n`

```javascript
/world$/.test('hello world\n') // false
/world$/m.test('hello world\n') // true
```

`m``world``$`

```javascript
/^b/m.test('a\nb') // true
```

`b``m``b``m``\n`

### 

**1**



```javascript
/fred+/.test('fredd') // true
/(fred)+/.test('fredfred') // true
```

`+``d``+``fred`



```javascript
var m = 'abcabc'.match(/(.)b(.)/);
m
// ['abc', 'a', 'c']
```

`/(.)b(.)/``a``c`

`g``match`

```javascript
var m = 'abcabc'.match(/(.)b(.)/g);
m // ['abc', 'abc']
```

`g``match``exec`

```javascript
var str = 'abcabc';
var reg = /(.)b(.)/g;
while (true) {
  var result = reg.exec(str);
  if (!result) break;
  console.log(result);
}
// ["abc", "a", "c"]
// ["abc", "a", "c"]
```

`\n``n`1

```javascript
/(.)b(.)\1b\2/.test("abcabc")
// true
```

`\1``a``\2``c`



```javascript
/y(..)(.)\2\1/.test('yabccab') // true
```



```javascript
/y((..)\2)\1/.test('yabababab') // true
```

`\1``\2`



```javascript
var tagName = /<([^>]+)>[^<]*<\/\1>/;

tagName.exec("<b>bold</b>")[1]
// 'b'
```

`\1`



```javascript
var html = '<b class="hello">Hello</b><i>world</i>';
var tag = /<(\w+)([^>]*)>(.*?)<\/\1>/g;

var match = tag.exec(html);

match[1] // "b"
match[2] // " class="hello""
match[3] // "Hello"

match = tag.exec(html);

match[1] // "i"
match[2] // ""
match[3] // "world"
```

**2**

`(?:x)`Non-capturing group

`foo``foofoo``/(foo){1, 2}/``/(?:foo){1, 2}/`



```javascript
var m = 'abc'.match(/(?:.)b(.)/);
m // ["abc", "c"]
```





```javascript
// 
var url = /(http|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/;

url.exec('http://google.com/');
// ["http://google.com/", "http", "google.com", "/"]

// 
var url = /(?:http|ftp):\/\/([^/\r\n]+)(\/[^\r\n]*)?/;

url.exec('http://google.com/');
// ["http://google.com/", "google.com", "/"]
```



**3**

`x(?=y)`Positive look-ahead`x``y``y``/\d+(?=%)/`

“”

```javascript
var m = 'abc'.match(/b(?=c)/);
m // ["b"]
```

`b``c``c`

**4**

`x(?!y)`Negative look-ahead`x``y``y``/\d+(?!%)/`

```javascript
/\d+(?!\.)/.exec('3.14')
// ["14"]
```

`14`

“”

```javascript
var m = 'abd'.match(/b(?!c)/);
m // ['b']
```

`b``c``d`

## 

- Axel Rauschmayer, [JavaScript: an overview of the regular expression API](http://www.2ality.com/2011/04/javascript-overview-of-regular.html)
- Mozilla Developer Network, [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- Axel Rauschmayer, [The flag /g of JavaScript’s regular expressions](http://www.2ality.com/2013/08/regexp-g.html)
- Sam Hughes, [Learn regular expressions in about 55 minutes](http://qntm.org/files/re/re.html)
