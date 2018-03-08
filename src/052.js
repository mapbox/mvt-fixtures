// to generate commands: http://www.cppshell.com/7gvnr
module.exports = {
  description: 'multipoint with not enough points',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/tree/master/2.1#43-geometry-encoding',
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
            geometry: [ 17, 10 ]
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
