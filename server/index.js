const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();

//for authentication

const passport = require("passport");
require("./config/passport-jwt-strategy");

const db = require("./config/mongoose");

app.use(express.json()); // to parse JSON bodies

app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use(cors());

app.use(passport.initialize());

app.use("/", require("./routes"));

app.listen(port, () => console.log(`Server running on port ${port}`));

// use express router
