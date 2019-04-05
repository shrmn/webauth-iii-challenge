const router = require("express").Router();
const bcrypt = require("bcryptjs");

const tokenService = require("./tokenService");
const uModel = require("../users/usersModel");

router.post("/register", async (req, res) => {
  console.log(req.body);
  const creds = req.body;
  const { username, password } = creds;

  if (!username || !password) {
    return res.status(400).json({
      message: `Both a username and password are required to register.`
    });
  }

  const hash = bcrypt.hashSync(password, 5);
  req.body.password = hash;

  try {
    const user = await uModel.add(creds);

    const token = tokenService.generateToken(user);

    res.status(201).json({ user, token });
  } catch (error) {
    res.status(500).json({ error: `Error while registering user: ${error}` });
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: `Both a username and password are required to log in.`
    });
  }

  try {
    const user = await uModel.findBy(username);
    console.log(`login: `, user);
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = tokenService.generateToken(user);
      res.status(200).json({ message: "Successful log in", token });
    } else {
      res.status(401).json({
        message: "Either username or password was incorrect. Please try again."
      });
    }
  } catch (error) {
    res.status(500).json({ error: `Error while logging in: ${error}` });
  }
});

module.exports = router;
