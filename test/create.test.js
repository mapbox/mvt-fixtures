const test = require('tape');
const fs = require('fs');
const vtinfo = require('@mapbox/vtinfo');
const mvtf = require('..');
const schema = require('protocol-buffers-schema');
const Compile = require('pbf/compile');

const mvt_proto = schema.parse(fs.readFileSync('../vector-tile-spec/2.1/vector_tile.proto', 'utf8'));

test('[create] failure, throws error when no spec is provided', (assert) => {
  try {
    const buffer = mvtf.create();
  } catch(err) {
    assert.ok(err);
    assert.ok(/No specification provided/.test(err.message));
    assert.end();
  }
});

test('[create] failure, throws error when specification is not an object', (assert) => {
  try {
    const buffer = mvtf.create('not-an-object');
  } catch(err) {
    assert.ok(err);
    assert.ok(/Specification parameter must be an object/.test(err.message));
    assert.end();
  }
});

test('[create] success, creates a protocol that is not compliant with the MVT spec', (assert) => {
  const template = {
    hello: 'world'
  };

  const buffer = mvtf.create(template);
  assert.ok(Buffer.isBuffer(buffer), 'is a buffer');

  const info = vtinfo(buffer);
  assert.notOk(info.layers.length, 'no layers');
  assert.end();
});

test('[create] success, creates a compliant protocol buffer', (assert) => {
  const spec = Compile(mvt_proto);
  const template = {
    layers: [
      {
        version: 2,
        name: 'hello',
        features: [
          {
            id: 1,
            tags: [],
            type: spec.Tile.GeomType.POINT,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: {},
        values: {},
        extent: 4096
      }
    ]
  };

  const buffer = mvtf.create(template);
  assert.equal(typeof buffer, 'object', 'returns a buffer');

  const info = vtinfo(buffer);
  assert.equal(info.layers.length, 1, 'expected number of layers');
  assert.equal(info.layers[0].name, 'hello', 'expected layer name');
  assert.end();
});
