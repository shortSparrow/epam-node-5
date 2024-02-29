const { Server } = require("../Server");
const {
  createNewUserController,
  getAllUsersController,
  deleteUserController,
} = require("../controllers");

// TODO add cache (see requirements)
const userRouter = Server.createRouter();

userRouter.add("post", "/api/users", createNewUserController);
userRouter.add("get", "/api/users", getAllUsersController);
userRouter.add("delete", "/api/users/:id", deleteUserController);

module.exports = {
  userRouter,
};
