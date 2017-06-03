const upload = require('../config/multer');
var profileController = {
    profile: (req, res) => {
        res.render('profile', {
            title: 'profile',
        });
    },
    setting: (req, res) => {
        upload.single('profile'), (req, res) => {
          console.log(req.body, req.file);
          res.send('UPLOAD THANH CONG');
        };
    }
};

module.exports = profileController;
