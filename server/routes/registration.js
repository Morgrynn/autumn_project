const express = require('express');
const router = express.Router();
const registration = require('../models/registration_model');
const bcrypt = require('bcrypt')

router.post('/', (req, res) => {
        registration.checkIfExists(req.body.username, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                if (rows.rows.length === 0) {
                    registration.addUser(req.body)
                    res.send(true)
                } else {
                    res.send(false)
                }
            }
        })
    }
)


module.exports = router;