var fs = require('fs');
var https = require('https');
var options = {
    hostname: 'encrypted.site.com',
    port: 443,
    path: '/',
    method: 'GET',
    key: fs.readFileSync('test/keys/client.pem'),
    cert: fs.readFileSync('test/keys/client.crt'),
    agent: false
};
var req = https.request(options, function(res) {
    return;
});