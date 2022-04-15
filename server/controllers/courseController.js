const Course = require("../models/course");

module.exports.create = (req, res) => {
  Course.create(req.body, function (err, user) {
    if (err) {
      console.log("Error in creating user while signing up", err);
      return;
    }
    return res.json({
      message: "faculty created succesfully ",
    });
  });
};

module.exports.listByInstructor = (req, res) => {
  return res.json({
    message: "helo",
  });
};

module.exports.photo = () => {};

module.exports.defaultPhoto = () => {};

module.exports.newLesson = () => {};
module.exports.read = () => {};

module.exports.update = () => {};

module.exports.remove = () => {};

module.exports.courseByID = () => {};

module.exports.userByID = () => {};

module.exports.listPublished = () => {};
