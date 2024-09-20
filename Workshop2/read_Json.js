var fs = require('fs');

fs.readFile('sampledata.json', 'utf8', (err, data) => {
    if (err) return console.error('Error reading file:', err);

    JSON.parse(data).forEach(item => {
        console.log('Name: ' + item.name);
        console.log('Age: ' + item.age);
        console.log('Company: ' + item.company);
        console.log('Address: ' + item.address);
        console.log('-----------------------');
    });
});
