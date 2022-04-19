const express = require("express");

const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const courseController = require("../controllers/courseController");
const courseRouter = express.Router();
const lessonController = require("../controllers/lessonController");
const passport = require("passport");

courseRouter.patch("/publish/:courseId", courseController.PublishCourse);

courseRouter.patch("/update/:courseId", courseController.UpdateCourse);

courseRouter.delete("/delete/:courseId", courseController.DeleteCourse);

courseRouter.get("/:courseId", courseController.CourseById);
courseRouter.get(
  "/list/all",
  // passport.authenticate("jwt", { session: false }),
  courseController.read
);
courseRouter.post(
  "/create",
  upload.single("image"),
  // passport.authenticate("jwt", { session: false }),
  courseController.create
);

courseRouter.get(
  "/mycourses/:userId",
  // passport.authenticate("jwt", { session: false }),
  courseController.listMyCourses
);

courseRouter.post(
  "/:courseId/lesson/create",
  // passport.authenticate("jwt", { session: false }),
  lessonController.create
);

module.exports = courseRouter;
