const DB = require("../dataBase/user");

module.exports = {
  findUsers: () => {
    return DB;
  },

  findUsersById: (userId) => {
    return DB[userId];
  },

  createUser: (userObject) => {
    return DB.push(userObject);
  },

  deleteUser: () => {},
};
