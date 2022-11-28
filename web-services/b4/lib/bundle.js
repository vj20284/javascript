'use strict';
const rp = require('request-promise');
module.exports = (app, es) => {
	const url = `http://${es.host}:${es.port}/${es.bundles_index}/`;
	app.post('/api/bundle', (req, res) => {
		const bundle = {
			name: req.query.name || '',
			books: [],
		};
		rp.post({url, body: bundle, json: true})
			.then(esResBody => res.status(201).json(esResBody))
			.catch(({error}) => res.status(error.status || 502).json(error));
	});

	app.get('/api/bundle/:id', async(req, res) => {
		// async signals that the function can use the await
		// keyword to suspend while resplving a Promise.
		const options = {
			url: `${url}/${req.params.id}`,
			json: true,
		};
		try {
			const esResBody = await rp(options);
			// await suspends execution until the promise has been settled
			// once the promise is resolved, then the await expression
			// evaluates to the resolved value and the async function picks
			// up where it left off.
			res.status(200).json(esResBody);
		} catch (esResErr) {
			res.status(esRessErr.statusCode || 502).json(esResErr.error);
		}
	});

	app.put('/api/bundle/:id/book/:pgid', async(req, res) => {
		const bundleUrl = `${url}/${req.params.id}`;
		const bookUrl = `http://${es.host}:${es.port}` +
			`/${es.books_index}/book/${req.params.pgid}`;
		try {
			const [bundleRes, bookRes] = await Promise.all([
				rp({url: bundleUrl, json: true}),
				rp({url: bookUrl, json: true}),
			]);
			
			// Extract bundle and book information from responses
			const {_source: bundle, _version: version} = bundleRes;
			const {_source: book} = bookRes;

			const idx = bundle.books.findIndex(book => book.id === req.params.pgid);
			if (idx === -1) {
				bundle.books.push({
					id: req.params.pgid,
					title: book.title,
				});
			}
			const esResBody = await rp.put({
				url: bundleUrl,
				qs: {version},
				body: bundle,
				json: true,
			});
			res.status(200).json(esResBody);
		} catch (esResErr){ 
			res.status(esResErr.statusCode || 502).json(esResErr.error);
		}
	});
}
