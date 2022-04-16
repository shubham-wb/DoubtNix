const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: "Name is required",
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    required: "Category is required",
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
  instructor: {
    type: mongoose.Schema.ObjectId,
    ref: "Teacher",
  },
  published: {
    type: Boolean,
    default: false,
  },
  lessons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lesson",
    },
  ],
});

const Course = mongoose.model("Course", CourseSchema);
module.exports = Course;
