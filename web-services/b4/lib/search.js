'use strict';
const request = require('request');
module.exports = (app, es) => {
	const url = `http://${es.host}:${es.port}/${es.books_index}/_search`;
	app.get('/api/search/books/:field/:query', (req, res) => {
		const esReqBody = {
			size: 10,
			query: {
				match: {
					[req.params.field]: req.params.query // computed property name
				}
			},
		};

		const options = {url, json: true, body: esReqBody};
		request.get(options, (err, esRes, esResBody) => {
			if (err) {
				res.status(502).json({
					error: 'bad_gateway',
					reason: err.code,
				});
				return;
			}
			if (esRes.statusCode != 200) {
				res.status(esRes.statusCode).json(esResBody);
				return;
			}
			res.status(200).json(esResBody.hits.hits.map(({_source}) => _source)); // destructuring assignment
			/*
				equivalent to:
				esResBody.hits.hits.map(hit => {
					const {_source} = hit;
					return _source;
				})
			*/
		});
	});
}
