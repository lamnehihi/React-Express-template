var mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
  title: String,
  content: String,
  cover: String
});

var Posts = mongoose.model("Posts", postSchema, "Posts");

module.exports = Posts;
