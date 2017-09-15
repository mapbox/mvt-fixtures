module.exports = {
  description: 'valid polygon geometry',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/tree/master/2.1#4355-example-polygon',
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
            id: 1,
            tags: [0, 0],
            type: 3, // polygon enum
            geometry: [ 9, 6, 12, 18, 10, 12, 24, 44, 15 ]
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
