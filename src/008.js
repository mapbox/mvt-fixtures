const util = require('../lib/util');

module.exports = {
  description: '[layer:extent] the layer extent field is encoded as a string instead of a uint32',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L70',
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
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: [],
        values: [],
        extent: 'fourzeroninesix' // should be an integer
      }
    ]
  },
  proto: util.replace('2.1', 'optional uint32 extent', 'optional string extent')
};
