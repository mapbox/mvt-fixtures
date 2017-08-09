'use strict';

const test = require('tape');
const fs = require('fs');
const path = require('path');
const mvtf = require('..');

test('validate all raw fixtures', (assert) => {
  mvtf.each(function(f) {
    assert.ok(fs.existsSync(path.resolve(`${__dirname}/../fixtures/${f.name}`)), 'directory exists');
    assert.ok(fs.existsSync(path.resolve(`${__dirname}/../fixtures/${f.name}/tile.mvt`)));
    assert.ok(fs.existsSync(path.resolve(`${__dirname}/../fixtures/${f.name}/tile.json`)));
    assert.ok(fs.existsSync(path.resolve(`${__dirname}/../fixtures/${f.name}/info.json`)));
  });
  assert.end();
});

// test if fixture has a "name"
// test if fixture has a "description"
// test if fixture has a "json"
// test if fixture has a "specification_reference"
// if has a "manipulate" function, make sure it returns a buffer


// test if fixture's "fixture/:name/tile.mvt" matches fixture.buffer (from get() method)
// test if fixture's "fixture/:name/tile.json" matches fixture.json
// test if fixture's "fixture/:name/info.json" matches fixture.name && fixture.description

// test if outcome of scripts/docs.js matches the contents of FIXTURES.md
