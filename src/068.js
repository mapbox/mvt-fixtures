module.exports = {
  description: 'Worldviews: mixture of features',
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
              0, 0, // name: US & Russia
              1, 1 // _mbx_worldview: US,RU
            ],
            type: 1, // point
            geometry: [ 9, 54, 38 ]
          },
          {
            id: 15,
            tags: [
              0, 2, // name: All worldviews
              1, 3 // _mbx_worldview: all
            ],
            type: 1, // point
            geometry: [ 9, 55, 39 ]
          },
          {
            id: 20,
            tags: [
              0, 4, // name: Argentina
              1, 5 // _mbx_worldview: AR
            ],
            type: 1, // point
            geometry: [ 9, 56, 40 ]
          }
        ],
        keys: [
          'name',
          '_mbx_worldview'
        ],
        values: [
          { string_value: 'US & Russia' },
          { string_value: 'US,RU' },
          { string_value: 'All worldviews' },
          { string_value: 'all' },
          { string_value: 'Argentina' },
          { string_value: 'AR' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};