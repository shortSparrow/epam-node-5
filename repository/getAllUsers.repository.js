const { users } = require("../data/database");

const getAllUsers = () => {
  return [...users];
};

module.exports = { getAllUsers };
