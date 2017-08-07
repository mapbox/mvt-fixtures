const fixtures = require('./lib/fixtures');
const generate = require('./lib/generate');

/**
 * Load a pre-generated tile fixture as a buffer. All fixtures are located
 * in lib/fixtures.js and documented in [FIXTURES.md](/FIXTURES.md)
 * @param {String} name - the name of the fixture to load
 * @returns {Buffer} buffer - a protocol buffer representing a Mapbox Vector Tile
 * @example
 * const mvtf = require('@mapbox/mvt-fixtures');
 * const buffer = mvtf('valid-single-point-no-id');
 */
module.exports.load = function(name) {
  if (!name) throw new Error('No fixture string provided');
  if (!fixtures[name]) throw new Error(`${name} does not exist in pre generated fixtures`);

  return generate(fixtures[name]);
};

/**
 * Create a tile fixture from a protocol buffer schema object representing the
 * Mapbox Vector Tile schema.
 * @param {Object} json - the json schema object to generate against the Mapbox Vector Tile Specification protocol
 * @returns {Buffer} buffer - a protocol buffer representing a Mapbox Vector Tile
 * @example
 * const mvtf = require('@mapbox/mvt-fixtures');
 *
 * const fixture = {
 *   layers: [
 *     {
 *       version: 2,
 *       name: 'hello',
 *       features: [
 *         {
 *           id: 1,
 *           tags: [],
 *           type: 1,
 *           geometry: [ 9, 50, 34 ]
 *         }
 *       ],
 *       keys: {},
 *       values: {},
 *       extent: 4096
 *     }
 *   ]
 * }
 *
 * const buffer = mvtf.create(fixture);
 */
 module.exports.create = function(json) {
  if (!json) throw new Error('No specification provided');
  if (typeof json !== 'object') throw new Error('Specification parameter must be an object');

  return generate(json);
};
