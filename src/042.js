module.exports = {
  description: 'Feature has tags that point to non-existent Value in the layer.',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L38',
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
            tags: [0, 2],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: ['type'],
        values: [
          { string_value: 'park' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
