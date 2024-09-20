var fs = require('fs');

fs.readFile('sampledata.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file.');
        return;
    }

    var jsonData = JSON.parse(data);

    var newItem = {
        "_id": "5033dgss299jjsasf431633b",
        "index": 7,
        "name": "A Person",
        "age": 36,
        "eyeColor": 'brown',
        "company": "Company Co."
    };

    jsonData.push(newItem);

    console.log(jsonData);

    fs.writeFile('dataset.json', JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
            console.error('Error writing file.');
        } else {
            console.log('Added new item to dataset.json');
        }
    });
});
