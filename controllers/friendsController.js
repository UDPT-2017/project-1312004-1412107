var friendsController = {
   index: (req, res) => {
      res.render('friends',
           {
              title: 'friends',
           });
    },
};
module.exports = friendsController;