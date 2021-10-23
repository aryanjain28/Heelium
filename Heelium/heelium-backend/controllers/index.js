const express = require("express");
var router = express.Router();

var auth = require("./auth");
router.use("/auth", auth.router);

module.exports.router = router;