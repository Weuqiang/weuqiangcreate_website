# Storage 

## 

Storage `window.sessionStorage``window.localStorage`

`sessionStorage`session`localStorage`

“”

 Cookie Chrome  2.5MBFirefox  Opera  5MBIE  10MBFirefox Firefox `a.example.com``b.example.com` 5MB  Cookie 

## 

Storage 

- `Storage.length`

```javascript
window.localStorage.setItem('foo', 'a');
window.localStorage.setItem('bar', 'b');
window.localStorage.setItem('baz', 'c');

window.localStorage.length // 3
```

5

### Storage.setItem()

`Storage.setItem()`

```javascript
window.sessionStorage.setItem('key', 'value');
window.localStorage.setItem('key', 'value');
```

`Storage.setItem()`

```javascript
window.sessionStorage.setItem(3, { foo: 1 });
window.sessionStorage.getItem('3') // "[object Object]"
```

`setItem`





```javascript
// 
window.localStorage.foo = '123';
window.localStorage['foo'] = '123';
window.localStorage.setItem('foo', '123');
```

### Storage.getItem()

`Storage.getItem()``null`

```javascript
window.sessionStorage.getItem('key')
window.localStorage.getItem('key')
```



### Storage.removeItem()

`Storage.removeItem()`

```javascript
sessionStorage.removeItem('key');
localStorage.removeItem('key');
```

### Storage.clear()

`Storage.clear()``undefined`

```javascript
window.sessionStorage.clear()
window.localStorage.clear()
```

### Storage.key()

`Storage.key()`

```javascript
window.sessionStorage.setItem('key', 'value');
window.sessionStorage.key(0) // "key"
```

`Storage.length``Storage.key()`

```javascript
for (var i = 0; i < window.localStorage.length; i++) {
  console.log(localStorage.key(i));
}
```

## storage 

Storage  storage 

```javascript
window.addEventListener('storage', onStorageChange);
```

`event` StorageEvent 

- `StorageEvent.key` storage `clear()``null`
- `StorageEvent.newValue` storage `clear()``null`
- `StorageEvent.oldValue``null`
- `StorageEvent.storageArea`
- `StorageEvent.url` storage 

`StorageEvent.key`

```javascript
function onStorageChange(e) {
  console.log(e.key);
}

window.addEventListener('storage', onStorageChange);
```



## 

- Ryan Stewart[Introducing the HTML5 storage APIs](http://www.adobe.com/devnet/html5/articles/html5-storage-apis.html)
- [Getting Started with LocalStorage](http://codular.com/localstorage)
- Feross Aboukhadijeh, [Introducing the HTML5 Hard Disk Filler™ API](http://feross.org/fill-disk/)
- Ben Summers, [Inter-window messaging using localStorage](http://bens.me.uk/2013/localstorage-inter-window-messaging)
- Stack Overflow, [Why does Internet Explorer fire the window “storage” event on the window that stored the data?](http://stackoverflow.com/questions/18265556/why-does-internet-explorer-fire-the-window-storage-event-on-the-window-that-st)
- Stack Overflow, [localStorage eventListener is not called](https://stackoverflow.com/questions/5370784/localstorage-eventlistener-is-not-called)
