# create

Create a tile fixture from a protocol buffer schema object representing the
Mapbox Vector Tile schema.

**Parameters**

-   `object` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** the json schema object to generate against the Mapbox Vector Tile Specification protocol (see src/ for examples)
-   `json`  

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

# each

Loops through all fixtures and provides the fixture object from get()

**Parameters**

-   `function` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** a synchronously running function to execute on each fixture
-   `fn`  

**Examples**

```javascript
const mvtf = require('mvt-fixtures');
const assert = require('assert');

mvtf.each(function(fixture) {
  assert.ok(Buffer.isBuffer(fixture.buffer), 'is a buffer');
});
```

# generateBuffer

create a buffer representing a Mapbox Vector Tile from a JSON object

**Parameters**

-   `json`  

# get

Get a fixture by name

**Parameters**

-   `name` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the name of the fixture

**Examples**

```javascript
const mvtf = require('mvt-fixtures');

const fixture = mvtf.get('valid-single-point-no-id');
console.log(fixture);
console.log(fixture.name); // => 'valid-single-point-no-id'
console.log(fixture.description); // => '... description ...''
console.log(fixture.specification_reference); // => url to Mapbox Vector Tile specification reference
console.log(fixture.buffer); // => Buffer object
```

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** fixture - a fixture object, including information and the actual buffer
