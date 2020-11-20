const express = require('express');
const router = express.Router();
const login = require('../models/login_model');
const bcrypt = require('bcrypt')

router.post('/', (req, res) => {
        login.getUser(req.body.username, function (err, rows) {
            console.log(rows.rows)
            if (err) {
                res.json(false);
            } else {
                if (rows.rows.length > 0) {
                    bcrypt.compare(req.body.password, rows.rows[0].password, (err, response) => {
                        if (response) {
                            res.send(rows.rows)
                        } else {
                            res.send(false)
                        }
                    })
                } else {
                    console.log(rows.rows.length)
                    res.send(false)
                }
            }
        })
    })


module.exports = router;