'use strict';
/*

Extract tiles from an MBTiles

requires node-mbtiles to be installed in order to run,
plus an mbtiles file - perhaps downloaded from
https://osmlab.github.io/osm-qa-tiles/country.html

Usage
  node scripts/extract-osm-qa.js [mbtiles file] [bbox] [name]

Example
  node scripts/extract-osm-qa.js ~/Downloads/kazakhstan.mbtiles [71.315346,51.072253,71.578674,51.234837] osm-qa-astana

*/

const fs = require('fs');
const path = require('path');
const SM = require('@mapbox/sphericalmercator');
const queue = require('d3-queue').queue;
const MBTiles = require('@mapbox/mbtiles');
const zlib = require('zlib');

const file = process.argv[2];
const bbox = JSON.parse(process.argv[3]);
const dir = path.resolve(__dirname + '/../real-world/' + process.argv[4]);

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const sm = new SM();
const q = new queue(10);
const xyz = sm.xyz(bbox, 12); // all osm qa tiles are at z12
console.log(xyz);

for (let x = xyz.minX; x <= xyz.maxX; x++) {
  for (let y = xyz.minY; y <= xyz.maxY; y++) {
    q.defer(getAndWriteTile, 12, x, y);
  }
}

q.awaitAll(function(err, tiles) {
  console.log('Done!');
});

function getAndWriteTile(z, x, y, callback) {
  new MBTiles(file, function(err, mb) {
    mb.getTile(z, x, y, function(err, tile) {
      zlib.gunzip(tile, function(err, buf) {
        fs.writeFileSync(`${dir}/${z}-${x}-${y}.mvt`, buf);
        return callback(null);
      });
    });
  });
}
