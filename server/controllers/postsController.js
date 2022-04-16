const User = require("../models/user");
const Post = require("../models/post");
module.exports.create = (req, res) => {
  Post.create(req.body, (err, post) => {
    if (err) {
      console.log("cannot create post ", err);
    } else {
      console.log("post created succesfully ");
    }
  });
};

module.exports.listall = async function (req, res) {
  let posts = await Post.find({})
    .sort("-createdAt")
    .populate("user")
    .populate({
      path: "comments",
      populate: {
        path: "user",
      },
    });

  let users = await User.find({});

  return res.json({
    posts: posts,
    all_users: users,
  });
};
