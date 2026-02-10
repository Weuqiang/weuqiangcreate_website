# 

## 

 AJAX `<img>``<audio>``<video>``<style>``<link>``ProgressEvent`

- `abort`
- `error`
- `load`
- `loadstart`
- `loadend``error``abort``load`
- `progress`
- `timeout`





```javascript
image.addEventListener('load', function (event) {
  image.classList.add('finished');
});

image.addEventListener('error', function (event) {
  image.style.display = 'none';
});
```

`finished` Class

`load``error``complete`

```javascript
function loaded() {
  // ...
}

if (image.complete) {
  loaded();
} else {
  image.addEventListener('load', loaded);
}
```

 DOM `error``<img>` HTML 

```html
<img src="/wrong/url" onerror="this.style.display='none';" />
```

`loadend``abort``load``error`

```javascript
req.addEventListener('loadend', loadEnd, false);

function loadEnd(e) {
  console.log('');
}
```

`loadend`

`error``error``error`

## ProgressEvent 

`ProgressEvent` AJAX `<img>``<video>``<style>``<link>`

`ProgressEvent()`

```javascript
new ProgressEvent(type, options)
```

`ProgressEvent()``Event`

- `lengthComputable``false`
- `loaded``0`
- `total``0`

`ProgressEvent`

- `ProgressEvent.lengthComputable`
- `ProgressEvent.loaded`
- `ProgressEvent.total`

`ProgressEvent.lengthComputable``false``ProgressEvent.total`



```javascript
var p = new ProgressEvent('load', {
  lengthComputable: true,
  loaded: 30,
  total: 100,
});

document.body.addEventListener('load', function (e) {
  console.log('' + (e.loaded / e.total) * 100 + '%');
});

document.body.dispatchEvent(p);
// 30%
```

`load`



```javascript
var xhr = new XMLHttpRequest();

xhr.addEventListener('progress', updateProgress, false);
xhr.addEventListener('load', transferComplete, false);
xhr.addEventListener('error', transferFailed, false);
xhr.addEventListener('abort', transferCanceled, false);

xhr.open();

function updateProgress(e) {
  if (e.lengthComputable) {
    var percentComplete = e.loaded / e.total;
  } else {
    console.log('');
  }
}

function transferComplete(e) {
  console.log('');
}

function transferFailed(evt) {
  console.log('');
}

function transferCanceled(evt) {
  console.log('');
}
```

`XMLHttpRequest.upload`

```javascript
var xhr = new XMLHttpRequest();

xhr.upload.addEventListener('progress', updateProgress, false);
xhr.upload.addEventListener('load', transferComplete, false);
xhr.upload.addEventListener('error', transferFailed, false);
xhr.upload.addEventListener('abort', transferCanceled, false);

xhr.open();
```
