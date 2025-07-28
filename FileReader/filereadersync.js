const fs = require('fs');

const data = fs.readFileSync('sample.txt', 'utf8');
console.log('File content:', data);

fs.writeFileSync('sample.txt', 'Introduction to Node Sync');
const newdata = fs.readFileSync('sample.txt', 'utf8');
console.log('New File Content:', newdata);