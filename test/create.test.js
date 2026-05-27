import test from 'node:test';
import assert from 'node:assert/strict';
import {VectorTile} from '@mapbox/vector-tile';
import {PbfReader} from 'pbf';
import * as mvtf from '../index.js';

test('[create] failure, throws if no definition provided', () => {
  assert.throws(() => mvtf.create(), /No definition provided to mvt-fixtures#create method/);
});

test('[create] success, returns buffer even if not valid', () => {
  const {buffer} = mvtf.create({waka: 'flocka'});
  assert.equal(buffer.toString(), '');
});

test('[create] success, creates valid mvt', () => {
  const {buffer} = mvtf.create({
    layers: [
      {
        version: 2,
        name: 'parks',
        features: [
          {
            id: 10,
            tags: [0, 0],
            type: 1,
            geometry: [9, 54, 38]
          },
          {
            id: 10,
            tags: [0, 0],
            type: 1,
            geometry: [9, 2, 5]
          }
        ],
        keys: ['name'],
        values: [
          {string_value: 'Stanley Park'},
          {string_value: 'Olympic'}
        ],
        extent: 4096
      }
    ]
  });

  const info = new VectorTile(new PbfReader(buffer));
  assert.equal(info.layers.parks.length, 2);
});
