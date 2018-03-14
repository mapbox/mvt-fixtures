module.exports = {
  description: 'A point fixture with a gigantic MoveTo command. Can be used to test decoders for memory overallocation situations',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/tree/master/2.1#43-geometry-encoding',
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
            tags: [
              0, 0
            ],
            type: 1,
            geometry: [ 4294967289, 2, 2 ]
          }
        ],
        keys: [
          'command'
        ],
        values: [
          { string_value: 'move_to'}
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
