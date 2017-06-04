var chatController = {
   index: (req, res) => {
      // if(req.session.email) {
        
      // }
      // else {
      //   res.redirect('/');
      // }
      res.render('chat',
           {
              title: 'chat',
              page: 'chat',
           });
    },
};
module.exports = chatController;