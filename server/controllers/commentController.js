const Comment = require("../models/comment");
const Post = require("../models/post");

module.exports.create = async function (req, res) {
  let post = await Post.findById(req.body.comment.post);
  if (post) {
    let comment = await Comment.create({
      content: req.body.comment.content,
      post: req.body.comment.post,
      user: req.body.comment.user,
      postedAt: Date.now(),
    });

    post.comments.push(comment);
    post.save((err) => {
      if (err) {
        console.log(err);
      }
    });

    return res.status(200).json({
      data: {
        comment: comment,
      },
      success: true,
      message: "Comment created",
    });
  }
};

module.exports.destroy = async function (req, res) {
  let comment = await Comment.findById(req.body.id);

  let post = await Post.findById(req.body.post_id);
  if (comment.user == req.body.userId || post.user == req.body.userId) {
    comment.remove();

    let post = Post.findByIdAndUpdate(req.body.post_id, {
      $pull: { comments: req.body.id },
    });

    return res.status(200).json({
      message: "Comment deleted",
      success: true,
    });
  }
};
