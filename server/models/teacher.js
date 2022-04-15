const mongoose = require("mongoose");
const crypto = require("crypto");
const multer = require("multer");
var crypto = require("crypto");
const teacherSchema = mongoose.Schema({
  email: {
    type: string,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    unique: "Email already exists",
  },

  subject: {
    type: string,
    required: true,
  },
  username: {
    type: String,
    require: true,
    unique: true,
  },
  hashed_password: {
    type: String,
    required: "Password is required",
  },
  salt: String,
  confirmPassword: {
    type: String,
    require: true,
    minLength: 8,
  },
  name: {
    type: string,
    require: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Teacher"],
    defaultt: "Teacher",
  },
  avatar: {
    type: String,
    default:
      "https://emedia1.nhs.wales/HEIW2/cache/file/F4C33EF0-69EE-4445-94018B01ADCF6FD4_medium.png",
  },
});

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", AVATAR_PATH));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

teacherSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

teacherSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },
  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
  makeSalt: function () {
    return Math.round(new Date().valueOf() * Math.random()) + "";
  },
};

// static methods
teacherSchema.statics.uploadedAvatar = multer({ storage: storage }).single(
  "avatar"
);
teacherSchema.statics.avatarPath = AVATAR_PATH;

const Teacher = mongoose.model("teacherSchema", teacherSchema);

module.exports = Teacher;
