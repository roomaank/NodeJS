const { json } = require("express");
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const errorMessage = require("../error/error.messages");
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const dataBasePath = path.join(process.cwd(), "dataBase", "user.json");

module.exports = {
  findUsers: async () => {
    const users = await readFile(dataBasePath);

    const parsedUsers = JSON.parse(users.toString());

    return parsedUsers;
  },

  findUsersById: async (userId) => {
    const users = await readFile(dataBasePath);

    const singleUser = JSON.parse(users.toString())[userId];

    return singleUser;
  },

  createUser: async (userObject) => {
    const users = JSON.parse(await readFile(dataBasePath));

    const userExist = users.some((user) => user.email === userObject.email);
    if (userExist) {
      throw new Error(errorMessage.EXIST_USER.en);
    }
    users.push(userObject);

    writeFile(dataBasePath, JSON.stringify(users));
  },

  deleteUsersById: async (userId) => {
    const users = JSON.parse(await readFile(dataBasePath));

    users.splice(userId, 1);

    writeFile(dataBasePath, JSON.stringify(users));
  },
};
