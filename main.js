const http = require('http');
const url = require('url');

// no use as of now
function handler(request, response) {
    var uri = url.parse(request.url);
    console.log(uri.pathname, 'was requested');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!');
}

function api(request, response) {
    var method = request.method;
    var uri = url.parse(request.url);
    if(method == 'POST' && ) {

    }
    else if(method == 'GET') {

    }
}

var server = http.createServer(api);
var port = 8080;
server.listen(port);

console.log('Server started at port', port);
