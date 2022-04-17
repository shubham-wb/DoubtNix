const express = require("express");

const router = express.Router();

router.use("/signup", require("./signup"));
router.use("/courses", require("./courses"));
router.use("/posts", require("./posts"));
router.use("/comments", require("./comment"));
router.use("/users", require("./users"));
module.exports = router;
