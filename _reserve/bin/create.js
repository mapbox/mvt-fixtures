#!/usr/bin/env node

var test = require('tape');
var path = require('path');
var evilmvt = require('../lib/index.js');
var fs = require('fs');
var vtinfo = require('@mapbox/vtinfo');

var fixturesPath = '../../fixtures/new';

var buffer = evilmvt.create();
console.log(buffer);
console.log(vtinfo(buffer));

if (process.argv[2]) {
  fs.writeFileSync(path.resolve(__dirname, fixturesPath, process.argv[2]), buffer);
}