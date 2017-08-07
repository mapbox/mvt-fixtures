# invalid-no-layers

Empty protocol buffer with no layers array

> A Vector Tile SHOULD contain at least one layer.
> ([reference](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L75))

# valid-single-point-no-id

Has a single feature without an ID.

> A feature MAY contain an id field. If a feature has an id field, the value
> of the id SHOULD be unique among the features of the parent layer
> ([reference](https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md#42-features))
