import fs from 'fs';
import path from 'path';
import {pathToFileURL} from 'url';
import {getID} from './lib/util.js';
import generateBuffer from './lib/generateBuffer.js';

const srcDir = path.join(import.meta.dirname, 'src');

/**
 * Get a fixture by name
 * @param {String|Number} id - the id of the fixture as specified in [FIXTURES.md](FIXTURES.md)
 * @returns {Promise<Object>} fixture - a fixture object
 * @example
 * import mvtf from '@mapbox/mvt-fixtures';
 *
 * const fixture = await mvtf.get('001');
 * console.log(fixture.id); // => '001'
 * console.log(fixture.description); // => ...
 * console.log(fixture.specification_reference); // => url to Mapbox Vector Tile specification reference
 * console.log(fixture.buffer); // => Buffer object
 * console.log(fixture.json); // => json representation of the fixture
 */
export async function get(id) {
  if (!id) throw new Error('No fixture id provided');

  id = (typeof id === 'number') ? getID(id) : id;

  const fixturePath = path.join(srcDir, `${id}.js`);
  let fixture;
  try {
    fixture = (await import(pathToFileURL(fixturePath).href)).default;
  } catch (err) {
    throw new Error(`Error loading fixture ${fixturePath}: ${err}`);
  }

  const options = {};
  if (fixture.syntax) options.syntax = fixture.syntax;
  let buffer = generateBuffer(fixture.json, fixture.proto, options);
  if (fixture.manipulate) buffer = fixture.manipulate(buffer);

  return {
    id,
    description: fixture.description,
    specification_reference: fixture.specification_reference,
    json: fixture.json,
    proto: fixture.proto,
    validity: fixture.validity,
    buffer
  };
}

/**
 * Loops through all fixtures and provides the fixture object from get()
 * @param {Function} fn - a function (sync or async) to execute on each fixture
 * @example
 * import mvtf from '@mapbox/mvt-fixtures';
 * import assert from 'assert';
 *
 * await mvtf.each(fixture => {
 *   assert.ok(Buffer.isBuffer(fixture.buffer), 'is a buffer');
 * });
 */
export async function each(fn) {
  if (!fn) throw new Error('must provide a function argument in .each()');
  if (typeof fn !== 'function') throw new Error('argument is not a function');

  const files = fs.readdirSync(srcDir);
  for (const file of files) {
    const name = path.parse(file).name;
    const fixture = await get(name);
    await fn(fixture);
  }
}

/**
 * Create a tile buffer inline without referencing a pre-existing fixture
 *
 * @param {Object} definition - the JSON-style protocol buffer instructions
 * @param {Object} [options]
 * @param {string} [options.proto="2.1"] - optional vector tile spec version
 */
export function create(definition, options = {}) {
  if (!definition) throw new Error('No definition provided to mvt-fixtures#create method.');
  return {
    buffer: generateBuffer(definition, options.proto || '2.1', options)
  };
}

export default {get, each, create};
