const fs = require('fs');
const getID = require('..').getID;

const files = fs.readdirSync('./src');
const id = getID(files.length + 1); // get the next available number

const template = `module.exports = function(schema) {
  return {
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
              type: schema.Tile.GeomType.POINT.value,
              geometry: [ 9, 50, 34 ]
            }
          ],
          keys: [],
          values: [],
          extent: 4096
        }
      ]
    },
    manipulate: function(buffer) {
      // stuff here
      return buffer;
    }
  }
};
`

fs.writeFileSync(`./src/${id}.js`, template);
console.log(`New file created: /src/${id}.js.\nMake sure to run "npm run build" to generate the raw fixtures.`);
