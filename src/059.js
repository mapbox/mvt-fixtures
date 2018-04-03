module.exports = {
  description: 'A linestring feature that includes a ClosePath command.  A tile with such a command was added as a test fixture in https://github.com/mapbox/mapbox-gl-native/pull/2721, suggesting that such tiles may exist in practice, e.g. in old mapbox-gl-native offline databases.',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/1.0.1/vector_tile.proto',
  validity: {
    v1: true,
    v2: false,
    error: 'fatal'
  },
  json: {
    layers: [
      {
        version: 1,
        name: 'hello',
        features: [
          {
            id: 1,
            tags: [],
            type: 2,
            geometry: [ 9, 4, 4, 18, 0, 16, 16, 0, 7 ]
          }
        ],
        keys: [],
        values: [],
        extent: 4096
      }
    ]
  },
  proto: '1.0.1' // version number OR a string representation of the proto file to build from
};
