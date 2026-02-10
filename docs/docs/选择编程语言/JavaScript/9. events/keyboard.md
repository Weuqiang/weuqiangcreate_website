# 

## 

`keydown``keypress``keyup``KeyboardEvent`

- `keydown`
- `keypress` CtrlAltShiftMeta `keydown`
- `keyup`



1. keydown
1. keypress
1. keydown
1. keypress
1. ...
1. keyup

## KeyboardEvent 

`KeyboardEvent``Event`

`KeyboardEvent`

```javascript
new KeyboardEvent(type, options)
```

`KeyboardEvent``Event`

- `key`
- `code`
- `location``0`
- `ctrlKey` Ctrl `false`
- `shiftKey` Shift `false`
- `altKey` Alt `false`
- `metaKey` Meta `false`
- `repeat``false`

## KeyboardEvent 

### KeyboardEvent.altKeyKeyboardEvent.ctrlKeyKeyboardEvent.metaKeyKeyboardEvent.shiftKey



- `KeyboardEvent.altKey` Alt 
- `KeyboardEvent.ctrlKey` Ctrl 
- `KeyboardEvent.metaKey` meta Mac Windows  windows 
- `KeyboardEvent.shiftKey` Shift 



```javascript
function showChar(e) {
  console.log('ALT: ' + e.altKey);
  console.log('CTRL: ' + e.ctrlKey);
  console.log('Meta: ' + e.metaKey);
  console.log('Shift: ' + e.shiftKey);
}

document.body.addEventListener('keydown', showChar, false);
```

### KeyboardEvent.code

`KeyboardEvent.code`

[](https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/code/code_values)

- 0 - 9`digit0` - `digit9`
- A - z`KeyA` - `KeyZ`
- F1 - F12 `F1` - `F12`
- `ArrowDown``ArrowUp``ArrowLeft``ArrowRight`
- Alt `AltLeft``AltRight`
- Shift `ShiftLeft``ShiftRight`
- Ctrl `ControlLeft``ControlRight`

### KeyboardEvent.key

`KeyboardEvent.key`



 BackspaceTabEnterShiftControlAltCapsLockEscSpacebarPageUpPageDownEndHomeLeftRightUpDownPrintScreenInsertDelWinF1F12NumLockScroll 

 Ctrl + a`a` Shift + a`A`

`Unidentified`

### KeyboardEvent.location

`KeyboardEvent.location`

- 0
- 1 Ctrl  Shift 
- 2 Ctrl  Shift 
- 3

### KeyboardEvent.repeat

`KeyboardEvent.repeat``keydown``keypress`

## KeyboardEvent 

### KeyboardEvent.getModifierState()

`KeyboardEvent.getModifierState()`

- `Alt`Alt 
- `CapsLock`
- `Control`Ctrl 
- `Meta`Meta 
- `NumLock`
- `Shift`Shift 

```javascript
if (
  event.getModifierState('Control') +
  event.getModifierState('Alt') +
  event.getModifierState('Meta') > 1
) {
  return;
}
```

`Control``Alt``Meta`
