const express = require("express");
const router = express.Router();
const { signup } = require("../models/signup.model");

router.put("/signup", (req, res) => {
  signup(res, req.body.emailAdd);
});

module.exports = router;
