const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();

const db = require("./config/mongoose");
const passport = require("passport");

app.use(express.json()); // to parse JSON bodies

app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use(cors());

//for authentication

require("./config/passport-jwt-strategy");

app.use("/", require("./routes"));

app.use(passport.initialize());

app.listen(port, () => console.log(`Server running on port ${port}`));

const a = 1500;
// use express router
