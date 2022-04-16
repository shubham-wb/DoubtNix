const Course = require("../models/course");

module.exports.create = (req, res) => {
  Course.create(req.body, function (err, user) {
    if (err) {
      console.log("Error in creating Course while signing up", err);
      return;
    }
    return res.json({
      message: "Course created succesfully ",
    });
  });
};

module.exports.listByInstructor = (req, res) => {};

module.exports.photo = () => {};

module.exports.defaultPhoto = () => {};

module.exports.newLesson = () => {};

module.exports.read = async (req, res) => {
  let course = await Course.find({});
  console.log(course);
  if (course) {
    return res.json({
      course: course,
    });
  }
};

module.exports.update = () => {};

module.exports.remove = () => {};

module.exports.courseByID = () => {};

module.exports.userByID = () => {};

module.exports.listPublished = () => {};
