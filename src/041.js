const util = require('../lib/util');

module.exports = {
  description: 'Tile message has an unknown tag value, tags are encoded as strings instead of integers',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L38',
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
            tags: ['one','two'],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: ['type'],
        values: [ { string_value: 'park' }, { string_value: 'lake' }],
        extent: 4096
      }
    ]
  },
  proto: util.replace('2.1', 'repeated uint32 tags', 'repeated string tags')
};
