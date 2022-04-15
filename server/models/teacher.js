const mongoose = require("mongoose");
const crypto = require("crypto");
const teacherSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    unique: "Email already exists",
  },

  subject: {
    type: String,
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
    type: String,
    require: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Teacher"],
    default: "Teacher",
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

const Teacher = mongoose.model("teacherSchema", teacherSchema);

module.exports = Teacher;
