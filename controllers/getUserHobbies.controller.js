const { getUserHobbiesRepository } = require("../repository");

const getUserHobbiesController = (req, res) => {
  const userId = req.params?.userId;

  const hobbiesResult = getUserHobbiesRepository(userId);
  if (hobbiesResult instanceof Error) {
    return res.status(404).json({
      data: null,
      error: hobbiesResult.message,
    });
  }

  return res.status(200).json({
    data: {
      hobbies: hobbiesResult,
      links: {
        self: `/api/users/${userId}/hobbies`,
        user: `/api/users/${userId}`,
      },
    },
    error: null,
  });
};

module.exports = {
  getUserHobbiesController,
};
