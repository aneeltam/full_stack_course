var fs = require('fs');

fs.readFile('sampledata.json', 'utf8', (err, data) => {
    if (err) return console.error('Error reading file:', err);

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

    console.log(htmlOutput);
});
