const router = require("express").Router();
const bcrypt = require("bcryptjs");

const tokenService = require('./tokenService');
const uModel = require('../users/usersModel');

router.post('/register', async (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 5);
  user.password = hash;

  try {
    const newUser = uModel.add(user);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  };
});

router.post('/login', async (req, res) => {
  let { username, password } = req.body;

  try {
    const 
  } catch (error) {
    
  }
})