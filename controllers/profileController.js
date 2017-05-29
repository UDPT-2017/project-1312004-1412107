var profileController = {
   profile: function (req, res) {
      res.render('profile',
           {
              title: 'profile',
           });
    },
};

module.exports = profileController;