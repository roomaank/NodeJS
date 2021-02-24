const userService = require("../service/user.service");
const errorCode = require("../constant/errorCodes.enum");
const successCode = require("../constant/successCodes.enum");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const users = await userService.findUsers();

      res.json(users);
    } catch (e) {
      res.status(errorCode.BAD_REQUEST).json(e.message);
    }
  },

  getSingleUser: async (req, res) => {
    try {
      const { userId } = req.params;

      const user = await userService.findUsersById(userId);

      res.json(user);
    } catch (e) {
      res.status(errorCode.BAD_REQUEST).json(e.message);
    }
  },

  createUser: async (req, res) => {
    try {
      await userService.createUser(req.body);

      res.status(successCode.CREATED).json("User is created");
    } catch (e) {
      res.status(errorCode.BAD_REQUEST).json(e.message);
    }
  },

  deleteCurrentUser: async (req, res) => {
    try {
      const { userId } = req.params;

      await userService.deleteUsersById(userId);

      res.status(successCode.CREATED).json("User is deleted");
    } catch (e) {
      res.status(errorCode.BAD_REQUEST).json(e.message);
    }
  },

};
