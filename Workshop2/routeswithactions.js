var http = require('http');
var fs = require('fs');
var path = require('path');

var server = http.createServer(function (req, res) {
    if (req.url === '/frontpage') {
        var filePath = path.join(__dirname, 'frontpage.html');
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading frontpage.html');
                return;
            }
            res.writeHead(200, { 
                'Content-Type': 'text/html', 
                'X-Custom-Header': 'Frontpage'
            });
            res.end(data);
        });
    } else if (req.url === '/contact') {
        var filePath = path.join(__dirname, 'contact.html');
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading contact.html');
                return;
            }
            res.writeHead(200, { 
                'Content-Type': 'text/html',
                'X-Custom-Header': 'Contacts' 
            });
            res.end(data);
        });
    } else if (req.url === '/plaintext') {
        var filePath = path.join(__dirname, 'sample.txt');
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading sample.txt');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    } else if (req.url === '/json') {
        var filePath = path.join(__dirname, 'sampledata.json');
        fs.readFile(filePath, 'utf8', function (err, data) {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading sampledata.json');
                return;
            }
            res.writeHead(200, { 
                'Content-Type': 'application/json' 
            });
            res.end(data);
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Nothing here to see');
    }
});

var PORT = 3001;
server.listen(PORT, function () {
    console.log('Server running at http://localhost:3001/');
});
