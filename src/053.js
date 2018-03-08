module.exports = {
  description: 'a polygon "clipped square" that covers the entire tile (also known as "painted")',
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
          { string_value: 'clipped-square' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
