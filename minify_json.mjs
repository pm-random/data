import { readdirSync, readFileSync, writeFileSync, lstatSync } from 'fs';
import { join } from 'path';

function minifyRecursive(root) {
  readdirSync(root).forEach((filename) => {
    const path = join(root, filename);
    const stat = lstatSync(path);
    if (stat.isFile() && path.endsWith(".json")) {
      console.log(`Minifying ${path}`);
      const rawJson = readFileSync(path, 'utf8');
      const minJson = JSON.stringify(JSON.parse(rawJson));
      writeFileSync(path, minJson);
    } else if (stat.isDirectory()) {
      minifyRecursive(path);
    }
  });
}

minifyRecursive("json");
