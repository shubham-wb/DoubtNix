const express = require("express");
const signupRouter = express.Router();
const signupController = require("../controllers/SignupController");

signupRouter.post("/faculty", signupController.postFSignup);
signupRouter.post("/user", signupController.postUSignup);

module.exports = signupRouter;
