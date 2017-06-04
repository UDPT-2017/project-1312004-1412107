
var controllers = require('../controllers');

module.exports = function(app){
	app.get('/', controllers.home.index);
	
	app.get('/chat', controllers.chat.index);

	app.get('/profile', controllers.profile.index);
	app.post('/profile', controllers.profile.setting);

	app.get('/friends', controllers.friends.index);

	app.get('/users', controllers.users.index);

	app.get('/gameupdown', controllers.gameupdown.index);

	app.get('/signout',  controllers.signout.index);
}
