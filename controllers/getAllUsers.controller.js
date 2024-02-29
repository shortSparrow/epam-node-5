const { getAllUsersRepository } = require("../repository/getAllUsers.repository");

const getAllUsersController = (req, res) => {
  const userList = getAllUsersRepository();

  const result = {
    data: userList.map((user) => ({
      user,
      links: {
        self: `/api/users/${user.id}`,
        hobbies: `/api/users/${user.id}/hobbies`,
      },
    })),
    error: null,
  };

  res.status(200).json(result);
};

module.exports = {
  getAllUsersController,
};
