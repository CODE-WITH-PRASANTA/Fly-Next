const express = require("express");
const { createBlog, getAllBlogs, getBlogById , updateBlog , deleteBlog } = require("../../Controller/BlogController/blogController");
const upload = require("../../Config/Multer-config/Multer-config");

const router = express.Router();

router.post("/create", upload.single("image"), createBlog);
router.get("/getblogs", getAllBlogs);
router.get("/blogs/:id", getBlogById);
router.put("/blogs/:id", updateBlog);
router.delete("/blogs/:id", deleteBlog);



module.exports = router;
