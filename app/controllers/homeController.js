var homeController = {
   home: function (req, res) {
     let Welcome = '';
     if(req.session.email){
       Welcome = 'Welcome ' + req.session.email + ' to mychat';
     }
     console.log(req.session.email);
     res.render('home',
        {
           title: 'real chat',
           page: 'home',
           Welcome: Welcome
        });
     }
};

module.exports = homeController;
