import express from 'express';

// DB import
import { db } from './db.js';

const app = express();

const PORT = 5000;

app.use(express.json());

// GET ALL LISTINGS ROUTES...
app.get('/', (req, res) => {
	const fetchAllListings = () => {
		const data = db.collection('listings').get();
		return data;
	};
	res.status(200).json(data);
});

// Start server
app.listen(PORT, () =>
	console.log(`Server running on port: http://localhost:${PORT}`)
);
