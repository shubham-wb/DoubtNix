const express = require("express");

const commentsRouter = express.Router();

const commentsController = require("../controllers/commentController");

commentsRouter.post("/create", commentsController.create);
commentsRouter.get("/list", commentsController.create);

module.exports = commentsRouter;
