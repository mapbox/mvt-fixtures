const utils = require('../lib/util');

module.exports = {
  description: 'Contains two geometry fields when there should only be one',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L46',
  validity: {
    v1: false,
    v2: false,
    error: 'recoverable'
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'hello',
        features: [
          {
            id: 1,
            tags: [],
            type: 1,
            geometry: [ 9, 50, 34 ],
            geometry: [ 9, 0, 0 ]
          }
        ],
        keys: [],
        values: [],
        extent: 4096
      }
    ]
  },
  proto: utils.replace('2.1','repeated uint32 geometry = 4 [ packed = true ];','repeated uint32 geometry = 4 [ packed = true ];repeated uint32 geometry = 4 [ packed = true ];'), // version number OR a string representation of the proto file to build from
};
