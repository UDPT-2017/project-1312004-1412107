var friendsController = {
   friends: function (req, res) {
      res.render('profile',
           {
              title: 'profile',
           });
    },
};

module.exports = friendsController;