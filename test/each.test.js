'use strict';

const test = require('tape');
const fs = require('fs');
const mvtf = require('..');

test('[each] loads all fixtures', (assert) => {
  const numFixtures = fs.readdirSync(__dirname + '/../src').length;

  let count = 0;
  mvtf.each(function(fixture) {
    count++;
    assert.ok(fixture.id);
    assert.ok(fixture.description);
    assert.ok(fixture.buffer);
    assert.ok(fixture.specification_reference);
    assert.ok(fixture.validity);
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
