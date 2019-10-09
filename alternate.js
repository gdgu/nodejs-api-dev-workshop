const http = require('http');
const url = require('url');

function api(request, response) {
    var method = request.method;
    var uri = url.parse(request.url);
    console.log(method, uri.pathname, 'was requested');
    if(method == 'POST' && uri.pathname == '/api/message') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(helloWorld));
    }
    else if(method == 'GET' && uri.pathname == '/api/messages') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(helloWorld));
    }
    else {
        response.writeHead(404, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(fourZeroFour));
    }
}
