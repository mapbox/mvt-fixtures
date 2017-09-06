'use strict';

const fs = require('fs');
const schema = require('protocol-buffers-schema');
const Pbf = require('pbf');
const Compile = require('pbf/compile');

const MVT_SPEC_VERSIONS = ['1.0.0', '1.0.1', '2.0', '2.1'];

module.exports = function(buffer,proto) {
  let proto_schema;
  if (!proto) proto = '2.1';
  if (MVT_SPEC_VERSIONS.indexOf(proto) > -1) {
    proto_schema = schema.parse(fs.readFileSync(`vector-tile-spec/${proto}/vector_tile.proto`, 'utf8'));
  } else {
    proto_schema = schema.parse(proto);
  }
  const mvt = Compile(proto_schema);
  var tile = mvt.Tile.read(new Pbf(buffer));
  return tile;
}