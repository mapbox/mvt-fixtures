module.exports = {
    description: 'Point features with added language & worldview properties prefixed with "_mbx_xxx".',
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
                0, 0, // population: 50
              ],
              type: 1, // point
              geometry: [ 9, 50, 32 ]
            },
            {
              id: 2,
              tags: [
                0, 0, // population: 50
              ],
              type: 1, // point
              geometry: [ 9, 51, 33 ]
              // add some worldview to a feature in top 
            }
          ],
          keys: [
            'population'
          ],
          values: [
            { int_value: 50 }
          ],
          extent: 4096
        },
        {
          version: 2,
          name: 'bottom',
          features: [
            {
              id: 10,
              tags: [
                0, 0, // name: Germany
                1, 0, // name_en: Germany
                2, 1, // name_fr: Allemagne
                3, 2, // _mbx_name_fr: La Allemagne
                4, 3, // _mbx_name_de: Deutschland
                5, 4, // _mbx_other: Alemania
                7, 10 // worldview: all
              ],
              type: 1, // point
              geometry: [ 9, 50, 34 ]
            },
            {
              id: 15,
              tags: [
                0, 5, // name: España
                4, 6, // _mbx_name_de: Spanien
                2, 7, // name_fr: Espagne
                3, 7, // _mbx_name_fr: Espagne
                1, 8, // name_en: Spain
                6, 9, // population: 100
                7, 13 // worldview: IN
              ],
              type: 1, // point
              geometry: [ 9, 54, 38 ]
            },
            {
              id: 20,
              tags: [
                0, 0, // name: Germany
                1, 0, // name_en: Germany
                2, 1, // name_fr: Allemagne
                6, 9, // population: 100
                8, 10 // _mbx_worldview: all
              ],
              type: 1, // point
              geometry: [ 9, 51, 35 ]
            },
            {
              id: 25,
              tags: [
                0, 0, // name: Germany
                3, 1, // _mbx_name_fr: Allemagne
                4, 3, // _mbx_name_de: Deutschland
                6, 9, // population: 100
                8, 12 // _mbx_worldview: CN
              ],
              type: 1, // point
              geometry: [ 9, 52, 36 ]
            },
            {
              id: 30,
              tags: [
                0, 0, // name: Germany
                6, 9,  // population: 100
                8, 11 // _mbx_worldview: AD
              ],
              type: 1, // point
              geometry: [ 9, 53, 37 ]
            },
            {
              id: 35,
              tags: [
                0, 5, // name: España
                6, 9, // population: 100
                8, 14 // _mbx_worldview: CN,AD,IN
              ],
              type: 1, // point
              geometry: [ 9, 54, 38 ]
            },
            {
              id: 40,
              tags: [
                0, 5, // name: España
                6, 9, // population: 100
                8, 9 // _mbx_worldview: 100
              ],
              type: 1, // point
              geometry: [ 9, 54, 38 ]
            },
          ],
          keys: [
            'name',
            'name_en',
            'name_fr',
            '_mbx_name_fr',
            '_mbx_name_de',
            '_mbx_other',
            'population',
            'worldview',
            '_mbx_worldview'
          ],
          values: [
            { string_value: 'Germany' },      // 0
            { string_value: 'Allemagne' },
            { string_value: 'La Allemagne' },
            { string_value: 'Deutschland' },
            { string_value: 'Alemania' },
            { string_value: 'España' },       // 5
            { string_value: 'Spanien' },
            { string_value: 'Espagne' },
            { string_value: 'Spain' },
            { int_value: 100 },
            { string_value: 'all' },          // 10
            { string_value: 'AD' },
            { string_value: 'CN' },
            { string_value: 'IN' },
            { string_value: 'CN,AD,IN' }
          ],
          extent: 4096
        }
      ]
    },
    proto: '2.1'
  };
  