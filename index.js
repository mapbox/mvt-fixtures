'use strict';

const fs = require('fs');
const path = require('path');
const d3 = require('d3-queue');
const util = require('./lib/util');
const generateBuffer = require('./lib/generateBuffer');

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
  id = (typeof id === 'number') ? util.getID(id) : id;

  let final = {};
  let fixture;

  const fixturePath = path.join(__dirname, 'src', `${id}.js`);
  try {
    fixture = require(fixturePath);
  } catch(err) {
    throw new Error(`Error loading fixture ${fixturePath}: ${err}`);
  }

  final.id = id;
  final.description = fixture.description;
  final.specification_reference = fixture.specification_reference;
  final.json = fixture.json;
  final.proto = fixture.proto;
  final.validity = fixture.validity;

  // generate buffer
  let options = {};
  if (fixture.syntax) options.syntax = fixture.syntax;
  final.buffer = generateBuffer(fixture.json, fixture.proto, options);

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

  const sourcePath = path.join(__dirname, 'src');
  const files = fs.readdirSync(sourcePath);
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

module.exports = {
  get: get,
  each: each
};
