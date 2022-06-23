const Post = require("../models/post");
const Comment = require("../models/comment");
const User = require("../models/user");
const Teacher = require("../models/teacher");
module.exports.read = async function (req, res) {
  try {
    let post = await Post.find({}).sort("-createdAt").populate("comments");

    if (post) {
      return res.json({
        data: post,
        message: "posts found succesfully",
        success: true,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports.create = async function (req, res) {
  try {
    let user = await User.findById(req.body.post.user._id);
    console.log(user);
    if (user) {
      let post = await Post.create({
        title: req.body.post.title,
        content: req.body.post.content,
        user: {
          _id: user._id,
          name: user.username,
        },
        doubt: req.body.post.doubt,
        postedAt: Date.now(),
      });

      user.posts.push(post);

      user.save();

      return res.status(200).json({
        data: {
          post: post,
          success: true,
        },
        message: "Post created!",
      });
    } else if (!user) {
      let teacher = await Teacher.findById(req.body.post.user._id);

      let post = await Post.create({
        content: req.body.post.content,
        user: req.body.post.user._id,
        doubt: req.body.post.doubt,
      });
      teacher.posts.push(post);
      teacher.save();

      return res.status(200).json({
        data: {
          post: post,
          success: true,
        },
        message: "Post created!",
      });
    } else {
      return res.json({
        message: "unauthorized request",
        success: false,
      });
    }
  } catch (err) {
    console.log(err);
    return res.redirect("back");
  }
};

module.exports.destroy = async function (req, res) {
  let post = await Post.findById(req.params.postId);

  if (post.user._id.toString() === req.body._id) {
    post.remove();

    let user = User.findByIdAndUpdate(post.user._id.toString(), {
      $pull: { posts: req.params.postId },
    });

    await Comment.deleteMany({ post: req.params.id });

    return res.status(200).json({
      data: {
        post_id: req.params.id,
      },
      message: "Post deleted",
    });
  } else {
    return res.redirect("back");
  }
};

module.exports.resolve = async function (req, res) {
  let postId = req.params.postId;

  let post = await Post.findById(req.params.postId);
  if (post.user._id.toString() === req.body._id) {
    let a = await Post.updateOne({ _id: postId }, { $set: { doubt: false } });

    if (a.acknowledged)
      return res.json({
        message: "Doubt resolved",
        success: true,
      });
  }
};
