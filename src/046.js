// testing https://github.com/mapbox/vtzero/blob/088ec096dd115fa82b7e0f9cadaca26ef9c592e5/test/t/test_geometry.cpp#L112-L131

module.exports = {
  description: 'Invalid linestring geometry that includes two points in the same position, which is not OGC valid',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/tree/master/2.1#43-geometry-encoding',
  validity: {
    v1: false,
    v2: false,
    error: 'recoverable'
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
            type: 2,
            geometry: [ 9, 4, 4, 18, 0, 16, 0, 0 ]
          }
        ],
        keys: [],
        values: [],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
