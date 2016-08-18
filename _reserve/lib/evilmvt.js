"use strict";

var binary = require('node-pre-gyp');
var fs = require('fs');
var path = require('path');
var binding_path = binary.find(path.resolve(path.join(__dirname,'../package.json')));

var EVILMVT = module.exports = require(binding_path).create;
EVILMVT.version = require('../package.json').version;