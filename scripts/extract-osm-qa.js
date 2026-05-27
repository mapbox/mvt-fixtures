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

import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import {promisify} from 'util';
import {SphericalMercator} from '@mapbox/sphericalmercator';
import MBTiles from '@mapbox/mbtiles';

const gunzip = promisify(zlib.gunzip);
const file = process.argv[2];
const bbox = JSON.parse(process.argv[3]);
const dir = path.resolve(`${import.meta.dirname  }/../real-world/${  process.argv[4]}`);

if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const sm = new SphericalMercator();
const xyz = sm.xyz(bbox, 12);
console.log(xyz);

const mb = await new Promise((resolve, reject) => {
  new MBTiles(file, (err, m) => (err ? reject(err) : resolve(m))); // eslint-disable-line no-new
});

const getTile = promisify(mb.getTile.bind(mb));

const tasks = [];
for (let x = xyz.minX; x <= xyz.maxX; x++) {
  for (let y = xyz.minY; y <= xyz.maxY; y++) {
    tasks.push({z: 12, x, y});
  }
}

const CONCURRENCY = 10;
let i = 0;
async function worker() {
  while (i < tasks.length) {
    const {z, x, y} = tasks[i++];
    const tile = await getTile(z, x, y);
    const buf = await gunzip(tile);
    fs.writeFileSync(`${dir}/${z}-${x}-${y}.mvt`, buf);
  }
}
await Promise.all(Array.from({length: CONCURRENCY}, worker));
console.log('Done!');
