const Comment = require("../models/comment");
const Post = require("../models/post");

module.exports.create = async function (req, res) {
  let post = await Post.findById(req.body.post);
  console.log(post);
  if (post) {
    let comment = await Comment.create({
      content: req.body.content,
      post: req.body.post,
      // user: req.user._id,
    });
    post.comments.push(comment);
    post.save((err, use) => {
      if (err) {
        console.log(err);
      }
    });

    if (req.xhr) {
      return res.status(200).json({
        data: {
          comment: comment,
        },
        message: "Comment created",
      });
    }
  }
};

module.exports.destroy = async function (req, res) {
  try {
    let comment = await Comment.findById(req.params.id);
    let post = await Post.findById(comment.post);
    if (comment.user == req.user.id || post.user == req.user.id) {
      let postId = comment.post;

      comment.remove();

      let post = Post.findByIdAndUpdate(postId, {
        $pull: { comments: req.params.id },
      });

      await Like.deleteMany({ likeable: comment._id, onModel: "Comment" });

      // send the comment id which was deleted back to the views
      if (req.xhr) {
        return res.status(200).json({
          data: {
            comment_id: req.params.id,
          },
          message: "Comment deleted",
        });
      }

      return res.redirect("back");
    } else {
      return res.redirect("back");
    }
  } catch (err) {
    return;
  }
};
