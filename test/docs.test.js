import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';
import {exec} from 'child_process';

test('[docs] FIXTURES.md and API.md have been generated', (t, done) => {
  const apiBefore = fs.readFileSync(path.resolve('./API.md'));
  const fixBefore = fs.readFileSync(path.resolve('./FIXTURES.md'));
  const script = path.resolve('./scripts/docs.js');
  exec(`node ${script}`, (err) => {
    assert.ifError(err);
    const apiAfter = fs.readFileSync(path.resolve('./API.md'));
    const fixAfter = fs.readFileSync(path.resolve('./FIXTURES.md'));
    assert.deepEqual(fixBefore, fixAfter, 'FIXTURE.md buffers are equal');
    assert.deepEqual(apiBefore, apiAfter, 'API.md buffers are equal');
    assert.equal(fixBefore.toString(), fixAfter.toString(), 'FIXTURE.md strings match regenerated docs');
    assert.equal(apiBefore.toString(), apiAfter.toString(), 'API.md strings match regenerated docs');
    done();
  });
});
