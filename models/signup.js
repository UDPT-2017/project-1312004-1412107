var pool = require('./db')
module.exports = {
    isExist: (email, callback) => {
        pool.connect( (err, client, done) => {
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            client.query("SELECT * from user where email = $1", [email], function(err, result) {
                done(err);
                if (err) {
                    return console.error('error running query', err);
                }
                callback(err, result);
            });
        });
    },
    insert: (email, name, password, callback) => {
        pool.connect( (err, client, done) => {
            if (err) {
                return console.error('error fetching client from pool', err);
            }
            client.query("INSERT into user(email, name, password) values($1, $2, $3)", [email, name, password]
                , (err, result) => {
                    done(err);
                    if (err) {
                        return console.error('error running query', err);
                    }
                    callback(err, result);
                });
        });
    }
}