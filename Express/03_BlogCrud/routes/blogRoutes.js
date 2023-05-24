const express = require('express')
const router = express.Router()

const createBlogController = require('../controller/createBlogController')
const deleteBlogController = require('../controller/deleteBlogController')
const getBlogController = require('../controller/getBlogController')
const getBlogsController = require('../controller/getBlogsController')
const updateBlogController = require('../controller/updateBlogController')

router.post('/blog',createBlogController)
router.get("/blogs",getBlogsController)
router.get("/blog/:id",getBlogController)
router.put("/blog/:id",updateBlogController)
router.delete("/blog/:id",deleteBlogController)

module.exports = router