module.exports = {
  description: 'Worldviews: _mbx_worldview is not a string',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md',
  validity: {
    v1: true,
    v2: true
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'admin',
        features: [
          {
            id: 10,
            tags: [
              0, 0, // name: Not a string
              1, 1 // _mbx_worldview: 100
            ],
            type: 1, // point
            geometry: [ 9, 54, 38 ]
          }
        ],
        keys: [
          'name',
          '_mbx_worldview'
        ],
        values: [
          { string_value: 'Not a string' },
          { int_value: 100 }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};