module.exports = {
  description: 'Worldviews: "all" values',
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
              0, 0, // name: Represents all worldviews
              1, 1 // _mbx_worldview: all
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
          { string_value: 'Represents all worldviews' },
          { string_value: 'all' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};