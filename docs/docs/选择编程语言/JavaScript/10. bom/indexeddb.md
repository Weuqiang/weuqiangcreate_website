# IndexedDB API

## 



Cookie  4KBLocalStorage  2.5MB  10MB  IndexedDB 

IndexedDB IndexedDB  LocalStorage IndexedDB  SQL  NoSQL 

IndexedDB 

**1** IndexedDB object store JavaScript “”

**2**  IndexedDB  LocalStorage 

**3** IndexedDB transaction

**4** IndexedDB 

**5** IndexedDB  LocalStorage  250MB

**6** IndexedDB ArrayBuffer  Blob 

## 

IndexedDB  API API

- IDBDatabase 
- IDBObjectStore 
-  IDBIndex 
-  IDBTransaction 
- IDBRequest 
-  IDBCursor 
- IDBKeyRange 



**1**

 +  + 

IndexedDB 

**2**

object store

**3**



```javascript
{ id: 1, text: 'foo' }
```

`id`



**4**



**5**

`error``abort``complete`

## 

IndexedDB  API 

### 

 IndexedDB `indexedDB.open()`

```javascript
var request = window.indexedDB.open(databaseName, version);
```

`1`

`indexedDB.open()` IDBRequest `error``success``upgradeneeded`

**1error **

`error`

```javascript
request.onerror = function (event) {
  console.log('');
};
```

**2success **

`success`

```javascript
var db;

request.onsuccess = function (event) {
  db = request.result;
  console.log('');
};
```

`request``result`

**3upgradeneeded **

`upgradeneeded`

```javascript
var db;

request.onupgradeneeded = function (event) {
  db = event.target.result;
}
```

`target.result`

### 

`upgradeneeded`



```javascript
request.onupgradeneeded = function(event) {
  db = event.target.result;
  var objectStore = db.createObjectStore('person', { keyPath: 'id' });
}
```

`person``id`



```javascript
request.onupgradeneeded = function (event) {
  db = event.target.result;
  var objectStore;
  if (!db.objectStoreNames.contains('person')) {
    objectStore = db.createObjectStore('person', { keyPath: 'id' });
  }
}
```

key`{ id: 1, name: '' }``id``{ foo: { bar: 'baz' } }``foo.bar`

 IndexedDB 

```javascript
var objectStore = db.createObjectStore(
  'person',
  { autoIncrement: true }
);
```





```javascript
request.onupgradeneeded = function(event) {
  db = event.target.result;
  var objectStore = db.createObjectStore('person', { keyPath: 'id' });
  objectStore.createIndex('name', 'name', { unique: false });
  objectStore.createIndex('email', 'email', { unique: true });
}
```

`IDBObject.createIndex()`

### 



```javascript
function add() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .add({ id: 1, name: '', age: 24, email: 'zhangsan@example.com' });

  request.onsuccess = function (event) {
    console.log('');
  };

  request.onerror = function (event) {
    console.log('');
  }
}

add();
```

“”“”`IDBTransaction.objectStore(name)` IDBObjectStore `add()`

`success``error`

### 



```javascript
function read() {
   var transaction = db.transaction(['person']);
   var objectStore = transaction.objectStore('person');
   var request = objectStore.get(1);

   request.onerror = function(event) {
     console.log('');
   };

   request.onsuccess = function( event) {
      if (request.result) {
        console.log('Name: ' + request.result.name);
        console.log('Age: ' + request.result.age);
        console.log('Email: ' + request.result.email);
      } else {
        console.log('');
      }
   };
}

read();
```

`objectStore.get()`

### 

 IDBCursor

```javascript
function readAll() {
  var objectStore = db.transaction('person').objectStore('person');

   objectStore.openCursor().onsuccess = function (event) {
     var cursor = event.target.result;

     if (cursor) {
       console.log('Id: ' + cursor.key);
       console.log('Name: ' + cursor.value.name);
       console.log('Age: ' + cursor.value.age);
       console.log('Email: ' + cursor.value.email);
       cursor.continue();
    } else {
      console.log('');
    }
  };
}

readAll();
```

`openCursor()``success`

### 

`IDBObject.put()`

```javascript
function update() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .put({ id: 1, name: '', age: 35, email: 'lisi@example.com' });

  request.onsuccess = function (event) {
    console.log('');
  };

  request.onerror = function (event) {
    console.log('');
  }
}

update();
```

`put()``1`

### 

`IDBObjectStore.delete()`

```javascript
function remove() {
  var request = db.transaction(['person'], 'readwrite')
    .objectStore('person')
    .delete(1);

  request.onsuccess = function (event) {
    console.log('');
  };
}

remove();
```

### 



`name`

```javascript
objectStore.createIndex('name', 'name', { unique: false });
```

`name`

```javascript
var transaction = db.transaction(['person'], 'readonly');
var store = transaction.objectStore('person');
var index = store.index('name');
var request = index.get('');

request.onsuccess = function (e) {
  var result = e.target.result;
  if (result) {
    // ...
  } else {
    // ...
  }
}
```

## indexedDB 

`indexedDB`

### indexedDB.open()

`indexedDB.open()` IDBOpenDBRequest 

```javascript
var openRequest = window.indexedDB.open('test', 1);
```

`test``1`

`open()``0``0``1`

4

- **success**
- **error**
- **upgradeneeded**
- **blocked**

`upgradeneeded``success`

4

```javascript
var openRequest = indexedDB.open('test', 1);
var db;

openRequest.onupgradeneeded = function (e) {
  console.log('Upgrading...');
}

openRequest.onsuccess = function (e) {
  console.log('Success!');
  db = openRequest.result;
}

openRequest.onerror = function (e) {
  console.log('Error');
  console.log(e);
}
```

`open()`IDBOpenDBRequest`success``openRequest.result``IndexedDB`

### indexedDB.deleteDatabase()

`indexedDB.deleteDatabase()``IDBOpenDBRequest``IDBOpenDBRequest`

- `success`
- `error`

```javascript
var DBDeleteRequest = window.indexedDB.deleteDatabase('demo');

DBDeleteRequest.onerror = function (event) {
  console.log('Error');
};

DBDeleteRequest.onsuccess = function (event) {
  console.log('success');
};
```

`deleteDatabase()``versionchange`



### indexedDB.cmp()

`indexedDB.cmp()` indexedDB `0``1``-1`

```javascript
window.indexedDB.cmp(1, 2) // -1
```

 JavaScript 

```javascript
window.indexedDB.cmp(1, true) // 
window.indexedDB.cmp({}, {}) // 
```

## IDBRequest 

IDBRequest `indexedDB.open()``indexedDB.deleteDatabase()`

`readyState``pending``done`

`success``error``result``error``pending`

IDBRequest 

- `IDBRequest.readyState``pending``done`
- `IDBRequest.result`
- `IDBRequest.error`
- `IDBRequest.source` ObjectStore
- `IDBRequest.transaction``null`
- `IDBRequest.onsuccess``success`
- `IDBRequest.onerror``error`

IDBOpenDBRequest  IDBRequest 

- `IDBOpenDBRequest.onblocked``blocked``upgradeneeded`
- `IDBOpenDBRequest.onupgradeneeded``upgradeneeded`

## IDBDatabase 

`IDBOpenDBRequest``result``IDBDatabase`

```javascript
var db;
var DBOpenRequest = window.indexedDB.open('demo', 1);

DBOpenRequest.onerror = function (event) {
  console.log('Error');
};

DBOpenRequest.onsuccess = function(event) {
  db = DBOpenRequest.result;
  // ...
};
```

### 

IDBDatabase 

- `IDBDatabase.name`
- `IDBDatabase.version`
- `IDBDatabase.objectStoreNames`DOMStringList  object store 
- `IDBDatabase.onabort` abort 
- `IDBDatabase.onclose` close 
- `IDBDatabase.onerror` error 
- `IDBDatabase.onversionchange``upgradeneeded``indexedDB.deleteDatabase()`

`objectStoreNames` DOMStringList  DOMStringList `contains`

```javascript
if (!db.objectStoreNames.contains('firstOS')) {
  db.createObjectStore('firstOS');
}
```



### 

IDBDatabase 

- `IDBDatabase.close()`
- `IDBDatabase.createObjectStore()` IDBObjectStore `versionchange`
- `IDBDatabase.deleteObjectStore()``versionchange`
- `IDBDatabase.transaction()` IDBTransaction 

`createObjectStore()`

```javascript
var request = window.indexedDB.open('demo', 2);

request.onupgradeneeded = function (event) {
  var db = event.target.result;

  db.onerror = function(event) {
    console.log('error');
  };

  var objectStore = db.createObjectStore('items');

  // ...
};
```

`items``objectStoreNames`

`createObjectStore()`

```javascript
db.createObjectStore('test', { keyPath: 'email' });
db.createObjectStore('test2', { autoIncrement: true });
```

`keyPath``email``null``autoIncrement`12`false``keyPath``autoIncrement``keyPath`

`deleteObjectStore()`

```javascript
var dbName = 'sampleDB';
var dbVersion = 2;
var request = indexedDB.open(dbName, dbVersion);

request.onupgradeneeded = function(e) {
  var db = request.result;
  if (e.oldVersion < 1) {
    db.createObjectStore('store1');
  }

  if (e.oldVersion < 2) {
    db.deleteObjectStore('store1');
    db.createObjectStore('store2');
  }

  // ...
};
```

`transaction()` IDBTransaction 

```javascript
var t = db.transaction(['items'], 'readwrite');
```

`transaction()``readonly``readwrite``readwrite``readonly``readonly`

## IDBObjectStore 

IDBObjectStore object store`IDBDatabase.createObjectStore()` IDBObjectStore 

IDBDatabase `transaction()``objectStore()` IDBObjectStore 

```javascript
db.transaction(['test'], 'readonly')
  .objectStore('test')
  .get(X)
  .onsuccess = function (e) {}
```

### 

IDBObjectStore 

- `IDBObjectStore.indexNames`DOMStringList
- `IDBObjectStore.keyPath`
- `IDBObjectStore.name`
- `IDBObjectStore.transaction`
- `IDBObjectStore.autoIncrement`

### 

IDBObjectStore 

**1IDBObjectStore.add()**

`IDBObjectStore.add()` IDBRequest `put()`

```javascript
objectStore.add(value, key)
```

`null`

`add()`

```javascript
var db;
var DBOpenRequest = window.indexedDB.open('demo', 1);

DBOpenRequest.onsuccess = function (event) {
  db = DBOpenRequest.result;
  var transaction = db.transaction(['items'], 'readwrite');

  transaction.oncomplete = function (event) {
    console.log('transaction success');
  };

  transaction.onerror = function (event) {
    console.log('transaction error: ' + transaction.error);
  };

  var objectStore = transaction.objectStore('items');
  var objectStoreRequest = objectStore.add({ foo: 1 });

  objectStoreRequest.onsuccess = function (event) {
    console.log('add data success');
  };

};
```

**2IDBObjectStore.put()**

`IDBObjectStore.put()` IDBRequest 

```javascript
objectStore.put(item, key)
```



**3IDBObjectStore.clear()**

`IDBObjectStore.clear()` IDBRequest 

```javascript
objectStore.clear()
```



**4IDBObjectStore.delete()**

`IDBObjectStore.delete()` IDBRequest 

```javascript
objectStore.delete(Key)
```



**5IDBObjectStore.count()**

`IDBObjectStore.count()` IDBRequest 

```javascript
IDBObjectStore.count(key)
```

 IDBKeyRange 

**6IDBObjectStore.getKey()**

`IDBObjectStore.getKey()` IDBRequest 

```javascript
objectStore.getKey(key)
```

 IDBKeyRange 

**7IDBObjectStore.get()**

`IDBObjectStore.get()` IDBRequest 

```javascript
objectStore.get(key)
```

**8IDBObjectStore.getAll()**

`DBObjectStore.getAll()` IDBRequest 

```javascript
// 
objectStore.getAll()

//  IDBKeyRange 
objectStore.getAll(query)

// 
objectStore.getAll(query, count)
```

**9IDBObjectStore.getAllKeys()**

`IDBObjectStore.getAllKeys()` IDBRequest 

```javascript
// 
objectStore.getAllKeys()

// 
objectStore.getAllKeys(query)

// 
objectStore.getAllKeys(query, count)
```

**10IDBObjectStore.index()**

`IDBObjectStore.index()` IDBIndex

```javascript
objectStore.index(name)
```



```javascript
var t = db.transaction(['people'], 'readonly');
var store = t.objectStore('people');
var index = store.index('name');

var request = index.get('foo');
```

`index()``name``get()``name`(`foo`)`name``get()``get()``success`

**11IDBObjectStore.createIndex()**

`IDBObjectStore.createIndex()``VersionChange`

```javascript
objectStore.createIndex(indexName, keyPath, objectParameters)
```



- indexName
- keyPath
- objectParameters



- unique`true`
- multiEntry`true`

`person`

```javascript
var person = {
  name: name,
  email: email,
  created: new Date()
};
```



```javascript
var store = db.createObjectStore('people', { autoIncrement: true });

store.createIndex('name', 'name', { unique: false });
store.createIndex('email', 'email', { unique: true });
```

`name``email`

**12IDBObjectStore.deleteIndex()**

`IDBObjectStore.deleteIndex()``VersionChange`

```javascript
objectStore.deleteIndex(indexName)
```

**13IDBObjectStore.openCursor()**

`IDBObjectStore.openCursor()`

```javascript
IDBObjectStore.openCursor()
```

`success``error`

```javascript
var t = db.transaction(['test'], 'readonly');
var store = t.objectStore('test');

var cursor = store.openCursor();

cursor.onsuccess = function (event) {
  var res = event.target.result;
  if (res) {
    console.log('Key', res.key);
    console.dir('Data', res.value);
    res.continue();
  }
}
```

`target.result``key``value``continue()``null`

`openCursor()` IDBKeyRange `next``prev``nextunique``prevunique`

**14IDBObjectStore.openKeyCursor()**

`IDBObjectStore.openKeyCursor()`

```javascript
IDBObjectStore.openKeyCursor()
```

## IDBTransaction 

IDBTransaction 

`IDBDatabase.transaction()` IDBTransaction 

```javascript
var db;
var DBOpenRequest = window.indexedDB.open('demo', 1);

DBOpenRequest.onsuccess = function(event) {
  db = DBOpenRequest.result;
  var transaction = db.transaction(['demo'], 'readwrite');

  transaction.oncomplete = function (event) {
    console.log('transaction success');
  };

  transaction.onerror = function (event) {
    console.log('transaction error: ' + transaction.error);
  };

  var objectStore = transaction.objectStore('demo');
  var objectStoreRequest = objectStore.add({ foo: 1 });

  objectStoreRequest.onsuccess = function (event) {
    console.log('add data success');
  };

};
```



```javascript
var trans1 = db.transaction('foo', 'readwrite');
var trans2 = db.transaction('foo', 'readwrite');
var objectStore2 = trans2.objectStore('foo')
var objectStore1 = trans1.objectStore('foo')
objectStore2.put('2', 'key');
objectStore1.put('1', 'key');
```

`key``2``1``trans1``trans2`

`complete`

IDBTransaction 

- `IDBTransaction.db` IDBDatabase
- `IDBTransaction.error``null`
- `IDBTransaction.mode``readonly``readwrite`
- `IDBTransaction.objectStoreNames` DOMStringList
- `IDBTransaction.onabort``abort`
- `IDBTransaction.oncomplete``complete`
- `IDBTransaction.onerror``error`

IDBTransaction 

- `IDBTransaction.abort()`
- `IDBTransaction.objectStore(name)` IDBObjectStore

## IDBIndex 

IDBIndex IDBIndex 

IDBIndex 

`IDBObjectStore.index()` IDBIndex 

```javascript
var transaction = db.transaction(['contactsList'], 'readonly');
var objectStore = transaction.objectStore('contactsList');
var myIndex = objectStore.index('lName');

myIndex.openCursor().onsuccess = function (event) {
  var cursor = event.target.result;
  if (cursor) {
    var tableRow = document.createElement('tr');
    tableRow.innerHTML =   '<td>' + cursor.value.id + '</td>'
                         + '<td>' + cursor.value.lName + '</td>'
                         + '<td>' + cursor.value.fName + '</td>'
                         + '<td>' + cursor.value.jTitle + '</td>'
                         + '<td>' + cursor.value.company + '</td>'
                         + '<td>' + cursor.value.eMail + '</td>'
                         + '<td>' + cursor.value.phone + '</td>'
                         + '<td>' + cursor.value.age + '</td>';
    tableEntry.appendChild(tableRow);

    cursor.continue();
  } else {
    console.log('Entries all displayed.');
  }
};
```

IDBIndex 

- `IDBIndex.name`
- `IDBIndex.objectStore`
- `IDBIndex.keyPath`
- `IDBIndex.multiEntry``keyPath``true`
- `IDBIndex.unique`

IDBIndex  IDBRequest 

- `IDBIndex.count()` IDBKeyRange 
- `IDBIndex.get(key)`
- `IDBIndex.getKey(key)`
- `IDBIndex.getAll()` IDBCursor 
- `IDBIndex.getAllKeys()``IDBIndex.getAll()`
- `IDBIndex.openCursor()` IDBCursor 
- `IDBIndex.openKeyCursor()``IDBIndex.openCursor()`

## IDBCursor 

IDBCursor IDBObjectStoreIDBIndex

IDBCursor `IDBObjectStore.openCursor()`

```javascript
var transaction = db.transaction(['rushAlbumList'], 'readonly');
var objectStore = transaction.objectStore('rushAlbumList');

objectStore.openCursor(null, 'next').onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    var listItem = document.createElement('li');
    listItem.innerHTML = cursor.value.albumTitle + ', ' + cursor.value.year;
    list.appendChild(listItem);

    console.log(cursor.source);
    cursor.continue();
  } else {
    console.log('Entries all displayed.');
  }
};
```

IDBCursor 

- `IDBCursor.source`
- `IDBCursor.direction`nextnextuniqueprevprevunique`IDBObjectStore.openCursor()`
- `IDBCursor.key`
- `IDBCursor.value`
- `IDBCursor.primaryKey`objectStore IDBCursor.keyIDBCursor.key 

IDBCursor 

- `IDBCursor.advance(n)` n 
- `IDBCursor.continue()`
- `IDBCursor.continuePrimaryKey()``key``primaryKey`
- `IDBCursor.delete()` IDBRequest 
- `IDBCursor.update()` IDBRequest 

## IDBKeyRange 

IDBKeyRange object store

IDBKeyRange 

- `IDBKeyRange.lowerBound()`
- `IDBKeyRange.upperBound()`
- `IDBKeyRange.bound()`
- `IDBKeyRange.only()`



```javascript
// All keys ≤ x
var r1 = IDBKeyRange.upperBound(x);

// All keys < x
var r2 = IDBKeyRange.upperBound(x, true);

// All keys ≥ y
var r3 = IDBKeyRange.lowerBound(y);

// All keys > y
var r4 = IDBKeyRange.lowerBound(y, true);

// All keys ≥ x && ≤ y
var r5 = IDBKeyRange.bound(x, y);

// All keys > x &&< y
var r6 = IDBKeyRange.bound(x, y, true, true);

// All keys > x && ≤ y
var r7 = IDBKeyRange.bound(x, y, true, false);

// All keys ≥ x &&< y
var r8 = IDBKeyRange.bound(x, y, false, true);

// The key = z
var r9 = IDBKeyRange.only(z);
```

`IDBKeyRange.lowerBound()``IDBKeyRange.upperBound()``IDBKeyRange.bound()`

IDBKeyRange 

- `IDBKeyRange.lower`
- `IDBKeyRange.lowerOpen`
- `IDBKeyRange.upper`
- `IDBKeyRange.upperOpen`

IDBKeyRange  IDBObjectStore  IDBIndex `openCursor()`

```javascript
var t = db.transaction(['people'], 'readonly');
var store = t.objectStore('people');
var index = store.index('name');

var range = IDBKeyRange.bound('B', 'D');

index.openCursor(range).onsuccess = function (e) {
  var cursor = e.target.result;
  if (cursor) {
    console.log(cursor.key + ':');

    for (var field in cursor.value) {
      console.log(cursor.value[field]);
    }
    cursor.continue();
  }
}
```

IDBKeyRange `includes(key)`

```javascript
var keyRangeValue = IDBKeyRange.bound('A', 'K', false, false);

keyRangeValue.includes('F') // true
keyRangeValue.includes('W') // false
```

## 

- Raymond Camden, [Working With IndexedDB – Part 1](http://net.tutsplus.com/tutorials/javascript-ajax/working-with-indexeddb/)
- Raymond Camden, [Working With IndexedDB – Part 2](http://net.tutsplus.com/tutorials/javascript-ajax/working-with-indexeddb-part-2/)
- Raymond Camden, [Working With IndexedDB - Part 3](https://code.tutsplus.com/tutorials/working-with-indexeddb-part-3--net-36220)
- Tiffany Brown, [An Introduction to IndexedDB](http://dev.opera.com/articles/introduction-to-indexeddb/)
- David Fahlander, [Breaking the Borders of IndexedDB](https://hacks.mozilla.org/2014/06/breaking-the-borders-of-indexeddb/)
- TutorialsPoint, [HTML5 - IndexedDB](https://www.tutorialspoint.com/html5/html5_indexeddb.htm)
