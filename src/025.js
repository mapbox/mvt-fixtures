const util = require('../lib/util');

module.exports = {
  description: 'Layer has no features, encoders should not create this, but decoders should read this still',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md#41-layers',
  validity: {
    v1: true,
    v2: true,
    error: 'Decoders should still be able to handle a layer with no features'
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'hello',
        features: [
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
