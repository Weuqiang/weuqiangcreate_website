# History 

## 

`window.history` History 

History 3

```javascript
window.history.length // 3
```



```javascript
// 
history.back()

// 
history.go(-1)
```

“”“” History 

## 

History 

- `History.length`
- `History.state`History 

```javascript
// 
window.history.length // 1

// History 
//  undefined
window.history.state // undefined
```

## 

### History.back()History.forward()History.go()



- `History.back()`
- `History.forward()`
- `History.go()``go(1)``forward()``go(-1)``back()``0`

```javascript
history.back();
history.forward();
history.go(-2);
```

`history.go(0)`

```javascript
history.go(0); // 
```



### History.pushState()

`History.pushState()`

```javascript
window.history.pushState(state, title, url)
```



- `state``popstate``null`
- `title`
- `url`

`example.com/1.html``pushState()`History 

```javascript
var stateObj = { foo: 'bar' };
history.pushState(stateObj, 'page 2', '2.html');
```

`example.com/2.html``2.html``2.html`(`google.com`) URL `2.html`URL `1.html`

`pushState()` History 

`History.state`

```javascript
var stateObj = { foo: 'bar' };
history.pushState(stateObj, 'page 2', '2.html');
history.state // {foo: "bar"}
```

`pushState` URL `hash``hashchange` URL  History 

`pushState()`

```javascript
// 
//  http://example.com
history.pushState(null, '', 'https://twitter.com/hello');
```

`pushState`

### History.replaceState()

`History.replaceState()` History `pushState()`

`example.com/example.html`

```javascript
history.pushState({page: 1}, 'title 1', '?page=1')
// URL  http://example.com/example.html?page=1

history.pushState({page: 2}, 'title 2', '?page=2');
// URL  http://example.com/example.html?page=2

history.replaceState({page: 3}, 'title 3', '?page=3');
// URL  http://example.com/example.html?page=3

history.back()
// URL  http://example.com/example.html?page=1

history.back()
// URL  http://example.com/example.html

history.go(2)
// URL  http://example.com/example.html?page=3
```

## popstate 

`history``popstate`

`pushState()``replaceState()`  JavaScript `History.back()``History.forward()``History.go()`

`popstate`

```javascript
window.onpopstate = function (event) {
  console.log('location: ' + document.location);
  console.log('state: ' + JSON.stringify(event.state));
};

// 
window.addEventListener('popstate', function(event) {
  console.log('location: ' + document.location);
  console.log('state: ' + JSON.stringify(event.state));
});
```

`event``state``pushState``replaceState` URL `event.state``pushState``replaceState` URL `state`

`state``history`

```javascript
var currentState = history.state;
```

`popstate`
