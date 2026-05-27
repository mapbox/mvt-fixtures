import fs from 'fs';

const files = fs.readdirSync('./src').sort();
const lastId = parseInt(files[files.length - 1].replace('.json', ''));
const id = String(lastId + 1).padStart(3, '0');

const template = {
  description: 'DESCRIPTION',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md',
  validity: {v1: true, v2: true, error: 'IF INVALID, ERROR TYPE HERE'},
  json: {
    layers: [{
      version: 2,
      name: 'hello',
      features: [{id: 1, tags: [], type: 1, geometry: [9, 50, 34]}],
      keys: [],
      values: [],
      extent: 4096
    }]
  },
  proto: '2.1'
};

fs.writeFileSync(`./src/${id}.json`, `${JSON.stringify(template, null, 2)  }\n`);
console.log(`New file created: /src/${id}.json.\nMake sure to run "npm run build" to generate the raw fixtures.`);
