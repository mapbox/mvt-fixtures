'use strict';

const test = require('tape');
const fs = require('fs');
const path = require('path');
const mvtf = require('..');

test('[fixtures] validate all raw fixtures are present', (assert) => {
  mvtf.each(function(f) {
    assert.ok(fs.existsSync(path.resolve(`${__dirname}/../fixtures/${f.id}`)), 'directory exists');
    assert.ok(fs.existsSync(path.resolve(`${__dirname}/../fixtures/${f.id}/tile.mvt`)));
    assert.ok(fs.existsSync(path.resolve(`${__dirname}/../fixtures/${f.id}/tile.json`)));
    assert.ok(fs.existsSync(path.resolve(`${__dirname}/../fixtures/${f.id}/info.json`)));
  });
  assert.end();
});

test('[fixtures] validate all raw fixtures info matches that of the source fixture', (assert) => {
  mvtf.each(function(f) {
    // read info file and check name, description, and spec url match
    let info = JSON.parse(fs.readFileSync(path.resolve(`${__dirname}/../fixtures/${f.id}/info.json`)));
    assert.equal(info.description, f.description, 'descriptions match');
    assert.equal(info.specification_reference, f.specification_reference, 'specification_references match');
    assert.equal(info.proto, f.proto, 'protos match');

    let buffer = fs.readFileSync(path.resolve(`${__dirname}/../fixtures/${f.id}/tile.mvt`));
    assert.deepEqual(buffer, f.buffer, 'buffers are equal');
    assert.equal(buffer.length, f.buffer.length, 'buffer lengths are equal');

    let json = JSON.parse(fs.readFileSync(path.resolve(`${__dirname}/../fixtures/${f.id}/tile.json`)));
    assert.deepEqual(json, f.json, 'jsons are equal');
  });

  assert.end();
});

test('[fixtures] validate all source fixtures to make sure they have all required properties', (assert) => {
  const files = fs.readdirSync(path.resolve(`${__dirname}/../src`));
  files.forEach(function(file) {
    let fixture = require(path.resolve(`src/${file}`));
    assert.ok(fixture.description, `${file} has property description`);
    assert.ok(fixture.specification_reference, `${file} has property specification_reference`);
    assert.ok(fixture.json, `${file} has property json`);
    if (fixture.manipulate) {
      assert.equal(typeof fixture.manipulate, 'function', `${file} property manipulate is a function`);
    }
  });

  assert.end();
});
