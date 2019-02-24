const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("Request received.");
  res.statusCode = 200;
  res.setHeader('Context-Type', 'application/json');
  res.end('{ "name":"Phil", "number":"18047236306"}');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
