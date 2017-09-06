const util = require('../lib/util');

module.exports = {
  description: 'layer name incorrectly encoded as uint32_t where it should be encoded as a string',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L57',
  validity: {
    v1: false,
    v2: false,
    error: 'fatal'
  },
  json: {
    layers: [
      {
        version: 2,
        name: 33, // encoded as integer not a string
        features: [
          {
            id: 1,
            tags: [],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: [],
        values: [],
        extent: 4096
      }
    ]
  },
  proto: util.replace('2.1', 'required string name', 'required uint32 name')
};
