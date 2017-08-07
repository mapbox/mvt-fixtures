'use strict';

const test = require('tape');
const mvtf = require('..');
const fixtures = require('../lib/fixtures');

test('loads all fixtures as buffers', (assert) => {
  for (var f in fixtures) {
    let buffer = mvtf.load(f);
    assert.equal(typeof buffer, 'object', 'is a buffer object');
  }
  assert.end();
});
