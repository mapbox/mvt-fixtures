import fs from 'fs';
import path from 'path';
import schema from 'protocol-buffers-schema';
import {PbfWriter} from 'pbf';
import {compile} from 'pbf/compile';
import {replace} from './util.js';

const MVT_SPEC_VERSIONS = fs.readdirSync(path.join(import.meta.dirname, '..', 'vector-tile-spec')).filter(s => {
  return fs.lstatSync(path.join(import.meta.dirname, '..', 'vector-tile-spec', s)).isDirectory();
});

/**
 * Generate a protocol buffer with a particular version of the Mapbox Vector Tile Specification or a custom .proto string
 * @param {Object} json - the JSON representation of the protocol buffer, defined in /src
 * @param {String} proto - an optional parameter specifying which version of the specification to generate the buffer from
 * OR a complete string representing a .proto file. If no string is provided, defaults to version 2.1
 * @param {Object} [options] - an optional object
 * @param {String} [options.syntax='2'] - the protocol buffer syntax version to parse with
 * @returns {Object} buffer - a protocol encoded buffer representing a valid or invalid Mapbox Vector Tile
 */
export default function generateBuffer(json, proto, opts = {}) {
  if (!opts.syntax) opts.syntax = '2';
  const replaceWith = `syntax = "proto${opts.syntax}";\n\npackage vector_tile;`;

  if (!proto) throw new Error('Please provide the proto file or version to generate this buffer from');

  const protoString = MVT_SPEC_VERSIONS.indexOf(proto) > -1
    ? replace(proto, 'package vector_tile;', replaceWith)
    : proto.replace('package vector_tile;', replaceWith);

  const proto_schema = schema.parse(protoString);
  const mvt = compile(proto_schema);
  const pbf = new PbfWriter();
  mvt.writeTile(json, pbf);
  return Buffer.from(pbf.finish());
}
