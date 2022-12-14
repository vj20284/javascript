var fs = require('fs');
var options = { encoding: 'utf8', flag: 'r' };
var fileReadStream = fs.createReadStream("grains.txt", options);
fileReadStream.on('data', function(chunk) {
    console.log('grains: %s', chunk);
    console.log('Read %d bytes of data', chunk.length);
});
fileReadStream.on("close", function() {
    console.log("File closed");
});