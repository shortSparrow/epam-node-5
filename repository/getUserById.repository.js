const { users } = require("../data/database");
const { ErrorNotFoundUser } = require("../error/userErrors");

const getUserByIdRepository = (userId) => {
  const user = users.find((user) => user.id === userId);
  if (user) {
    return user;
  }

  return new ErrorNotFoundUser(userId);
};

module.exports = { getUserByIdRepository };
