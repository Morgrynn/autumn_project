const express = require('express');
const router = express.Router();
const user = require('../models/user_model');

router.post('/add_balance', (req, res) => {
    user.addBalance(req.body.username, req.body.amount, function (err, rows) {
    })
})








module.exports = router;