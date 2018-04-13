![mvt-fixtures crew](https://c1.staticflickr.com/5/4495/24124229798_b82cd97858_o.png)

[![Build Status](https://travis-ci.org/mapbox/mvt-fixtures.svg?branch=master)](https://travis-ci.org/mapbox/mvt-fixtures)

A `require()`able suite of valid and invalid vector tile fixtures for testing [Mapbox Vector Tile](https://github.com/mapbox/vector-tile-spec) encoders and decoders. You can view a list of all fixtures at [FIXTURES.md](FIXTURES.md).

# Usage

mvt-fixtures can be used in two distinct ways

1. **javascript interface**: use the javascript interface to generate fixtures on the fly
1. **raw fixtures** use the raw fixtures directly via the /fixtures directory.

The Javascript API is recommended if you are working in Javascript or Node.js. The raw fixtures are provided for those using this outside of a Javascript application. The recommended workflow is to have your encoder or decoder loop through every fixture and either expect to successfully decode/encode valid fixtures, or fail to decode/encode invalid fixtures. When new fixtures are added to this repository, you simply need to update the version of the module (or your submodule) to get the new fixtures and re-run tests.

**Validity:** each fixture includes information about whether they are valid according to the specification versions and possible error outcomes if they are invalid. If any of the fixtures are invalid, they must include an `error` field describing how to recover (or not) from the error. These can be found in the `validity` field of the fixture and info.json files. The following checks:

* `v1` (Boolean): is this fixture valid according to Version 1.x of the Mapbox Vector Tile spec
* `v2` (Boolean): is this fixture valid according to Version 2.x of the Mapbox Vector Tile spec
* `error` (String): describes if the encoder/decoder should recover from this error or stop completely. THis is only present if the fixture is invalid according to one or more spec revisions. Values are
  * `recoverable`: should the encoder/decoder continue move on and continue its work? For instance, if invalid geometry is found, can the encoder safely move to the next feature?
  * `fatal`: the encoder should completely stop its process

### Javascript usage

Check out the full Javascript interface over at [API.md](API.md)

```shell
npm install @mapbox/mvt-fixtures --save-dev
```

```javascript
const mvtf = require('@mapbox/mvt-fixtures');
const decoder = require('your-mvt-decoder');

// assert on every single buffer
mvtf.each(function(fixture) {
  let output = decoder(fixture.buffer);
  assert.equal(output.layers.length, fixture.json.layers.length, 'expected number of layers');
  // ... more tests
});

// or you can get individual fixtures
const output = decoder(mvtf.get('043').buffer);
```

### Non-JS interface

You can access all of the fixtures and their metadata in the /fixtures directory. You can download this repository and get them manually, or use this repository as a submodule. Each fixture is named by the directory /fixtures/{name} and has the following files:

1. tile.mvt - the protocol buffer that represents (or intentionally breaks) the Mapbox Vector Tile specification
1. tile.json - a JSON representation of the tile and its properties
1. info.json - information about the fixture including `name`, `description`, and `specification_reference`.

### Defaults and validity

Validity can be messy. In the case of the `validity` property for the fixtures, they refer to the _Mapbox Vector Tile Specification_ but depending on the protocol buffer specification we are _decoding_ with, fields that may be required by the spec and are missing can be interpreted as default values. For example: in fixture 003 where the "GeomType" tag is completely missing, any vector tile decoder using the proto2 syntax will interpret this by the default value UNKNOWN instead of a missing tag, so the fixture itself is interpreted as "valid".

# Real-world fixtures

While the bulk of mvt-fixtures is focused on minimal unit tests with very specific features, it also includes a set of real-world tiles that are useful for benchmarking and running your decoder through more realistic tiles. Learn more about each real world extent in [REAL-WORLD.md](REAL-WORLD.md).

# Develop

### Setup
```
git clone git@github.com:mapbox/mvt-fixtures.git
cd mvt-fixtures
git submodule update --init
npm install
npm install -g documentation
```

### Adding a new fixture

All fixtures have a source file in the /src directory. This file is a module that exports an object with the following parameters:

```javascript
module.exports = {
  description: 'DESCRIPTION',
  specification_reference: 'SPECIFICATION_URL',
  validity: {
    v1: false,
    v2: false,
    error: 'ERROR_TYPE'
  },
  json: {...},
  proto: '2.1'
};
```

A new fixture can be created by running the command, which will auto-increment the ID:

```shell
npm run new
# New file created: /src/003.js.
```

### Building fixtures

To rebuild all of the raw fixtures (including the tile.mvt, tile.json, and info.json files) in /fixtures you can run:

```
npm run build
```

### Debugging fixtures

There are couple scripts included for debugging the fixtures as you create them.

**protoc specification dump** allows you to dump mvt fixtures to the text-based representation supported by the google protoc tool. This can be very useful for debugging fixtures to ensure you've created what you expected (particularly for tiles designed to be invalid to parse).

```bash
$ ./scripts/dump fixtures/002/tile.mvt
layers {
  name: "hello"
  features {
    type: POINT
    geometry: 9
    geometry: 50
    geometry: 34
  }
  extent: 4096
  version: 2
}
```

**raw protoc dump** allows you to dump the raw contents of a buffer. This particularly useful for tiles that don't match the vector_tile.proto format and you want to view which tags are generated

```bash
$ ./scripts/dump fixtures/002/tile.mvt --raw
3 {
  15: 2
  1: "hello"
  2 {
    2: ""
    3: 1
    4: "\t2\""
  }
  5: 4096
}
```

**[vtvalidate](https://github.com/mapbox/vtvalidate)** is a node C++ addon that can be installed via npm separately. This uses vtzero to parse a vector tile buffer and has a CLI available for quick use.

```bash
$ vtvalidate fixtures/003/tile.mvt
unknown geometry type
```

### Building docs

Documentation takes two forms...

1. Javascript API docs in API.md
1. Fixture reference in FIXTURES.md

These can be generated by running:

```
npm run docs
```

### Running tests

All tests can be run with:

```
npm test
```
