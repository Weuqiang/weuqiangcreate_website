# 

## 

7

- ****or`|``0``0``1`
- ****and`&`110
- ****not`~`
- ****xor`^`10
- ****left shift`<<`
- ****right shift`>>`
- ****zero filled right shift`>>>`

bit

 JavaScript 643232

```javascript
i = i | 0;
```

`i`32

32

```javascript
function toInt32(x) {
  return x | 0;
}
```

`0`32

```javascript
toInt32(1.001) // 1
toInt32(1.999) // 1
toInt32(1) // 1
toInt32(-1) // -1
toInt32(Math.pow(2, 32) + 1) // 1
toInt32(Math.pow(2, 32) - 1) // -1
```

`toInt32`23232

## 

`|``1``1``0`

```javascript
0 | 3 // 3
```

`0``3``00``11``11``3`

`0`

```javascript
2.9 | 0 // 2
-2.9 | 0 // -2
```

32`2147483647`

```javascript
2147483649.4 | 0;
// -2147483647
```

## 

`&``0``0``1`

```javascript
0 & 3 // 0
```

0`00`3`11``00``0`

## 

`~``0``1``1``0`

```javascript
~ 3 // -4
```

`3``-4`JavaScript 32

`3`32`00000000000000000000000000000011``11111111111111111111111111111100`1JavaScript 1101`11111111111111111111111111111011``00000000000000000000000000000100``-4`-1

```javascript
~ -3 // 2
```

`-3``-1``-3``2`



```javascript
~~3 // 3
```



```javascript
~~2.9 // 2
~~47.11 // 47
~~1.9999 // 1
~~3 // 3
```



JavaScript `Number`

```javascript
// ~Number('011')
~'011'  // -12

// ~Number('42 cats')
~'42 cats' // -1

// ~Number('0xcafebabe')
~'0xcafebabe' // 889275713

// ~Number('deadbeef')
~'deadbeef' // -1
```

`Number`

`Number`

```javascript
//  ~Number([])
~[] // -1

//  ~Number(NaN)
~NaN // -1

//  ~Number(null)
~null // -1
```

## 

`^``1``0`

```javascript
0 ^ 3 // 3
```

`0``00``3``11``11``3`

“”`a``b``a^=b; b^=a; a^=b;`[](http://en.wikipedia.org/wiki/XOR_swap_algorithm)“”

```javascript
var a = 10;
var b = 99;

a ^= b, b ^= a, a ^= b;

a // 99
b // 10
```





```javascript
12.9 ^ 0 // 12
```

## 

`<<``0``2`

```javascript
// 4 100
// 10008
// 21
4 << 1
// 8

-4 << 1
// -8
```

`-4``-8``-4``11111111111111111111111111111100``11111111111111111111111111111000`1`-8`

032

```javascript
13.5 << 0
// 13

-13.5 << 0
// -13
```



```javascript
var color = {r: 186, g: 218, b: 85};

// RGB to HEX
// (1 << 24)6
var rgb2hex = function(r, g, b) {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16) // 
    .substr(1);   // 
}

rgb2hex(color.r, color.g, color.b)
// "#bada55"
```

 RGB  HEX 

## 

`>>``0``1``2`

```javascript
4 >> 1
// 2
/*
// 4 00000000000000000000000000000100
//  00000000000000000000000000000010
// 2
*/

-4 >> 1
// -2
/*
// -4 11111111111111111111111111111100
// 1 11111111111111111111111111111110,
// -2
*/
```

 2 

```javascript
5 >> 1
// 2
//  5 / 2 = 2

21 >> 2
// 5
//  21 / 4 = 5

21 >> 3
// 2
//  21 / 8 = 2

21 >> 4
// 1
//  21 / 16 = 1
```

## 

`>>>``>>``>>`

```javascript
4 >>> 1
// 2

-4 >>> 1
// 2147483646
/*
// -411111111111111111111111111111100
// 01111111111111111111111111111110
// 2147483646
*/
```

32



```javascript
-1 >>> 0 // 4294967295
```

`-1`32 4294967295`(2^32)-1``11111111111111111111111111111111`

## 





```javascript
var FLAG_A = 1; // 0001
var FLAG_B = 2; // 0010
var FLAG_C = 4; // 0100
var FLAG_D = 8; // 1000
```

 ABCD 



```javascript
var flags = 5; // 0101

if (flags & FLAG_C) {
  // ...
}
// 0101 & 0100 => 0100 => true
```

`C``true``false`

`A``B``D`

```javascript
var mask = FLAG_A | FLAG_B | FLAG_D;
// 0001 | 0010 | 1000 => 1011
```

`A``B``D``1011`



```javascript
flags = flags | mask;
```

`flags`



```javascript
flags = flags & mask;
```

toggle

```javascript
flags = flags ^ mask;
```

`0``1``1``0`

```javascript
flags = ~flags;
```

## 

- Michal Budzynski, [JavaScript: The less known parts. Bitwise Operators](https://michalbe.blogspot.com/2013/03/javascript-less-known-parts-bitwise.html)
- Axel Rauschmayer, [Basic JavaScript for the impatient programmer](http://www.2ality.com/2013/06/basic-javascript.html)
- Mozilla Developer Network, [Bitwise Operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators)
