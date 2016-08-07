var test = require('tape');
var path = require('path');
var evilmvt = require('..');
// var vtinfo = require('@mapbox/vtinfo');
// var mapnik = require('mapnik');
var fs = require('fs');

var fixturesPath = '../fixtures/';

test('success: evilmvt.create()', function(t) {
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
  // console.log(vtinfo(buffer));
  // var info = vtinfo(buffer);
  // console.log(info);
  if (process.env.UPDATE) fs.writeFileSync(path.resolve(__dirname, fixturesPath, 'invalid-Value-unknown_field_type.mvt'), buffer);
  t.end();
});


test('failure: evilmvt.create(): no layer array provided', function(t) {
  try {
    var buffer = evilmvt.create();
  } catch (err) {
    t.ok(err);
    t.equal(err.message, '`layers` array not provided.', 'expected error message');
    t.end();
  }
});

test('failure: evilmvt.create(): non-array provided for layers', function(t) {
  try {
    var buffer = evilmvt.create('not an array');
  } catch (err) {
    t.ok(err);
    t.equal(err.message, '`layers` is not an array.', 'expected error message');
    t.end();
  }
});

// test('failure: evilmvt.create(): empty array', function(t) {
//   try {
//     var buffer = evilmvt.create([]);
//   } catch (err) {
//     t.ok(err);
//     t.equal(err.message, 'Must provide a `layers` array with at least one layer object.', 'expected error message');
//     t.end();
//   }
// });

// test('failure: evilmvt.create(): layer is not an object', function(t) {
//   try {
//     var buffer = evilmvt.create(['not an object']);
//   } catch (err) {
//     t.ok(err);
//     t.equal(err.message, 'layers must be objects', 'expected error message');
//     t.end();
//   }
// });

// test('success: evilmvt.create(): creates two layers with different versions', function(t) {
//   var buffer = evilmvt.create([
//     {
//       version: 2
//     },
//     {
//       version: 1
//     }
//   ]);

//   var info = vtinfo(buffer);
//   t.equal(info.layers[0].version, 2, 'version 2');
//   t.equal(info.layers[1].version, 1, 'version 1');
//   t.end();
// });

// test('valid-Values-all.mvt', function(t) {
//   var buffer = evilmvt.fixtures['valid-Values-all'];
  
//   var vt = new mapnik.VectorTile(0, 0, 0);
//   vt.addDataSync(buffer, {validate:true});

//   console.log(vtinfo(buffer));
//   console.log(vt.toJSON()[0].features);
//   console.log(vt.toGeoJSONSync('layer_name'));

//   t.end();
// });