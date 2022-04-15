const express = require("express");

const courseController = require("../controllers/courseController.js");

const CourseRouter = express.Router();

CourseRouter.get("/published", courseController.listPublished);

CourseRouter.post("/create", courseController.create);

CourseRouter.get("/:id", courseController.listByInstructor);

CourseRouter.get(
  "/photo/:courseId",
  courseController.photo,
  courseController.defaultPhoto
);

CourseRouter.get("/defaultphoto", courseController.defaultPhoto);

CourseRouter.put("/:courseId/lesson/new", courseController.newLesson);

CourseRouter.get("/:courseId", courseController.read);
CourseRouter.put("/:courseId", courseController.update);
CourseRouter.delete("/:courseId", courseController.remove);
CourseRouter.param("courseId", courseController.courseByID);

CourseRouter.param("userId", courseController.userByID);

module.exports = CourseRouter;
