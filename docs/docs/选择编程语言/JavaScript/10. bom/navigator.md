# Navigator Screen 

`window.navigator` Navigator 

## Navigator 

### Navigator.userAgent

`navigator.userAgent` User Agent 

 Chrome `userAgent`

```javascript
navigator.userAgent
// "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1547.57 Safari/537.36"
```

`userAgent`“” JavaScript 

`userAgent``mobi`

```javascript
var ua = navigator.userAgent.toLowerCase();

if (/mobi/.test(ua)) {
  // 
} else {
  // 
}
```



```javascript
/mobi|android|touch|mini/.test(ua)
```

### Navigator.plugins

`Navigator.plugins` Plugin  FlashActiveX 

```javascript
var pluginsLength = navigator.plugins.length;

for (var i = 0; i < pluginsLength; i++) {
  console.log(navigator.plugins[i].name);
  console.log(navigator.plugins[i].filename);
  console.log(navigator.plugins[i].description);
  console.log(navigator.plugins[i].version);
}
```

### Navigator.platform

`Navigator.platform``MacIntel``Win32``Linux x86_64` 

```javascript
navigator.platform
// "Linux x86_64"
```

### Navigator.onLine

`navigator.onLine`

```javascript
navigator.onLine // true
```

`onLine``true``true``false`

`online``offline``window.ononline``window.onoffline`

```javascript
window.addEventListener('offline', function(e) { console.log('offline'); });
window.addEventListener('online', function(e) { console.log('online'); });
```

### Navigator.languageNavigator.languages

`Navigator.language`

```javascript
navigator.language // "en"
```

`Navigator.languages``Navigator.language`HTTP `Accept-Language`

```javascript
navigator.languages  // ["en-US", "en", "zh-CN", "zh", "zh-TW"]
```

`window``languagechange`

### Navigator.geolocation

`Navigator.geolocation` Geolocation  API  HTTPS 

Geolocation 

- Geolocation.getCurrentPosition()
- Geolocation.watchPosition()
- Geolocation.clearWatch()`watchPosition()`



### Navigator.cookieEnabled

`navigator.cookieEnabled` Cookie 

```javascript
navigator.cookieEnabled // true
```

 Cookie  Cookie`cookieEnabled``true`

## Navigator 

### Navigator.javaEnabled()

`navigator.javaEnabled()` Java Applet 

```javascript
navigator.javaEnabled() // false
```

### Navigator.sendBeacon()

`Navigator.sendBeacon()`XMLHttpRequest 

## Navigator 

Navigator 

### Navigator.deviceMemory

`navigator.deviceMemory` GB HTTPS 

2 0.250.51248 8GB`8`

```javascript
if (navigator.deviceMemory > 1) {
  await import('./costly-module.js');
}
```

 1GB

### Navigator.hardwareConcurrency

`navigator.hardwareConcurrency`

 CPU  CPU 

```javascript
if (navigator.hardwareConcurrency > 4) {
  await import('./costly-module.js');
}
```

4

 Web Worker Worker

```javascript
let workerList = [];

for (let i = 0; i < window.navigator.hardwareConcurrency; i++) {
  let newWorker = {
    worker: new Worker('cpuworker.js'),
    inUse: false
  };
  workerList.push(newWorker);
}
```

 Web Worker

### Navigator.connection

`navigator.connection`

- downlink/Mbps 25KB 
- downlinkMaxMbps
- effectiveType`slow-2g``2g``3g``4g`
- rtt25
- saveData`true``false`
- type`bluetooth``cellular``ethernet``none``wifi``wimax``other``unknown`

```javascript
if (navigator.connection.effectiveType === '4g') {
  await import('./costly-module.js');
}
```

 4G

## Screen 

Screen `window.screen`



- `Screen.height`
- `Screen.width`
- `Screen.availHeight` Mac  Dock `height`
- `Screen.availWidth`
- `Screen.pixelDepth``24`24
- `Screen.colorDepth``Screen.pixelDepth`colorDepth pixelDepth 
- `Screen.orientation``type``landscape-primary``landscape-secondary``portrait-primary``portrait-secondary`

`Screen.orientation`

```javascript
window.screen.orientation
// { angle: 0, type: "landscape-primary", onchange: null }
```

 1024 x 768

```javascript
if (window.screen.width >= 1024 && window.screen.height >= 768) {
  //  1024x768
}
```



```javascript
if ((screen.width <= 800) && (screen.height <= 600)) {
  window.location.replace('small.html');
} else {
  window.location.replace('wide.html');
}
```

