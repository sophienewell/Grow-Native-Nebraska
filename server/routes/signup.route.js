const express = require("express");
const router = express.Router();
const { signup } = require("../models/signup.model");
const minmax = require("../middleware/minmax.middleware");

router.put("/signup", minmax, (req, res) => {
  signup(res, req.body.email_address);
});

module.exports = router;
