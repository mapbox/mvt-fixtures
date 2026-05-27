import fs from 'fs';
import path from 'path';
import {generateBuffer, loadSchema} from './lib/generateBuffer.js';

const srcDir = path.join(import.meta.dirname, 'src');

/**
 * Get a fixture by name
 * @param {String|Number} id - the id of the fixture as specified in [FIXTURES.md](FIXTURES.md)
 * @returns {Object} fixture - a fixture object
 * @example
 * import mvtf from '@mapbox/mvt-fixtures';
 *
 * const fixture = mvtf.get('001');
 * console.log(fixture.id); // => '001'
 * console.log(fixture.description); // => ...
 * console.log(fixture.specification_reference); // => url to Mapbox Vector Tile specification reference
 * console.log(fixture.buffer); // => Buffer object
 * console.log(fixture.json); // => json representation of the fixture
 */
export function get(id) {
  if (!id) throw new Error('No fixture id provided');

  id = (typeof id === 'number') ? String(id).padStart(3, '0') : id;

  const fixturePath = path.join(srcDir, `${id}.json`);
  let fixture;
  try {
    fixture = JSON.parse(fs.readFileSync(fixturePath, 'utf8'));
  } catch (err) {
    throw new Error(`Error loading fixture ${fixturePath}: ${err}`);
  }

  let proto = fixture.proto;
  if (Array.isArray(proto)) {
    const [version, before, after] = proto;
    const schema = loadSchema(version);
    if (schema.indexOf(before) === -1) throw new Error(`${before} not found in ${version} schema`);
    proto = schema.replace(before, after);
  }

  return {
    id,
    description: fixture.description,
    specification_reference: fixture.specification_reference,
    json: fixture.json,
    proto: fixture.proto,
    validity: fixture.validity,
    buffer: generateBuffer(fixture.json, proto, {syntax: fixture.syntax})
  };
}

/**
 * Loops through all fixtures and provides the fixture object from get()
 * @param {Function} fn - a function to execute on each fixture
 * @example
 * import mvtf from '@mapbox/mvt-fixtures';
 * import assert from 'assert';
 *
 * mvtf.each(fixture => {
 *   assert.ok(Buffer.isBuffer(fixture.buffer), 'is a buffer');
 * });
 */
export function each(fn) {
  if (typeof fn !== 'function') throw new Error('must provide a function argument in .each()');
  for (const file of fs.readdirSync(srcDir)) fn(get(path.parse(file).name));
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
  return {buffer: generateBuffer(definition, options.proto || '2.1', options)};
}
