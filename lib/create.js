"use strict";

var Pbf = require('pbf');

module.exports = function(layers) {
  console.log(layers);

  if (!layers) {
    throw new Error('`layers` array not provided.');
  }

  var tile = new Pbf();

  layers.forEach(function(l) {
    pbf.writeMessage(3, createLayer(l));
  });

  return tile;
};

function createLayer(layer) {
  var layerWriter = new Pbf();

  var layerName = layer.name || 'layer_name';
  layerWriter.writeStringField(1, layerName);

  var layerVersion = layer.version || 2;
  layerWriter.writeFixed32Field(15, layerVersion);
  
  var layerKeys = layer.keys || [];
  layerKeys.forEach(function(k) {
    layerWriter.writeStringField(3, k);
  });
  
  var layerValues = layer.values || [];
  layerValues.forEach(function(v) {
    layerWriter.writeMessage(4, createValue(v));
  });

  var layerExtent = layer.extent || 4096;
  layerWriter.writeFixed32Field(5, layerExtent);

  var layerFeatures = layer.features || [];
  layerFeatures.forEach(function(f) {
    layerWriter.writeMessage(2, writeFeature(f));
  });

  return layerWriter;
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