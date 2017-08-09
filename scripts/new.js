const fs = require('fs');

const name = process.argv[2];
if (!name) throw new Error('No name provided.');

const template = `module.exports = function(schema) {
  return {
    name: '${name}',
    description: 'DESCRIPTION',
    specification_reference: 'https://github.com/mapbox/vector-tile-spec/blob/master/2.1/README.md',
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
          keys: {},
          values: {},
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

fs.writeFileSync(`./src/${name}.js`, template);
console.log(`New file created: /src/${name}.js`);
