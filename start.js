var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Class!!\n');
}).listen(8088);

console.log('Server running on port 8088.');
