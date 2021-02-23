const userService = require("../service/user.service");
const errorCode = require("../constant/errorCodes.enum");
const successCode = require("../constant/successCodes.enum");

module.exports = {
  getAllUsers: (req, res) => {
    try {
      const users = userService.findUsers();

      res.json(users);
    } catch (e) {
      res.status(errorCode.BAD_REQUEST).json(e.message);
    }
  },

  getSingleUser: (req, res) => {
    try {
      const { userId } = req.params;

      const user = userService.findUsersById(userId);

      res.json(user);
    } catch (e) {
      res.status(errCodes.BAD_REQUEST).json(e.message);
    }
  },

  createUser: async (req, res) => {
    try {
      userService.createUser(req.body);

      res.status(successCode.CREATED).json("User is created");
    } catch (e) {
      res.status(errCodes.BAD_REQUEST).json(e.message);
    }
  },

  deleteCurrentUser: (req, res) => {
    try {
      const { userId } = req.params;

      const user = userService.deleteUsersById(userId);

      res.json(user);
    } catch (e) {
      res.status(errCodes.BAD_REQUEST).json(e.message);
    }
  },
};
