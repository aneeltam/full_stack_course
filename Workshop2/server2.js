var http = require('http');
var fs = require('fs');

fs.readFile('dataset.json', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    var server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        res.end(data);
    });

    var PORT = 3001;
    server.listen(PORT, () => {
        console.log('Server running at http://localhost:3001/');
    });
});
