const test = require('tape');
const vt = require('@mapbox/vector-tile').VectorTile;
const pbf = require('pbf');
const mvtf = require('..');

test('[get] failure, throws error if no id provided', (assert) => {
  try {
    var buffer = mvtf.get();
    assert.fail();
  } catch(err) {
    assert.ok(err);
    assert.ok(/No fixture id provided/.test(err.message));
    assert.end();
  }
});

test('[get] failure, throws error if fixture does not exist', (assert) => {
  try {
    var buffer = mvtf.get('beep-boop');
    assert.fail();
  } catch(err) {
    assert.ok(err);
    assert.ok(/Error loading fixture/.test(err.message));
    assert.end();
  }
});

test('[get] success, gets a fixture and its properties/buffer', (assert) => {
  const fixture = mvtf.get('002');
  assert.ok(fixture.buffer);
  assert.ok(fixture.id);
  assert.ok(fixture.json);
  assert.ok(fixture.description);
  assert.ok(fixture.specification_reference);
  assert.ok(fixture.validity);
  assert.notOk(fixture.manipulate);
  assert.equal(typeof fixture.buffer, 'object', 'returns a buffer');

  const info = new vt(new pbf(fixture.buffer));
  assert.equal(Object.keys(info.layers).length, 1, 'expected number of layers');
  assert.ok(info.layers.hello, 'expected layer name');

  assert.ok(mvtf.get(1), 'works with a number too');
  assert.ok(mvtf.get(2), 'works with a number too');

  assert.end();
});
