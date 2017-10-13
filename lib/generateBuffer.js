'use strict';

const fs = require('fs');
const path = require('path');
const schema = require('protocol-buffers-schema');
const Pbf = require('pbf');
const Compile = require('pbf/compile');
const replace = require('./util').replace;

const MVT_SPEC_VERSIONS = fs.readdirSync(path.join(__dirname, '..', 'vector-tile-spec')).filter(s => {
  return fs.lstatSync(path.join(__dirname, '..', 'vector-tile-spec', s)).isDirectory();
});

/**
 * Generate a protocol buffer with a particular version of the Mapbox Vector Tile Specification or a custom .proto string
 * @param {Object} json - the JSON representation of the protocol buffer, defined in /src
 * @param {String} proto - an optional parameter specifying which version of the specification to generate the buffer from
 * OR a complete string representing a .proto file. If no string is provided, defaults to version 2.1
 * @param {Object} [options] - an optional object
 * @param {String} [options.syntax='2'] - the protocol buffer syntax version to parse with
 * @returns {Object} buffer - a protocol encoded buffere representing a valid or invalid Mapbox Vector Tile
 */
module.exports = function(json, proto, opts) {
  if (!opts.syntax) opts.syntax = '2';
  const replaceWith = `syntax = "proto${opts.syntax}";\n\npackage vector_tile;`;

  let proto_schema, protoString;
  if (!proto) throw new Error('Please provide the proto file or version to generate this buffer from');
  if (MVT_SPEC_VERSIONS.indexOf(proto) > -1) {
    protoString = replace(proto, 'package vector_tile;', replaceWith);
    proto_schema = schema.parse(protoString);
  } else {
    protoString = proto.replace('package vector_tile;', replaceWith);
    proto_schema = schema.parse(protoString);
  }

  const mvt = Compile(proto_schema);
  const pbf = new Pbf();
  mvt.Tile.write(json, pbf);
  return new Buffer(pbf.finish());
};
