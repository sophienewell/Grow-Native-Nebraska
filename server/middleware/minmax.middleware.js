function minmax(req, res, next) {
  const { email_address } = req.body;
  if (!email_address || email_address.length < 6 || email_address.length > 30) {
    return res.send({
      success: false,
      error: "Email must be between 6-30 characters",
      data: null,
    });
  }
  return next();
}

module.exports = minmax;
