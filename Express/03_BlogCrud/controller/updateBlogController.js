const Blog = require("../model/Blog");

const updateBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    console.log(id);
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Please provide id in param",
      });
    }
    const blog = await Blog.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Blog Updated successfully",
      blog,
    });
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: "Error Occured in Blog Updation",
      error,
    });
  }
};

module.exports = updateBlogController;
