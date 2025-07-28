const path = require('path');

const folder = 'documents';
const file = 'report.pdf';
const fullPath = path.join(folder, file);
console.log('1. Joined path:', fullPath); 

const anotherPath = path.join('/users', 'admin', 'data');
console.log('2. Another joined path:', anotherPath); 

const filename1 = path.basename(fullPath);
console.log('3. Filename from fullPath:', filename1); 

const filename2 = path.basename('/home/user/app.js');
console.log('4. Filename from absolute path:', filename2); 


const dirname1 = path.dirname(fullPath);
console.log('5. Directory from fullPath:', dirname1); 

const dirname2 = path.dirname('/home/user/app.js');
console.log('6. Directory from absolute path:', dirname2);