# next-node [![Build Status](https://travis-ci.org/lukeed/next-node.svg?branch=master)](https://travis-ci.org/lukeed/next-node)

> Get the next Node Element, with optional container restriction.


## Install

```
$ npm install --save next-node
```


## Usage

```html
<div id="a1">
	<div id="b1"></div>
	<div id="b2"></div>
</div>
<div id="c1"></div>
```

```js
const nextNode = require('next-node');

nextNode(a1);
//=> b1

nextNode(b1);
//=> b2

nextNode(b2);
//=> c1 (container not specified)

nextNode(b2, a1);
//=> null (container specified)
```


## API

### nextNode(node, [container])

#### node

Type: `Node`

The initial ("needle") Node element.

#### container

Type: `Node`<br>
Default: `null`

The container ("haystack") Node element. Specifying a `container` will limit results to its children only.


## License

MIT © [Luke Edwards](https://lukeed.com)
