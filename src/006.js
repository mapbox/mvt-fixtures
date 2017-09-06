module.exports = {
  description: '[feature:geometry] A single point feature with an invalid GeomType enum in the "type" field.',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L8-L13',
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
            type: 8, // invalid GeomType enum
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
