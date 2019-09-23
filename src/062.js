module.exports = {
  description: 'points with different values for the same property - helpful for filtering tests',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md',
  validity: {
    v1: true,
    v2: true
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'cities',
        features: [
          {
            id: 1,
            tags: [
              0, 0, // population 10
              1, 5  // Neatville
            ],
            type: 1,
            geometry: [ 9, 100, 100 ]
          },
          {
            id: 2,
            tags: [
              0, 1, // population 20
              1, 6  // RadEstablishment
            ],
            type: 1,
            geometry: [ 9, 500, 500 ]
          },
          {
            id: 3,
            tags: [
              0, 2, // population 30
              1, 7  // AwesomeCity
            ],
            type: 1,
            geometry: [ 9, 1000, 1000 ]
          },
          {
            id: 4,
            tags: [
              0, 3, // population -1
              1, 8  // CoolVillage
            ],
            type: 1,
            geometry: [ 9, 1500, 1500 ]
          },
          {
            id: 5,
            tags: [
              0, 4, // population 9999
              1, 9  // TubularTown
            ],
            type: 1,
            geometry: [ 9, 2000, 2000 ]
          }
        ],
        keys: [
          'population',
          'name'
        ],
        values: [
          { int_value: 10 },
          { int_value: 20 },
          { int_value: 30 },
          { int_value: -1 },
          { int_value: 9999 },
          { string_value: 'Neatville' },
          { string_value: 'RadEstablishment' },
          { string_value: 'AwesomeCity' },
          { string_value: 'CoolVillage' },
          { string_value: 'TubularTown' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1', // version number OR a string representation of the proto file to build from
  manipulate: function(buffer) {
    // manipulate the buffer here if you need, otherwise you can remove this
    return buffer;
  }
};
