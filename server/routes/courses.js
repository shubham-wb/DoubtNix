const express = require("express");
const courseController = require("../controllers/courseController");
const courseRouter = express.Router();
const lessonController = require("../controllers/lessonController");
const passport = require("passport");

courseRouter.get(
  "/list",
  passport.authenticate("jwt", { session: false }),
  courseController.read
);
courseRouter.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  courseController.create
);
courseRouter.post(
  "/:courseId/lesson/create",
  passport.authenticate("jwt", { session: false }),
  lessonController.create
);

module.exports = courseRouter;
