var spawn = require('child_process').spawn;
var options = {
    env: {user: 'Brad'},
    detached: false,
    stdio: ['pipe', 'pipe', 'pipe']
};
var child = spawn('ls', ['-a']);
child.stdout.on('data', function(data) {
    console.log(data.toString());
});
child.stderr.on('data', function(data) {
    console.log(data.toString());
});
child.on('exit', function(code) {
    console.log('Chld exited with code', code);
});