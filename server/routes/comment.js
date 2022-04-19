const express = require("express");

const commentsRouter = express.Router();

const commentsController = require("../controllers/commentController");

const passport = require("passport");

commentsRouter.post(
  "/create",
  // passport.authenticate("jwt", { session: false }),
  commentsController.create
);
commentsRouter.post(
  "/destroy",
  // passport.authenticate("jwt", { session: false }),
  commentsController.destroy
);

module.exports = commentsRouter;
