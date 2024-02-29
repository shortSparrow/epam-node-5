const { usersHobbies, users } = require("../data/database");
const { ErrorNotFoundUser } = require("../error/userErrors");

const addUserHobbiesRepository = (userId, newHobbies) => {
  const isUserExist = users.find((user) => user.id === userId);
  const currentUserHobbies = usersHobbies.find(
    (item) => item.userId === userId
  );

  if (!isUserExist || !currentUserHobbies) {
    return new ErrorNotFoundUser(userId);
  }


  currentUserHobbies.hobbies = Array.from(
    new Set([...currentUserHobbies.hobbies, ...newHobbies])
  );
};

module.exports = { addUserHobbiesRepository };
