const Course = require("../models/course");
const Teacher = require("../models/teacher");
module.exports.create = async (req, res) => {
  let teacher = await Teacher.findById(req.body.instructor);

  if (teacher) {
    let course = await Course.create(req.body);
    teacher.courses.push(course);
    teacher.save((err, use) => {
      if (err) {
        console.log(err);
      }
    });

    return res.json({
      message: "Course created succesfully ",
    });
  }
};

module.exports.photo = () => {};

module.exports.defaultPhoto = () => {};

module.exports.newLesson = () => {};

module.exports.read = async (req, res) => {
  let course = await Course.find({});
  if (course) {
    return res.json({
      data: course,
      message: "courses listed succesfully",
      success: "true",
    });
  } else {
    return res.json({
      message: "cannot find courses",
      success: "false",
    });
  }
};

module.exports.listMyCourses = async (req, res) => {
  let FacultyId = req.params;

  const teacher = await Teacher.findById(FacultyId.userId)
    .sort("-createdAt")
    .populate("courses");

  console.log(teacher.courses);
  return res.json({
    data: teacher.courses,
    message: "courses listed succesfully",
  });
};

module.exports.update = () => {};

module.exports.remove = () => {};

module.exports.CourseById = async (req, res) => {
  let CourseId = req.params;

  const corse = await Course.findById(CourseId.CourseId)
    .sort("-createdAt")
    .populate("lessons");

  console.log(corse.lessons);
  return res.json({
    data: corse.lessons,
    message: "lessons listed succesfully",
  });
};

module.exports.userByID = () => {};

module.exports.listPublished = () => {};
