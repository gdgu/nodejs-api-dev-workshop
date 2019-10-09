const http = require('http');
const url = require('url');

function handler(request, response) {
    var uri = url.parse(request.url);
    console.log(uri.pathname, 'was requested');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!');
}

var server = http.createServer(handler);
var port = 8080;
server.listen(port);

console.log('Server started at port', port);
