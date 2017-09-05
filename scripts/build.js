'use strict';

const fs = require('fs');
const path = require('path');
const mvtf = require('..');

mvtf.each(function(fixture) {

  let dir = path.resolve('./fixtures/' + fixture.id);
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  let mvt = dir + '/tile.mvt';
  let json = dir + '/tile.json';
  let info = dir + '/info.json';
  if (fs.existsSync(mvt) && !fs.readFileSync(mvt).equals(fixture.buffer)) {
    console.log('updating',dir);
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
