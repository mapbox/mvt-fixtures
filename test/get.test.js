const test = require('tape');
const vt = require('@mapbox/vector-tile').VectorTile;
const pbf = require('pbf');
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
  const fixture = mvtf.get('valid-single-point-no-id');
  assert.ok(fixture.buffer);
  assert.ok(fixture.name);
  assert.ok(fixture.json);
  assert.ok(fixture.description);
  assert.ok(fixture.specification_reference);
  assert.notOk(fixture.manipulate);
  assert.equal(typeof fixture.buffer, 'object', 'returns a buffer');

  const info = new vt(new pbf(fixture.buffer));
  assert.equal(Object.keys(info.layers).length, 1, 'expected number of layers');
  assert.ok(info.layers.hello, 'expected layer name');
  assert.end();
});
