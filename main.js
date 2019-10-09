const http = require('http');
const url = require('url');

function handler(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!');
}

var server = http.createServer(handler);
