import test from 'node:test';
import assert from 'node:assert/strict';
import {VectorTile} from '@mapbox/vector-tile';
import {PbfReader} from 'pbf';
import mvtf from '../index.js';

test('[get] failure, throws error if no id provided', async () => {
  await assert.rejects(() => mvtf.get(), /No fixture id provided/);
});

test('[get] failure, throws error if fixture does not exist', async () => {
  await assert.rejects(() => mvtf.get('beep-boop'), /Error loading fixture/);
});

test('[get] success, gets a fixture and its properties/buffer', async () => {
  const fixture = await mvtf.get('002');
  assert.ok(fixture.buffer);
  assert.ok(fixture.id);
  assert.ok(fixture.json);
  assert.ok(fixture.description);
  assert.ok(fixture.specification_reference);
  assert.ok(fixture.validity);
  assert.equal(fixture.manipulate, undefined);
  assert.equal(typeof fixture.buffer, 'object', 'returns a buffer');

  const info = new VectorTile(new PbfReader(fixture.buffer));
  assert.equal(Object.keys(info.layers).length, 1, 'expected number of layers');
  assert.ok(info.layers.hello, 'expected layer name');

  assert.ok(await mvtf.get(1), 'works with a number too');
  assert.ok(await mvtf.get(2), 'works with a number too');
});
