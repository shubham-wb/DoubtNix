const express = require("express");

const commentsRouter = express.Router();

const commentsController = require("../controllers/commentController");

commentsRouter.post("/create", commentsController.create);

module.exports = commentsRouter;
