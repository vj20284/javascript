var stream = require('stream');
var util = require('util');

// Inherit the functionality of the Readable stream
util.inherits(Answers, stream.Readable);

// create an instance of the object call
function Answers(opt) {
    stream.Readable.call(this, opt);
    this.quotes = ["yes", "no", "maybe"];
    this._index = 0;
}

// Implement a _read method that calls push to output
// the data from the readable object
Answers.prototype._read = function() {
    console.log("Read called");
    if (this._index > this.quotes.length) { 
        this.push(null);
    } else {
        this.push(this.quotes[this._index]);
        this._index += 1;
    }
};

var r = new Answers();
console.log("Direct read: " + r.read().toString());
r.on('data', function(data) {
    console.log("Callback read: " + data.toString());
});
r.on('end', function(data) {
    console.log("No more answers");
});