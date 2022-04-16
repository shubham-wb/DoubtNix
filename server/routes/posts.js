const express = require("express");

const postRouter = express.Router();

const postController = require("../controllers/postsController");

postRouter.post("/create", postController.create);

module.exports = postRouter;
