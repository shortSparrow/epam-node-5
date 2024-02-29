const { createNewUserRepository } = require("./createNewUser.repository");
const { deleteUserRepository } = require("./deleteUser.repository");
const { getAllUsersRepository } = require("./getAllUsers.repository");

module.exports = {
  createNewUserRepository,
  deleteUserRepository,
  getAllUsersRepository,
};
