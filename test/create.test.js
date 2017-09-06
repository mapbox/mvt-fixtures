const test = require('tape');
const fs = require('fs');
const vt = require('@mapbox/vector-tile').VectorTile;
const pbf = require('pbf');
const mvtf = require('..');

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
    waka: 'this is my message yooooo'
  };

  const schema = `
  message Tile {
    required string waka = 1;
  }`;

  const buffer = mvtf.create(template, schema);
  assert.ok(Buffer.isBuffer(buffer), 'is a buffer');

  const vtinfo = new vt(new pbf(buffer));
  assert.notOk(Object.keys(vtinfo.layers).length, 'no layers');
  assert.end();
});

test('[create] success, creates a compliant protocol buffer', (assert) => {
  const template = {
    layers: [
      {
        version: 2,
        name: 'hello',
        features: [
          {
            id: 1,
            tags: [],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: {},
        values: {},
        extent: 4096
      }
    ]
  };

  const buffer = mvtf.create(template, '2.1');
  assert.equal(typeof buffer, 'object', 'returns a buffer');

  const info = new vt(new pbf(buffer));
  assert.equal(Object.keys(info.layers).length, 1, 'expected number of layers');
  assert.ok(info.layers.hello, 'expected layer name');
  assert.end();
});

test('[create] errors, errors if you do not provide a proto or version string', (assert) => {
  const template = {
    layers: [
      {
        version: 2,
        name: 'hello',
        features: [
          {
            id: 1,
            tags: [],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: {},
        values: {},
        extent: 4096
      }
    ]
  };

  try {
    const buffer = mvtf.create(template);
    assert.fail();
  } catch (err) {
    assert.ok(err);
    assert.ok(/Please provide the proto file or version to generate this buffer from/.test(err.message));
    assert.end();
  }
});
