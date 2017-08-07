# mvt-fixtures

[![Build Status](https://travis-ci.org/mapbox/mvt-fixtures.svg?branch=master)](https://travis-ci.org/mapbox/mvt-fixtures)

A [`require()`able](#require-fixtures) suite of [valid](#valid-fixtures) & [invalid](#invalid-fixtures) vector tile fixtures for testing [Mapbox Vector Tile](https://github.com/mapbox/vector-tile-spec) decoding. _Previously called `evilmvt` but eventually `happymvt` prevailed._

All fixtures are included in the `/fixtures` directory. They are named to be as descriptive as possible, but the tables below gives us more space to describe the underlying data.

**Version**: The version of `mvt-fixtures` stays in sync with the version of the Mapbox Vector Tile Specification. For instance `mvt-fixtures@2.1.0` references the Mapbox `vector-tile-spec@2.1`, reserving the patch versions for any unexpected bug fixes in this project.

# Usage

```shell
npm install @mapbox/mvt-fixtures --save
```

```javascript
const mvtf = require('@mapbox/mvt-fixtures')
```

# API

## create

Create a tile fixture from a protocol buffer schema object representing the
Mapbox Vector Tile schema.

**Parameters**

-   `json` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the json schema object to generate against the Mapbox Vector Tile Specification protocol

**Examples**

```javascript
const mvtf = require('@mapbox/mvt-fixtures');

const fixture = {
  layers: [
    {
      version: 2,
      name: 'hello',
      features: [
        {
          id: 1,
          tags: [],
          type: 1,
          geometry: [ 9, 50, 34 ]
        }
      ],
      keys: {},
      values: {},
      extent: 4096
    }
  ]
}

const buffer = mvtf.create(fixture);
```

Returns **[Buffer](https://nodejs.org/api/buffer.html)** buffer - a protocol buffer representing a Mapbox Vector Tile

## load

Load a pre-generated tile fixture as a buffer. All fixtures are located
in lib/fixtures.js and documented in [FIXTURES.md](/FIXTURES.md)

**Parameters**

-   `name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the name of the fixture to load

**Examples**

```javascript
const mvtf = require('@mapbox/mvt-fixtures');
const buffer = mvtf('valid-single-point-no-id');
```

Returns **[Buffer](https://nodejs.org/api/buffer.html)** buffer - a protocol buffer representing a Mapbox Vector Tile
