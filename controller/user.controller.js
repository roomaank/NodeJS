const userService = require("../service/user.service");

module.exports = {
  getAllUsers: (req, res) => {
    try {
      const users = userService.findUsers();

      res.json(users);
    } catch (e) {
      res.status(400).json(e.message);
    }
  },

  getSingleUser: (req, res) => {
    const { userId } = req.params;

    const user = userService.findUsersById(userId);

    res.json(user);
  },

  createUser: (req, res) => {
    userService.createUser(req.body);

    res.status(201).json("User is created");
  },

  deleteUser: (req, res) => {
    res.json("User is deleted");
  },
};
