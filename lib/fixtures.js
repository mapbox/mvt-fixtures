var fs = require('fs');
var path = require('path');
var fixturePath = path.resolve(__dirname, '..', 'fixtures');

var fixtures = {};
var files = fs.readdirSync(fixturePath);
files.forEach(function(file) {
  fixtures[path.basename(file, '.mvt')] = fs.readFileSync(path.resolve(fixturePath, file));
});

module.exports = fixtures;