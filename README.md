# cngen

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> Generate CSS classnames from declarations, works splendid together with e.g. React

## Why?

Generating classnames according to the contents of a CSS declaration solves the biggest problem with large scale CSS, i.e. the fact that it cascades. See [`unistyle`](https://www.npmjs.com/package/unistyle) for how to use this in a scalable way.

## Installation

Install `cngen` using [npm](https://www.npmjs.com/):

```bash
npm install --save cngen
```

## Usage

### Module usage

```javascript
var cngen = require('cngen');

cngen({
  color: '#FFF',
  fontSize: '10px'
});
// _e80a8a8
```

Property order is not important, i.e. two declarations with the same properties but in a different order gives the same classname, e.g:

```javascript
var cngen = require('cngen');

cngen({
  color: '#FFF',
  fontSize: '10px'
});
// _e80a8a8

cngen({
  fontSize: '10px',
  color: '#FFF'
});
// _e80a8a8
```

#### Usage together with e.g. React

Have a look at [`unistyle`](https://www.npmjs.com/package/unistyle) for how this fits together with [React](http://facebook.github.io/react/).


## API

### `cngen(declaration)`

| Name | Type | Description |
|------|------|-------------|
| declaration | `Object` | The CSS declaration to generate a classname for |

Returns: `String`, a generated classname, which consists of a `"_"` followed by a hexadecimal string (generated with [`short-hash`](https://www.npmjs.com/package/short-hash)).

## License

MIT © Joakim Carlstein

[npm-url]: https://npmjs.org/package/cngen
[npm-image]: https://badge.fury.io/js/cngen.svg
[travis-url]: https://travis-ci.org/joakimbeng/cngen
[travis-image]: https://travis-ci.org/joakimbeng/cngen.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
