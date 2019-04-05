const express = require("express");
const cors = require("cors");

const authRouter = require("../auth/authRouter.js");
const usersRouter = require("../users/usersRouter.js");

const server = express();

server.use(cors());
server.use(express.json());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.send(`It's working! It's working!`);
});

module.exports = server;
