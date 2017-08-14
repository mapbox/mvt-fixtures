'use strict';

const fs = require('fs');
const mvtf = require('..');

let docs = `id|description|reference
---|---|---
`;

mvtf.each(function(fixture) {
  docs+=`${fixture.id}|${fixture.description}|[link](${fixture.specification_reference})\n`;
});

fs.writeFileSync('./FIXTURES.md', docs);
