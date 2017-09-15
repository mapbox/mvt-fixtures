module.exports = {
  description: 'The layer version is invalid and does not match any current versions of the specification',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L55',
  validity: {
    v1: false,
    v2: false,
    error: 'fatal'
  },
  json: {
    layers: [
      {
        version: 99,
        name: 'hello',
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
  proto: '2.1'
};
