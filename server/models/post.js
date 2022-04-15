const mongoose = require("mongoose");
const multer = require("multer");
const postSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
    category: {
      type: String,
      enum: ["post", "doubt"],
    },
  },

  {
    timestamps: true,
  }
);

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "..", PHOTO_PATH));
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

// static methods
postSchema.statics.uploadedAvatar = multer({ storage: storage }).single(
  "photo"
);
postSchema.statics.photoPath = PHOTO_PATH;

const Post = mongoose.model("postSchema", postSchema);

module.exports = Post;
