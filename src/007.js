module.exports = function(schema) {
  return {
    description: '[layer:keys] has a key value encoded as an integer instead of a string',
    specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L63',
    validity: {
      v1: true,
      v2: true,
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
              tags: [
                0,
                0
              ],
              type: schema.Tile.GeomType.POINT.value,
              geometry: [ 9, 50, 34 ]
            }
          ],
          keys: [
            1 // should be a string
          ],
          values: [
            'two'
          ],
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
