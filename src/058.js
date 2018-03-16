module.exports = {
  description: 'A linestring fixture with a gigantic LineTo command that does not have the equal number of commands after. This can be used to test decoders for memory overallocation situations',
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
            tags: [
              0, 0
            ],
            type: 2,
            geometry: [ 9, 0, 0, 4294967290, 6, 10, 6, 18 ]
          }
        ],
        keys: [
          'command'
        ],
        values: [
          { string_value: 'line_to'}
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
