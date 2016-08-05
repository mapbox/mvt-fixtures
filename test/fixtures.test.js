var test = require('tape');
var fixtures = require('../lib/').fixtures;

for (f in fixtures) {
  test(f + ' is a buffer', function(t) {
    t.ok(Buffer.isBuffer(fixtures[f]), 'is a buffer');
    t.end();
  });
}