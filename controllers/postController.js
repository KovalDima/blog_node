import PostModel from "../models/Post.js";

const create = async (req, res) => {
  try {
    const { title, text, tags, imageUrl } = req.body;

    const doc = new PostModel({
      title,
      text,
      tags,
      imageUrl,
      user: req.userId,
    });

    const post = await doc.save();

    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Failed to create post",
    });
  }
};

const getAllPosts = (req, res) => {
  try {
  } catch (error) {}
};

export { create, getAllPosts };
