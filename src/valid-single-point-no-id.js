module.exports = function(schema) {
  return {
    name: 'valid-single-point-no-id',
    description: 'Has a single feature without an ID.',
    specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md#42-features',
    json: {
      layers: [
        {
          version: 2,
          name: 'hello',
          features: [
            {
              // without id
              // id: 1,
              tags: [],
              type: schema.Tile.GeomType.POINT.value,
              geometry: [ 9, 50, 34 ]
            }
          ],
          keys: {},
          values: {},
          extent: 4096
        }
      ]
    },
    manipulate: function(buffer) {
      return buffer;
    }
  }
};
