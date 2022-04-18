const Post = require("../models/post");
const Comment = require("../models/comment");
const User = require("../models/user");
const Teacher = require("../models/teacher");
module.exports.read = async function (req, res) {
  try {
    let post = await Post.find({});
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

    if (user) {
      let post = await Post.create({
        content: req.body.post.content,
        user: req.body.post.user._id,
        doubt: req.body.post.doubt,
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
    console.log("yes");
    post.remove();

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
