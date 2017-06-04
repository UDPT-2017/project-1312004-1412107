var express = require('express');
var bodyParser = require('body-parser')
var session = require('express-session');
var favicon = require('serve-favicon');
var path = require('path');
var multer = require('multer');

module.exports = function(app){
  app.use(express.static('public'));
  app.use(favicon(path.join(__dirname, '../public/image', 'favicon.ico')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(session({secret: 'ssshhhhh', cookie: { path: '/' }, resave: true, saveUninitialized: true }));
}