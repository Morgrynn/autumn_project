const db = require('../database');

const user = {
    addBalance: function (username, amount, callback) {
        return db.query(
            'UPDATE users SET balance=balance+$1 WHERE username = $2', [amount, username], callback
        )
    },
    updateInfo: function (username, callback) {
        return db.query(
            'SELECT * from users WHERE username = $1', [username], callback
        )
    },
    decreaseBalance: function (username, amount, callback) {
        return db.query(
            'UPDATE users SET balance=balance-$1 WHERE username = $2', [amount, username], callback
        )
    },
    changePassword: function (username, hash, callback) {
        return db.query(
            'UPDATE users SET password=$1 WHERE username=$2', [hash, username], callback
        )
    }
}

module.exports = user;