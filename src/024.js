const util = require('../lib/util');

module.exports = {
  description: 'Missing layer version property. Proto2 parsers will default to 1, assuming they are using a .proto file. Proto3 will default to zero (since this is an int), which is invalid.',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md#41-layers',
  validity: {
    v1: false,
    v2: false,
    error: 'fatal'
  },
  json: {
    layers: [
      {
        name: 'howdy',
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
  proto: '2.1',
  manipulate: function(buffer) {
    // manipulate the buffer here if you need, otherwise you can remove this
    return buffer;
  }
};
