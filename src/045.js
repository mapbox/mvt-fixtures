module.exports = {
  description: 'Empty layer',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md',
  validity: {
    v1: false,
    v2: false,
    error: 'empty layer'
  },
  json: {
    layers: [ {name: 'poi_label' } ]
  },
  proto: '2.1', // version number OR a string representation of the proto file to build from
  manipulate: function(buffer) {
    // manipulate the buffer here if you need, otherwise you can remove this
    return buffer;
  }
};
