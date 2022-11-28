function simpleTimeout(consoleTimer) {
    // call timeEnd on the given ID
    // i.e end the timer of the given ID
    console.timeEnd(consoleTimer);
}

console.time("twoSecond");
// call simpleTimeout after 2 seconds with argument "twoSecond"
setTimeout(simpleTimeout, 2000, "twoSecond"); 

console.time("oneSecond");
setTimeout(simpleTimeout, 1000, "oneSecond");

console.time("fiveSecond");
setTimeout(simpleTimeout, 5000, "fiveSecond");

console.time("50MilliSecond");
setTimeout(simpleTimeout, 50, "50MilliSecond");

var x=0, y=0, z=0;

function displayValues() {
    console.log("x=%d, y=%d, z=%d", x, y, z);
}

function updateX() {
    x += 1;
}

function updateY() {
    y += 1;
}

function updateZ() {
    z += 1;
    displayValues();
}

setInterval(updateX, 500);
setInterval(updateY, 1000);
setInterval(updateZ, 2000);