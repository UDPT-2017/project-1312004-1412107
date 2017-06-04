var gameupdownController = {
   index: (req, res) => {
      // if(req.session.email) {
        
      // }
      // else {
      //   res.redirect('/');
      // }
      res.render('gameupdown',
           {
              title: 'gameupdown',
           });
    },
};
module.exports = gameupdownController;