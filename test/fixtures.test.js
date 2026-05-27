import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'fs';
import path from 'path';

const srcDir = path.join(import.meta.dirname, '..', 'src');

test('[fixtures] all source fixtures have required properties', () => {
  for (const file of fs.readdirSync(srcDir)) {
    const fixture = JSON.parse(fs.readFileSync(path.join(srcDir, file)));
    assert.ok(fixture.description, `${file} has property description`);
    assert.ok(fixture.specification_reference, `${file} has property specification_reference`);
    assert.ok(fixture.json, `${file} has property json`);
    assert.ok(fixture.proto, `${file} has property proto`);
  }
});
