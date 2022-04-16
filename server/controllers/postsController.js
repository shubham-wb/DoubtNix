const Post = require("../models/post");
module.exports.create = (req, res) => {
  console.log(req.body);
  Post.create(req.body, (err, post) => {
    if (err) {
      console.log("cannot create post ", err);
    } else {
      console.log("post created succesfully ");
    }
  });
};
