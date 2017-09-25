module.exports = {
  description: 'Single geometry with UNKNOWN type. This is considered "valid" in the lens of the specification. Encoders/decoders can choose to use or throw on this geometry type.',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L41',
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
            tags: [],
            type: 0, // UNNOWN geometry enum
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
