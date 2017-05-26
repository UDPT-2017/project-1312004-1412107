var express = require('express');
var bodyParser = require('body-parser')
var session = require('express-session');

module.exports = function(app){
	app.use(express.static('public'));
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }))
	app.use(session({secret: 'ssshhhhh', cookie: { path: '/' }, resave: true, saveUninitialized: true }));
}
