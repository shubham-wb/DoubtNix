const express = require("express");
const passport = require("passport");
const postRouter = express.Router();

const postController = require("../controllers/postsController");

postRouter.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  postController.create
);
postRouter.get(
  "/destroy/:id",
  passport.authenticate("jwt", { session: false }),
  postController.destroy
);

module.exports = postRouter;
