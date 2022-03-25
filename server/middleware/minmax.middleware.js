function minmax(req, res, next) {
  const { email_address } = req.body;
  if (
    !email_address ||
    email_address.length < 6 ||
    email_address.length > 30 ||
    !email_address.includes("@")
  ) {
    return res.send({
      success: false,
      error: "Invalid email address",
      data: null,
    });
  }
  return next();
}

module.exports = minmax;
