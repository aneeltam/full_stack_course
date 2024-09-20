var fs = require('fs');

fs.readFile('dataset.json', (err, data) => {
    if (err) {
        console.error('Error reading file.');
        return;
    }

    var jsonData = JSON.parse(data);

    var deleteItem = "5033dgss299jjsasf431633b";
    jsonData = jsonData.filter(item => item._id !== deleteItem);

    console.log(jsonData);

    fs.writeFile('dataset.json', JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
            console.error('Error writing file.');
        } else {
            console.log('Item deleted.');
        }
    });
});
