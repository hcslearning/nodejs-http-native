const http = require('http');
const server = new http.Server();

server.on('request', (req, res) => {
	if( req.method === 'GET' && req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Inicio');
	} else if( req.method === 'GET' && req.url === '/saludo') {
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.write('Holi');
	} else {
		res.statusCode = 404;
	}
	res.end();
});

server.listen(3000);
