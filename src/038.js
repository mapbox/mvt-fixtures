module.exports = {
  description: 'A fixure with all possible property value types',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L19-L25',
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
              0, 0,
              1, 1,
              2, 2,
              3, 3,
              4, 4,
              5, 5,
              6, 6
            ],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: [
          'string_value',
          'bool_value',
          'int_value',
          'double_value',
          'float_value',
          'sint_value',
          'uint_value'
        ],
        values: [
          { string_value: 'ello' },
          { bool_value: true },
          { int_value: 6 },
          { double_value: 1.23 },
          { float_value: 3.1 },
          { sint_value: -87948 },
          { uint_value: 87948 }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
