# Web Worker

## 

JavaScript  CPU 

Web Worker  JavaScript  Worker Worker  Worker  Worker  UI 

Worker  Worker 

Web Worker 

1****

 Worker 

2**DOM **

Worker  DOM `document``window``parent`Worker `navigator``location`

3****

Worker `WorkerGlobalScope``Window` Worker `console.log` Worker `console``Navigator``Location` Worker `console.log`

4****

Worker 

5****

Worker `alert()``confirm()` XMLHttpRequest  AJAX 

6****

Worker `file://`

## 

### 

`new``Worker()` Worker 

```javascript
var worker = new Worker('work.js');
```

`Worker()` Worker  Worker 404Worker 

`worker.postMessage()` Worker 

```javascript
worker.postMessage('Hello World');
worker.postMessage({method: 'echo', args: ['Work']});
```

`worker.postMessage()` Worker 

`worker.onmessage`

```javascript
worker.onmessage = function (event) {
  doSomething(event.data);
}

function doSomething() {
  // 
  worker.postMessage('Work done!');
}
```

`data` Worker 

Worker 

```javascript
worker.terminate();
```

### Worker 

Worker `message`

```javascript
self.addEventListener('message', function (e) {
  self.postMessage('You said: ' + e.data);
}, false);
```

`self`

```javascript
// 
this.addEventListener('message', function (e) {
  this.postMessage('You said: ' + e.data);
}, false);

// 
addEventListener('message', function (e) {
  postMessage('You said: ' + e.data);
}, false);
```

`self.addEventListener()``self.onmessage``data``self.postMessage()`

Worker 

```javascript
self.addEventListener('message', function (e) {
  var data = e.data;
  switch (data.cmd) {
    case 'start':
      self.postMessage('WORKER STARTED: ' + data.msg);
      break;
    case 'stop':
      self.postMessage('WORKER STOPPED: ' + data.msg);
      self.close(); // Terminates the worker.
      break;
    default:
      self.postMessage('Unknown command: ' + data.msg);
  };
}, false);
```

`self.close()` Worker 

### Worker 

Worker `importScripts()`

```javascript
importScripts('script1.js');
```



```javascript
importScripts('script1.js', 'script2.js');
```

### 

 Worker Worker `error`

```javascript
worker.onerror = function (event) {
  console.log(
    'ERROR: Line ', event.lineno, ' in ', event.filename, ': ', event.message
  );
};

// 
worker.addEventListener('error', function (event) {
  // ...
});
```

Worker `error`

###  Worker

 Worker

```javascript
// 
worker.terminate();

// Worker 
self.close();
```

## 

 Worker Worker  Worker

 Worker  FileBlobArrayBuffer 

```javascript
// 
var uInt8Array = new Uint8Array(new ArrayBuffer(10));
for (var i = 0; i < uInt8Array.length; ++i) {
  uInt8Array[i] = i * 2; // [0, 2, 4, 6, 8,...]
}
worker.postMessage(uInt8Array);

// Worker 
self.onmessage = function (e) {
  var uInt8Array = e.data;
  postMessage('Inside worker.js: uInt8Array.toString() = ' + uInt8Array.toString());
  postMessage('Inside worker.js: uInt8Array.byteLength = ' + uInt8Array.byteLength);
};
```

 Worker  500MB JavaScript [Transferable Objects](http://www.w3.org/html/wg/drafts/html/master/infrastructure.html#transferable-objects) Worker3D 



```javascript
// Transferable Objects 
worker.postMessage(arrayBuffer, [arrayBuffer]);

// 
var ab = new ArrayBuffer(1);
worker.postMessage(ab, [ab]);
```

##  Web Worker

Worker  JavaScript 

```html
<!DOCTYPE html>
  <body>
    <script id="worker" type="app/worker">
      addEventListener('message', function () {
        postMessage('some message');
      }, false);
    </script>
  </body>
</html>
```

`<script>``type``app/worker`

 Worker 

```javascript
var blob = new Blob([document.querySelector('#worker').textContent]);
var url = window.URL.createObjectURL(blob);
var worker = new Worker(url);

worker.onmessage = function (e) {
  // e.data === 'some message'
};
```

 URL Worker  URL Worker 

## Worker 

 Worker 

```javascript
function createWorker(f) {
  var blob = new Blob(['(' + f.toString() + ')()']);
  var url = window.URL.createObjectURL(blob);
  var worker = new Worker(url);
  return worker;
}

var pollingWorker = createWorker(function (e) {
  var cache;

  function compare(new, old) { ... };

  setInterval(function () {
    fetch('/my-api-endpoint').then(function (res) {
      var data = res.json();

      if (!compare(data, cache)) {
        cache = data;
        self.postMessage(data);
      }
    })
  }, 1000)
});

pollingWorker.onmessage = function () {
  // render data
}

pollingWorker.postMessage('init');
```

Worker 

##  Worker  Worker

Worker  Worker  Firefox 10 Worker



```javascript
var worker = new Worker('worker.js');
worker.onmessage = function (event) {
  document.getElementById('result').textContent = event.data;
};
```

Worker 

```javascript
// worker.js

// settings
var num_workers = 10;
var items_per_worker = 1000000;

// start the workers
var result = 0;
var pending_workers = num_workers;
for (var i = 0; i < num_workers; i += 1) {
  var worker = new Worker('core.js');
  worker.postMessage(i * items_per_worker);
  worker.postMessage((i + 1) * items_per_worker);
  worker.onmessage = storeResult;
}

// handle the results
function storeResult(event) {
  result += event.data;
  pending_workers -= 1;
  if (pending_workers <= 0)
    postMessage(result); // finished!
}
```

Worker 10 Worker 10 Worker 

```javascript
// core.js
var start;
onmessage = getStart;
function getStart(event) {
  start = event.data;
  onmessage = getEnd;
}

var end;
function getEnd(event) {
  end = event.data;
  onmessage = null;
  work();
}

function work() {
  var result = 0;
  for (var i = start; i < end; i += 1) {
    // perform some complex calculation here
    result += 1;
  }
  postMessage(result);
  close();
}
```

## API

### 

`Worker()` Worker 

```javascript
var myWorker = new Worker(jsUrl, options);
```

`Worker()` JS  Worker  Worker 

```javascript
// 
var myWorker = new Worker('worker.js', { name : 'myWorker' });

// Worker 
self.name // myWorker
```

`Worker()` Worker  WorkerWorker 

- Worker.onerror error 
- Worker.onmessage message `Event.data`
- Worker.onmessageerror messageerror 
- Worker.postMessage() Worker 
- Worker.terminate() Worker 

### Worker 

Web Worker `window` Worker `window`

Worker 

- self.name Worker 
- self.onmessage`message`
- self.onmessageerror messageerror 
- self.close() Worker 
- self.postMessage() Worker 
- self.importScripts() JS 


