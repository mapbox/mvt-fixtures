/*

* = geometry
- = tile extent

* * * * * * * * * * *
* ┌- - - - - - - -┐ *
* |               | *
* |               | *
* |               | *
* |               | *
* |               | *
* └- - - - - - - -┘ *
* * * * * * * * * * *

*/
module.exports = {
  description: 'clipped square (one coordinate buffer): a polygon that covers the entire tile plus one coordinate buffer',
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
            geometry: [ 9, 1, 1, 26, 8196, 0, 0, 8196, 8195, 0, 15 ]
          }
        ],
        keys: [ 'type' ],
        values: [
          { string_value: 'one coordinate buffer' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
