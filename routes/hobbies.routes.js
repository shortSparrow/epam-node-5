const { Server } = require("../Server");
const {
  getUserHobbiesController,
  addUserHobbiesController,
} = require("../controllers");

const hobbiesRouter = Server.createRouter();

hobbiesRouter.add(
  "get",
  "/api/users/:userId/hobbies",
  getUserHobbiesController
);

hobbiesRouter.add(
  "patch",
  "/api/users/:userId/hobbies",
  addUserHobbiesController
);

module.exports = {
  hobbiesRouter,
};
