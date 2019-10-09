const http = require('http');



function handler(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!');
}

var server = http.createServer(handler);
server.listen();

console.log('Server started at port ')