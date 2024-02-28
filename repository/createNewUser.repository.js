const { users } = require("../data/database");

const createNewUserRepository = (userData) => {
  const user = {
    id: new Date().getTime().toString(),
    name: userData.name,
    email: userData.email,
  };
  users.push(user);

  return user;
};

module.exports = { createNewUserRepository };
