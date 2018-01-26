module.exports = {
  description: 'A single layer with a single point feature that has no id field. According to the specification, "A feature MAY contain an id field. If a feature has an id field, the value of the id SHOULD be unique among the features of the parent layer."',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md#42-features',
  validity: {
    v1: true,
    v2: true
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'hello',
        features: [
          {
            // without id
            // id: 1,
            tags: [
              0, 0
            ],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: [
          'hello'
        ],
        values: [
          { string_value: 'world' }
        ],
        extent: 4096
      }
    ]
  },
  proto: '2.1'
};
