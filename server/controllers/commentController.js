const Comment = require("../models/comment");
const Post = require("../models/post");

module.exports.create = async function (req, res) {
  let post = await Post.findById(req.body.post);

  if (post) {
    let comment = await Comment.create({
      content: req.body.content,
      post: req.body.post,
      user: req.body.user,
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
  console.log(comment);

  let post = await Post.findById(req.body.post_id);
  console.log(post);
  if (comment.user == req.body.userId || post.user == req.body.userId) {
    comment.remove();

    let post = Post.findByIdAndUpdate(req.body.post_id, {
      $pull: { comments: req.body.id },
    });

    console.log("i am post ,", post);
    return res.status(200).json({
      message: "Comment deleted",
      success: true,
    });
  }
};
