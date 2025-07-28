const fs = require('fs').promises;

async function processFile() {
  try {
    const data = await fs.readFile('sample.txt', 'utf8');
    console.log('File content:', data);
    
    await fs.writeFile('sample.txt', 'Introduction to Node');
    console.log('File written successfully');
    } catch (err) {
    console.error('Error:', err);
  }
}

processFile();