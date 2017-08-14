module.exports = function(schema) {
  return {
    description: 'A vector tile without any layers, which essentially results in a completely empty buffer. This is invalid according to both the v1 and v2 specifications.',
    specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L75',
    json: {}
  }
};
