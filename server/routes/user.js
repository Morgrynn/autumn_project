const express = require('express');
const router = express.Router();
const user = require('../models/user_model');

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








module.exports = router;