import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import {generateFixturesDoc, generateRealWorldDoc} from '../scripts/docs.js';

test('[docs] FIXTURES.md matches generated output', () => {
  assert.equal(fs.readFileSync('./FIXTURES.md', 'utf8'), generateFixturesDoc());
});

test('[docs] REAL-WORLD.md matches generated output', () => {
  assert.equal(fs.readFileSync('./REAL-WORLD.md', 'utf8'), generateRealWorldDoc());
});
