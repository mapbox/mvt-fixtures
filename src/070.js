module.exports = {
  description: 'Worldviews: _mbx_worldview and worldview properties in same feature with conflicting values',
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
              0, 0, // name: Conflicting feature
              1, 1, // _mbx_worldview: US
              2, 2  // worldview: RU
            ],
            type: 1, // point
            geometry: [ 9, 54, 38 ]
          }
        ],
        keys: [
          'name',
          '_mbx_worldview',
          'worldview'
        ],
        values: [
          { string_value: 'Conflicting feature' },
          { string_value: 'US' },
          { string_value: 'RU' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};