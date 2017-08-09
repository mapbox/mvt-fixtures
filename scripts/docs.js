'use strict';

const fs = require('fs');
const mvtf = require('..');

let docs = ``;

mvtf.each(function(fixture) {

  docs+=`### ${fixture.name}
${fixture.description}
[Reference](${fixture.specification_reference})

`;

});

fs.writeFileSync('./FIXTURES.md', docs);
