var test = require('tape');
var path = require('path');
var evilmvt = require('../lib/index.js');
var vtinfo = require('@mapbox/vtinfo');
var fs = require('fs');

var fixturesPath = '../fixtures/';

test('create', function(t) {
  var layers = [ // this doesn't do anything now, but how awesome would this be?
    {
      version: 2,
      name: 'layer_name',
      keys: ['hello'],
      values: ['world'],
      extent: 4096,
      features: [
        {
          id: 1,
          type: 'POINT',
          geometry: [9, 50, 34],
          tags: [0, 0]
        }
      ]
    }
  ];
  var buffer = evilmvt.create(layers);
  // var info = vtinfo(buffer);
  // console.log(info);
  if (process.env.UPDATE) fs.writeFileSync(path.resolve(__dirname, fixturesPath, 'invalid-Layer-name-none.mvt'), buffer);
  t.end();
});

// test('valid: single line', function(t) {
//   var buffer = evilmvt.validSingleLine();
//   if (process.env.UPDATE) fs.writeFileSync(path.resolve(__dirname, fixturesPath, 'valid-single-line.mvt'), buffer);
//   var info = vtinfo(buffer);
//   t.end();
// });