'use strict';
var test = require('ava');
var classname = require('../src');

test('generates a classname from a CSS declaration', function (assert) {
  var decl = {
    fontSize: '10px',
    color: '#FFF'
  };
  assert.is(classname(decl), '_e80a8a8');
  assert.end();
});

test('generates the same classname from a similar CSS declaration but with different order', function (assert) {
  var decl2 = {
    color: '#FFF',
    fontSize: '10px'
  };
  assert.is(classname(decl2), '_e80a8a8');
  assert.end();
});
