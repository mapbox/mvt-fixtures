const test = require('tape');
const vtinfo = require('@mapbox/vtinfo');
const mvtf = require('..');

test('[load] success, loads a pregenerated buffer', (assert) => {
  var buffer = mvtf.load('valid-single-point-no-id');
  assert.equal(typeof buffer, 'object', 'returns a buffer');

  var info = vtinfo(buffer);
  assert.equal(info.layers.length, 1, 'expected number of layers');
  assert.equal(info.layers[0].name, 'hello', 'expected layer name');
  assert.end();
});

test('[load] failure, throws error if no string provided', (assert) => {
  try {
    var buffer = mvtf.load();
    assert.fail();
  } catch(err) {
    assert.ok(err);
    assert.ok(/No fixture string provided/.test(err.message));
    assert.end();
  }
});

test('[load] failure, throws reror if fixture does not exist', (assert) => {
  try {
    var buffer = mvtf.load('beep-boop');
    assert.fail();
  } catch(err) {
    assert.ok(err);
    assert.ok(/beep-boop does not exist in pre generated fixtures/.test(err.message));
    assert.end();
  }
});

test('[create] success, loads a pregenerated buffer', (assert) => {
  var buffer = mvtf.load('valid-single-point-no-id');
  assert.equal(typeof buffer, 'object', 'returns a buffer');

  var info = vtinfo(buffer);
  assert.equal(info.layers.length, 1, 'expected number of layers');
  assert.equal(info.layers[0].name, 'hello', 'expected layer name');
  assert.end();
});
