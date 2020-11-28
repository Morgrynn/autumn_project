const db = require('../database');
const bcrypt = require('bcrypt')

const registration = {
    checkIfExists: function (username, callback) {
      return db.query(
          'select * from users where username=$1', [username], callback)
    },
    addUser: function (user, callback) {
        bcrypt.hash(user.password, 10, (err, hash) => {
            if (err) {
                console.log(err)
            }
                return db.query(
                    'insert into users(username, email, password, balance) values($1,$2,$3,$4)',
                    [
                        user.username,
                        user.email,
                        hash,
                        user.balance,
                    ],
                    callback
                );
    }
        )
    }}

module.exports = registration;