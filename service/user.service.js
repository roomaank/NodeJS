const fs = require("fs");
const path = require("path");
const { promisify } = require("util");

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);
const dataBasePath = path.join(process.cwd(), "dataBase", "user.json");
console.log("dataBase path: ", dataBasePath);

module.exports = {
  findUsers: async () => {
    const dataBase = await readFile(dataBasePath);
    console.log(JSON.parse(dataBase.toString()));

    // return JSON.parse(dataBase.toString);
  },

  findUsersById: (userId) => {},

  createUser: (userObject) => {},

  deleteUser: () => {},
};
