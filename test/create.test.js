const test = require('tape');
const vt = require('@mapbox/vector-tile').VectorTile;
const pbf = require('pbf');
const mvtf = require('..');

test('[create] failure, throws if no definition provided', (assert) => {
  assert.throws(() => {
    mvtf.create();
  }, /No definition provided to mvt-fixtures#create method/);
  assert.end();
});

test('[create] success, returns buffer even if not valid', (assert) => {
  const { buffer } = mvtf.create({ waka: 'flocka' });
  assert.equal(buffer.toString(), '');
  assert.end();
});

test('[create] success, creates valid mvt', (assert) => {
  const { buffer } = mvtf.create({
    layers: [
      {
        version: 2,
        name: 'parks',
        features: [
          {
            id: 10,
            tags: [ 0, 0 ], // name: Stanley Park
            type: 1, // point
            geometry: [ 9, 54, 38 ]
          },
          {
            id: 10,
            tags: [ 0, 0 ], // name: Olympic
            type: 1, // point
            geometry: [ 9, 2, 5 ]
          }
        ],
        keys: [ 'name' ],
        values: [
          { string_value: 'Stanley Park' },
          { string_value: 'Olympic' }
        ],
        extent: 4096
      }
    ]
  });

  const info = new vt(new pbf(buffer));
  assert.equal(info.layers.parks.length, 2);
  assert.end();
});