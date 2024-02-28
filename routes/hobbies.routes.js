const { Server } = require("../Server");

const hobbiesRouter = Server.createRouter();

hobbiesRouter.add("get", "/api/users/:userId/hobbies", () => {});
hobbiesRouter.add("path", "/api/users/:userId/hobbies", () => {});

module.exports = {
  hobbiesRouter,
};
