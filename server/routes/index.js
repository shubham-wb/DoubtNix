const express = require("express");
const router = express.Router();

router.use("/signup", require("./signup"));
router.use("/courses", require("./courses"));
module.exports = router;
