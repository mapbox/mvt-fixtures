module.exports = function(schema) {
  return {
    description: '[layer:extent] the layer extent field is completely missing. The spec says, "A layer MUST contain an extent that describes the width and height of the tile in integer coordinates."',
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
              type: schema.Tile.GeomType.POINT.value,
              geometry: [ 9, 50, 34 ]
            }
          ],
          keys: [],
          values: [],
          extent: 4096
        }
      ]
    },
    manipulate: function(buffer) {
      // stuff here
      return buffer;
    }
  }
};
