// Includes
var http = require('http');
var framework = require('thinger');
var config = require('./config.js');

// Get router
var router = new framework.core.routing.router(config);

// Start server
http.createServer(function (req, res) {
	router.dispatch(req, res);
	res.end();
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');

