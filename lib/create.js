"use strict";

var Pbf = require('pbf');

module.exports = function(layers) {
  console.log(layers);

  if (!layers) {
    throw new Error('`layers` array not provided.');
  }

  if (!Array.isArray(layers)) {
    throw new Error('`layers` is not an array.');
  }

  var tile = new Pbf();

  // write layers to pbf
  layers.forEach(function(l) {
    tile.writeMessage(3, writeLayer, l);
  });

  tile.finish();

  return tile.buf;
};

function writeLayer(layer, pbf) {
  console.log(layer);

  var layerName = layer.name || 'layer_name';
  pbf.writeStringField(1, layerName);

  var layerVersion = layer.version || 2;
  pbf.writeFixed32Field(15, layerVersion);
  
  var layerKeys = layer.keys || [];

  layerKeys.forEach(function(k) {
    pbf.writeStringField(3, k);
  });
  
  // var layerValues = layer.values || [];
  // layerValues.forEach(function(v) {
  //   pbf.writeMessage(4, createValue(v));
  // });

  var layerExtent = layer.extent || 4096;
  pbf.writeFixed32Field(5, layerExtent);

  // var layerFeatures = layer.features || [];
  // layerFeatures.forEach(function(f) {
  //   pbf.writeMessage(2, writeFeature(f));
  // });

}

function createValue(value) {
  var valueWriter = new Pbf();
  // create a visitor of some sort here
  return valueWriter;
} 

function createFeature(feature) {
  var featureWriter = new Pbf();

  if (feature.id) {
    featureWriter.writeFixed32Field(1, feature.id);
  }

  return featureWriter;
}