id|description|reference
---|---|---
001|A vector tile without any layers, which essentially results in a completely empty buffer. This is invalid according to both the v1 and v2 specifications.|[link](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L75)
002|A single layer with a single point feature that has no id field. According to the specification, "A feature MAY contain an id field. If a feature has an id field, the value of the id SHOULD be unique among the features of the parent layer."|[link](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md#42-features)
