const fs = require('fs');
const path = require('path');

const jsonDir = 'json';
const filenames = fs.readdirSync(jsonDir);

filenames.forEach((filename, i) => {
  console.log(`Minifying ${filename} [${i + 1}/${filenames.length}]`);
  jsonPath = path.join(jsonDir, filename);
  rawJson = fs.readFileSync(jsonPath, 'utf8');
  minJson = JSON.stringify(JSON.parse(rawJson));
  fs.writeFileSync(jsonPath, minJson);
});
