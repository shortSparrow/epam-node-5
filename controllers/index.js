const { createNewUserController } = require("./createNewUser.controller");
const { deleteUserController } = require("./deleteUser.controller");
const { getAllUsersController } = require("./getAllUsers.controller");

module.exports = {
  createNewUserController,
  deleteUserController,
  getAllUsersController,
};
