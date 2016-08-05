# evilmvt

**This library is currently under heavy development. We do not recommend relying on the fixtures or module until an official release has been tagged!**

This library is two things:

1. A set of valid & invalid vector tile fixtures for testing Mapbox Vector Tile decoding. Located in `fixtures` and [`require()`able](#require-fixtures).
1. A low-level Node.js library for encoding Mapbox Vector Tile buffers using Protozero.

# Fixture suite

The fixtures below are include in `/fixtures`. They are named to be as descriptive as possible, but the table below gives us more space to describe the underlying data.

These are considered "invalid" according to the [Mapbox Vector Tile Specification version 2.1](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto).

Fixture name | Description
---|---
`invalid-Feature-odd_number_tags.mvt` | Only has a single [`tag`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L38) where multiples of 2 are required.
`invalid-Feature-unknown_field_type.mvt` | Has a field value of `10`, which is not defined in the specification.
`invalid-Key-mistyped_uint32.mvt` | Has a [`key`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L63) property incorrectly encoded as a type `std::uint32_t`. | n/a 
`invalid-Layer-extent-mistyped_string.mvt` | Layer [`extent`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L70) is incorrectly encoded as a type `std::string`.
`invalid-Layer-extent-none.mvt` | Missing the [`extent`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L70) type
`invalid-Layer-name-duplicates.mvt` | Includes two layer [`name`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L57)s with the same value: "layer_name".
`invalid-Layer-name-mistyped_uint32.mvt` | Has a layer name incorrectly encoded as `std::uint32_t`.
`invalid-Layer-name-none.mvt` | Does not include a layer name.
`invalid-Layer-name-none-version1.mvt` | Same as above, but version 1 tile.
`invalid-Layer-unknow_value_type.mvt` | Includes a Layer value tag of `20`, which is not defined in the spec.
`invalid-Layer-version-mistyped_string.mvt` | Layer version is incorrectly typed as a `std::string`.
`invalid-Layer-version-none.mvt` | Layer does not have a [`version`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L55) property.
`invalid-Tags-nonexistant-values.mvt` | Feature has [`tags`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L38) that point to non-existent [`Keys`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L63) and [`Values`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L66) in the layer.
`invalid-Value-string-mistyped_int64.mvt` | A Layer value property is listed as "string" but encoded as `std::int64_t`.
`valid-GeomType-single-linestring.mvt` | Single layer with a valid [linestring geometry](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#4353-example-linestring) from the spec docs.
`valid-GeomType-single-multilinestring.mvt` | Single layer with a valid [multilinestring geometry](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#4354-example-multi-linestring) from the spec docs.
`valid-GeomType-single-multipoint.mvt` | Single layer with a valid [multipoint geometry](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#4352-example-multi-point) from the spec docs.
`valid-GeomType-single-point.mvt` | Single layer with a valid [point geometry](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#4351-example-point) from the spec docs.
`valid-GeomType-single-polygon.mvt` | Single layer with a valid [polygon geometry](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#4355-example-polygon) from the spec docs.
`valid-GeomType-unknown.mvt` | Single geometry with [`UNKNOWN` type](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L9). This is considered "valid" in the lens of the specification. Encoders/decoders can choose to use or throw on this goemetry type.
`valid-Values-all.mvt` | A buffer with all possible [`Value` types](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L17-L28) encoded in the layer and single Feature.

### `require` fixtures

You can require the fixtures directly from the `evilmvt` module using the name of the fixture.

```javascript
var evilmvt = require('evilmvt');
var buffer = evilmvt.fixtures['invalid-Tags-nonexistant-values'];
// do something with bufer
```