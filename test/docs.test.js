'use strict';

const test = require('tape');
const fs = require('fs');
const path = require('path');
const exec = require('child_process').exec;

test('[docs] FIXTURES.md and API.md have been generated', (assert) => {
  const apiBefore = fs.readFileSync(path.resolve('./API.md'));
  const fixBefore = fs.readFileSync(path.resolve('./FIXTURES.md'));
  const script = path.resolve('./scripts/docs.js');
  exec(`node ${script}`, function(err, stdin, stdout) {
    assert.ifError(err);
    const apiAfter = fs.readFileSync(path.resolve('./API.md'));
    const fixAfter = fs.readFileSync(path.resolve('./FIXTURES.md'));
    assert.deepEqual(fixBefore, fixAfter, 'FIXTURE.md buffers are equal');
    assert.deepEqual(apiBefore, apiAfter, 'API.md buffers are equal');
    assert.equal(fixBefore.toString(), fixAfter.toString(), 'FIXTURE.md strings match regenerated docs');
    assert.equal(apiBefore.toString(), apiAfter.toString(), 'API.md strings match regenerated docs');
    assert.end();
  });
});
