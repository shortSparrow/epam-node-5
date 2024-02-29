const { users } = require("../data/database");

const getAllUsersRepository = () => {
  return [...users];
};

module.exports = { getAllUsersRepository };
