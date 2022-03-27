const express = require("express");
const router = express.Router();
const { signup, unsubscribe } = require("../models/signup.model");
const minmax = require("../middleware/minmax.middleware");

router.put("/signup", minmax, (req, res) => {
  signup(res, req.body.email_address);
});

router.delete("/unsubscribe", minmax, (req, res) => {
  unsubscribe(res, req.body.email_address);
});

module.exports = router;
