const util = require('../lib/util');

module.exports = {
  description: 'Adds an extra Value type called "my_value" which is invalid. In the future there might be backwards compatible Values and they should be ignored by decoders, but for version 2.x this should be a fatal error.',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md#41-layers',
  validity: {
    v1: false,
    v2: false,
    error: 'fatal'
  },
  json: {
    layers: [
      {
        name: 'howdy',
        version: 2,
        features: [
          {
            id: 1,
            tags: [],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: [],
        values: [
          { my_value: 10 }
        ],
        extent: 4096
      }
    ]
  },
  proto: util.replace('2.1', 'extensions 8 to max;', 'optional int64 my_value = 20; extensions 21 to max;')
};
