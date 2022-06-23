const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 8000;
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

if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
}
app.use(passport.initialize());

app.listen(port, () => console.log(`Server running on port ${port}`));

const q = 1400;
// use express router
