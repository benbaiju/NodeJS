const http = require('http');

const server = http.createServer((req, res) => {
  const { url, method } = req;

  console.log(`Request: ${method} ${url}`);

  res.setHeader('Content-Type', 'application/json');

  if (url === '/' && method === 'GET') {
    res.statusCode = 200;
    res.end(JSON.stringify({ message: 'Welcome to the Node.js API!', endpoint: '/' }));
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

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('Test Endpoints:');
  console.log('  GET /');
  console.log('  GET /users');
  console.log('  POST /users (JSON body: {"name": "Charlie", "email": "charlie@example.com"})');
  console.log('  GET /nonexistent');
});