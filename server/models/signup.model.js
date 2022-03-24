const query = require("../mysql.conf");

async function signup(res, emailAdd) {
  try {
    const [email] = await query(
      "SELECT * FROM users WHERE users.email_address = ?",
      [emailAdd]
    );
    if (email) {
      return res.send({
        data: null,
        success: false,
        error: "This email address is already signed up",
      });
    }
    await query("INSERT INTO users (email_address) VALUES (?)", [emailAdd]);
    return res.send({
      data: "Successfully signed up",
      success: true,
      error: null,
    });
  } catch (err) {
    return res.send({
      data: null,
      success: false,
      error: "Something went wrong, please try again later.",
    });
  }
}

module.exports = { signup };
