module.exports = {
  description: 'Class: _mbx_worldview "US,CN", _mbx_class "sea"',
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
              0, 0, // _mbx_worldview: US,CN
              1, 1 // _mbx_class: sea
            ],
            type: 1, // point
            geometry: [ 9, 54, 38 ]
          }
        ],
        keys: [
          '_mbx_worldview',
          '_mbx_class'
        ],
        values: [
          { string_value: 'US,CN' },
          { string_value: 'sea' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
