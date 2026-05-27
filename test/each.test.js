import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import * as mvtf from '../index.js';

const srcDir = path.join(import.meta.dirname, '..', 'src');

test('[each] loads all fixtures', () => {
  const numFixtures = fs.readdirSync(srcDir).length;

  let count = 0;
  mvtf.each((fixture) => {
    count++;
    assert.ok(fixture.id);
    assert.ok(fixture.description);
    assert.ok(fixture.buffer);
    assert.ok(fixture.specification_reference);
    assert.ok(fixture.validity);
  });

  assert.equal(numFixtures, count, 'expected number of fixtures');
});

test('[each] failure, throws error if no function provided', () => {
  assert.throws(() => mvtf.each(), /must provide a function argument in \.each\(\)/);
});
