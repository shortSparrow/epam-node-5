const { Server } = require("../Server");
const {
  createNewUserController,
} = require("../controllers/createNewUser.controller");

const userRouter = Server.createRouter();

userRouter.add("post", "/api/users", createNewUserController);
userRouter.add("get", "/api/users", () => {});
userRouter.add("delete", "/api/users/:id", () => {});


module.exports = {
  userRouter,
};
