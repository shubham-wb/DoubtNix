const express = require("express");

const postRouter = express.Router();

const postController = require("../controllers/postsController");

postRouter.post("/create", postController.create);

postRouter.get("/list", postController.listall);

module.exports = postRouter;
