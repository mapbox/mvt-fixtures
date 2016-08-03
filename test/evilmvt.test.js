var test = require('tape');
var evilmvt = require('../lib/index.js');
var fs = require('fs');

test('successfully creates a buffer', function() {
  var buffer = evilmvt();
  console.log(buffer);
});