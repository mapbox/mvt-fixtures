module.exports = {
  description: 'valid multi-linestring geometry',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/tree/master/2.1#4354-example-multi-linestring',
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
            type: 2, // linestring enum
            geometry: [ 9, 4, 4, 18, 0, 16, 16, 0, 9, 17, 17, 10, 4, 8 ]
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
