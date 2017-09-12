const util = require('../lib/util');

module.exports = {
  description: 'A Layer value property is listed as "string" but encoded as std::int64_t',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md',
  validity: {
    v1: false,
    v2: false,
    error: 'fatal'
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
            geometry: [9, 50, 34]
          }
        ],
        keys: ['key1'],
        values: [
          { string_value: 1234567890123456 }
        ],
        extent: 4096
      }
    ]
  },
  proto: util.replace('2.1', 'optional string string_value', 'optional uint64 string_value'),
  manipulate: function (buffer) {
    // manipulate the buffer here if you need, otherwise you can remove this
    return buffer;
  }
};
