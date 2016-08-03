#!/usr/bin/env node

'use strict';

var fs = require('fs');
var path = require('path');
var vtinfo = require(path.resolve(__dirname, '..', 'lib', 'index.js'));

var usage = "evilmvt <path to buffer>"

if (!process.argv[2]) {
  console.log('Must provide a path to the vector tile buffer as the second argument.');
  console.log(usage);
  process.exit(1);
}
var file = process.argv[2];

var buffer;
try {
  buffer = fs.readFileSync(file);
} catch (err) {
  console.warn(err);
  process.exit(1);
}

// now try vtinfo
try {
  console.log(vtinfo(buffer));
  process.exit(0);
} catch (err) {
  console.warn(err);
  process.exit(1);
}