module.exports = {
  description: ':warning: polygon very large CommandInteger count for move_to command',
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
            geometry: [ ((((1 << 29) - 1) << 3) | 1), 6, 12, 18, 10, 12, 24, 44, 15 ]
          }
        ],
        keys: [
          'name'
        ],
        values: [
          {
            string_value: 'big move_to command integer for this polygon'
          }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
