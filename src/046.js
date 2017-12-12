module.exports = {
  description: ':warning: linestring very large CommandInteger count for move_to command',
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
            type: 2, // linestring with huge move_to
            geometry: [ ((((1 << 29) - 1) << 3) | 1), 4, 4, 18, 0, 16, 16, 0 ]
          }
        ],
        keys: [
          'name'
        ],
        values: [
          {
            string_value: 'big move_to command integer for this linestring'
          }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
