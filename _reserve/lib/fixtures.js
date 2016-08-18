var fs = require('fs');
var path = require('path');
var validFixturePath = path.resolve(__dirname, '..', 'fixtures', 'valid');
var invalidFixturePath = path.resolve(__dirname, '..', 'fixtures', 'invalid');

var fixtures = {
  valid: {},
  invalid: {}
};

fs.readdirSync(validFixturePath).forEach(function(file) {
  fixtures.valid[path.basename(file, '.mvt')] = fs.readFileSync(path.resolve(validFixturePath, file));
});

fs.readdirSync(invalidFixturePath).forEach(function(file) {
  fixtures.invalid[path.basename(file, '.mvt')] = fs.readFileSync(path.resolve(invalidFixturePath, file));
});

module.exports = fixtures;