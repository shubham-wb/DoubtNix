const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();

//for authentication

const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const passportJWT = require("./config/passport-jwt-strategy");

const MongoStore = require("connect-mongo");

const db = require("./config/mongoose");

app.use(express.json()); // to parse JSON bodies

app.use(express.urlencoded()); //Parse URL-encoded bodies

app.use(cookieParser());

app.use(cors());

app.use(
  session({
    name: "doubtnix",
    // TODO change the secret before deployment in production mode
    secret: "doubtnix",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },

    store: MongoStore.create({
      mongoUrl:
        "mongodb+srv://shubham-wb:7pLLBCxPtS7koIfZ@cluster0.lqrxb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      autoRemove: "disabled",
      function(err) {
        console.log(err || "connect-mongodb setup ok");
      },
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/", require("./routes"));

app.listen(port, () => console.log(`Server running on port ${port}`));

// use express router
