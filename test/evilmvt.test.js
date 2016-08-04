var test = require('tape');
var evilmvt = require('../lib/index.js');
var vtinfo = require('@mapbox/vtinfo');
var fs = require('fs');

test('successfully creates a buffer', function(t) {
  var buffer = evilmvt();
  console.log(buffer);
  var info = vtinfo(buffer);
  console.log(info);
  t.end();
});