const { createNewUserController } = require("./createNewUser.controller");
const { deleteUserController } = require("./deleteUser.controller");
const { getAllUsersController } = require("./getAllUsers.controller");
const { getUserHobbiesController } = require("./getUserHobbies.controller");
const { addUserHobbiesController } = require("./addUserHobbies.controller");

module.exports = {
  createNewUserController,
  deleteUserController,
  getAllUsersController,
  getUserHobbiesController,
  addUserHobbiesController
};
