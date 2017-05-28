
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');

//require helpers
// helpers = require('../app/helpers');
//moi file rieng cho 1 loai/ham helpers nhu controller

module.exports = function(app){
	// app.engine('ejs', expejs({
	//    extname: ".ejs",
	//    layoutsDir: path.resolve('app/views/layouts/'),
	//    partialsDir: path.resolve('app/views/partials/'),
	//   //  helpers: helpers
	// }));
	app.set('view engine', 'ejs');
	app.set('views', path.resolve('./views'));
	// app.set('views', path.join(__dirname, 'views'));
}
