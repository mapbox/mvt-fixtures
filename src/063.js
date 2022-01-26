module.exports = {
  description: 'Point features with added language properties suffixed with "_mbx_name" and "name_".',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md',
  validity: {
    v1: true,
    v2: true
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'top',
        features: [
          {
            id: 1,
            tags: [
              0, 0, // population: 20
            ],
            type: 1, // point
            geometry: [ 9, 50, 32 ]
          },
          {
            id: 2,
            tags: [
              0, 0, // population: 20
            ],
            type: 1, // point
            geometry: [ 9, 51, 33 ]
          }
        ],
        keys: [
          'population'
        ],
        values: [
          { int_value: 20 }
        ],
        extent: 4096
      },
      {
        version: 2,
        name: 'bottom',
        features: [
          {
            id: 11,
            tags: [
              0, 0, // name: Germany
              1, 0, // name_local: Germany
              2, 0, // name_en: Germany
              3, 2, // name_fr: Allemagne
              4, 2, // _mbx_name_fr: Allemagne
              5, 3, // _mbx_name_gr: Deutschland
              6, 1, // _mbx_other: Alemania
              7, 8  // population: 20
            ],
            type: 1, // point
            geometry: [ 9, 50, 34 ]
          },
          {
            id: 12,
            tags: [
              0, 0, // name: Germany
              1, 0, // name_local: Germany
              2, 0, // name_en: Germany
              3, 2, // name_fr: Allemagne
              7, 8  // population: 20
            ],
            type: 1, // point
            geometry: [ 9, 51, 35 ]
          },
          {
            id: 13,
            tags: [
              0, 0, // name: Germany
              1, 0, // name_local: Germany
              4, 2, // _mbx_name_fr: Allemagne
              5, 3, // _mbx_name_gr: Deutschland
              7, 8  // population: 20
            ],
            type: 1, // point
            geometry: [ 9, 52, 36 ]
          },
          {
            id: 14,
            tags: [
              0, 0, // name: Germany
              1, 0, // name_local: Germany
              7, 8  // population: 20
            ],
            type: 1, // point
            geometry: [ 9, 53, 37 ]
          },
          {
            id: 15,
            tags: [
              0, 4, // name: Spain
              1, 4, // name_local: Spain
              2, 4, // name_en: Spain
              3, 6, // name_fr: Espagne
              4, 6, // _mbx_name_fr: Espagne
              5, 5, // _mbx_name_gr: Spanien
              6, 7 // _mbx_other: Espana
            ],
            type: 1, // point
            geometry: [ 9, 54, 38 ]
          }
        ],
        keys: [
          'name',
          'name_local',
          'name_en',
          'name_fr',
          '_mbx_name_fr',
          '_mbx_name_gr',
          '_mbx_other',
          'population'
        ],
        values: [
          { string_value: 'Germany' },
          { string_value: 'Alemania' },
          { string_value: 'Allemagne' },
          { string_value: 'Deutschland' },
          { string_value: 'Spain' },
          { string_value: 'Spanien' },
          { string_value: 'Espagne' },
          { string_value: 'Espana' },
          { int_value: 20 }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
