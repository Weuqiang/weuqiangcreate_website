# CSS 

CSS  JavaScript  JavaScript  CSS

## HTML  style 

 CSS `getAttribute()``setAttribute()``removeAttribute()``style`

```javascript
div.setAttribute(
  'style',
  'background-color:red;' + 'border:1px solid black;'
);
```

 HTML 

```html
<div style="background-color:red; border:1px solid black;" />
```

`style` CSSStyleDeclaration 

```javascript
e.style.fontSize = '18px';
e.style.color = 'black';
```

## CSSStyleDeclaration 

### 

CSSStyleDeclaration 

- `style``Element.style`
- `CSSStyle``style`
- `window.getComputedStyle()`

CSSStyleDeclaration  CSS 

```javascript
var divStyle = document.querySelector('div').style;

divStyle.backgroundColor = 'red';
divStyle.border = '1px solid black';
divStyle.width = '100px';
divStyle.height = '100px';
divStyle.fontSize = '10em';

divStyle.backgroundColor // red
divStyle.border // 1px solid black
divStyle.height // 100px
divStyle.width // 100px
```

`style` CSSStyleDeclaration  CSS `background-color``backgroundColor` CSS  CSS  JavaScript `css``float``cssFloat`

`divStyle.width``100``100px`

`Element.style``window.getComputedStyle()`

### CSSStyleDeclaration 

**1CSSStyleDeclaration.cssText**

`CSSStyleDeclaration.cssText`

```javascript
var divStyle = document.querySelector('div').style;

divStyle.cssText = 'background-color: red;'
  + 'border: 1px solid black;'
  + 'height: 100px;'
  + 'width: 100px;';
```

`cssText` CSS 

`cssText`

```javascript
divStyle.cssText = '';
```

**2CSSStyleDeclaration.length**

`CSSStyleDeclaration.length`

```javascript
// HTML 
// <div id="myDiv"
//   style="height: 1px;width: 100%;background-color: #CA1;"
// ></div>
var myDiv = document.getElementById('myDiv');
var divStyle = myDiv.style;
divStyle.length // 3
```

`myDiv`3

**3CSSStyleDeclaration.parentRule**

`CSSStyleDeclaration.parentRule`CSSRule `null`

 CSSRule 

```javascript
var declaration = document.styleSheets[0].rules[0].style;
declaration.parentRule === document.styleSheets[0].rules[0]
// true
```

### CSSStyleDeclaration 

**1CSSStyleDeclaration.getPropertyPriority()**

`CSSStyleDeclaration.getPropertyPriority` CSS `important``important`

```javascript
// HTML 
// <div id="myDiv" style="margin: 10px!important; color: red;"/>
var style = document.getElementById('myDiv').style;
style.margin // "10px"
style.getPropertyPriority('margin') // "important"
style.getPropertyPriority('color') // ""
```

`margin``important``color`

**2CSSStyleDeclaration.getPropertyValue()**

`CSSStyleDeclaration.getPropertyValue` CSS 

```javascript
// HTML 
// <div id="myDiv" style="margin: 10px!important; color: red;"/>
var style = document.getElementById('myDiv').style;
style.margin // "10px"
style.getPropertyValue("margin") // "10px"
```

**3CSSStyleDeclaration.item()**

`CSSStyleDeclaration.item` CSS 

```javascript
// HTML 
// <div id="myDiv" style="color: red; background-color: white;"/>
var style = document.getElementById('myDiv').style;
style.item(0) // "color"
style.item(1) // "background-color"
```

`0` CSS `color``1` CSS `background-color`



**4CSSStyleDeclaration.removeProperty()**

`CSSStyleDeclaration.removeProperty` CSS 

```javascript
// HTML 
// <div id="myDiv" style="color: red; background-color: white;">
//   111
// </div>
var style = document.getElementById('myDiv').style;
style.removeProperty('color') // 'red'
// HTML 
// <div id="myDiv" style="background-color: white;">
```

`color`

**5CSSStyleDeclaration.setProperty()**

`CSSStyleDeclaration.setProperty` CSS 



- 
- 
- `important` CSS `!important`

```javascript
// HTML 
// <div id="myDiv" style="color: red; background-color: white;">
//   111
// </div>
var style = document.getElementById('myDiv').style;
style.setProperty('border', '1px solid blue');
```

`myDiv`

## CSS 

CSS  CSS “CSS”

`style`

```javascript
typeof element.style.animationName === 'string';
typeof element.style.transform === 'string';
```

 CSS `undefined`

```javascript
document.body.style['maxWidth'] // ""
document.body.style['maximumWidth'] // undefined
```

`max-width``maximum-width`

 CSS `style`

```javascript
document.body.style['backgroundColor'] // ""
document.body.style['background-color'] // ""
```

 CSS 

```javascript
var content = document.getElementById('content');
typeof content.style['webkitAnimation'] === 'string'
```



```javascript
function isPropertySupported(property) {
  if (property in document.body.style) return true;
  var prefixes = ['Moz', 'Webkit', 'O', 'ms', 'Khtml'];
  var prefProperty = property.charAt(0).toUpperCase() + property.substr(1);

  for(var i = 0; i < prefixes.length; i++){
    if((prefixes[i] + prefProperty) in document.body.style) return true;
  }

  return false;
}

isPropertySupported('background-clip')
// true
```

## CSS 

 CSS  JavaScript  CSS 



### CSS.escape()

`CSS.escape` CSS 

```html
<div id="foo#bar">
```

`id``#` CSS `document.querySelector('#foo#bar')``document.querySelector('#foo\\#bar')`

`CSS.escape`

```javascript
document.querySelector('#' + CSS.escape('foo#bar'))
```

### CSS.supports()

`CSS.supports` CSS 

 CSS 

```javascript
// 
CSS.supports('transform-origin', '5px') // true

// 
CSS.supports('display: table-cell') // true
```



```javascript
CSS.supports('display: table-cell;') // false
```

## window.getComputedStyle()

inline style

`window.getComputedStyle()` CSSStyleDeclaration “” CSS 

```javascript
var div = document.querySelector('div');
var styleObj = window.getComputedStyle(div);
styleObj.backgroundColor
```

`div`

CSSStyleDeclaration 

`getComputedStyle``:before``:after``:first-line``:first-letter`

```javascript
var result = window.getComputedStyle(div, ':before');
```



```javascript
var elem = document.getElementById('elem-container');
var styleObj = window.getComputedStyle(elem, null)
var height = styleObj.height;
// 
var height = styleObj['height'];
var height = styleObj.getPropertyValue('height');
```

`height``styleObj` CSSStyleDeclaration  CSSStyleDeclaration 



- CSSStyleDeclaration  CSS `px``rgb(#, #, #)``rgba(#, #, #, #)`
- CSS `margin``marginLeft``marginTop``font``font-size`
-  CSS `styleObj['z-index']` CSS `styleObj.zIndex`
-  CSSStyleDeclaration `cssText`

## CSS 

CSS  CSS  DOM `:before``:after``content`

 HTML 

```html
<div id="test">Test content</div>
```

CSS `:before`

```css
#test:before {
  content: 'Before ';
  color: #FF0;
}
```

`style``window.getComputedStyle()`JavaScript 

```javascript
var test = document.querySelector('#test');

var result = window.getComputedStyle(test, ':before').content;
var color = window.getComputedStyle(test, ':before').color;
```

 CSSStyleDeclaration `getPropertyValue`

```javascript
var result = window.getComputedStyle(test, ':before')
  .getPropertyValue('content');
var color = window.getComputedStyle(test, ':before')
  .getPropertyValue('color');
```

## StyleSheet 

### 

`StyleSheet``<link>``<style>`

`document``styleSheets``StyleSheet`

```javascript
var sheets = document.styleSheets;
var sheet = document.styleSheets[0];
sheet instanceof StyleSheet // true
```

`<style>``StyleSheet``sheet`

```javascript
// HTML  <style id="myStyle"></style>
var myStyleSheet = document.getElementById('myStyle').sheet;
myStyleSheet instanceof StyleSheet // true
```

`StyleSheet` XML `CSSStyleSheet` CSS `CSSStyleSheet``StyleSheet`

### 

`StyleSheet`

**1StyleSheet.disabled**

`StyleSheet.disabled``disabled``true``<link>``alternate stylesheet`

`disabled` JavaScript  HTML 

**2StyleSheet.href**

`StyleSheet.href``null`

```javascript
document.styleSheets[0].href
```

**3StyleSheet.media**

`StyleSheet.media``MediaList`screenprinthandheldall`screen`

```javascript
document.styleSheets[0].media.mediaText
// "all"
```

`MediaList``appendMedium``deleteMedium`

```javascript
document.styleSheets[0].media.appendMedium('handheld');
document.styleSheets[0].media.deleteMedium('print');
```

**4StyleSheet.title**

`StyleSheet.title``title`

**5StyleSheet.type**

`StyleSheet.type``type``text/css`

```javascript
document.styleSheets[0].type  // "text/css"
```

**6StyleSheet.parentStyleSheet**

CSS `@import``StyleSheet.parentStyleSheet``null`

```javascript
if (stylesheet.parentStyleSheet) {
  sheet = stylesheet.parentStyleSheet;
} else {
  sheet = stylesheet;
}
```

**7StyleSheet.ownerNode**

`StyleSheet.ownerNode``StyleSheet` DOM `<link>``<style>``null`

```javascript
// HTML
// <link rel="StyleSheet" href="example.css" type="text/css" />
document.styleSheets[0].ownerNode // [object HTMLLinkElement]
```

**8CSSStyleSheet.cssRules**

`CSSStyleSheet.cssRules``CSSRuleList` CSS `cssText` CSS 

```javascript
var sheet = document.querySelector('#styleElement').sheet;

sheet.cssRules[0].cssText
// "body { background-color: red; margin: 20px; }"

sheet.cssRules[1].cssText
// "p { line-height: 1.4em; color: blue; }"
```

 CSS `style` CSS 

```javascript
cssStyleSheet.cssRules[0].style.color = 'red';
cssStyleSheet.cssRules[1].style.color = 'purple';
```

**9CSSStyleSheet.ownerRule**

`@import``ownerRule``CSSRule``@import``@import``ownerRule``null`

### 

**1CSSStyleSheet.insertRule()**

`CSSStyleSheet.insertRule` CSS 

```javascript
var sheet = document.querySelector('#styleElement').sheet;
sheet.insertRule('#block { color: white }', 0);
sheet.insertRule('p { color: red }', 1);
```

 CSS 00



[](https://drafts.csswg.org/cssom/#insert-a-css-rule)`try...catch`

**2CSSStyleSheet.deleteRule()**

`CSSStyleSheet.deleteRule``cssRules`

```javascript
document.styleSheets[0].deleteRule(1);
```

## 

`<style>`

```javascript
// 
var style = document.createElement('style');
style.setAttribute('media', 'screen');
style.innerHTML = 'body{color:red}';
document.head.appendChild(style);

// 
var style = (function () {
  var style = document.createElement('style');
  document.head.appendChild(style);
  return style;
})();
style.sheet.insertRule('.foo{color:red;}', 0);
```

`<link>``href` URL

```javascript
var linkElm = document.createElement('link');
linkElm.setAttribute('rel', 'stylesheet');
linkElm.setAttribute('type', 'text/css');
linkElm.setAttribute('href', 'reset-min.css');

document.head.appendChild(linkElm);
```

## CSSRuleList 

CSSRuleList  CSS  CSSRule 

 CSSRuleList `StyleSheet.cssRules`

```javascript
// HTML 
// <style id="myStyle">
//   h1 { color: red; }
//   p { color: blue; }
// </style>
var myStyleSheet = document.getElementById('myStyle').sheet;
var crl = myStyleSheet.cssRules;
crl instanceof CSSRuleList // true
```

CSSRuleList CSSRule `rules.item(index)``rules[index]`CSS `rules.length`

```javascript
crl[0] instanceof CSSRule // true
crl.length // 2
```

 CSSRuleList  StyleSheet `StyleSheet.insertRule()``StyleSheet.deleteRule()`

## CSSRule 

### 

 CSS CSS  CSS 

```css
.myClass {
  color: red;
  background-color: yellow;
}
```

JavaScript  CSSRule  CSS  CSSRuleList `StyleSheet.cssRules` CSSRule 

```javascript
// HTML 
// <style id="myStyle">
//   .myClass {
//     color: red;
//     background-color: yellow;
//   }
// </style>
var myStyleSheet = document.getElementById('myStyle').sheet;
var ruleList = myStyleSheet.cssRules;
var rule = ruleList[0];
rule instanceof CSSRule // true
```

### CSSRule 

**1CSSRule.cssText**

`CSSRule.cssText`

```javascript
rule.cssText
// ".myClass { color: red; background-color: yellow; }"
```

`@import``cssText``@import 'url'`

**2CSSRule.parentStyleSheet**

`CSSRule.parentStyleSheet`StyleSheet 

```javascript
rule.parentStyleSheet === myStyleSheet // true
```

**3CSSRule.parentRule**

`CSSRule.parentRule``null`

`@media`

```javascript
// HTML 
// <style id="myStyle">
//   @supports (display: flex) {
//     @media screen and (min-width: 900px) {
//       article {
//         display: flex;
//       }
//     }
//  }
// </style>
var myStyleSheet = document.getElementById('myStyle').sheet;
var ruleList = myStyleSheet.cssRules;

var rule0 = ruleList[0];
rule0.cssText
// "@supports (display: flex) {
//    @media screen and (min-width: 900px) {
//      article { display: flex; }
//    }
// }"

// 
//  cssRules  CSSRuleList 
rule0.cssRules instanceof CSSRuleList // true

var rule1 = rule0.cssRules[0];
rule1.cssText
// "@media screen and (min-width: 900px) {
//   article { display: flex; }
// }"

var rule2 = rule1.cssRules[0];
rule2.cssText
// "article { display: flex; }"

rule1.parentRule === rule0 // true
rule2.parentRule === rule1 // true
```

**4CSSRule.type**

`CSSRule.type`



- 1CSSStyleRule 
- 3`@import`
- 4`@media`CSSMediaRule 
- 5`@font-face`

### CSSStyleRule 

 CSS  CSS  CSSRule  CSSStyleRule 

CSSStyleRule 

**1CSSStyleRule.selectorText**

`CSSStyleRule.selectorText`

```javascript
var stylesheet = document.styleSheets[0];
stylesheet.cssRules[0].selectorText // ".myClass"
```



**2CSSStyleRule.style**

`CSSStyleRule.style`CSSStyleDeclaration 

```javascript
// HTML 
// <style id="myStyle">
//   p { color: red; }
// </style>
var styleSheet = document.getElementById('myStyle').sheet;
styleSheet.cssRules[0].style instanceof CSSStyleDeclaration
// true
```

CSSStyleDeclaration `cssText`

```javascript
styleSheet.cssRules[0].style.cssText
// "color: red;"
styleSheet.cssRules[0].selectorText
// "p"
```

### CSSMediaRule 

 CSS `@media` CSSRule  CSSMediaRule 

`media``conditionText``@media`MediaList `@media`

```javascript
// HTML 
// <style id="myStyle">
//   @media screen and (min-width: 900px) {
//     article { display: flex; }
//   }
// </style>
var styleSheet = document.getElementById('myStyle').sheet;
styleSheet.cssRules[0] instanceof CSSMediaRule
// true

styleSheet.cssRules[0].media
//  {
//    0: "screen and (min-width: 900px)",
//    appendMedium: function,
//    deleteMedium: function,
//    item: function,
//    length: 1,
//    mediaText: "screen and (min-width: 900px)"
// }

styleSheet.cssRules[0].conditionText
// "screen and (min-width: 900px)"
```

## window.matchMedia()

### 

`window.matchMedia()` CSS [`Media Query`](https://developer.mozilla.org/en-US/docs/DOM/Using_media_queries_from_code) MediaQueryList 

```javascript
var mdl = window.matchMedia('(min-width: 400px)');
mdl instanceof MediaQueryList // true
```

`mdl` mediaQueryList 

`MediaQuery``window.matchMedia` MediaQueryList 

```javascript
window.matchMedia('bad string') instanceof MediaQueryList // true
```

### MediaQueryList 

MediaQueryList 

**1MediaQueryList.media**

`MediaQueryList.media` MediaQuery 

```javascript
var mql = window.matchMedia('(min-width: 400px)');
mql.media // "(min-width: 400px)"
```

**2MediaQueryList.matches**

`MediaQueryList.matches` MediaQuery 

```javascript
if (window.matchMedia('(min-width: 400px)').matches) {
  /*  400  */
} else {
  /*  400  */
}
```

`mediaQuery` CSS 

```javascript
var result = window.matchMedia("(max-width: 700px)");

if (result.matches){
  var linkElm = document.createElement('link');
  linkElm.setAttribute('rel', 'stylesheet');
  linkElm.setAttribute('type', 'text/css');
  linkElm.setAttribute('href', 'small.css');

  document.head.appendChild(linkElm);
}
```

**3MediaQueryList.onchange**

 MediaQuery `change``MediaQueryList.onchange``change``change`MediaQueryListEvent  MediaQueryList `media``matches`

```javascript
var mql = window.matchMedia('(max-width: 600px)');

mql.onchange = function(e) {
  if (e.matches) {
    /*  600  */
  } else {
    /*  600  */
  }
}
```

`change`600600

### MediaQueryList 

MediaQueryList `MediaQueryList.addListener()``MediaQueryList.removeListener()``change`

```javascript
var mql = window.matchMedia('(max-width: 600px)');

// 
mql.addListener(mqCallback);

// 
mql.removeListener(mqCallback);

function mqCallback(e) {
  if (e.matches) {
    /*  600  */
  } else {
    /*  600  */
  }
}
```

`MediaQueryList.removeListener()``MediaQueryList.onchange`

