module.exports = {
  description: 'Includes two layers with the same name value, which is invalid according to the specification. "A layer MUST contain a name field. A Vector Tile MUST NOT contain two or more layers whose name values are byte-for-byte identical." Decoders can decide to dedupe or fail.',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/tree/master/2.1#41-layers',
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
              0, 0
            ],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: ['name'],
        values: [
          { string_value: 'layer-one' }
        ],
        extent: 4096
      },
      {
        version: 2,
        name: 'hello',
        features: [
          {
            id: 1,
            tags: [
              0, 0
            ],
            type: 1,
            geometry: [ 9, 62, 84 ]
          }
        ],
        keys: ['name'],
        values: [
          { string_value: 'layer-two' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
