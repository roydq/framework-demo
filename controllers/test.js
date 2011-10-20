var Framework = require('framework');
var controller = new Framework.Base.Controller();

controller.index = function (context) {
	context.res.write('Hello World!'); 
};
controller.crap = function (context) {
	context.res.write('Crap!'); 
};

exports.Instance = controller;
