const { usersHobbies } = require("../data/database");
const { ErrorNotFoundUser } = require("../error/userErrors");

const getUserHobbiesRepository = (userId) => {
  const userHobbies = usersHobbies.find((hobby) => hobby.userId === userId);
  if (userHobbies) {
    return userHobbies.hobbies;
  }

  return new ErrorNotFoundUser(userId);
};

module.exports = { getUserHobbiesRepository };
