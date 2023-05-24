const Blog = require("../model/Blog");

const getBlogsController = async (req, res) => {
  try {
    const allBlogs = await Blog.find();

    if (!allBlogs || allBlogs.length === 0) {
      return res.status(400).json({
        success: false,
        message: "No Blog Found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Blog fetch successfully",
      Blogs: allBlogs,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      success: false,
      message: "Error Occured in Blog Fetch",
      error,
    });
  }
};

module.exports = getBlogsController;
