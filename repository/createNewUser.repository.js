const { users, usersHobbies } = require("../data/database");

const createNewUserRepository = (userData) => {
  const userId = new Date().getTime().toString();
  const user = {
    id: userId,
    name: userData.name,
    email: userData.email,
  };
  users.push(user);
  usersHobbies.push({ userId: userId, hobbies: [] });

  return user;
};

module.exports = { createNewUserRepository };
