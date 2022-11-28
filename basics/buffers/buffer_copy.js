var alphabet = new Buffer('abcdefghijklmnopqrstuvwxyz');
console.log(alphabet.toString());

var blank = new Buffer(26);
blank.fill();
console.log("Blank " + blank.toString());

alphabet.copy(blank);
console.log("Blank " + blank.toString());

var dashes = new Buffer(26);
dashes.fill('-');
console.log("Dashes " + dashes.toString());

alphabet.copy(dashes, 10, 10, 15); // destination index, source from index, source to index
console.log("Dashes " + dashes.toString());

var dots = new Buffer('--------------------');
dots.fill('.');
console.log("Dots " + dots.toString());

for (var i = 0; i < dots.length; i++) {
    if (i % 2) {
        dots[i] = alphabet[i];
    }
}
console.log("Dots " + dots.toString());