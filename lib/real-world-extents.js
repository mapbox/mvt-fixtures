'use strict';

module.exports = {
  chicago: {
    bbox: [-87.797928,41.783345,-87.590561,41.957448],
    zoom: 13,
    type: 'urban',
    tileset: 'mapbox.mapbox-streets-v7'
  },
  sanfrancisco: {
    bbox: [-122.518501,37.704467,-122.369499,37.808428],
    zoom: 14,
    type: 'urban',
    tileset: 'mapbox.mapbox-streets-v7'
  },
  nepal: {
    bbox: [85.289612,28.015014,85.686493,28.216080],
    zoom: 13,
    type: 'terrain',
    tileset: 'mapbox.mapbox-streets-v7,mapbox.mapbox-terrain-v2'
  },
  uruguay: {
    bbox: [-57.549133,-33.309873,-55.469971,-32.421703],
    zoom: 9,
    type: 'complex water feature',
    tileset: 'mapbox.mapbox-streets-v7,mapbox.mapbox-terrain-v2'
  },
  bangkok: {
    bbox: [100.226898,13.523179,100.859985,13.906075],
    zoom: 12,
    type: 'urban and suburban',
    tileset: 'mapbox.mapbox-streets-v7,mapbox.mapbox-terrain-v2'
  },
  norway: {
    bbox: [10.526276,64.806881,11.109924,64.919467],
    zoom: 12,
    type: 'many little islands',
    tileset: 'mapbox.mapbox-streets-v7,mapbox.mapbox-terrain-v2'
  },
  compressed: {
    bbox: [26.207199,-29.126222,26.227713,-29.109726],
    zoom: 14,
    type: 'gzip compressed tiles in a light urban area',
    tileset: 'mapbox.mapbox-streets-v7',
    gzip: true
  }
};
