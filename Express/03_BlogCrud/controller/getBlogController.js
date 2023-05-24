const Blog = require("../model/Blog")

const getBlogController = async(req,res) =>{
  try {
    const {id} = req.params
    console.log(id)
    if(!id){
      return res.status(400).json({
        success:false,
        message: "Please provide id in param"
      })
    }
    const blog  = await Blog.findById(id)
    return res.status(200).json({
      success: true,
      message: "Blog fetch successfully",
      blog
    });
    
  } catch (error) {
    console.log(error.message);
    res.status(400).json({
      success: false,
      message: "Error Occured in Blog Fetch",
      error,
    });
  }
}

module.exports = getBlogController