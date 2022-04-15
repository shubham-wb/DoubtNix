const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "can't be blank"],
    match: [/\S+@\S+\.\S+/, "is invalid"],
    unique: "Email already exists",
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
    enum: ["Admin", "Student", "Teacher"],
    defaultt: "Student",
  },
  avatar: {
    type: String,
    default:
      "https://emedia1.nhs.wales/HEIW2/cache/file/F4C33EF0-69EE-4445-94018B01ADCF6FD4_medium.png",
  },
});

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
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

const User = mongoose.model("userSchema", userSchema);

module.exports = User;
