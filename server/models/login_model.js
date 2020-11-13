const db = require('../database');
const bcrypt = require('bcrypt')


const login = {
    getUser: function (username, callback) {
        return db.query(
            'select * from users where username=$1', [username], callback)
    }
}


module.exports = login;