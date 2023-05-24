const Blog = require("../model/Blog");

const createBlogController = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({
        success: false,
        message: "Titile or Description is empty",
      });
    }

    const blog = await Blog.create({ title, description });

    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      blog,
    });
    
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: "Error Occured in Blog Creation",
      error,
    });
  }
};

module.exports = createBlogController