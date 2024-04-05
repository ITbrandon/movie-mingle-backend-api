import Post from "../models/post.model.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post Not Found" });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  try {
    if (!req.body.title || !req.body.content) {
      return res
        .status(404)
        .json({ message: "Please Fill All Required Fields" });
    }

    const post = await Post.create(req.body);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndUpdate(id, req.body);

    if (!post) {
      return res.status(404).json({ message: "Post Not Found" });
    }

    const updatedPost = await Post.findById(id);
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);

    if (!post) {
      return res.status(404).json({ message: "Post Not Found" });
    }

    res.status(200).json({ message: "Post Successfully Deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
