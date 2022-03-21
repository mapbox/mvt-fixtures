module.exports = {
  description: 'Worldviews: all worldviews as separate features',
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
          // US,CN,JP,IN,RU,TR,AR,MA
          {
            id: 10,
            tags: [
              0, 0, // name: US
              1, 0 // _mbx_worldview: US
            ],
            type: 1, // point
            geometry: [ 9, 54, 38 ]
          },
          {
            id: 11,
            tags: [
              0, 1, // name: CN
              1, 1 // _mbx_worldview: CN
            ],
            type: 1, // point
            geometry: [ 9, 55, 39 ]
          },
          {
            id: 12,
            tags: [
              0, 2, // name: JP
              1, 2 // _mbx_worldview: JP
            ],
            type: 1, // point
            geometry: [ 9, 56, 40 ]
          },
          {
            id: 13,
            tags: [
              0, 3, // name: IN
              1, 3 // _mbx_worldview: IN
            ],
            type: 1, // point
            geometry: [ 9, 57, 41 ]
          },
          {
            id: 14,
            tags: [
              0, 4, // name: RU
              1, 4 // _mbx_worldview: RU
            ],
            type: 1, // point
            geometry: [ 9, 58, 42 ]
          },
          {
            id: 15,
            tags: [
              0, 5, // name: TR
              1, 5 // _mbx_worldview: TR
            ],
            type: 1, // point
            geometry: [ 9, 59, 43 ]
          },
          {
            id: 16,
            tags: [
              0, 6, // name: AR
              1, 6 // _mbx_worldview: AR
            ],
            type: 1, // point
            geometry: [ 9, 60, 44 ]
          },
          {
            id: 17,
            tags: [
              0, 7, // name: MA
              1, 7 // _mbx_worldview: MA
            ],
            type: 1, // point
            geometry: [ 9, 61, 45 ]
          }
        ],
        keys: [
          'name',
          '_mbx_worldview'
        ],
        values: [
          { string_value: 'US' },
          { string_value: 'CN' },
          { string_value: 'JP' },
          { string_value: 'IN' },
          { string_value: 'RU' },
          { string_value: 'TR' },
          { string_value: 'AR' },
          { string_value: 'MA' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
