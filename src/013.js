const util = require('../lib/util');

module.exports = {
  description: 'Has a key property incorrectly encoded as a type std::uint32_t.',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L63',
  validity: {
    v1: false,
    v2: false,
    error: 'fatal'
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'hello',
        features: [
          {
            id: 1,
            tags: [0,0],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: [1],
        values: [
          {
            string_value: "hello"
          }
        ],
        extent: 4096
      }
    ]
  },
  proto: util.replace('2.1', 'repeated string keys', 'repeated uint32 keys')
};
