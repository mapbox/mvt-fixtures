module.exports = function(schema) {
  return {
    description: 'A single layer with a single point feature that has no id field. According to the specification, "A feature MAY contain an id field. If a feature has an id field, the value of the id SHOULD be unique among the features of the parent layer."',
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
