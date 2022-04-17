const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/user");

let opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "doubtnix",
};

passport.use(
  new JWTStrategy(opts, function (jwt_PayLoad, done) {
    User.findById(jwt_PayLoad._id, function (err, user) {
      if (err) {
        console.log("Error in finding user from Jwt");
        return;
      }
      if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

module.exports = passport;
