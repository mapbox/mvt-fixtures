var test = require('tape');
var fixtures = require('../lib/').fixtures;

test('valid fixtures are buffers', function(t) {
  for (f in fixtures.valid) {
    t.ok(Buffer.isBuffer(fixtures.valid[f]), f + ' is a buffer');
  }
  t.end();
});

test('invalid fixtures are buffers', function(t) {
  for (f in fixtures.invalid) {
    t.ok(Buffer.isBuffer(fixtures.invalid[f]), f + ' is a buffer');
  }
  t.end();
});