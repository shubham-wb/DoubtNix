const mongoose = require("mongoose");
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
    postedAt: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    doubt: {
      type: Boolean,
      default: false,
    },
  },

  {
    timestamps: true,
  }
);

const Post = mongoose.model("postSchema", postSchema);

module.exports = Post;
