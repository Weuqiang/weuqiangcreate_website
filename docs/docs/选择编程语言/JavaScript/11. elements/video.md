# video audio

## 

`<video>``HTMLVideoElement``<audio>``HTMLAudioElement``HTMLVideoElement``HTMLAudioElement``HTMLMediaElement` HTML 

 HTML `src`

```html
<audio src="background_music.mp3"/>
<video src="news.mov" width=320 height=240/>
```

`<video>``width``height``<audio>`

`<source>`

```html
<audio id="music">
  <source src="music.mp3" type="audio/mpeg">  
  <source src="music.ogg" type='audio/ogg; codec="vorbis"'>
</audio>
```



`controls``<audio>``controls`

## HTMLMediaElement 

`HTMLMediaElement` HTML `<video>``<audio>`

`HTMLMediaElement`

- HTMLMediaElement.audioTracks
- HTMLMediaElement.autoplay HTML `autoplay`
- HTMLMediaElement.buffered TimeRanges `length``start(rangeId)`0`end()`
- HTMLMediaElement.controls HTML `controls`
- HTMLMediaElement.controlsList`nodownload``nofullscreen``noremoteplayback`
- HTMLMediaElement.crossOrigin Cookie HTML `crossorigin``anonymous``use-credentials`
- HTMLMediaElement.currentSrc
- HTMLMediaElement.currentTime
- HTMLMediaElement.defaultMuted HTML `muted`
- HTMLMediaElement.defaultPlaybackRate1.0
- HTMLMediaElement.disableRemotePlayback
- HTMLMediaElement.duration0
- HTMLMediaElement.ended
- HTMLMediaElement.error`null`
- HTMLMediaElement.loop HTML `loop`
- HTMLMediaElement.muted
- HTMLMediaElement.networkState0123
- HTMLMediaElement.paused
- HTMLMediaElement.playbackRate1.0
- HTMLMediaElement.played TimeRanges 
- HTMLMediaElement.preload`none``metadata``auto`
- HTMLMediaElement.readyState01234
- HTMLMediaElement.seekable TimeRanges 
- HTMLMediaElement.seeking
- HTMLMediaElement.src URL HTML `src`
- HTMLMediaElement.srcObject`src``MediaStream``MediaSource``Blob``File`
- HTMLMediaElement.textTracks
- HTMLMediaElement.videoTracks
- HTMLMediaElement.volume0.0 1.0 

`HTMLMediaElement`

- HTMLMediaElement.addTextTrack()
- HTMLMediaElement.captureStream() MediaStream 
- HTMLMediaElement.canPlayType() MIME `probably``maybe`
- HTMLMediaElement.fastSeek()
- HTMLMediaElement.load()
- HTMLMediaElement.pause()
- HTMLMediaElement.play() Promise 

`play()`

```javascript
var myVideo = document.getElementById('myVideoElement');

myVideo
.play()
.then(() => {
  console.log('playing');
})
.catch((error) => {
  console.log(error);
});
```

## HTMLVideoElement 

`HTMLVideoElement``<video>``HTMLMediaElement`

HTMLVideoElement 

- HTMLVideoElement.height HTML `height`
- HTMLVideoElement.width HTML `width`
- HTMLVideoElement.videoHeight
- HTMLVideoElement.videoWidth
- HTMLVideoElement.poster URL HTML `poster`

HTMLVideoElement 

- HTMLVideoElement.getVideoPlaybackQuality()

## HTMLAudioElement 

`HTMLAudioElement``<audio>`

`HTMLMediaElement``Audio()``HTMLAudioElement`

```javascript
var song = new Audio([URLString]);
```

`Audio()` URL`src`

`HTMLAudioElement` DOM`play()`

```javascript
var a = new Audio();
if (a.canPlayType('audio/wav')) {
  a.src = 'soundeffect.wav';
  a.play();
}
 ```

## 

`<video>``<audio>`

- loadstart
- progress28
- loadedmetadata
- loadeddata
- canplay
- canplaythrough
- suspend
- stalled
- play`play()``playing``waiting`
- waiting`playing`
- playing
- timeupdate`currentTime`460
- pause`pause()`
- seeking`seeking``true`
- seeked`seeking``false`
- ended
- durationchange`duration`
- volumechange
- ratechange
- abort
- error
- emptied`error``abort``networkState`

