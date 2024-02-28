const { Server } = require("../Server");
const {
  createNewUserController,
} = require("../controllers/createNewUser.controller");

const {
  getAllUsersController,
} = require("../controllers/getAllUsers.controller");

// TODO add cache (see requirements)
const userRouter = Server.createRouter();

userRouter.add("post", "/api/users", createNewUserController);
userRouter.add("get", "/api/users", getAllUsersController);
userRouter.add("delete", "/api/users/:id", () => {});

module.exports = {
  userRouter,
};
