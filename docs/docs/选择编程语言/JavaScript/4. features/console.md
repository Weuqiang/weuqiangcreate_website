# console 

## console 

`console` JavaScript  Unix `stdout``stderr`

`console`

- 
- 

`console` Chrome “”Developer Tools

1.  F12 `Control + Shift + i`PC/ `Command + Option + i`Mac
2. “/”
3. “Inspect Element”



- **Elements** HTML  CSS 
- **Resources** CSS CookieLocal Storage
- **Network** HTTP 
- **Sources**
- **Timeline**
- **Performance** CPU 
- **Console** JavaScript 

`Console`

`Console`

## console 

`console`

### console.log()console.info()console.debug()

`console.log`

```javascript
console.log('Hello World')
// Hello World
console.log('a', 'b', 'c')
// a b c
```

`console.log`

```javascript
console.log(1);
console.log(2);
console.log(3);
// 1
// 2
// 3
```

`console.log`

```javascript
console.log(' %s + %s = %s', 1, 1, 2)
//  1 + 1 = 2
```

`console.log``%s`

`console.log`

- `%s` 
- `%d` 
- `%i` 
- `%f` 
- `%o` 
- `%c` CSS 

```javascript
var number = 11 * 9;
var color = 'red';

console.log('%d %s balloons', number, color);
// 99 red balloons
```

`%d``%s`

`%c` CSS  CSS 

```javascript
console.log(
  '%cThis text is styled!',
  'color: red; background: yellow; font-size: 24px;'
)
```



`console.log`

```javascript
console.log(' %s + %s ', 1, 1, '= 2')
// 1 + 1  = 2
```

`console.log`

```javascript
console.log({foo: 'bar'})
// Object {foo: "bar"}
console.log(Date)
// function Date() { [native code] }
```

`Date`

`console.info``console.log``console.info`

`console.debug``console.log``console.debug``verbose`

`console``console.log`

```javascript
['log', 'info', 'warn', 'error'].forEach(function(method) {
  console[method] = console[method].bind(
    console,
    new Date().toISOString()
  );
});

console.log("");
// 2014-05-18T09:00.000Z 
```

`console.log`

### console.warn()console.error()

`warn``error``log``warn``error`

```javascript
console.error('Error: %s (%i)', 'Server is not responding', 500)
// Error: Server is not responding (500)
console.warn('Warning! Too few nodes (%d)', document.childNodes.length)
// Warning! Too few nodes (1)
```

`log``stdout``warn``error``stderr`

### console.table()

`console.table`

```javascript
var languages = [
  { name: "JavaScript", fileExtension: ".js" },
  { name: "TypeScript", fileExtension: ".ts" },
  { name: "CoffeeScript", fileExtension: ".coffee" }
];

console.table(languages);
```

`language`

(index)|name|fileExtension
-------|----|-------------
0|"JavaScript"|".js"
1|"TypeScript"|".ts"
2|"CoffeeScript"|".coffee"



```javascript
var languages = {
  csharp: { name: "C#", paradigm: "object-oriented" },
  fsharp: { name: "F#", paradigm: "functional" }
};

console.table(languages);
```

`language`

(index)|name|paradigm
-------|----|--------
csharp|"C#"|"object-oriented"
fsharp|"F#"|"functional"

### console.count()

`count`

```javascript
function greet(user) {
  console.count();
  return 'hi ' + user;
}

greet('bob')
//  : 1
// "hi bob"

greet('alice')
//  : 2
// "hi alice"

greet('bob')
//  : 3
// "hi bob"
```

`greet``console.count`



```javascript
function greet(user) {
  console.count(user);
  return "hi " + user;
}

greet('bob')
// bob: 1
// "hi bob"

greet('alice')
// alice: 1
// "hi alice"

greet('bob')
// bob: 2
// "hi bob"
```

`bob``alice`

### console.dir()console.dirxml()

`dir`inspect

```javascript
console.log({f1: 'foo', f2: 'bar'})
// Object {f1: "foo", f2: "bar"}

console.dir({f1: 'foo', f2: 'bar'})
// Object
//   f1: "foo"
//   f2: "bar"
//   __proto__: Object
```

`dir``log`

 DOM  DOM 

```javascript
console.dir(document.body)
```

Node 

```javascript
console.dir(obj, {colors: true})
```

`dirxml` DOM 

```javascript
console.dirxml(document.body)
```

 DOM  JavaScript `console.dirxml``console.dir`

```javascript
console.dirxml([1, 2, 3])
// 
console.dir([1, 2, 3])
```

### console.assert()

`console.assert`

`false`

```javascript
console.assert(false, '')
// Assertion failed: 

// 
try {
  if (!false) {
    throw new Error('');
  }
} catch(e) {
  console.error(e);
}
```

500

```javascript
console.assert(list.childNodes.length < 500, '500')
```

500500

### console.time()console.timeEnd()



```javascript
console.time('Array initialize');

var array= new Array(1000000);
for (var i = array.length - 1; i >= 0; i--) {
  array[i] = new Object();
};

console.timeEnd('Array initialize');
// Array initialize: 1914.481ms
```

`time``timeEnd``timeEnd`“: ”

### console.group()console.groupEnd()console.groupCollapsed()

`console.group``console.groupEnd`/

```javascript
console.group('');
console.log('');

console.group('');
console.log('');

console.groupEnd(); // 
console.groupEnd(); // 
```

“”“”“”“”

`console.groupCollapsed``console.group`collapsed

```javascript
console.groupCollapsed('Fetching Data');

console.log('Request Sent');
console.error('Error: Server not responding (500)');

console.groupEnd();
```

”Fetching Data“

### console.trace()console.clear()

`console.trace`

```javascript
console.trace()
// console.trace()
//   (anonymous function)
//   InjectedScript._evaluateOn
//   InjectedScript._evaluateAndWrap
//   InjectedScript.evaluate
```

`console.clear`“Preserve log”`console.clear`

##  API

`console`

1`$_`

`$_`

```javascript
2 + 2
// 4
$_
// 4
```

2`$0` - `$4`

5 Elements  DOM `$0``$1``$4`

3`$(selector)`

`$(selector)``document.querySelector()``$` jQuery`$(selector)` jQuery 

4`$$(selector)`

`$$(selector)` DOM `document.querySelectorAll`

5`$x(path)`

`$x(path)` XPath  DOM 

```javascript
$x("//p[a]")
```

`a``p`

6`inspect(object)`

`inspect(object)`DOM `Elements``inspect(document)` Elements `document`JavaScript `Profiles``inspect(window)`

7`getEventListeners(object)`

`getEventListeners(object)``object``click``keydown`

8`keys(object)``values(object)`

`keys(object)``object`

`values(object)``object`

```javascript
var o = {'p1': 'a', 'p2': 'b'};

keys(o)
// ["p1", "p2"]
values(o)
// ["a", "b"]
```

9`monitorEvents(object[, events]) unmonitorEvents(object[, events])`

`monitorEvents(object[, events])``Event``unmonitorEvents`

```javascript
monitorEvents(window, "resize");
monitorEvents(window, ["resize", "scroll"])
```



```javascript
monitorEvents($0, 'mouse');
unmonitorEvents($0, 'mousemove');
```



`monitorEvents`

- mouse"mousedown", "mouseup", "click", "dblclick", "mousemove", "mouseover", "mouseout", "mousewheel"
- key"keydown", "keyup", "keypress", "textInput"
- touch"touchstart", "touchmove", "touchend", "touchcancel"
- control"resize", "scroll", "zoom", "focus", "blur", "select", "change", "submit", "reset"

```javascript
monitorEvents($("#msg"), "key");
```

`key`

10

 API 

- `clear()`
- `copy(object)` DOM 
- `dir(object)``console.dir`
- `dirxml(object)` XML `console.dirxml`

## debugger 

`debugger``debugger``debugger`JavaScript 

Chrome `debugger`

```javascript
for(var i = 0; i < 5; i++){
  console.log(i);
  if (i === 2) debugger;
}
```

012

## 

- Chrome Developer Tools, [Using the Console](https://developers.google.com/chrome-developer-tools/docs/console)
- Matt West, [Mastering The Developer Tools Console](http://blog.teamtreehouse.com/mastering-developer-tools-console)
- Firebug Wiki, [Console API](https://getfirebug.com/wiki/index.php/Console_API)
- Axel Rauschmayer, [The JavaScript console API](http://www.2ality.com/2013/10/console-api.html)
- Marius Schulz, [Advanced JavaScript Debugging with console.table()](http://blog.mariusschulz.com/2013/11/13/advanced-javascript-debugging-with-consoletable)
- Google Developer, [Command Line API Reference](https://developers.google.com/chrome-developer-tools/docs/commandline-api)
