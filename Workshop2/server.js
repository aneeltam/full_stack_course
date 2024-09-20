var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res) => {
    fs.readFile('sampledata.json', 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error reading file');
            return;
        }

        var htmlOutput = '<html>\n<body>\n<table border="1">\n';

        JSON.parse(data).forEach(item => {
            htmlOutput += '  <tr>\n';
            htmlOutput += '    <td>' + item.name + '</td>\n';
            htmlOutput += '    <td>' + item.age + '</td>\n';
            htmlOutput += '    <td>' + item.company + '</td>\n';
            htmlOutput += '    <td>' + item.address + '</td>\n';
            htmlOutput += '  </tr>\n';
        });

        htmlOutput += '</table>\n</body>\n</html>';

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(htmlOutput);
    });
});

var PORT = 3002;
server.listen(PORT, () => {
    console.log('Server running at http://localhost:3002/');
});
