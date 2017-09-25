const util = require('../lib/util');

module.exports = {
  description: 'No Layer Name',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md#41-layers',
  validity: {
    v1: false,
    v2: false,
    error: 'fatal'
  },
  json: {
    layers: [
      {
        version: 2,
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
  proto: util.replace('2.1', 'required string name', 'optional string name'),
  manipulate: function(buffer) {
    // manipulate the buffer here if you need, otherwise you can remove this
    return buffer;
  }
};
