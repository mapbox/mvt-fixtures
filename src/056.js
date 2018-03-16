/*

* = geometry
- = tile extent

* * * * * * * * * * * * * * * *
*                             *
*                             *
*      ┌- - - - - - - -┐      *
*      |               |      *
*      |               |      *
*      |               |      *
*      |               |      *
*      |               |      *
*      └- - - - - - - -┘      *
*                             *
*                             *
* * * * * * * * * * * * * * * *

./vtzero-encode-geom M1 -200 -200 L3 4496 0 0 4496 -4496 0 C

*/
module.exports = {
  description: 'clipped square (large buffer): a polygon that covers the entire tile plus a 200 unit buffer',
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
            geometry: [ 9, 399, 399, 26, 8992, 0, 0, 8992, 8991, 0, 15 ]
          }
        ],
        keys: [ 'type' ],
        values: [
          { string_value: 'large 200 unit buffer' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
