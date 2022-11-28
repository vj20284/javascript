var fs = require('fs');
var options = {encoding: 'utf-8', flag: 'r'};
fs.readFile('config.txt', options, function(err, data) {
    if (err) {
        console.log("Failed to open file");
    } else {
        console.log("File loaded");
        var config = JSON.parse(data);
        console.log("Max files: " + config.maxFiles);
    }
});