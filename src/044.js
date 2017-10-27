module.exports = {
  description: 'Geometry field begins with a ClosePath command, which is invalid',
  specification_reference: 'https://github.com/mapbox/mapbox-gl-js/issues/1019',
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
            tags: [0,0],
            type: 1,
            geometry: [ 15, 50, 34 ] // 15 is the command integer for "ClosePath"
          }
        ],
        keys: [
          'hello'
        ],
        values: [
          { string_value: 'world' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1', // version number OR a string representation of the proto file to build from
};
