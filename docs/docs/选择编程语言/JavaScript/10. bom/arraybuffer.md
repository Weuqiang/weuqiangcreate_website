# ArrayBuffer Blob 

## ArrayBuffer 

ArrayBuffer JavaScript 

 ES6 ES6 

`ArrayBuffer()`

```javascript
var buffer = new ArrayBuffer(8);
```

`buffer`8

ArrayBuffer `byteLength`

```javascript
var buffer = new ArrayBuffer(8);
buffer.byteLength // 8
```

ArrayBuffer `slice()`0

```javascript
var buf1 = new ArrayBuffer(8);
var buf2 = buf1.slice(0);
```



## Blob 

### 

Blob  Blob  Binary Large Object  ArrayBuffer  ArrayBuffer 

`Blob()`

```javascript
new Blob(array [, options])
```

`Blob``Blob``type` MIME 

```javascript
var htmlFragment = ['<a id="a"><b id="b">hey!</b></a>'];
var myBlob = new Blob(htmlFragment, {type : 'text/html'});
```

`myBlob``text/html`

Blob  JSON 

```javascript
var obj = { hello: 'world' };
var blob = new Blob([ JSON.stringify(obj) ], {type : 'application/json'});
```

### 

`Blob``size``type`

```javascript
var htmlFragment = ['<a id="a"><b id="b">hey!</b></a>'];
var myBlob = new Blob(htmlFragment, {type : 'text/html'});

myBlob.size // 32
myBlob.type // "text/html"
```

`Blob``slice``Blob`

```javascript
myBlob.slice(start, end, contentType)
```

`slice`0`size`

### 

`<input type="file">``value`

 FileList  File File  Blob `name``lastModifiedDate`

```javascript
// HTML 
// <input type="file" accept="image/*" multiple onchange="fileinfo(this.files)"/>

function fileinfo(files) {
  for (var i = 0; i < files.length; i++) {
    var f = files[i];
    console.log(
      f.name, // 
      f.size, // Blob 
      f.type, // Blob 
      f.lastModifiedDate // 
    );
  }
}
```

 API `dataTransfer.files`FileList  File 

### 

AJAX `responseType``blob` Blob 

```javascript
function getBlob(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.onload = function () {
    callback(xhr.response);
  }
  xhr.send(null);
}
```

`xhr.response` Blob 

###  URL

`URL.createObjectURL()` Blob  URL API  URL `blob://` Blob  Blob `data://URL`URL `file://URL`

```javascript
var droptarget = document.getElementById('droptarget');

droptarget.ondrop = function (e) {
  var files = e.dataTransfer.files;
  for (var i = 0; i < files.length; i++) {
    var type = files[i].type;
    if (type.substring(0,6) !== 'image/')
      continue;
    var img = document.createElement('img');
    img.src = URL.createObjectURL(files[i]);
    img.onload = function () {
      this.width = 100;
      document.body.appendChild(this);
      URL.revokeObjectURL(this.src);
    }
  }
}
```

 URL

 Blob URL  URL  Blob 404403Blob URL  GET 200 Blob URL  URL

### 

 Blob `FileReader` Blob 

FileReader  Blob Blob 

- `FileReader.readAsText()` UTF-8
- `FileReader.readAsArrayBuffer()` ArrayBuffer 
- `FileReader.readAsDataURL()` Data URL
- `FileReader.readAsBinaryString()`

`FileReader.readAsText()`

```javascript
// HTML 
// <input type="file" onchange="readfile(this.files[0])"></input>
// <pre id="output"></pre>
function readfile(f) {
  var reader = new FileReader();
  reader.readAsText(f);
  reader.onload = function () {
    var text = reader.result;
    var out = document.getElementById('output');
    out.innerHTML = '';
    out.appendChild(document.createTextNode(text));
  }
  reader.onerror = function(e) {
    console.log('Error', e);
  };
}
```

 FileReader `onload``result`

`FileReader.readAsArrayBuffer()`

```javascript
// HTML 
// <input type="file" onchange="typefile(this.files[0])"></input>
function typefile(file) {
  //  Blob 
  var slice = file.slice(0, 4);
  var reader = new FileReader();
  // 
  reader.readAsArrayBuffer(slice);
  reader.onload = function (e) {
    var buffer = reader.result;
    // 32
    var view = new DataView(buffer);
    var magic = view.getUint32(0, false);
    // 
    switch(magic) {
      case 0x89504E47: file.verified_type = 'image/png'; break;
      case 0x47494638: file.verified_type = 'image/gif'; break;
      case 0x25504446: file.verified_type = 'application/pdf'; break;
      case 0x504b0304: file.verified_type = 'application/zip'; break;
    }
    console.log(file.name, file.verified_type);
  };
}
```

