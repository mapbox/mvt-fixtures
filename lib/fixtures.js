const fs = require('fs');
const schema = require('protocol-buffers-schema');
const Pbf = require('pbf');
const Compile = require('pbf/compile');
const proto_mvt = schema.parse(fs.readFileSync('../vector-tile-spec/2.1/vector_tile.proto', 'utf8'));
const mvt = Compile(proto_mvt);

module.exports = {
  /**
   * Has a single feature without an ID.
   * > A feature MAY contain an id field. If a feature has an id field, the value
   * > of the id SHOULD be unique among the features of the parent layer
   * > ([reference](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md#42-features))
   * @name valid-single-point-no-id
   */
  'valid-single-point-no-id': {
    layers: [
      {
        version: 2,
        name: 'hello',
        features: [
          {
            // without id
            // id: 1,
            tags: [],
            type: mvt.Tile.GeomType.POINT,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: {},
        values: {},
        extent: 4096
      }
    ]
  },

  /**
   * Empty protocol buffer with no layers array
   * > A Vector Tile SHOULD contain at least one layer.
   * > ([reference](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L75))
   * @name invalid-no-layers
   */
  'invalid-no-layers': {}

};
