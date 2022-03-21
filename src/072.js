module.exports = {
  description: 'Worldviews: comma-separated list of non ISO 3166-1 alpha-2 codes',
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
              0, 0, // name: Some place
              1, 1 // _mbx_worldview: USAAAA,CN,JP,INdia
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
          { string_value: 'Some place' },
          { string_value: 'USAAAA,CN,JP,INdia' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
