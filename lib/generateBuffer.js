'use strict';

const fs = require('fs');
const schema = require('protocol-buffers-schema');
const Pbf = require('pbf');
const Compile = require('pbf/compile');

const MVT_SPEC_VERSIONS = fs.readdirSync('vector-tile-spec').filter(s => {
  return fs.lstatSync(`vector-tile-spec/${s}`).isDirectory();
});

/**
 * Generate a protocol buffer with a particular version of the Mapbox Vector Tile Specification or a custom .proto string
 * @param {Object} json - the JSON representation of the protocol buffer, defined in /src
 * @param {String} [proto] - an option parameter specifying which version of the specification to generate the buffer from
 * OR a complete string representing a .proto file. If no string is provided, defaults to version 2.1
 * @returns {Object} buffer - a protocol encoded buffere representing a valid or invalid Mapbox Vector Tile
 */
module.exports = function(json, proto) {
  let proto_schema;
  if (!proto) throw new Error('Please provide the proto file or version to generate this buffer from');
  if (MVT_SPEC_VERSIONS.indexOf(proto) > -1) {
    proto_schema = schema.parse(fs.readFileSync(`vector-tile-spec/${proto}/vector_tile.proto`, 'utf8'));
  } else {
    proto_schema = schema.parse(proto);
  }

  const mvt = Compile(proto_schema);
  const pbf = new Pbf();
  mvt.Tile.write(json, pbf);
  return new Buffer(pbf.finish());
};
