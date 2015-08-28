'use strict';
var hash = require('short-hash');
var toStr = require('to-predictable-string');

module.exports = function cngen(declaration) {
  return '_' + hash(toStr(declaration));
};
