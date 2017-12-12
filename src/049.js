const util = require('../lib/util');

module.exports = {
  description: ':warning: polygon geometry has a very large CommandInteger count for line_to command',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md',
  validity: {
    v1: true,
    v2: true
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'hello',
        features: [
          {
            id: 123,
            tags: [0, 0],
            type: 4, // polygon with huge move_to
            geometry: [ 9, 6, 12, ((((1 << 29) - 1) << 3) | 2), 10, 12, 24, 44, 15 ]
          }
        ],
        keys: [
          'name'
        ],
        values: [
          {
            string_value: 'big line_to command integer for this polygon'
          }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1',
  proto: util.replace('2.1', 'optional uint32 extent = 5 [ default = 4096 ];', 'required uint32 extent = 5;')
};
