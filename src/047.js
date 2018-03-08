module.exports = {
  description: 'Invalid polygon with wrong ClosePath count 2 (must be count 1)',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/tree/master/2.1#43-geometry-encoding',
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
            tags: [],
            type: 3,
            geometry: [ 9, 6, 12, 18, 10, 12, 24, 44, 23 ]
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
