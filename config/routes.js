

var controllers = require('../controllers');

module.exports = function(app){
	app.get('/', controllers.home.showFormSignup);
	
	app.get('/chat', controllers.chat.chat);

	app.get('/signout',  controllers.signout.signout);

}
