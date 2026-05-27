import fs from 'fs';
import {SphericalMercator} from '@mapbox/sphericalmercator';
import mvtf from '../index.js';
import rw from '../lib/real-world-extents.js';

/**
 * Generate FIXTURES.md doc from source files
 */
let docs = `id|description|valid v1|valid v2
---|---|---|---
`;

await mvtf.each((fixture) => {
  let description = `${fixture.description} - [spec source](${fixture.specification_reference})`;
  const emojiV1Validity = (!fixture.validity.v1) ? ':x:' : ':white_check_mark:';
  const emojiV2Validity = (!fixture.validity.v2) ? ':x:' : ':white_check_mark:';
  if (!fixture.validity.v1 || !fixture.validity.v2) {
    description += ` - recommended error handling \`${fixture.validity.error}\``;
  }
  docs += `${fixture.id}|${description}|${emojiV1Validity}|${emojiV2Validity}\n`;
});

fs.writeFileSync('./FIXTURES.md', docs);

/**
 * Generate REAL-WORLD.md doc from scripts/real-world.js
 */
const sm = new SphericalMercator();
let docsrw = `name|description|tileset|zoom|template|number of tiles
---|---|---|---|---|---
`;

for (const e in rw) {
  const ex = rw[e];
  const xyz = sm.xyz(ex.bbox, ex.zoom);
  const numTiles = (xyz.maxX - (xyz.minX - 1)) * (xyz.maxY - (xyz.minY - 1));
  let fpath = `\`real-world/${e}/{z}-{x}-{y}.mvt\``;
  if (ex.gzip) fpath = `\`real-world/${e}/{z}-{x}-{y}.mvt.gz\``;
  docsrw += `${e}|${ex.type}|${ex.tileset}|z${ex.zoom}|${fpath}|${numTiles}\n`;
}

fs.writeFileSync('./REAL-WORLD.md', docsrw);
