'use strict';

const fs = require('fs');
const mvtf = require('..');

let docs = `id|description|valid v1|valid v2
---|---|---|---
`;

mvtf.each(function(fixture) {
  let description = `${fixture.description}\n[spec source](${fixture.specification_reference})`;
  let emojiV1Validity = (!fixture.validity.v1) ? ':x:' : ':white-check-mark:';
  let emojiV2Validity = (!fixture.validity.v2) ? ':x:' : ':white-check-mark:';
  if (!fixture.validity.v1 || !fixture.validity.v2) {
    description += `\nrecommended error handling \`${fixture.validity.error}\``;
  }
  docs+=`${fixture.id}|${description}|${emojiV1Validity}|${emojiV2Validity}\n`;
});

fs.writeFileSync('./FIXTURES.md', docs);
