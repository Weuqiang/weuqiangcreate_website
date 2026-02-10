# 

## 

drag

`draggable``true`

```html
<div draggable="true">
  
</div>
```

`div`

`draggable``<img>``<a>``false`

`draggable``true`



- `drag`
- `dragstart``target`
- `dragend` ESC `target``dragstart``dragend`
- `dragenter``target`drop
- `dragover``target``dragenter``dragenter``dragover`
- `dragleave``target`
- `drop``drop` ESC 



```javascript
div.addEventListener('dragstart', function (e) {
  this.style.backgroundColor = 'red';
}, false);

div.addEventListener('dragend', function (e) {
  this.style.backgroundColor = 'green';
}, false);
```

`div`



```javascript
/* HTML 
 <div class="dropzone">
   <div id="draggable" draggable="true">
     
   </div>
 </div>
 <div class="dropzone"></div>
 <div class="dropzone"></div>
 <div class="dropzone"></div>
*/

// 
var dragged;

document.addEventListener('dragstart', function (event) {
  // 
  dragged = event.target;
  // 
  event.target.style.opacity = 0.5;
}, false);

document.addEventListener('dragend', function (event) {
  // 
  event.target.style.opacity = '';
}, false);

document.addEventListener('dragover', function (event) {
  // 
  event.preventDefault();
}, false);

document.addEventListener('dragenter', function (event) {
  // 
  // 
  if (event.target.className === 'dropzone') {
    event.target.style.background = 'purple';
  }
}, false);

document.addEventListener('dragleave', function( event ) {
  // 
  if (event.target.className === 'dropzone') {
    event.target.style.background = '';
  }
}, false);

document.addEventListener('drop', function( event ) {
  // 
  event.preventDefault();
  if (event.target.className === 'dropzone') {
    // 
    event.target.style.background = '';
    // 
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild( dragged );
  }
}, false);
```



- 
- `dragstart``dragend`
- `dragenter``dragover`

```html
<div ondragover="return false">
<div ondragover="event.preventDefault()">
```

`div`

## DragEvent 

`DragEvent``MouseEvent``Event`

`DragEvent()`

```javascript
new DragEvent(type, options)
```

`DragEvent()``MouseEvent``Event``dataTransfer``null``DataTransfer`

`DataTransfer`DataTransfer 

## DataTransfer 

`DragEvent.dataTransfer``DataTransfer`

`DataTransfer()``DataTransfer`

```javascript
var dataTrans = new DataTransfer();
```

`DataTransfer()`

 MIME `text/plain``image/jpeg` URL

`dragenter``dragover`drop`text/uri-list`

`drop`

## DataTransfer 

### DataTransfer.dropEffect

`DataTransfer.dropEffect`drop

- copy
- move
- link
- none



```javascript
target.addEventListener('dragover', function (e) {
  e.preventDefault();
  e.stopPropagation();
  e.dataTransfer.dropEffect = 'copy';
});
```

`drop`

`dropEffect``dragenter``dragover``dragstart``drag``dragleave`

### DataTransfer.effectAllowed

`DataTransfer.effectAllowed`

- copy
- move
- link
- copyLink`copy``link`
- copyMove`copy``move`
- linkMove`link``move`
- all
- none
- uninitialized`all`



`dropEffect`

`dragstart`

```javascript
source.addEventListener('dragstart', function (e) {
  e.dataTransfer.effectAllowed = 'move';
});

target.addEventListener('dragover', function (e) {
  e.dataTransfer.dropEffect = 'move';
});
```

`dropEffect``effectAllowed``none``drop`

### DataTransfer.files

`DataTransfer.files` FileList  FileList 



```javascript
// HTML 
// <div id="output" style="min-height: 200px;border: 1px solid black;">
//   
// </div>

var div = document.getElementById('output');

div.addEventListener("dragenter", function( event ) {
  div.textContent = '';
  event.stopPropagation();
  event.preventDefault();
}, false);

div.addEventListener("dragover", function( event ) {
  event.stopPropagation();
  event.preventDefault();
}, false);

div.addEventListener("drop", function( event ) {
  event.stopPropagation();
  event.preventDefault();
  var files = event.dataTransfer.files;
  for (var i = 0; i < files.length; i++) {
    div.textContent += files[i].name + ' ' + files[i].size + '\n';
  }
}, false);
```

`dataTransfer.files``FileReader`

```javascript
div.addEventListener('drop', function(e) {
  e.preventDefault();
  e.stopPropagation();

  var fileList = e.dataTransfer.files;
  if (fileList.length > 0) {
    var file = fileList[0];
    var reader = new FileReader();
    reader.onloadend = function(e) {
      if (e.target.readyState === FileReader.DONE) {
        var content = reader.result;
        div.innerHTML = 'File: ' + file.name + '\n\n' + content;
      }
    }
    reader.readAsBinaryString(file);
  }
});
```

### DataTransfer.types

`DataTransfer.types` MIME `text/plain`

`dataTransfer``drop`

```javascript
function contains(list, value){
  for (var i = 0; i < list.length; ++i) {
    if(list[i] === value) return true;
  }
  return false;
}

function doDragOver(event) {
  var isLink = contains(event.dataTransfer.types, 'text/uri-list');
  if (isLink) event.preventDefault();
}
```



### DataTransfer.items

`DataTransfer.items`DataTransferItemList DataTransferItem 

DataTransferItemList 

- `length`
- `add(data, type)``text/html``text/plain`
- `add(file)``add`
- `remove(index)`
- `clear()`

DataTransferItem 

- `kind``string``file`
- `type` MIME 
- `getAsFile()``null`
- `getAsString(callback)`



```javascript
div.addEventListener('drop', function (e) {
  e.preventDefault();
  if (e.dataTransfer.items != null) {
    for (var i = 0; i < e.dataTransfer.items.length; i++) {
      console.log(e.dataTransfer.items[i].kind + ': ' + e.dataTransfer.items[i].type);
    }
  }
});
```

## DataTransfer 

### DataTransfer.setData()

`DataTransfer.setData()`

```javascript
event.dataTransfer.setData('text/plain', 'Text to drag');
```



`text/plain``dataTransfer`

`dataTransfer`

```html
<div draggable="true">
  aaa
</div>
```

`<div>``aaa`

`setData`

```html
<div
  draggable="true"
  ondragstart="event.dataTransfer.setData('text/plain', 'bbb')"
>
  aaa
</div>
```

`bbb``aaa`

`text/plain`

```javascript
var dt = event.dataTransfer;

// 
dt.setData('text/uri-list', 'http://www.example.com');
dt.setData('text/plain', 'http://www.example.com');

//  HTML 
dt.setData('text/html', 'Hello there, <strong>stranger</strong>');
dt.setData('text/plain', 'Hello there, <strong>stranger</strong>');

//  URL
dt.setData('text/uri-list', imageurl);
dt.setData('text/plain', imageurl);
```



```javascript
var dt = event.dataTransfer;
dt.setData('application/x-bookmark', bookmarkString);
dt.setData('text/uri-list', 'http://www.example.com');
dt.setData('text/plain', 'http://www.example.com');
```

`drop``drop`

### DataTransfer.getData()

`DataTransfer.getData()``setData``drop`

`drop`

```javascript
function onDrop(event) {
  var data = event.dataTransfer.getData('text/plain');
  event.target.textContent = data;
  event.preventDefault();
}
```



`getData`

```javascript
function doDrop(event) {
  var lines = event.dataTransfer.getData('text/uri-list').split('\n');
  for (let line of lines) {
    let link = document.createElement('a');
    link.href = line;
    link.textContent = line;
    event.target.appendChild(link);
  }
  event.preventDefault();
}
```

`getData`

`URL`

```javascript
var link = event.dataTransfer.getData('URL');
```



```javascript
function doDrop(event) {
  var types = event.dataTransfer.types;
  var supportedTypes = ['text/uri-list', 'text/plain'];
  types = supportedTypes.filter(function (value) { types.includes(value) });
  if (types.length) {
    var data = event.dataTransfer.getData(types[0]);
  }
  event.preventDefault();
}
```

### DataTransfer.clearData()

`DataTransfer.clearData()`

```javascript
event.dataTransfer.clearData('text/uri-list');
```

`text/uri-list`

`DataTransfer.types``Files`

`dragstart`

### DataTransfer.setDragImage()

`dragstart`

`DataTransfer.setDragImage()``<img>``<canvas>``null`



```javascript
/* HTML 
 <div id="drag-with-image" class="dragdemo" draggable="true">
   drag me
 </div>
*/

var div = document.getElementById('drag-with-image');
div.addEventListener('dragstart', function (e) {
  var img = document.createElement('img');
  img.src = 'http://path/to/img';
  e.dataTransfer.setDragImage(img, 0, 0);
}, false);
```
