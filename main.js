const http = require('http');
const url = require('url');

var messages = [];
var helloWorld = {
    "message": "Hello world!"
};
var fourZeroFour = {
    "message": "404, not found!"
};

// no use as of now
function handler(request, response) {
    var uri = url.parse(request.url);
    console.log(uri.pathname, 'was requested');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World!');
}

function postBody(request, callback) {
    var body = '';
    request.on('data', function(chunk) {
        body += chunk;
    })
    request.on('end', function() {
        callback(body);
    })
}


function api(request, response) {
    var method = request.method;
    var uri = url.parse(request.url);
    console.log(method, uri.pathname, 'was requested');
    if(method == 'POST' && uri.pathname == '/api/message') {
        postBody(request, function(body) {
            var message = JSON.parse(body);
            messages.push(message);

            response.writeHead(200, {'Content-Type': 'application/json'});
            response.end(JSON.stringify({"success": true}, null, 5));
        });
    }
    else if(method == 'GET' && uri.pathname == '/api/messages') {
        response.writeHead(200, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(messages, null, 5));
    }
    else {
        response.writeHead(404, {'Content-Type': 'application/json'});
        response.end(JSON.stringify(fourZeroFour));
    }
}

var server = http.createServer(api);
var port = 8080;
server.listen(port);

console.log('Server started at port', port);
