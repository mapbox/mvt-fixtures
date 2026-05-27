import fs from 'fs';
import path from 'path';
import mvtf from '../index.js';

await mvtf.each((fixture) => {
  const dir = path.resolve('./fixtures/' + fixture.id);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);

  const mvt = dir + '/tile.mvt';
  const json = dir + '/tile.json';
  const info = dir + '/info.json';
  if (fs.existsSync(mvt) && !fs.readFileSync(mvt).equals(fixture.buffer)) {
    console.log('updating', dir);
  }
  fs.writeFileSync(mvt, fixture.buffer);
  fs.writeFileSync(json, JSON.stringify(fixture.json, null, 2));
  fs.writeFileSync(info, JSON.stringify({
    description: fixture.description,
    specification_reference: fixture.specification_reference,
    validity: fixture.validity,
    proto: fixture.proto
  }, null, 2));
});
