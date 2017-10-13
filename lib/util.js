'use strict';

const fs = require('fs');
const path = require('path');

/**
 * Replace part of a protocol buffer spec with a new string
 * @param {String} version - the version of the Mapbox Vector Tile Specification to use as the base
 * @param {String} before - the string to replace
 * @param {String} after - the string to replace with
 * @returns {String} schema - returns a .proto schema string to be used in protocol-buffers-schema parse() method
 */
function replace(version, before, after) {
  let schema = fs.readFileSync(path.join(__dirname, '..', 'vector-tile-spec', version, 'vector_tile.proto'), 'utf8');
  if (schema.indexOf(before) === -1) throw new Error(`${before} not found in ${version} schema`);
  return schema.replace(before, after);
}

function getID(number) {
  if (number < 10) {
    return `00${number}`;
  } else if (number < 100 && number > 9) {
    return `0${number}`;
  } else {
    return `${number}`;
  }
}

module.exports = {
  replace: replace,
  getID: getID
};
