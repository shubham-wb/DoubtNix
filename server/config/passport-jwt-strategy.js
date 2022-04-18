const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user");

let opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "doubtnix",
};

passport.use(
  new JWTStrategy(opts, (jwt_payload, done) => {
    User.findOne({ id: jwt_payload._id }, function (err, user) {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
        // or you could create a new account
      }
    });
  })
);
