const test = require('tape');
const vtinfo = require('@mapbox/vtinfo');
const mvtf = require('..');

test('[get] failure, throws error if no string provided', (assert) => {
  try {
    var buffer = mvtf.get();
    assert.fail();
  } catch(err) {
    assert.ok(err);
    assert.ok(/No fixture name provided/.test(err.message));
    assert.end();
  }
});

test('[get] failure, throws reror if fixture does not exist', (assert) => {
  try {
    var buffer = mvtf.get('beep-boop');
    assert.fail();
  } catch(err) {
    assert.ok(err);
    assert.ok(/beep-boop is not a fixture/.test(err.message));
    assert.end();
  }
});

test('[get] success, gets a fixture and its properties/buffer', (assert) => {
  var fixture = mvtf.get('valid-single-point-no-id');
  assert.equal(typeof fixture.buffer, 'object', 'returns a buffer');

  var info = vtinfo(fixture.buffer);
  assert.equal(info.layers.length, 1, 'expected number of layers');
  assert.equal(info.layers[0].name, 'hello', 'expected layer name');
  assert.end();
});
