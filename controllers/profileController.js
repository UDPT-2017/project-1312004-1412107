const upload = require('../config/multer');
var profileController = {
    index: (req, res) => {
        res.render('profile', {
            title: 'profile',
        });
    },
    setting: (req, res) => {
        upload(req, res, function(err) {
            console.log(req.body, req.file);
            res.end('File is uploaded successfully')
        })
    }
};
module.exports = profileController;