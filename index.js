'use strict';

const fs = require('fs');
const path = require('path');
const d3 = require('d3-queue');
const schema = require('protocol-buffers-schema');
const Pbf = require('pbf');
const Compile = require('pbf/compile');

const proto_mvt = schema.parse(fs.readFileSync('vector-tile-spec/2.1/vector_tile.proto', 'utf8'));
const mvt = Compile(proto_mvt);

function generateBuffer(json) {
  const pbf = new Pbf();
  mvt.Tile.write(json, pbf);
  return new Buffer(pbf.finish());
};

/**
 * Get a fixture by name
 * @param {String|Number} id - the id of the fixture as specified in [FIXTURES.md](FIXTURES.md)
 * @returns {Object} fixture - a fixture object
 * @example
 * const mvtf = require('mvt-fixtures');
 *
 * const fixture = mvtf.get('001');
 * console.log(fixture.id); // => '001'
 * console.log(fixture.description); // => ...
 * console.log(fixture.specification_reference); // => url to Mapbox Vector Tile specification reference
 * console.log(fixture.buffer); // => Buffer object
 * console.log(fixture.json); // => json representation of the fixture
 */
function get(id) {
  if (!id) throw new Error('No fixture id provided');

  // add prefix zeros if they don't exist
  id = (typeof id === 'number') ? getID(id) : id;

  let final = {};
  let fixture;
  try {
    fixture = require(`./src/${id}.js`)(mvt);
  } catch(err) {
    throw new Error(`${id} is not a fixture`);
  }

  final.id = id;
  final.description = fixture.description;
  final.specification_reference = fixture.specification_reference;
  final.json = fixture.json;
  final.buffer = generateBuffer(fixture.json);
  if (fixture.manipulate) {
    final.buffer = fixture.manipulate(final.buffer);
  }

  return final;
};

/**
 * Loops through all fixtures and provides the fixture object from get()
 * @param {Function} function - a synchronously running function to execute on each fixture
 * @example
 * const mvtf = require('mvt-fixtures');
 * const assert = require('assert');
 *
 * mvtf.each(function(fixture) {
 *   assert.ok(Buffer.isBuffer(fixture.buffer), 'is a buffer');
 * });
 */
function each(fn) {
  if (!fn) throw new Error('must provide a function argument in .each()');
  if (typeof fn !== 'function') throw new Error('argument is not a function');

  const files = fs.readdirSync('./src');
  const queue = d3.queue(1);
  files.forEach(function(file) {
    queue.defer(function(next) {
      let name = path.parse(file).name;
      let fixture = get(name);
      fn(fixture);
      next();
    });
  });

  queue.awaitAll(function(err) {
    if (err) throw err;
    // do nothing?
  });
}
/**
 * Create a tile fixture from a protocol buffer schema object representing the
 * Mapbox Vector Tile schema.
 * @param {Object} object - the json schema object to generate against the Mapbox Vector Tile Specification protocol (see src/ for examples)
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
function create(json) {
  if (!json) throw new Error('No specification provided');
  if (typeof json !== 'object') throw new Error('Specification parameter must be an object');

  return generateBuffer(json);
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
  get: get,
  each: each,
  create: create,
  getID, getID,
  schema: mvt
};
