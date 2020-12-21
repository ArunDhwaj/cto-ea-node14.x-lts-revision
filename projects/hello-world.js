const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`1.1: Server running at http://${hostname}:${port}/`);
});

// Modifying constant: It should through runtime error.
// Error message: TypeError: Assignment to constant variable.

port = 3001;

console.log(`1.2: Server running at http://${hostname}:${port}/`);

