require("dotenv").config();
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "can you keep a secret";

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "unauthorized" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "unauthorized" });
  }
};
