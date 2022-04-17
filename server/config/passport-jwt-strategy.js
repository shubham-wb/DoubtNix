const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user");

let opts = {
  jwtFromRequest: ExtractJwt.fromHeader("x-auth-token"),
  secretOrKey: "doubtnix",
};

passport.use(
  new JWTStrategy(opts, (jwt_payload, done) => {
    console.log(jwt_payload, "mai chla bhi ");

    User.findById(jwt_payload.id)
      .then((user) => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch((err) => console.log(err));
  })
);
