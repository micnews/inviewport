
# inviewport

  Check if a dom element is fully contained in the viewport

## Example

```js
var inViewport = require('inviewport');

console.log(inViewport(document.querySelector('div')));
```

## Installation

```bash
$ npm install inviewport
```

## API

### inViewport(el)

  Return whether `el` is fully contained in the current viewport.

### inViewport.watch(el, fn)

  Call `fn` immediately and whenever it moves in or out of the viewport, with one boolean argument denoting visibility.

  Returns an `unwatch()` function, which you can call to stop listening for DOM events.

## License

  MIT

