const fs = require('fs');

const data1 = fs.readFileSync('example.txt', 'utf-8');

const data2 = fs.readFileSync('example2.txt', 'utf-8');

const combinedData = 'I wrote this!\n' + data1 + '\n' + data2 + '\nI wrote this!';

fs.writeFile('combined.txt', combinedData, (err) => {
    if (err) throw err;
    console.log('Files combined and written into combined.txt');
});
