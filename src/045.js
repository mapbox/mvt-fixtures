module.exports = {
  description: 'Invalid point geometry that includes a MoveTo command and only half of the xy coordinates',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/tree/master/2.1#43-geometry-encoding',
  validity: {
    v1: false,
    v2: false
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'hello',
        features: [
          {
            id: 1,
            tags: [],
            type: 1,
            geometry: [ 9, 50 /*, 34 */ ]
          }
        ],
        keys: [],
        values: [],
        extent: 4096
      }
    ]
  },
  proto: '2.1' // version number OR a string representation of the proto file to build from
};
