'use strict';

const fs = require('fs');
const mvtf = require('..');

let docs = `id|description|valid v1|valid v2\n
---|---|---|---\n
`;

mvtf.each(function(fixture) {
  let description = `${fixture.description} - [link](${fixture.specification_reference})`;
  if (!fixture.validity.v1 || !fixture.validity.v2) {
    description += ` - recommended error handling \`${fixture.validity.error}\``;
  }
  docs+=`${fixture.id}|${description}|${fixture.validity.v1}|${fixture.validity.v2}\n`;
});

fs.writeFileSync('./FIXTURES.md', docs);
