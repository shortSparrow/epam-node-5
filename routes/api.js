const { userRouter } = require("./user.routes");
const { hobbiesRouter } = require("./hobbies.routes");

const api = [...userRouter.getRoutes(), ...hobbiesRouter.getRoutes()];

module.exports = {
  api,
};
