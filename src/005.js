module.exports = {
  description: '[feature:tags] the tags array has only a single tag, where multiples of two are required.',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L38',
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
            tags: [
              0,
              // 0
            ],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: [
          'hello'
        ],
        values: [
          { string_value: 'world' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
