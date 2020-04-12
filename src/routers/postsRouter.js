const express = require("express");
const Post = require("../models/post");
const Author = require("../models/author");

const postsRouter = express.Router();

postsRouter
  .get("/", async (request, response) => {
    try {
      const posts = await Post.find({}).populate("author", "name");
      response.status(200).json({ posts });
    } catch (e) {
      console.error(e);
      response.status(500).send("Internal Server Error");
    }
  })
  .get("/:id", async (request, response) => {
    try {
      const postId = request.params.id;
      const post = await Post.findById(postId).populate("author", "name");
      response.status(200).json({ post });
    } catch (e) {
      console.error(e);
      response.status(500).send("Internal Server Error");
    }
  });

module.exports = postsRouter;
