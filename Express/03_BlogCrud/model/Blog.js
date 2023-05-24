const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is missing"],
    trim: true,
  },
  description: {
    type: String,
    required: [(true, "Description can't be empty")],
  },
},{
  timestamps: true
});

module.exports = mongoose.model("Blog", BlogSchema)