module.exports = {
  description: 'A layer named "water" with a single feature and unique properties (used as a layer compositing test with fixture 059)',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md',
  validity: {
    v1: true,
    v2: true
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'water',
        features: [
          {
            id: 1,
            tags: [ 0, 0 ],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: [
          'name'
        ],
        values: [
          { string_value: 'crater lake'}
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
