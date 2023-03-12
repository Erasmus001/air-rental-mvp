const express = require('express');

// DB import
const db = require('./db.js');
const apiData = require('./api.js');

const app = express();
const PORT = 5000;

app.use(express.json());

// GET ALL LISTINGS ROUTES...
app.get('/', (req, res) => {
	res.status(200).json(apiData);
});

app.post('/new-listing', (req, res) => {
	try {
		apiData.push({
			id: Math.random(),
			title: req.body.title,
			location: req.body.location,
			price: req.body.price,
			typeOfListing: req.body.typeOfListing,
			amenities: req.body.amenities,
		});
	} catch (error) {
		console.log(error.message);
		res.json(apiData).send({
			msg: 'Listing added failed',
		});
	}

	res.json(apiData).send({
		msg: 'Listing added successful',
	});
});

// Start server
app.listen(PORT, () =>
	console.log(`Server running on port: http://localhost:${PORT}`)
);
