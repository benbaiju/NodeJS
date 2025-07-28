const https = require('https');
const fs = require('fs');

const httpsOptions = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

const server = https.createServer(httpsOptions, (req, res) => {
  const { url, method } = req;

  console.log(`HTTPS Request: ${method} ${url}`);

  res.setHeader('Content-Type', 'application/json');

  if (url === '/' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome to the Node.js SECURE API!', endpoint: '/' }));
  } else if (url === '/users' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]));
  } else if (url === '/users' && method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        const newUser = JSON.parse(body);
        console.log('New User Data:', newUser);
        res.statusCode = 201;
        res.end(JSON.stringify({ message: 'User created successfully', user: newUser }));
      } catch (error) {
        console.error('Error parsing JSON body:', error);
        res.statusCode = 400;
        res.end(JSON.stringify({ error: 'Invalid JSON body' }));
      }
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

const HTTPS_PORT = 3001;
server.listen(HTTPS_PORT, () => {
  console.log(`HTTPS Server running at https://localhost:${HTTPS_PORT}/`);
  console.log('Open your browser and visit: https://localhost:3001/');
  console.log('You will likely see a privacy warning because it\'s a self-signed certificate. You need to proceed past it.');
});