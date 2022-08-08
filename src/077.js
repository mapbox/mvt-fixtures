module.exports = {
  description: 'Class: name "France", _mbx_name_de "Frankreich", _mbx_class "sea"',
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
              0, 0, // name
              1, 1, // _mbx_name_de
              2, 2,  // _mbx_class
            ],
            type: 1, // point
            geometry: [ 9, 54, 38 ]
          }
        ],
        keys: [ 'name', '_mbx_name_de', '_mbx_class' ],
        values: [
          { string_value: 'France' },
          { string_value: 'Frankreich' },
          { string_value: 'sea' },
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
