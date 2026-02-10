# Date 

`Date` JavaScript UTC19701100:00:001

## 

`Date`

```javascript
Date()
// "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"
```

`Date`

```javascript
Date(2000, 1, 1)
// "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"
```

`Date`

## 

`Date``new``Date`

```javascript
var today = new Date();
```

`Date``.valueOf()``Date``toString()``Date`

```javascript
var today = new Date();

today
// "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"

// 
today.toString()
// "Tue Dec 01 2015 09:34:43 GMT+0800 (CST)"
```

`today``Date``toString`

`Date`

```javascript
// 
new Date(1378218728000)
// Tue Sep 03 2013 22:32:08 GMT+0800 (CST)

// 
new Date('January 6, 2013');
// Sun Jan 06 2013 00:00:00 GMT+0800 (CST)

// 
// 
new Date(2013, 0, 1, 0, 0, 0, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
```

`Date`

1970

```javascript
new Date(-1378218728000)
// Fri Apr 30 1926 17:27:52 GMT+0800 (CST)
```

`Date.parse()`

```javascript
new Date('2013-2-15')
new Date('2013/2/15')
new Date('02/15/2013')
new Date('2013-FEB-15')
new Date('FEB, 15, 2013')
new Date('FEB 15, 2013')
new Date('February, 15, 2013')
new Date('February 15, 2013')
new Date('15 Feb 2013')
new Date('15, February, 2013')
// Fri Feb 15 2013 00:00:00 GMT+0800 (CST)
```



“”`Date`

```javascript
new Date(2013)
// Thu Jan 01 1970 08:00:02 GMT+0800 (CST)
```

2013

```javascript
new Date(2013, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
new Date(2013, 0, 1)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
new Date(2013, 0, 1, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
new Date(2013, 0, 1, 0, 0, 0, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
```

201311



- `2000``1900``10`1910
- `0``11`12
- `1``31`
- `0``23`
- `0``59`
- `0``59`
- `0``999`

`0``1``1``0`

`15`4

```javascript
new Date(2013, 15)
// Tue Apr 01 2014 00:00:00 GMT+0800 (CST)
new Date(2013, 0, 0)
// Mon Dec 31 2012 00:00:00 GMT+0800 (CST)
```

`0`



```javascript
new Date(2013, -1)
// Sat Dec 01 2012 00:00:00 GMT+0800 (CST)
new Date(2013, 0, -1)
// Sun Dec 30 2012 00:00:00 GMT+0800 (CST)
```



## 

`Date`

```javascript
var d1 = new Date(2000, 2, 1);
var d2 = new Date(2000, 3, 1);

d2 - d1
// 2678400000
d2 + d1
// "Sat Apr 01 2000 00:00:00 GMT+0800 (CST)Wed Mar 01 2000 00:00:00 GMT+0800 (CST)"
```

## 

### Date.now()

`Date.now`197011 00:00:00 UTC Unix 1000

```javascript
Date.now() // 1364026285194
```

### Date.parse()

`Date.parse`197011 00:00:00

 RFC 2822  ISO 8061 `YYYY-MM-DDTHH:mm:ss.sssZ``Z`

```javascript
Date.parse('Aug 9, 1995')
Date.parse('January 26, 2011 13:51:50')
Date.parse('Mon, 25 Dec 1995 13:30:00 GMT')
Date.parse('Mon, 25 Dec 1995 13:30:00 +0430')
Date.parse('2011-10-10')
Date.parse('2011-10-10T14:48:00')
```



`NaN`

```javascript
Date.parse('xxx') // NaN
```

### Date.UTC()

`Date.UTC`197011 00:00:00 UTC

```javascript
// 
Date.UTC(year, month[, date[, hrs[, min[, sec[, ms]]]]])

// 
Date.UTC(2011, 0, 1, 2, 3, 4, 567)
// 1293847384567
```

`Date``0``1``Date.UTC` UTC `Date`

## 

`Date``valueOf``toString`

- `to``Date`
- `get``Date`
- `set``Date`

### Date.prototype.valueOf()

`valueOf`19701100:00:00 UTC`getTime`

```javascript
var d = new Date();

d.valueOf() // 1362790014817
d.getTime() // 1362790014817
```

`Date`

```javascript
var start = new Date();
// ...
var end = new Date();
var elapsed = end - start;
```

### to 

**1Date.prototype.toString()**

`toString`

```javascript
var d = new Date(2013, 0, 1);

d.toString()
// "Tue Jan 01 2013 00:00:00 GMT+0800 (CST)"
d
// "Tue Jan 01 2013 00:00:00 GMT+0800 (CST)"
```

`toString``Date`

**2Date.prototype.toUTCString()**

`toUTCString` UTC 8

```javascript
var d = new Date(2013, 0, 1);

d.toUTCString()
// "Mon, 31 Dec 2012 16:00:00 GMT"
```

**3Date.prototype.toISOString()**

`toISOString` ISO8601 

```javascript
var d = new Date(2013, 0, 1);

d.toISOString()
// "2012-12-31T16:00:00.000Z"
```

`toISOString` UTC 

**4Date.prototype.toJSON()**

`toJSON` JSON  ISO `toISOString`

```javascript
var d = new Date(2013, 0, 1);

d.toJSON()
// "2012-12-31T16:00:00.000Z"
```

**5Date.prototype.toDateString()**

`toDateString`

```javascript
var d = new Date(2013, 0, 1);
d.toDateString() // "Tue Jan 01 2013"
```

**6Date.prototype.toTimeString()**

`toTimeString`

```javascript
var d = new Date(2013, 0, 1);
d.toTimeString() // "00:00:00 GMT+0800 (CST)"
```

**7**

 Date 

- `Date.prototype.toLocaleString()`
- `Date.prototype.toLocaleDateString()`
- `Date.prototype.toLocaleTimeString()`



```javascript
var d = new Date(2013, 0, 1);

d.toLocaleString()
// "2013/1/1 00:00:00"
// "1/1/2013 12:00:00 AM"

d.toLocaleDateString()
// "2013/1/1"
// "1/1/2013"

d.toLocaleTimeString()
// "00:00:00"
// "12:00:00 AM"
```



```javascript
dateObj.toLocaleString([locales[, options]])
dateObj.toLocaleDateString([locales[, options]])
dateObj.toLocaleTimeString([locales[, options]])
```

`locales``options``locales``en-US``zh-CN`

```javascript
var d = new Date(2013, 0, 1);

d.toLocaleString('en-US') // "1/1/2013, 12:00:00 AM"
d.toLocaleString('zh-CN') // "2013/1/1 00:00:00"

d.toLocaleDateString('en-US') // "1/1/2013"
d.toLocaleDateString('zh-CN') // "2013/1/1"

d.toLocaleTimeString('en-US') // "12:00:00 AM"
d.toLocaleTimeString('zh-CN') // "00:00:00"
```

`options`

- `dateStyle``full``long``medium``short`
- `timeStyle``full``long``medium``short`
- `month``numeric``2-digit``long``short``narrow`
- `year``numeric``2-digit`
- `weekday``long``short``narrow`
- `day``hour``minute``second``numeric``2-digit`
- `timeZone` IANA 
- `timeZoneName``long``short`
- `hour12`2412`true``false`



```javascript
var d = new Date(2013, 0, 1);

d.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})
// "Tuesday, January 1, 2013"

d.toLocaleDateString('en-US', {
  day: "2-digit",
  month: "long",
  year: "2-digit"
});
// "January 01, 13"

d.toLocaleTimeString('en-US', {
  timeZone: 'UTC',
  timeZoneName: 'short'
})
// "4:00:00 PM UTC"

d.toLocaleTimeString('en-US', {
  timeZone: 'Asia/Shanghai',
  timeZoneName: 'long'
})
// "12:00:00 AM China Standard Time"

d.toLocaleTimeString('en-US', {
  hour12: false
})
// "00:00:00"

d.toLocaleTimeString('en-US', {
  hour12: true
})
// "12:00:00 AM"
```

### get 

`Date``get*`

- `getTime()`19701100:00:00`valueOf`
- `getDate()`1
- `getDay()`01
- `getFullYear()`
- `getMonth()`011112
- `getHours()`0-23
- `getMilliseconds()`0-999
- `getMinutes()`0-59
- `getSeconds()`0-59
- `getTimezoneOffset()` UTC 

`get*`

- 0  59
- 0  23
- 0 6
- 1  31
- 0 11

```javascript
var d = new Date('January 6, 2013');

d.getDate() // 6
d.getMonth() // 0
d.getFullYear() // 2013
d.getTimezoneOffset() // -480
```

`-480` UTC `-480` UTC 480 UTC 8



```javascript
function leftDays() {
  var today = new Date();
  var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
  var msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((endYear.getTime() - today.getTime()) / msPerDay);
}
```

`get*``Date` UTC  UTC 

- `getUTCDate()`
- `getUTCFullYear()`
- `getUTCMonth()`
- `getUTCDay()`
- `getUTCHours()`
- `getUTCMinutes()`
- `getUTCSeconds()`
- `getUTCMilliseconds()`

```javascript
var d = new Date('January 6, 2013');

d.getDate() // 6
d.getUTCDate() // 5
```

`d`1600016`getDate`6 UTC 15`getUTCDate`5

### set 

`Date``set*`

- `setDate(date)`1-31
- `setFullYear(year [, month, date])`
- `setHours(hour [, min, sec, ms])`0-23
- `setMilliseconds(ms)`0-999
- `setMinutes(min [, sec, ms])`0-59
- `setMonth(month [, date])`0-11
- `setSeconds(sec [, ms])`0-59
- `setTime(milliseconds)`

`get*``setDay`0`0`1`11`12

```javascript
var d = new Date ('January 6, 2013');

d // Sun Jan 06 2013 00:00:00 GMT+0800 (CST)
d.setDate(9) // 1357660800000
d // Wed Jan 09 2013 00:00:00 GMT+0800 (CST)
```

`set*``setDate()`

```javascript
var d1 = new Date('January 6, 2013');

d1.setDate(32) // 1359648000000
d1 // Fri Feb 01 2013 00:00:00 GMT+0800 (CST)

var d2 = new Date ('January 6, 2013');

d2.setDate(-1) // 1356796800000
d2 // Sun Dec 30 2012 00:00:00 GMT+0800 (CST)
```

`d1.setDate(32)`13213121`d2.setDate(-1)`1230

`set``get`

```javascript
var d = new Date();

// 1000
d.setDate(d.getDate() + 1000);
// 6
d.setHours(d.getHours() + 6);
// 
d.setFullYear(d.getFullYear() - 1);
```

`set*``setTime()` UTC  UTC 

- `setUTCDate()`
- `setUTCFullYear()`
- `setUTCHours()`
- `setUTCMilliseconds()`
- `setUTCMinutes()`
- `setUTCMonth()`
- `setUTCSeconds()`

```javascript
var d = new Date('January 6, 2013');
d.getUTCHours() // 16
d.setUTCHours(22) // 1357423200000
d // Sun Jan 06 2013 06:00:00 GMT+0800 (CST)
```

1600 UTC 16 UTC 226

## 

- Rakhitha Nimesh[Getting Started with the Date Object](https://www.sitepoint.com/beginners-guide-to-javascript-date-and-time/)
- Ilya Kantor, [Date/Time functions](https://javascript.info/date)
