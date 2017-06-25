const signup = require('../models/signup');
const bodyParser = require('body-parser');
const homeController = {
    index: (req, res) => {
        res.render('home', {
            title: 'Realchat Log In or Sign Up',
            message: '',
        });
    },
    checkSignup: (req, res) => {
        var email = req.body.email;
        var name = req.body.name;
        var password = req.body.password;
        // console.log(req.body)
        signup.isExist(email, (err, result) => {
            if (err) {
                res.render('home', {
                    title: 'Realchat Log In or Sign Up',
                    message: 'Error database'
                });
                res.end();
                // throw (err);
            } else {
                // console.log(result.rows.length)
                if (result.rows.length > 0) {
                    res.render('home', {
                        title: 'Realchat Log In or Sign Up',
                        message: 'Email existed'
                    });
                } else {
                    signup.insert(email, password, name, (err, result) => {
                        if (err) {
                            res.render('home', {
                                title: 'Realchat Log In or Sign Up',
                                message: 'Error database'
                            });
                            res.end();
                            // throw (err);
                        } else {
                            // res.render('home', {
                            //     title: 'Sign up',
                            //     messagecheckSignup: 'Signup successfully'
                            // });
                            res.redirect('./chat')
                        }
                    })
                }
            }
        })
    }
}
module.exports = homeController;