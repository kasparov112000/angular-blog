const http = require('http');

const server = http.createServer( (req, res) => {
  res.end('hello world');
});

server.listen(process.env.PORT || 3000);
