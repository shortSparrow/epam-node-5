class ErrorNotFoundUser extends Error {
  constructor(userId) {
    super(`User with id ${userId} doesn't exist`);
  }
}

module.exports = {
  ErrorNotFoundUser,
};
