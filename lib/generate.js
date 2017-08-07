const fs = require('fs');
const schema = require('protocol-buffers-schema');
const Pbf = require('pbf');
const Compile = require('pbf/compile');

const proto_mvt = schema.parse(fs.readFileSync('vector-tile-spec/2.1/vector_tile.proto', 'utf8'));
const mvt = Compile(proto_mvt);

/**
 * Generate a Mapbox Vector Tile protocol buffer from a json object
 */
module.exports = function(json) {
  const pbf = new Pbf();
  mvt.Tile.write(json, pbf);
  return new Buffer(pbf.finish());
};
