import fs from 'fs';
import path from 'path';

/**
 * Replace part of a protocol buffer spec with a new string
 * @param {String} version - the version of the Mapbox Vector Tile Specification to use as the base
 * @param {String} before - the string to replace
 * @param {String} after - the string to replace with
 * @returns {String} schema - returns a .proto schema string to be used in protocol-buffers-schema parse() method
 */
export function replace(version, before, after) {
  const schema = fs.readFileSync(path.join(import.meta.dirname, '..', 'vector-tile-spec', version, 'vector_tile.proto'), 'utf8');
  if (schema.indexOf(before) === -1) throw new Error(`${before} not found in ${version} schema`);
  return schema.replace(before, after);
}

export function getID(number) {
  if (number < 10) return `00${number}`;
  if (number < 100) return `0${number}`;
  return `${number}`;
}
