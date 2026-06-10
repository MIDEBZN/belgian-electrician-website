import { createRequire } from 'module';
import { readFileSync, writeFileSync } from 'fs';
const require = createRequire(import.meta.url);
const pdf = require('pdf-parse');
const buf = readFileSync('c:\\Users\\MEDLO\\Desktop\\elec\\Markdown to PDF.pdf');
const data = await pdf(buf);
writeFileSync('c:\\Users\\MEDLO\\Desktop\\elec\\report.txt', data.text);
console.log('Done, chars: ' + data.text.length);
