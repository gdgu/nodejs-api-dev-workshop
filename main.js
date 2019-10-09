const http = require('http');

function handler(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!');
}

var server = http.createServer(handler);
var port = 8080;
server.listen(port);

console.log('Server started at port', port);
