const {
  addUserHobbiesRepository,
  getUserByIdRepository,
} = require("../repository");

const addUserHobbiesController = (req, res) => {
  const userId = req.params?.userId;
  const hobbies = req.body.hobbies;

  const userResult = getUserByIdRepository(userId);
  const hobbiesResult = addUserHobbiesRepository(userId, hobbies);

  if (userResult instanceof Error) {
    return res.status(404).json({
      data: null,
      error: userResult.message,
    });
  }

  if (hobbiesResult instanceof Error) {
    return res.status(404).json({
      data: null,
      error: bobbiesResult.message,
    });
  }

  return res.status(200).json({
    data: {
      user: userResult,
      links: {
        self: `/api/users/${userId}`,
        hobbies: `/api/users/${userId}/hobbies`,
      },
    },
    error: null,
  });
};

module.exports = {
  addUserHobbiesController,
};
