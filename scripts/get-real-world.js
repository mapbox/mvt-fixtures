'use strict';
const request = require('request');
const SM = require('@mapbox/sphericalmercator');
const d3 = require('d3-queue');
const fs = require('fs');
const path = require('path');
const extents = require('../lib/real-world-extents.js');

const sm = new SM();
const q = d3.queue(5);

for (let e in extents) {
  let xyz = sm.xyz(extents[e].bbox, extents[e].zoom);

  if (!fs.existsSync(path.join(__dirname, '..', 'real-world', e))) {
    fs.mkdirSync(path.join(__dirname, '..', 'real-world', e));
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
  request.get(url, function(err, res, data) {
    if (err) return callback(err);
    if (res.statusCode !== 200) return callback(new Error(`status code error ${res.statusCode}`));
    console.log(`writing ${name}/${z}-${x}-${y}.mvt`);
    fs.writeFileSync(path.join(__dirname, '..', 'real-world', name, `${z}-${x}-${y}.mvt`), data);
    return callback();
  });
};
