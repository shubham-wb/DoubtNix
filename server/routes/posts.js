const express = require("express");
const postRouter = express.Router();
const passport = require("passport");

const postController = require("../controllers/postsController");

postRouter.post(
  "/create",
  // passport.authenticate("jwt", { session: false }),
  postController.create
);
postRouter.post("/destroy/:postId", postController.destroy);

postRouter.get(
  "/list",
  // passport.authenticate("jwt", { session: false }),
  postController.read
);

module.exports = postRouter;
