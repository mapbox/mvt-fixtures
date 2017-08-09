'use strict';

const test = require('tape');
const fs = require('fs');
const vtinfo = require('@mapbox/vtinfo');
const mvtf = require('..');

test('[each] loads all fixtures', (assert) => {
  const numFixtures = fs.readdirSync(__dirname + '/../src').length;

  let count = 0;
  mvtf.each(function(fixture) {
    count++;
    assert.ok(fixture.name);
    assert.ok(fixture.description);
    assert.ok(fixture.buffer);
    assert.ok(fixture.specification_reference);
  });

  assert.equal(numFixtures, count, 'expected number of fixtures');
  assert.end();
});

test('[each] failure, throws error if no function provided', (assert) => {
  try {
    mvtf.each();
    assert.fail();
  } catch(err) {
    assert.ok(err);
    assert.ok(/must provide a function argument in \.each()/.test(err.message), 'expected error message');
    assert.end();
  }
});
//
// test('[each] failure, throws reror if fixture does not exist', (assert) => {
//   try {
//     var buffer = mvtf.load('beep-boop');
//     assert.fail();
//   } catch(err) {
//     assert.ok(err);
//     assert.ok(/beep-boop does not exist in pre generated fixtures/.test(err.message));
//     assert.end();
//   }
// });
//
// test('[each] success, loads a pregenerated buffer', (assert) => {
//   var buffer = mvtf.load('valid-single-point-no-id');
//   assert.equal(typeof buffer, 'object', 'returns a buffer');
//
//   var info = vtinfo(buffer);
//   assert.equal(info.layers.length, 1, 'expected number of layers');
//   assert.equal(info.layers[0].name, 'hello', 'expected layer name');
//   assert.end();
// });
