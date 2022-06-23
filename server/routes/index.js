const express = require("express");

const router = express.Router();

router.use("api/signup", require("./signup"));
router.use("api/courses", require("./courses"));
router.use("api/posts", require("./posts"));
router.use("api/comments", require("./comment"));
router.use("api/users", require("./users"));
module.exports = router;
