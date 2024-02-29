const { users } = require("../data/database");

// ! Dangerous, because it comes two concurrent requests and first delete user from users - second request index will be wrong and second request will delete wrong user
/**
 * request 1 want to delete user with id user1 and this user has index 5
 * request 2 want to delete user with id user2 and this user has index 7
 * 
 * after request 1 delete user1 real index of user2 will be 6, but our function don't know about it and delete user with index 7
 */
const deleteUserRepository = (userId) => {
  const userIndex = users.findIndex((user) => user.id === userId);
  if(userIndex !== -1) {
    const deletedUser = users.splice(userIndex, 1)
    if(deletedUser) {
        return true
    }
    return new Error(`User with id ${userId} doesn't exist`)
  }

  return new Error(`User with id ${userId} doesn't exist`)
};

module.exports = { deleteUserRepository };
