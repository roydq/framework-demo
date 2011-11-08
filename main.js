// Includes
var http = require('http');
var Framework = require('framework');

// Config
var routerConfig = require('./config.js');

// Load controller (need to automate this)
var controller = require('./controllers/test.js').Instance;
routerConfig.controllers = {test: controller};

routerConfig.logger = new Framework.Core.Logger();

// Get router
var router = new Framework.Core.Router(routerConfig);

// Get logger
var logger = new Framework.Core.Logger();

// Get server
var server = new Framework.Core.Http.Server({
	http : http,
	router : router,
	logger : logger
});

server.start("127.0.0.1", 1337);
