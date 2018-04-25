module.exports = {
  description: 'DESCRIPTION',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/3.0/README.md',
  validity: {
    v1: true,
    v2: true,
    v3: true,
    error: 'IF INVALID, ERROR TYPE HERE'
  },
  json: {
    layers: [
      {
        version: 3,
        name: 'v3',
        features: [
          {
            id: 1,
            tags: [],
            type: 2,
            geometry: [ 9, 50, 34, 20, 90, 2, -10, 10, 45, 1, -20, -2 ]
          }
        ],
        keys: [],
        values: [],
        extent: 4096
      }
    ]
  },
  proto: '3.0', // version number OR a string representation of the proto file to build from
  manipulate: function(buffer) {
    // manipulate the buffer here if you need, otherwise you can remove this
    return buffer;
  }
};
