'use strict';

const fs = require('fs');
const path = require('path');
const mvtf = require('..');

mvtf.each(function(fixture) {

  let dir = path.resolve('./fixtures/' + fixture.name);
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
  }

  let mvt = dir + '/tile.mvt';
  let json = dir + '/tile.json';
  let info = dir + '/info.json';
  fs.writeFileSync(mvt, fixture.buffer);
  fs.writeFileSync(json, JSON.stringify(fixture.json, null, 2));
  fs.writeFileSync(info, JSON.stringify({
    name: fixture.name,
    description: fixture.description,
    specification_reference: fixture.specification_reference
  }, null, 2));
});
