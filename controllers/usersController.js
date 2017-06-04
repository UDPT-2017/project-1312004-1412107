var usersController = {
   index: (req, res) => {
      // if(req.session.email) {
        
      // }
      // else {
      //   res.redirect('/');
      // }
      res.render('users',
           {
              title: 'users',
           });
    },
};
module.exports = usersController;