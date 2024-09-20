const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'newdata');
const filePath = path.join(directoryPath, 'example.txt');

fs.mkdir(directoryPath, (err) => {
    if (err) return console.error(err);
    
    fs.writeFile(filePath, 'This is some example content.', (err) => {
        if (err) return console.error(err);
        console.log('File "example.txt" was written in directory "newdata".');

        fs.unlink(filePath, (err) => {
            if (err) return console.error(err);
            console.log('File "example.txt" removed');

            fs.rmdir(directoryPath, (err) => {
                if (err) return console.error(err);
                console.log('Directory "newdata" removed');
            });
        });
    });
});
