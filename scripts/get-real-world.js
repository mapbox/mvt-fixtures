'use strict';
const request = require('request');
const SM = require('@mapbox/sphericalmercator');
const d3 = require('d3-queue');
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const extents = require('../lib/real-world-extents.js');

const sm = new SM();
const q = d3.queue(5);

for (let e in extents) {
  if (!extents[e].tileset) {
    console.log('skipping ', e);
  } else {
    let xyz = sm.xyz(extents[e].bbox, extents[e].zoom);

    if (!fs.existsSync(path.join(__dirname, '..', 'real-world', e))) {
      fs.mkdirSync(path.join(__dirname, '..', 'real-world', e));
    }

    for (let x = xyz.minX; x <= xyz.maxX; x++) {
      for (let y = xyz.minY; y <= xyz.maxY; y++) {
        q.defer(getAndWriteTile, e, extents[e], x, y);
      }
    }
  }
}

q.awaitAll(function(err, data) {
  if (err) throw err;
  console.log('bam.');
});

// function getAndWriteTile(name, tileset, z, x, y, callback) {
function getAndWriteTile(name, set, x, y, callback) {
  let url = `https://api.mapbox.com/v4/${set.tileset}/${set.zoom}/${x}/${y}.vector.pbf?access_token=${process.env.MapboxAccessToken}`;
  request.get(url, {encoding: null}, function(err, res, data) {
    if (err) return callback(err);
    if (res.statusCode === 404) {
      console.log(`${url} does not exist... skipping.`);
      return callback();
    }
    if (res.statusCode !== 200) return callback(new Error(`status code error ${res.statusCode}`));
    if (set.gzip) {
      let p = path.join(__dirname, '..', 'real-world', name, `${set.zoom}-${x}-${y}.mvt.gz`);
      write(p, data, function(err) {
        if (err) throw err;
        return callback();
      });
    } else {
      zlib.gunzip(data, function(err, deflated) {
        let p = path.join(__dirname, '..', 'real-world', name, `${set.zoom}-${x}-${y}.mvt`);
        write(p, deflated, function(err) {
          if (err) throw err;
          return callback();
        });
      });
    }
  });
}

function write(path, data, callback) {
  console.log(`writing ${path}`);
  fs.writeFileSync(path, data);
  return callback();
}
