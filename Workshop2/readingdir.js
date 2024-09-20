var fs = require('fs');

var directoryPath = 'C:/Users/Matleena/Documents/Paperwork/School/2024 Full Stack/FS_course/Workshop1';

fs.readdir(directoryPath, function (err, files) {
    if (err) {
        console.error(err);
    } else {
        console.log('Directory contents are:');
        files.forEach(function (file) {
            console.log(file);
        });
    }
});
