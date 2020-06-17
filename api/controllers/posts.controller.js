var Posts = require("../models/posts.model");

module.exports.index = async function(req, res, next) {
  var posts = await Posts.find();
  
  res.send(posts);
}
