const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();

const path = require("path");

const db = require("./config/mongoose");
const passport = require("passport");

app.use(express.json()); // to parse JSON bodies

app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use(cors());

require("./config/passport-jwt-strategy");

app.use("/", require("./routes"));

var multer = require("multer");

var storage = multer.diskStorage({
  limits: {
    fileSize: 1000000,
  },
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

app.use(passport.initialize());

app.listen(port, () => console.log(`Server running on port ${port}`));

const q = 1000;
// use express router
