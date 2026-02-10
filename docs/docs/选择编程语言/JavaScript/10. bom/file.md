# File FileList FileReader 

## File 

File  Blob  Blob  Blob 

`<input type="file">` File 

```javascript
// HTML 
// <input id="fileItem" type="file">
var file = document.getElementById('fileItem').files[0];
file instanceof File // true
```

`file` File 

### 

`File()` File 

```javascript
new File(array, name [, options])
```

`File()`

- array
- name
- options



- type MIME 
- lastModified`Date.now()`



```javascript
var file = new File(
  ['foo'],
  'foo.txt',
  {
    type: 'text/plain',
  }
);
```

### 

File 

- File.lastModified
- File.name
- File.size
- File.type MIME 

```javascript
var myFile = new File([], 'file.bin', {
  lastModified: new Date(2018, 1, 1),
});
myFile.lastModified // 1517414400000
myFile.name // "file.bin"
myFile.size // 0
myFile.type // ""
```

`myFile` MIME `size`0`type`

File  Blob  Blob `slice()`

## FileList 

`FileList` File 

- `<input type="file">``files` FileList 
- `DataTransfer.files` FileList 

```javascript
// HTML 
// <input id="fileItem" type="file">
var files = document.getElementById('fileItem').files;
files instanceof FileList // true
```

`files` FileList 

FileList `length`

FileList `item()` FileList `myFileList[0]``myFileList.item(0)``item()`

## FileReader 

FileReader  File  Blob 

`FileReader` FileReader 

```javascript
var reader = new FileReader();
```

FileReader 

- FileReader.error
- FileReader.readyState`0``1``2`
- FileReader.result ArrayBuffer 
- FileReader.onabort`abort`
- FileReader.onerror`error`
- FileReader.onload`load``result`
- FileReader.onloadstart`loadstart`
- FileReader.onloadend`loadend`
- FileReader.onprogress`progress`

`load`

```javascript
// HTML 
// <input type="file" onchange="onChange(event)">

function onChange(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onload = function (event) {
    console.log(event.target.result)
  };

  reader.readAsText(file);
}
```

`load`

FileReader 

- FileReader.abort()`readyState``2`
- FileReader.readAsArrayBuffer() ArrayBuffer `result` ArrayBuffer 
- FileReader.readAsBinaryString()`result`
- FileReader.readAsDataURL()`result` Data URL Base64 `<img>``src` Base64 `data:*/*;base64,`
- FileReader.readAsText()`result` Blob  UTF-8



```javascript
/* HTML 
  <input type="file" onchange="previewFile()">
  <img src="" height="200">
*/

function previewFile() {
  var preview = document.querySelector('img');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.addEventListener('load', function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
}
```

 Data URL `<img>``src`
