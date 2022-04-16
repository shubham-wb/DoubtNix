const express = require("express");
const courseController = require("../controllers/courseController");
const courseRouter = express.Router();
const lessonController = require("../controllers/lessonController");

courseRouter.get("/list", courseController.read);
courseRouter.post("/create", courseController.create);
courseRouter.post("/:courseId/lesson/create", lessonController.create);

module.exports = courseRouter;
