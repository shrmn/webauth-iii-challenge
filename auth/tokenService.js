require("dotenv").config();

const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "can you keep a secret";

module.exports = {
  generateToken
};

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secret, options);
}
