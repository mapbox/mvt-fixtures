module.exports = {
  description: 'Point features with added language properties prefixed with "_mbx_name" and "name_".',
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
              1, 0, // name_en: Germany
              2, 1, // name_fr: Allemagne
              3, 2, // _mbx_name_fr: La Allemagne
              4, 3, // _mbx_name_de: Deutschland
              5, 4, // _mbx_other: Alemania
            ],
            type: 1, // point
            geometry: [ 9, 50, 34 ]
          },
          {
            id: 15,
            tags: [
              0, 5, // name: Espana
              4, 6, // _mbx_name_de: Spanien
              2, 7, // name_fr: Espagne
              3, 7, // _mbx_name_fr: Espagne
              1, 8, // name_en: Spain
              6, 9  // population: 20
            ],
            type: 1, // point
            geometry: [ 9, 54, 38 ]
          },
          {
            id: 12,
            tags: [
              0, 0, // name: Germany
              1, 0, // name_en: Germany
              2, 1, // name_fr: Allemagne
              6, 9  // population: 20
            ],
            type: 1, // point
            geometry: [ 9, 51, 35 ]
          },
          {
            id: 13,
            tags: [
              0, 0, // name: Germany
              3, 1, // _mbx_name_fr: Allemagne
              4, 3, // _mbx_name_de: Deutschland
              6, 9  // population: 20
            ],
            type: 1, // point
            geometry: [ 9, 52, 36 ]
          },
          {
            id: 14,
            tags: [
              0, 0, // name: Germany
              6, 9  // population: 20
            ],
            type: 1, // point
            geometry: [ 9, 53, 37 ]
          }
        ],
        keys: [
          'name',
          'name_en',
          'name_fr',
          '_mbx_name_fr',
          '_mbx_name_de',
          '_mbx_other',
          'population'
        ],
        values: [
          { string_value: 'Germany' },
          { string_value: 'Allemagne' },
          { string_value: 'La Allemagne' },
          { string_value: 'Deutschland' },
          { string_value: 'Alemania' },
          { string_value: 'Espana' },
          { string_value: 'Spanien' },
          { string_value: 'Espagne' },
          { string_value: 'Spain' },
          { int_value: 20 }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
