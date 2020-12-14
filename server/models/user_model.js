const db = require('../database');

const user = {
    addBalance: function (username, amount, callback) {
        return db.query(
            'UPDATE users SET balance=balance+$1 WHERE username = $2', [amount, username], callback
        )
    }
}

module.exports = user;