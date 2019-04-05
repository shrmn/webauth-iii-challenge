const router = require("express").Router();

const uModel = require("./usersModel");

router.get("/", async (req, res) => {
  try {
    const userList = await uModel.find();
    res.status(200).json(userList);
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while retrieving user list",
      error
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await uModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while retrieving user",
      error
    });
  }
});

module.exports = router;
