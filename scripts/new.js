const fs = require('fs');
const getID = require('../lib/util').getID;

const files = fs.readdirSync('./src');
const rawID = parseInt(files[files.length-1].replace('.js', '')) + 1;
const id = getID(rawID);

const template = `module.exports = {
  description: 'DESCRIPTION',
  specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md',
  validity: {
    v1: true,
    v2: true,
    error: 'IF INVALID, ERROR TYPE HERE'
  },
  json: {
    layers: [
      {
        version: 2,
        name: 'hello',
        features: [
          {
            id: 1,
            tags: [],
            type: 1,
            geometry: [ 9, 50, 34 ]
          }
        ],
        keys: [],
        values: [],
        extent: 4096
      }
    ]
  },
  proto: '2.1', // version number OR a string representation of the proto file to build from
  manipulate: function(buffer) {
    // manipulate the buffer here if you need, otherwise you can remove this
    return buffer;
  }
};
`;

fs.writeFileSync(`./src/${id}.js`, template);
console.log(`New file created: /src/${id}.js.\nMake sure to run "npm run build" to generate the raw fixtures.`);
