const path = require('path');

const absolutePath1 = path.resolve('temp', 'data.json');
console.log('1. Absolute path (relative to CWD):', absolutePath1);

const absolutePath2 = path.resolve('/users/admin/config', '../app/settings.txt');
console.log('2. Absolute path (with ..):', absolutePath2);

const absolutePath3 = path.resolve('/a/b', '/c/d', 'e.txt');
console.log('3. Absolute path (with absolute segments):', absolutePath3);

const messyPath = '/users//admin/./docs/../config.json';
const normalizedPath = path.normalize(messyPath);
console.log('4. Normalized path:', normalizedPath);

const fileExt1 = path.extname('document.pdf');
console.log('5. Extension of document.pdf:', fileExt1); 

const fileExt2 = path.extname('archive.tar.gz');
console.log('6. Extension of archive.tar.gz:', fileExt2);

const fileExt3 = path.extname('/home/user/no_extension_file');
console.log('7. Extension of no_extension_file:', fileExt3); 

const fileExt4 = path.extname('folder/.bashrc');
console.log('8. Extension of .bashrc:', fileExt4); 

console.log('9. OS-specific path separator:', path.sep); 