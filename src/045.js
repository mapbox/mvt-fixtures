module.exports = {
  description: ':warning: point with very large CommandInteger count for move_to command - decoders should account for this otherwise the risk pre-allocating high memory',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L46',
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
            type: 1, // point with huge move_to
            geometry: [ ((((1 << 29) - 1) << 3) | 1), 50, 34 ]
          }
        ],
        keys: [
          'name'
        ],
        values: [
          {
            string_value: 'big move_to command integer for this point'
          }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
