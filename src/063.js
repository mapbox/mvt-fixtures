module.exports = {
  description: 'Point features with all properties suffixed with "xx_". Helpful for testing search/dropping of properties based on a particular syntax. Also includes one value with a different suffix in the case where only some data is intended to be read/dropped.',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md',
  validity: {
    v1: true,
    v2: true
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'props',
        features: [
          {
            id: 1,
            tags: [
              0, 0, // xx_a: letter A
              1, 1, // xx_b: letter B
              2, 2, // xx_c: letter C
              3, 3, // xx_d: letter D
              4, 4, // xx_e: letter E
              5, 5, // xx_f: letter F
              6, 6, // xx_g: letter G
              7, 7  // yy_1: letter Y
            ],
            type: 1, // point
            geometry: [ 9, 50, 34 ]
          },
          {
            id: 2,
            tags: [
              0, 0 // xx_a: letter A
            ],
            type: 1, // point
            geometry: [ 9, 51, 35 ]
          },
          {
            id: 3,
            tags: [
              4, 4, // xx_e: letter E
            ],
            type: 1, // point
            geometry: [ 9, 52, 36 ]
          },
          {
            id: 4,
            tags: [
              7, 7  // yy_1: letter Y
            ],
            type: 1, // point
            geometry: [ 9, 53, 37 ]
          }
        ],
        keys: [
          'xx_a',
          'xx_b',
          'xx_c',
          'xx_d',
          'xx_e',
          'xx_f',
          'xx_g',
          'yy_1'
        ],
        values: [
          { string_value: 'letter A' },
          { string_value: 'letter B' },
          { string_value: 'letter C' },
          { string_value: 'letter D' },
          { string_value: 'letter E' },
          { string_value: 'letter F' },
          { string_value: 'letter G' },
          { string_value: 'letter Y' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
