const Blog = require('../model/Blog')

const deleteBlogController = async (req,res) => {
  try {
    const {id} = req.params
    console.log(id)
    if(!id){
      return res.status(400).json({
        success:false,
        message: "Please provide id in param"
      })
    }
    const blog  = await Blog.findByIdAndDelete(id)
    return res.status(200).json({
      success: true,
      message: "Blog delete successful",
      blog
    });
    
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: "Error Occured in Blog Deletion",
      error,
    });
  }
}

module.exports = deleteBlogController