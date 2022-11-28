var fs = require('fs');
fs.stat("nexttick.js", function() {
    console.log("nexttick.js exists");
});

// calling setImmediate places the callback function
// on the event queue and popped off once for each
// iteration through the event queue loop after 
// I/0 events have a chance to be called
setImmediate(function() {
    console.log("immediate timer 1 executed");
});
setImmediate(function() {
    console.log("immediate timer 2 executed");
});
//nextTick executes before the I/0 events are fired
process.nextTick(function() {
    console.log("Next tick 1 executed");
});
process.nextTick(function() {
    console.log("Next tick 2 executed");
});


/*
Next tick 1 executed
Next tick 2 executed
nexttick.js exists
immediate timer 1 executed
immediate timer 2 executed
*/