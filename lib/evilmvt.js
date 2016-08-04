"use strict";

var binary = require('node-pre-gyp');
var fs = require('fs');
var path = require('path');
var binding_path = binary.find(path.resolve(path.join(__dirname,'../package.json')));

var EVILMVT = module.exports = require(binding_path);
EVILMVT.version = require('../package.json').version;
EVILMVT.fixtures = {
  'invalid-Key-mistyped_uint32': fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', 'invalid-Key-mistyped_uint32.mvt')),
  'invalid-Layer-extent-mistyped_string': fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', 'invalid-Layer-extent-mistyped_string.mvt')),
  'invalid-Layer-name-duplicates': fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', 'invalid-Layer-name-duplicates.mvt')),
  'invalid-Layer-name-mistyped_uint32': fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', 'invalid-Layer-name-mistyped_uint32.mvt')),
  'invalid-Layer-name-none': fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', 'invalid-Layer-name-none.mvt')),
  'invalid-Layer-version-mistyped_string': fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', 'invalid-Layer-version-mistyped_string.mvt')),
  'invalid-Layer-version-none': fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', 'invalid-Layer-version-none.mvt')),
  'invalid-Tags-nonexistant-values': fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', 'invalid-Tags-nonexistant-values.mvt')),
  'invalid-Value-string-mistyped_int64': fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', 'invalid-Value-string-mistyped_int64.mvt')),
  'valid-GeomType-single-linestring': fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', 'valid-GeomType-single-linestring.mvt')),
  'valid-GeomType-single-multilinestring': fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', 'valid-GeomType-single-multilinestring.mvt')),
  'valid-GeomType-single-multipoint': fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', 'valid-GeomType-single-multipoint.mvt')),
  'valid-GeomType-single-point': fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', 'valid-GeomType-single-point.mvt')),
  'valid-GeomType-single-polygon': fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', 'valid-GeomType-single-polygon.mvt')),
  'valid-Values-all': fs.readFileSync(path.resolve(__dirname, '..', 'fixtures', 'valid-Values-all.mvt'))
};