const Lesson = require("../models/lesson");
const Course = require("../models/course");

module.exports.create = async function (req, res) {
  let course = await Course.findById(req.params.courseId);
  console.log(course);
  if (course) {
    let lesson = await Lesson.create({
      title: req.body.title,
      content: req.body.content,
      resource_url: req.body.resource_url,
      course: req.body.courseId,
    });
    course.lessons.push(lesson);
    course.save((err, use) => {
      if (err) {
        console.log(err);
      }
    });

    if (req.xhr) {
      return res.status(200).json({
        data: {
          lesson: lesson,
        },
        message: "lesson created",
      });
    }
  }
};
