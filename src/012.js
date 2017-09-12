module.exports = {
  description: 'DESCRIPTION',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L55',
  validity: {
    v1: false,
    v2: false,
    error: 'fatal'
  },
  json: {
    layers: [
      {
        version: 99,
        name: 'hello',
        features: [
          {
            id: 1,
            tags: [],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: [],
        values: [],
        extent: 4096
      }
    ]
  },
  proto: '2.1', // version number OR a string representation of the proto file to build from
  manipulate: function(buffer) {
    // manipulate the buffer here if you need, otherwise you can remove this
    return buffer;
  }
};
