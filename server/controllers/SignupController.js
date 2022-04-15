const Teacher = require("../models/teacher");

module.exports.postFSignup = function (req, res) {
  console.log("loda");
  console.log(req.body);

  if (req.body.password != req.body.confirmPassword) {
    return res.redirect("back");
  }

  Teacher.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      console.log("Error in finding user in signing up");
      return;
    }

    if (!user) {
      Teacher.create(req.body, function (err, user) {
        if (err) {
          console.log("Error in creating user while signing up", err);
          return;
        }

        return res.json({
          message: "faculty created succesfully ",
        });
      });
    } else {
      return res.redirect("back");
    }
  });
};
