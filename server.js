const http = require('http');
const apiData = require('./api.js');

const app = http.createServer((req, res) => {
	if (req === '/cities') {
		res.se;
	}
});

const port = 8000;

app.listen(port, () => {
	console.log('server listening on port', `http://localhost:${port}`);
});
