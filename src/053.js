/*

* = geometry
- = tile extent

┌*-*-*-*-*-*-*-*┐
*               *
|               |
*               *
|               |
*               *
└*-*-*-*-*-*-*-*┘

./vtzero-encode-geom M1 0 0 L3 4096 0 0 4096 -4096 0 C

*/
module.exports = {
  description: 'clipped square (exact extent): a polygon that covers the entire tile to the exact boundary',
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
            geometry: [ 9, 0, 0, 26, 8192, 0, 0, 8192, 8191, 0, 15 ]
          }
        ],
        keys: [ 'type' ],
        values: [
          { string_value: 'exact extent' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
