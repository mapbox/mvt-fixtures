import fs from 'fs';
import {SphericalMercator} from '@mapbox/sphericalmercator';
import * as mvtf from '../index.js';
import extents from './real-world-extents.json' with {type: 'json'};

export function generateFixturesDoc() {
  let docs = `id|description|valid v1|valid v2
---|---|---|---
`;
  mvtf.each((fixture) => {
    let description = `${fixture.description} - [spec source](${fixture.specification_reference})`;
    const v1 = fixture.validity.v1 ? ':white_check_mark:' : ':x:';
    const v2 = fixture.validity.v2 ? ':white_check_mark:' : ':x:';
    if (!fixture.validity.v1 || !fixture.validity.v2) {
      description += ` - recommended error handling \`${fixture.validity.error}\``;
    }
    docs += `${fixture.id}|${description}|${v1}|${v2}\n`;
  });
  return docs;
}

export function generateRealWorldDoc() {
  const sm = new SphericalMercator();
  let docs = `name|description|tileset|zoom|template|number of tiles
---|---|---|---|---|---
`;
  for (const e in extents) {
    const ex = extents[e];
    const xyz = sm.xyz(ex.bbox, ex.zoom);
    const numTiles = (xyz.maxX - (xyz.minX - 1)) * (xyz.maxY - (xyz.minY - 1));
    const ext = ex.gzip ? 'mvt.gz' : 'mvt';
    const fpath = `\`real-world/${e}/{z}-{x}-{y}.${ext}\``;
    docs += `${e}|${ex.type}|${ex.tileset}|z${ex.zoom}|${fpath}|${numTiles}\n`;
  }
  return docs;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  fs.writeFileSync('./FIXTURES.md', generateFixturesDoc());
  fs.writeFileSync('./REAL-WORLD.md', generateRealWorldDoc());
}
