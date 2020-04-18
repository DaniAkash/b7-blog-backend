const express = require("express");
const Author = require("../models/author");

const authorRouter = express.Router();

authorRouter.get("/", async (request, response) => {
  try {
    const authors = await Author.find({});
    response.status(200).json({ authors });
  } catch (e) {
    console.error(e);
    response.status(500).send("Internal Server Error");
  }
});

module.exports = authorRouter;
