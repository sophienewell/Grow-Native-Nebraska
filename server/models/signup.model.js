const query = require("../mysql.conf");

async function signup(res, email_address) {
  try {
    const [email] = await query(
      "SELECT * FROM users WHERE users.email_address = ?",
      [email_address]
    );
    if (email) {
      return res.send({
        data: null,
        success: false,
        error: "This email address is already signed up",
      });
    }
    await query("INSERT INTO users (email_address) VALUES (?)", [
      email_address,
    ]);
    return res.send({
      data: "Successfully signed up",
      success: true,
      error: null,
    });
  } catch (err) {
    console.log(err);
    return res.send({
      data: null,
      success: false,
      error: "Something went wrong, please try again later.",
    });
  }
}

async function unsubscribe(res, email_address) {
  try {
    const [email] = await query(
      "SELECT * FROM users WHERE users.email_address = ?",
      [email_address]
    );
    if (!email) {
      return res.send({
        data: null,
        success: false,
        error: "Cannot find email address",
      });
    }
    await query("DELETE FROM users WHERE users.email_address = ?", [
      email_address,
    ]);
    return res.send({
      data: "Successfully unsubscribed",
      success: true,
      error: null,
    });
  } catch (err) {
    console.log(err);
    return res.send({
      data: null,
      success: false,
      error: "Something went wrong, please try again later.",
    });
  }
}

module.exports = { signup, unsubscribe };
