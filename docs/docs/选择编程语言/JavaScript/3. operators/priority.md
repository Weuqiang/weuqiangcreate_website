# 

## void 

`void``undefined`

```javascript
void 0 // undefined
void(0) // undefined
```

`void``void``void 4 + 7``(void 4) + 7`

`void`

```javascript
var x = 3;
void (x = 5) //undefined
x // 5
```

Bookmarklet



```html
<script>
function f() {
  console.log('Hello World');
}
</script>
<a href="http://example.com" onclick="f(); return false;"></a>
```

`onclick``onclick``false` example.com

`void`

```html
<a href="javascript: void(f())"></a>
```



```html
<a href="javascript: void(document.form.submit())">
  
</a>
```

## 



```javascript
'a', 'b' // "b"

var x = 0;
var y = (x++, 10);
x // 1
y // 10
```





```javascript
var value = (console.log('Hi!'), true);
// Hi!

value // true
```



## 

### 

JavaScript Operator Precedence

```javascript
4 + 5 * 6 // 34
```

`*``+`

```javascript
4 + (5 * 6) // 34
```



```javascript
var x = 1;
var arr = [];

var y = arr.length <= 0 || arr[0] === undefined ? x : arr[0];
```

`y`5

`<=`)`===``||``?:``=`

```javascript
var y = ((arr.length <= 0) || (arr[0] === undefined)) ? x : arr[0];
```



### 

`()`

```javascript
(4 + 5) * 6 // 54
```









```javascript
var x = 1;
(x) = 2;
```

`1 = 2`



```javascript
(expression)
// 
expression
```



```javascript
function f() {
  return 1;
}

(f) // function f(){return 1;}
f() // 1
```





```javascript
(var a = 1)
// SyntaxError: Unexpected token var
```

### 



```javascript
a OP b OP c
```

`OP`

```javascript
// 
(a OP b) OP c

// 
a OP (b OP c)
```

“”left-to-right associativity“”right-to-left associativity

JavaScript “”

```javascript
x + y + z

// 
(x + y) + z
```

`x``y``z`

“”`=``?:`

```javascript
w = x = y = z;
q = a ? b : c ? d : e ? f : g;
```



```javascript
w = (x = (y = z));
q = a ? b : (c ? d : (e ? f : g));
```



`**`

```javascript
2 ** 3 ** 2
//  2 ** (3 ** 2)
// 512
```

