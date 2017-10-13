'use strict';
const got = require('got');
const SM = require('@mapbox/sphericalmercator');
const d3 = require('d3-queue');
const fs = require('fs');
const path = require('path');
const extents = require('../lib/real-world-extents.js');

const sm = new SM();
const q = d3.queue(10);

for (let e in extents) {
  let xyz = sm.xyz(extents[e].bbox, extents[e].zoom);

  if (!fs.existsSync(path.resolve(path.join(__dirname, '..', 'real-world', e)))) {
    fs.mkdirSync(path.resolve(path.join(__dirname, '..', 'real-world', e)));
  }

  for (let x = xyz.minX; x <= xyz.maxX; x++) {
    for (let y = xyz.minY; y <= xyz.maxY; y++) {
      q.defer(getAndWriteTile, e, extents[e].tileset, extents[e].zoom, x, y);
    }
  }
}

q.awaitAll(function(err, data) {
  if (err) throw err;
  console.log('bam.');
});

function getAndWriteTile(name, tileset, z, x, y, callback) {
  let url = `https://api.mapbox.com/v4/${tileset}/${z}/${x}/${y}.vector.pbf?access_token=${process.env.MapboxAccessToken}`;
  let dst = path.join(__dirname, '..', 'real-world', name, `${z}-${x}-${y}.mvt`);
  got.stream(url)
    .on('error', (err) => {
      console.log(err);
      return callback(new Error(`error getting ${url}: ${err}`));
    })
    .pipe(fs.createWriteStream(dst))
    .on('error', (err) => {
      console.log(err);
      return callback(new Error(`something errored while writing: ${err}`));
    })
    .on('finish', (res) => {
      console.log(`wrote ${name}/${z}-${x}-${y}.mvt`);
      return callback();
    });
};
