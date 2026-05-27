import {SphericalMercator} from '@mapbox/sphericalmercator';
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import {promisify} from 'util';
import extents from '../lib/real-world-extents.js';

const gunzip = promisify(zlib.gunzip);
const sm = new SphericalMercator();

const tasks = [];
for (const e in extents) {
  if (!extents[e].tileset) {
    console.log('skipping ', e);
    continue;
  }
  const xyz = sm.xyz(extents[e].bbox, extents[e].zoom);
  const dir = path.join(import.meta.dirname, '..', 'real-world', e);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  for (let x = xyz.minX; x <= xyz.maxX; x++) {
    for (let y = xyz.minY; y <= xyz.maxY; y++) {
      tasks.push({name: e, set: extents[e], x, y});
    }
  }
}

const CONCURRENCY = 5;
let i = 0;
async function worker() {
  while (i < tasks.length) {
    const t = tasks[i++];
    await getAndWriteTile(t.name, t.set, t.x, t.y);
  }
}
await Promise.all(Array.from({length: CONCURRENCY}, worker));
console.log('bam.');

async function getAndWriteTile(name, set, x, y) {
  const url = `https://api.mapbox.com/v4/${set.tileset}/${set.zoom}/${x}/${y}.vector.pbf?access_token=${process.env.MapboxAccessToken}`;
  const res = await fetch(url);
  if (res.status === 404) {
    console.log(`${url} does not exist... skipping.`);
    return;
  }
  if (!res.ok) throw new Error(`status code error ${res.status}`);
  const data = Buffer.from(await res.arrayBuffer());

  if (set.gzip) {
    const p = path.join(import.meta.dirname, '..', 'real-world', name, `${set.zoom}-${x}-${y}.mvt.gz`);
    console.log(`writing ${p}`);
    fs.writeFileSync(p, data);
  } else {
    const deflated = await gunzip(data);
    const p = path.join(import.meta.dirname, '..', 'real-world', name, `${set.zoom}-${x}-${y}.mvt`);
    console.log(`writing ${p}`);
    fs.writeFileSync(p, deflated);
  }
}
