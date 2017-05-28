var signup = require('../models/signup');
var bodyParser = require('body-parser');

var homeController = {
  showFormSignup: function(req, res){
    res.render('home',
       {
          title: 'Realchat Log In or Sign Up',
       });
    },
  // checkSignup: function(req, res){
  //   var email = req.body.email;
  //   var password = req.body.password;
  //   var name = req.body.name;
  //   var telephone = req.body.telephone;
  //   console.log(req.body)
  //   signup.checkExistEmail(email, function(err, result){
  //     if(err){
  //       res.render('shared/signup',
  //          {
  //             title: 'Sign up',
  //             message: 'Signup flicke!',
  //             page: 'Signup',
  //             messagecheckSignup: 'Error database'
  //          });
  //       res.end();
  //       throw(err);
  //       }
  //       else {
  //         console.log(result.rows.length)
  //         if(result.rows.length > 0){
  //           res.render('shared/signup',
  //              {
  //                 title: 'Sign up',
  //                 message: 'Signup flicke!',
  //                 page: 'Signup',
  //                 messagecheckSignup: 'Email existed'
  //              });
  //         }
  //         else {
  //           //insert database
  //           signup.insertData(email, password, name, telephone, function(err, result){
  //             if(err){
  //               res.render('shared/signup',
  //                  {
  //                     title: 'Sign up',
  //                     message: 'Signup flicke!',
  //                     page: 'Signup',
  //                     messagecheckSignup: 'Error database'
  //                  });
  //               res.end();
  //               throw(err);
  //               }
  //               else {
  //                 res.render('shared/signup',
  //                    {
  //                       title: 'Sign up',
  //                       message: 'Signup flicke!',
  //                       page: 'Signup',
  //                       messagecheckSignup: 'Signup successfully'
  //                    });
  //               }
  //           })
  //         }
  //       }
  //     })
  //   }
  }

module.exports = homeController;
