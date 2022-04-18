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

module.exports.read = async (req, res) => {
  let course = await Course.find({});
  console.log(course);
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

  return res.json({
    data: teacher.courses,
    message: "courses listed succesfully",
  });
};

module.exports.CourseById = async (req, res) => {
  let CourseId = req.params;

  const corse = await Course.findById(CourseId.courseId)
    .sort("-createdAt")
    .populate("lessons");

  return res.json({
    data: corse,
    message: "lessons listed succesfully",
  });
};

module.exports.PublishCourse = async (req, res) => {
  let courseId = req.params;
  await Course.updateOne(
    { _id: courseId.courseId },
    { $set: { published: true } }
  );
};

module.exports.UpdateCourse = async (req, res) => {
  console.log("req.params", req.params);
  console.log("body", req.body);

  let courseId = req.params;

  await Course.findByIdAndUpdate(
    { _id: courseId.courseId },
    {
      name: req.body.updateCourse.name,
      description: req.body.updateCourse.description,
      category: req.body.updateCourse.category,
    }
  )
    .then(() => {
      return res.json({
        message: "updated succesfully ",
        success: true,
      });
    })
    .catch((err) => {
      console.log(err, "error in updating course ");
    });
};

module.exports.DeleteCourse = async (req, res) => {
  let courseId = req.params;
  await Course.deleteOne({ _id: courseId.courseId })
    .then(function () {
      console.log("Data deleted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
};
