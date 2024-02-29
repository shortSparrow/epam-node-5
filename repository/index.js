const { createNewUserRepository } = require("./createNewUser.repository");
const { deleteUserRepository } = require("./deleteUser.repository");
const { getAllUsersRepository } = require("./getAllUsers.repository");
const { getUserHobbiesRepository } = require("./getUserHobbies.repository");
const { addUserHobbiesRepository } = require("./addUserHobbies.repository");
const { getUserByIdRepository } = require("./getUserById.repository");

module.exports = {
  createNewUserRepository,
  deleteUserRepository,
  getAllUsersRepository,
  getUserHobbiesRepository,
  addUserHobbiesRepository,
  getUserByIdRepository
};
