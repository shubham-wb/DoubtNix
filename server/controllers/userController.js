const User = require("../models/user");
const Teacher = require("../models/teacher");
const jwt = require("jsonwebtoken");

module.exports.createSession = async function (req, res) {
  console.log(req.body);
  try {
    let faculty = await Teacher.findOne({ email: req.body.email });

    if (!faculty || faculty.password != req.body.password) {
      var user = await User.findOne({ email: req.body.email });

      if (!user || user.password != req.body.password) {
        return res.json(422, {
          message: "Invalid Username/Password",
        });
      }
    } else {
      user = faculty;
    }
    const token = jwt.sign(user.toJSON(), "doubtnix", {
      expiresIn: "100000",
    });

    return res.status(200).json({
      message: "Sign in successful, here is your token, please keep it safe!",
      data: token,
    });
  } catch (err) {
    console.log("********", err);
    return res.json(500, {
      message: "Internal Server Error",
    });
  }
};
