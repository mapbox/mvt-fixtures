id|description|valid v1|valid v2
---|---|---|---
001|A vector tile without any layers, which essentially results in a completely empty buffer.
[spec source](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L75)|:white-check-mark:|:white-check-mark:
002|A single layer with a single point feature that has no id field. According to the specification, "A feature MAY contain an id field. If a feature has an id field, the value of the id SHOULD be unique among the features of the parent layer."
[spec source](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md#42-features)|:white-check-mark:|:white-check-mark:
003|A single point feature with a missing geometry type. From the spec, "A feature MUST contain a type field as described in the Geometry Types section."
[spec source](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L41)
recommended error handling `recoverable`|:x:|:x:
004|[feature:geometry] A single point feature without a geometry field. The spec says, "A feature MUST contain a geometry field."
[spec source](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L46)
recommended error handling `recoverable`|:x:|:x:
005|[feature:tags] the tags array has only a single tag, where multiples of two are required.
[spec source](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L38)
recommended error handling `recoverable`|:x:|:x:
006|[feature:geometry] A single point feature with an invalid GeomType enum in the "type" field. Spec says, ""
[spec source](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L8-L13)
recommended error handling `recoverable`|:x:|:x:
007|[layer:keys] has a key value encoded as an integer instead of a string
[spec source](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L63)
recommended error handling `fatal`|:x:|:x:
