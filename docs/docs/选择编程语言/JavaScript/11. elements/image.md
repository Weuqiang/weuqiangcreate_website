# img 

## 

`<img>` HTMLImageElement 

`Image``HTMLImageElement`

```javascript
var img = new Image();
img instanceof Image // true
img instanceof HTMLImageElement // true
```

`Image``<img>`

```javascript
// 
Image(width, height)

// 
var myImage = new Image(100, 200);
```

`<img>``src`

```javascript
var img = new Image();
img.src = 'picture.jpg';
```

`<img>`

```javascript
var img = new Image();
img.src = 'image1.png';
document.body.appendChild(img);
```

`Image``HTMLImageElement`

- `document.images`
- `document.getElementById``<img>`
- `document.createElement('img')``<img>`

```javascript
document.images[0] instanceof HTMLImageElement
// true

var img = document.getElementById('myImg');
img instanceof HTMLImageElement
// true

var img = document.createElement('img');
img instanceof HTMLImageElement
// true
```

`HTMLImageElement` NodeElementHTMLElement 

## 

**1HTMLImageElement.src**

`HTMLImageElement.src`

```javascript
// HTML 
// <img width="300" height="400" id="myImg" src="http://example.com/pic.jpg">
var img = document.getElementById('img');
img.src // http://example.com/pic.jpg
```

**2HTMLImageElement.currentSrc**

`HTMLImageElement.currentSrc`JavaScript  CSS  mediaQuery 

**3HTMLImageElement.alt**

`HTMLImageElement.alt``<img>` HTML `alt`

**4HTMLImageElement.isMapHTMLImageElement.useMap**

`HTMLImageElement.isMap``<img>` HTML `ismap`

`HTMLImageElement.useMap``<img>` HTML `usemap``<map>`

**5HTMLImageElement.srcsetHTMLImageElement.sizes**

`HTMLImageElement.srcset``HTMLImageElement.sizes``<img>``srcset``sizes``<img>``srcset``sizes``srcset`

```javascript
// HTML 
// <img srcset="example-320w.jpg 320w,
//              example-480w.jpg 480w,
//              example-800w.jpg 800w"
//      sizes="(max-width: 320px) 280px,
//             (max-width: 480px) 440px,
//             800px"
//      id="myImg"
//      src="example-800w.jpg">
var img = document.getElementById('myImg');
img.srcset
// "example-320w.jpg 320w,
//  example-480w.jpg 480w,
//  example-800w.jpg 800w"

img.sizes
// "(max-width: 320px) 280px,
//  (max-width: 480px) 440px,
//  800px"
```

`sizes``320px``280px``480px``440px``800px``srcset`

## HTMLImageElement.widthHTMLImageElement.height

`width``<img>` HTML `height`

```javascript
// HTML 
// <img width="300" height="400" id="myImg" src="pic.jpg">
var img = document.getElementById('img');
img.width // 300
img.height // 400
```

`0`

 HTML `width``height``HTMLImageElement.naturalWidth``HTMLImageElement.naturalHeight`

## HTMLImageElement.naturalWidthHTMLImageElement.naturalHeight

`HTMLImageElement.naturalWidth``HTMLImageElement.naturalHeight`

`0`

```javascript
var img = document.getElementById('img');
if (img.naturalHeight > img.naturalWidth) {
  img.classList.add('portrait');
}
```

`portrait`

## HTMLImageElement.complete

`HTMLImageElement.complete``<img>``src``true`

## HTMLImageElement.crossOrigin

`HTMLImageElement.crossOrigin``<img>``crossorigin`



- `anonymous`credentials
- `use-credentials`

```javascript
// HTML 
// <img crossorigin="anonymous" id="myImg" src="pic.jpg">
var img = document.getElementById('img');
img.crossOrigin // "anonymous"
```

## HTMLImageElement.referrerPolicy

`HTMLImageElement.referrerPolicy``<img>` HTML `referrerpolicy` HTTP `referrer`



- `no-referrer``referrer`
- `no-referrer-when-downgrade` HTTPS `referrer`
- `origin``referrer`
- `origin-when-cross-origin``referrer`
- `unsafe-url``referrer`

## HTMLImageElement.xHTMLImageElement.y

`HTMLImageElement.x``HTMLImageElement.y`

## 

`onload`

```javascript
// HTML  <img src="example.jpg" onload="loadImage()">
function loadImage() {
  console.log('Image is loaded');
}
```

`onerror`

```javascript
// HTML  <img src="image.gif" onerror="myFunction()">
function myFunction() {
  console.log('There is something wrong');
}
```
