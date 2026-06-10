const fs = require('fs');
const pdf = require('pdf-parse');
const buf = fs.readFileSync('c:\\Users\\MEDLO\\Desktop\\elec\\Markdown to PDF.pdf');
pdf(buf).then(data => {
    fs.writeFileSync('c:\\Users\\MEDLO\\Desktop\\elec\\report.txt', data.text);
    console.log('Done, chars: ' + data.text.length);
}).catch(err => console.error(err));
