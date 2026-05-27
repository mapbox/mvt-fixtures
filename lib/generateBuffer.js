import fs from 'fs';
import path from 'path';
import schema from 'protocol-buffers-schema';
import {PbfWriter} from 'pbf';
import {compile} from 'pbf/compile';

const specDir = path.join(import.meta.dirname, '..', 'vector-tile-spec');
const SPEC_VERSIONS = new Set(fs.readdirSync(specDir).filter(s => fs.lstatSync(path.join(specDir, s)).isDirectory()));
const schemaCache = new Map();

/**
 * Load a Mapbox Vector Tile Specification .proto file by version, with caching.
 * @param {String} version - e.g. '2.1'
 * @returns {String} the raw .proto schema text
 */
export function loadSchema(version) {
  let s = schemaCache.get(version);
  if (s === undefined) {
    s = fs.readFileSync(path.join(specDir, version, 'vector_tile.proto'), 'utf8');
    schemaCache.set(version, s);
  }
  return s;
}

/**
 * Generate a protocol buffer with a particular version of the Mapbox Vector Tile Specification or a custom .proto string
 * @param {Object} json - the JSON representation of the protocol buffer, defined in /src
 * @param {String} proto - a version of the specification to generate the buffer from, OR a full .proto file string
 * @param {Object} [opts]
 * @param {String} [opts.syntax='2'] - the protocol buffer syntax version to parse with
 * @returns {Buffer} a protocol-encoded buffer representing a valid or invalid Mapbox Vector Tile
 */
export function generateBuffer(json, proto, opts = {}) {
  if (!proto) throw new Error('Please provide the proto file or version to generate this buffer from');

  const replaceWith = `syntax = "proto${opts.syntax || '2'}";\n\npackage vector_tile;`;
  const rawProto = SPEC_VERSIONS.has(proto) ? loadSchema(proto) : proto;
  const protoString = rawProto.replace('package vector_tile;', replaceWith);

  const mvt = compile(schema.parse(protoString));
  const pbf = new PbfWriter();
  mvt.writeTile(json, pbf);
  return Buffer.from(pbf.finish());
}
