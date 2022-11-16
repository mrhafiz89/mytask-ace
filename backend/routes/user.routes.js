const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  
  app.get("/api/user/user", controller.userBoard);
  app.put("/api/user/update_user",[authJwt.verifyToken],controller.updateUser);
  app.delete("/api/user/delete_user",[authJwt.verifyToken],controller.deleteUser);
};
