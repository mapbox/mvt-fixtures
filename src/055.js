/*

* = geometry
- = tile extent

┌- - - - - - - -┐
| * * * * * * * |
| *           * |
| *           * |
| *           * |
| * * * * * * * |
└- - - - - - - -┘

./vtzero-encode-geom M1 1 1 L3 4094 0 0 4094 -4094 0 C

*/
module.exports = {
  description: 'clipped square (minus one unit buffer): a polygon that almost covers the entire tile minus one unit buffer',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/tree/master/2.1#43-geometry-encoding',
  validity: {
    v1: true,
    v2: true
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'clipped-square',
        features: [
          {
            id: 1,
            tags: [ 0, 0 ],
            type: 3,
            geometry: [ 9, 2, 2, 26, 8188, 0, 0, 8188, 8187, 0, 15 ]
          }
        ],
        keys: [ 'type' ],
        values: [
          { string_value: 'almost a clipped-square minus one unit' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
