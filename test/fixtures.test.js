import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import {pathToFileURL} from 'url';
import mvtf from '../index.js';

const root = path.join(import.meta.dirname, '..');

test('[fixtures] validate all raw fixtures are present', async () => {
  await mvtf.each((f) => {
    assert.ok(fs.existsSync(path.resolve(`${root}/fixtures/${f.id}`)), 'directory exists');
    assert.ok(fs.existsSync(path.resolve(`${root}/fixtures/${f.id}/tile.mvt`)));
    assert.ok(fs.existsSync(path.resolve(`${root}/fixtures/${f.id}/tile.json`)));
    assert.ok(fs.existsSync(path.resolve(`${root}/fixtures/${f.id}/info.json`)));
  });
});

test('[fixtures] validate all raw fixtures info matches that of the source fixture', async () => {
  await mvtf.each((f) => {
    const info = JSON.parse(fs.readFileSync(path.resolve(`${root}/fixtures/${f.id}/info.json`)));
    assert.equal(info.description, f.description, 'descriptions match');
    assert.equal(info.specification_reference, f.specification_reference, 'specification_references match');
    assert.equal(info.proto, f.proto, 'protos match');

    const buffer = fs.readFileSync(path.resolve(`${root}/fixtures/${f.id}/tile.mvt`));
    assert.deepEqual(buffer, f.buffer, 'buffers are equal');
    assert.equal(buffer.length, f.buffer.length, 'buffer lengths are equal');

    const json = JSON.parse(fs.readFileSync(path.resolve(`${root}/fixtures/${f.id}/tile.json`)));
    assert.deepEqual(json, f.json, 'jsons are equal');
  });
});

test('[fixtures] validate all source fixtures to make sure they have all required properties', async () => {
  const files = fs.readdirSync(path.resolve(`${root}/src`));
  for (const file of files) {
    const fixture = (await import(pathToFileURL(path.resolve(`${root}/src/${file}`)).href)).default;
    assert.ok(fixture.description, `${file} has property description`);
    assert.ok(fixture.specification_reference, `${file} has property specification_reference`);
    assert.ok(fixture.json, `${file} has property json`);
    if (fixture.manipulate) {
      assert.equal(typeof fixture.manipulate, 'function', `${file} property manipulate is a function`);
    }
  }
});
