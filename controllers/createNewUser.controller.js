const {
  createNewUserRepository,
} = require("../repository/createNewUser.repository");

const createNewUserController = (req, res) => {
  const createdUser = createNewUserRepository(req.body);

  const result = {
    data: {
      user: createdUser,
      links: {
        self: `/api/users/${createdUser.id}`,
        hobbies: `/api/users/${createdUser.id}/hobbies`,
      },
    },
    error: null,
  };

  res.status(201).json(result)
};

module.exports = {
  createNewUserController,
};
