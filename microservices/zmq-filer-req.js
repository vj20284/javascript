'use strict';
const zmq = require('zeromq');
const filename = process.argv[2];

const requester = zmq.socket('req');

requester.on('message', data => {
	const response = JSON.parse(data);
	console.log('Received response', response);
});

requester.connect('tcp://localhost:60401');
for (let i = 1; i <= 5; i++) {
	console.log(`Sending a request for ${filename}`);
	requester.send(JSON.stringify({ path: filename }));
}
