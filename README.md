# mvt-fixtures

[![Build Status](https://travis-ci.org/mapbox/mvt-fixtures.svg?branch=master)](https://travis-ci.org/mapbox/mvt-fixtures)

A [`require()`able](#require-fixtures) suite of [valid](#valid-fixtures) & [invalid](#invalid-fixtures) vector tile fixtures for testing [Mapbox Vector Tile](https://github.com/mapbox/vector-tile-spec) decoding. _Previously called `evilmvt` but eventually `happymvt` prevailed._

All fixtures are included in the `/fixtures` directory. They are named to be as descriptive as possible, but the tables below gives us more space to describe the underlying data.

**Version**: The version of `mvt-fixtures` stays in sync with the version of the Mapbox Vector Tile Specification. For instance `mvt-fixtures@2.1.0` references the Mapbox `vector-tile-spec@2.1`, reserving the patch versions for any unexpected bug fixes in this project.

# Usage

The mvt-fixtures can be used in two distinct ways, either by using the Javascript interface to generate fixtures on the fly or by using the raw fixtures directly via the /fixtures directory. The JS api is recommended if you are working in Javascript or Node.js. The raw fixtures are provided for those using this outside of a Javascript application.

### Javascript usage

Check out the full Javascript interface over at [API.md](API.md)

```shell
npm install @mapbox/mvt-fixtures --save
```

```javascript
const mvtf = require('@mapbox/mvt-fixtures')
```

### Non-JS interface

Write a loop on the file system to run tiles through your encoder/decoder ... TODO
