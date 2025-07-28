// process-v1.js

// --- 1. Command-line arguments (argv) ---
// process.argv is an array containing the command-line arguments.
// The first element is 'node', the second is the script file path.
// Subsequent elements are actual arguments.
console.log('1. Command-line arguments (process.argv):');
process.argv.forEach((val, index) => {
  console.log(`  ${index}: ${val}`);
});

// Try running: `node process-v1.js arg1 arg2 --name=value`

// --- 2. Environment Variables (env) ---
// process.env is an object containing the user's environment.
console.log('\n2. Selected Environment Variables (process.env):');
console.log('  NODE_ENV:', process.env.NODE_ENV); // Common for dev/prod distinction
console.log('  HOME (or USERPROFILE on Windows):', process.env.HOME || process.env.USERPROFILE);
console.log('  PATH (first 100 chars):', (process.env.PATH || '').substring(0, 100) + '...');

// Try running: `NODE_ENV=production node process-v1.js` (on Linux/macOS)
// Or: `set NODE_ENV=production && node process-v1.js` (on Windows CMD)

// --- 3. Current Working Directory (cwd) ---
console.log('\n3. Current Working Directory (process.cwd()):');
console.log('  CWD:', process.cwd());

// --- 4. Node.js Version ---
console.log('\n4. Node.js Version (process.version):', process.version);

// --- 5. Operating System Platform ---
console.log('5. OS Platform (process.platform):', process.platform);