module.exports = {
  description: '[feature:geometry] A single point feature without a geometry field. The spec says, "A feature MUST contain a geometry field."',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L46',
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
            tags: [],
            type: 1,
            // geometry: [ 9, 50, 34 ]
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
