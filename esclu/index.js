'use strict';
const fs = require('fs');
const request = require('request');
const program = require('commander');
const pkg = require('./package.json');

const fullUrl = (path = '') => {
	let url = `http://${program.host}:${program.port}`;
	if (program.index) {
		url += '/' + program.index;
	}
	return url + path;
}

program
	.version(pkg.version)
	.description(pkg.description)
	.usage('[options[ <command> [...]')
	.option('-o, --host <hostname>', 'hostname [locahost]', 'localhost')
	.option('-p, --port <number>', 'port number [9200]', '9200')
	.option('-j, --json', 'format output as JSON')
	.option('-i, --index <name>', 'which index to use')
	.option('-t, --type <type>', 'default type for bulk operations');

program
	.command('url [path]')
	.description('generate the URL for the options and path')
	.action((path = '/') => console.log(fullUrl(path)))

const handleResponse = (err, res, body) => {
	if (program.json) {
		console.log(JSON.stringify(err || body));
	} else {
		if (err) throw err;
		console.log(body);
	}
};

program
	.command('create-index')
	.description('create an index')
	.action(() => {
		if (!program.index) {
			const msg = 'No index specified! Use --index <name>';
			if (!program.json) throw Error(msg);
			console.log(JSON.stringify({error: msg}));
			return;
		}
		const url = fullUrl();
		console.log(`URL is ${url}.`);
		request.put(url, handleResponse);
	});

program
	.command('list-indices')
	.alias('li')
	.description('get a list of indices in this cluster')
	.action(() => {
		const path = program.json ? '_all' : '_cat/indices?v';
		const url = fullUrl('/' + path);
		console.log(`URL is ${url}.`);
		request.get({
			url: url, 
			json: program.json}, handleResponse);
	});

program
	.command('bulk <file>')
	.description('read and perform bulk options from the specified file')
	.action(file => {
		fs.stat(file, (err, stats) => {
			if (err) {
				if(program.json) {
					console.log(JSON.stringify(err));
					return;
				}
				throw err;
			}
			const path = '_bulk';
			const url = fullUrl('/' + path);
			console.log(`URL is ${url}.`);

			const options = {
				url: url,
				json: true,
				headers: {
					'content-length': stats.size,
					'content-type': 'application/x-ndjson',
				}
			};

			const req = request.post(options);
			const stream = fs.createReadStream(file);
			stream.pipe(req);
			req.pipe(process.stdout);
		});
	});

program
	.command('query [queries...]')
	.alias('q')
	.description('perform an Elasticsearch query')
	.action((queries = []) => {
		const options = {
			url: fullUrl('/_search'),
			json: program.json,
			qs: {},
		};
		if(queries && queries.length) {
			options.qs.q = queries.join(' ' );
		}
		if(program.filter) {
			options.qs._source = program.filter;
		}
		request(options, handleResponse);
	});

program.parse(process.argv);

if (!program.args.filter(arg => typeof arg === 'object').length) {
	program.help();
}
