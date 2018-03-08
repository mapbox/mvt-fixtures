// emulating https://github.com/mapbox/vtzero/blob/088ec096dd115fa82b7e0f9cadaca26ef9c592e5/test/t/test_geometry.cpp#L293-L312
// for building limits: http://www.cppshell.com/8iwit
module.exports = {
  description: 'linestring with int32 overflow in y coordinate. This should not happen in real tiles since the coordinates should be between 0 and the extent. These are helpful for allowing decoders to figure out what to do in these cases.',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/tree/master/2.1#43-geometry-encoding',
  validity: {
    v1: true,
    v2: true
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
            geometry: [ 9, 0, 4294967295, 10, 1, 1 ]
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
