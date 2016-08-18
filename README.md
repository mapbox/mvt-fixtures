# mvt-fixtures

![](https://travis-ci.org/mapbox/evilmvt.svg?branch=master)

A [`require()`able](#require-fixtures) suite of [valid](#valid-fixtures) & [invalid](#invalid-fixtures) vector tile fixtures for testing [Mapbox Vector Tile](https://github.com/mapbox/vector-tile-spec) decoding. *Previously called `evilmvt` but eventually `happymvt` prevailed.*

All fixtures are included in the `/fixtures` directory. They are named to be as descriptive as possible, but the tables below gives us more space to describe the underlying data.

**Version**: The version of `mvt-fixtures` stays in sync with the version of the Mapbox Vector Tile Specification. For instance `mvt-fixtures@2.1.0` references the Mapbox `vector-tile-spec@2.1`, reserving the patch versions for any unexpected bug fixes in this project.

# Usage

### `require('@mapbox/mvt-fixtures')`

Install

```
npm install @mapbox/mvt-fixtures --save
```

You can require the fixtures directly from the `evilmvt` module using the name of the fixture.

```javascript
var fixtures = require('@mapbox/mvt-fixtures').fixtures;
var buffer = fixtures.invalid['Tags-nonexistant-values'];
// do something with bufer
```

### Vendor or Submodule

Alternatively, you can [download the repository](https://github.com/mapbox/evilmvt/archive/master.zip) and use the fixtures manually, OR include this repository as a [Git Submodule](https://github.com/blog/2104-working-with-submodules).

# Invalid fixtures `fixtures/invalid`

Fixture name | Description
---|---
`Feature-missing-GeomType.mvt` | The `Feature` message is missing a [`GeomType`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L41) message.
`Feature-multiple-geometries.mvt` | The `Feature` message as multiple [`geometry`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L46) fields encoded, when there should only be one.
`Feature-no-geometry.mvt` | The `Feature` message has no [`geometry`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L46).
`Feature-odd_number_tags.mvt` | Only has a single [`tag`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L38) where multiples of 2 are required.
`Feature-unknown_field_type.mvt` | Has a field value of `10`, which is [not listed as an enum](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L8-L13) and therefore invalid.
`GeomType-type.mvt` | The tag for GeomType is `10`, which is invalid.
`Key-mistyped_uint32.mvt` | Has a [`key`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L63) property incorrectly encoded as a type `std::uint32_t`. | n/a 
`Layer-extent-mistyped_string.mvt` | Layer [`extent`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L70) is incorrectly encoded as a type `std::string`.
`Layer-extent-none.mvt` | Missing the [`extent`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L70) type
`Layer-name-duplicates.mvt` | Includes two layer [`name`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L57)s with the same value: "layer_name".
`Layer-name-mistyped_uint32.mvt` | Has a layer name incorrectly encoded as `std::uint32_t`.
`Layer-name-none.mvt` | Does not include a layer name.
`Layer-name-none-version1.mvt` | Same as above, but version 1 tile.
`Layer-no-features.mvt` | Layer has no repeated [`Features`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L60) tags.
`Layer-unknow_value_type.mvt` | Includes a Layer value tag of `20`, which is not defined in the spec.
`Layer-invalid-version.mvt` | Layer version is `99`, which is invalid according to the specification.
`Layer-version-mistyped_string.mvt` | Layer version is incorrectly typed as a `std::string`.
`Layer-version-none.mvt` | Layer does not have a [`version`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L55) property.
`Tags-nonexistant-values.mvt` | Feature has [`tags`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L38) that point to non-existent [`Keys`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L63) and [`Values`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L66) in the layer.
`Tile-unknown-tag.mvt` | Tile message has an unknown tag value. The only accepted tag value here is `3`, but this tile encodes a `Feature` with the tag value of `10`.
`Value-no-fields.mvt` | includes a [`Value`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L66) without any fields encoded within it.
`Value-multiple-fields.mvt` | The [`Value`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L66) message has two entries, both strings, where there should only be one.
`Value-string-mistyped_int64.mvt` | A Layer value property is listed as "string" but encoded as `std::int64_t`.
`Value-unknown-field-type.mvt` | The [`Value`](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L66) has a field with an [unknown type](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L17-L28).

# Valid fixtures `fixtures/valid`

Fixture name | Description
---|---
`Feature-single-linestring.mvt` | Single layer with a valid [linestring geometry](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#4353-example-linestring) from the spec docs.
`Feature-single-multilinestring.mvt` | Single layer with a valid [multilinestring geometry](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#4354-example-multi-linestring) from the spec docs.
`Feature-single-multipoint.mvt` | Single layer with a valid [multipoint geometry](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#4352-example-multi-point) from the spec docs.
`Feature-single-point.mvt` | Single layer with a valid [point geometry](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#4351-example-point) from the spec docs.
`Feature-single-polygon.mvt` | Single layer with a valid [polygon geometry](https://github.com/mapbox/vector-tile-spec/tree/master/2.1#4355-example-polygon) from the spec docs.
`Feature-unknown-GeomType.mvt` | Single geometry with [`UNKNOWN` type](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L9). This is considered "valid" in the lens of the specification. Encoders/decoders can choose to use or throw on this goemetry type.
`Value-single-bool-point.mvt` | Single [Value](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L66) with `bool` type and a single Point feature.
`Value-single-double-point.mvt` | Single [Value](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L66) with `double` type and a single Point feature.
`Value-single-float-point.mvt` | Single [Value](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L66) with `float` type and a single Point feature.
`Value-single-int64-point.mvt` | Single [Value](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L66) with `int64` type and a single Point feature.
`Value-single-sint64-point.mvt` | Single [Value](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L66) with `sint64` type and a single Point feature.
`Value-single-string-point.mvt` | Single [Value](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L66) with `string` type and a single Point feature.
`Value-single-uint64-point.mvt` | Single [Value](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L66) with `uint64` type and a single Point feature.
`Values-all.mvt` | A buffer with all possible [`Value` types](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L17-L28) encoded in the layer and single Feature.