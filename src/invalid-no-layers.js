module.exports = function(schema) {
  return {
    name: 'invalid-no-layers',
    description: 'Empty protocol buffer with no layers array',
    specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/vector_tile.proto#L75',
    json: {}
  }
};
