const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const user = require("../models/user");
const jwt = require("jsonwebtoken");
const config = require("../config");

const router = express.Router();
router.use(bodyParser.json());


router.route("/register").post((req, res, next) => {
    console.log("Inside AdminRouter Register");
    bcrypt.hash(req.body.password, 8, (error, hash) => {
        let newUser = {
            username: req.body.username,
            password: hash,
            name: req.body.name,
            email_id: req.body.email_id,
            mobile_number: req.body.mobile_number,
            role: req.body.role
        };
        user
            .create(newUser)
            .then(
                (data) => {
                    console.log("New User Registered" + data);
                    res.statusCode = 200;
                    res.setHeader("content-type", "application/json");
                    res.json(data);
                },
                (err) => next(err)
            )
            .catch((err) => next(err));
    });
});


router.route("/login").post((req, res, next) => {
    console.log("Inside UserRouter Login");
    user
        .find({ username: req.body.username })
        .then((data) => {
            if (data.length == 1) {
                bcrypt.compare(req.body.password, data[0].password, (error, verify) => {
                    if (error) {
                        console.log(error);
                        res.status(503).json({
                            message: "Bcryptjs Error",
                        });
                    } else if (verify === false) {
                        res.status(400).json({
                            message: "Wrong Username or Password",
                        });
                    } else {
                        jwt.sign(
                            {
                                username: data[0]._id,
                                email_id: data[0].email_id,
                                mobile_number: data[0].mobile_number,
                                role: data[0].role,
                            },
                            config.secretKey,
                            (error, token) => {
                                if (error) {
                                    console.log(error);
                                    res.status(500).json({ message: "Token generation Failed" });
                                } else {
                                    // token generated
                                    console.log("Token generated");
                                    res.status(200).json({
                                        token: token,
                                        user: {
                                            username: data[0].username,
                                            name: data[0].name,
                                            email_id: data[0].email_id,
                                            mobile_number: data[0].mobile_number,
                                            role: data[0].role
                                        }
                                    });
                                }
                            }
                        );
                    }
                });
            } else {
                res.status(400).json({
                    message: "Wrong Username or Password"
                })
            }

        })
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });
});

module.exports.router = router;
