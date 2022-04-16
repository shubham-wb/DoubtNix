const mongoose = require("mongoose");
const LessonSchema = new mongoose.Schema({
  title: String,
  content: String,
  resource_url: String,
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
  },
});

const Lesson = mongoose.model("Lesson", LessonSchema);

module.exports = Lesson;
