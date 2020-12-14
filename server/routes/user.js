const express = require('express');
const router = express.Router();
const user = require('../models/user_model');
const bcrypt = require('bcrypt')

router.post('/add_balance', (req, res) => {
    user.addBalance(req.body.username, req.body.amount, function (err, rows) {
    })
    user.updateInfo(req.body.username, function(err, rows) {
        res.send(rows.rows)
    })
})

router.post('/pay', ((req, res) => {
    user.decreaseBalance(req.body.username, req.body.amount, function (err, rows) {
    })
    user.updateInfo(req.body.username, function(err, rows) {
        res.send(rows.rows)
    })
}))

router.post('/change_password', ((req, res) => {
    user.updateInfo(req.body.username, function (err, rows) {
        if (err) {
            console.log(err)
        }
        bcrypt.compare(req.body.oldPassword, rows.rows[0].password, (err, response) => {
            console.log(response)
            if (response === true) {
                bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
                    user.changePassword(req.body.username, hash, (err, result) => {
                        console.log('123')
                    })
                })
            }
        })
    })
}))








module.exports = router;