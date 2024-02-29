const { deleteUserRepository } = require("../repository");

const deleteUserController = (req, res) => {
  const result = deleteUserRepository(req.params?.id);

  if (result === true) {
    return res.status(200).json({
      data: {
        success: true,
      },
      error: null,
    });
  }

  return res.status(404).json({
    data: null,
    error: result.message,
  });
};

module.exports = {
  deleteUserController,
};
