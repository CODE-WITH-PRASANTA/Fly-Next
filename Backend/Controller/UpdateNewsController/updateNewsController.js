const Blog = require("../../Model/UpdateNews/updateNews");
const cloudinary = require("../../Config/cloudinaryConfig/cloudinaryConfig");
const fs = require("fs");


const createBlog = async (req, res) => {
    try {
        const { title, description, content, authorName, category, tags } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: "Image is required" });
        }

        const result = await cloudinary.uploader.upload(req.file.path, {
            folder: "blog_images",
        });

        fs.unlinkSync(req.file.path);

        const newBlog = new Blog({
            title,
            description,
            content,
            authorName,
            category,
            tags: tags.split(","), // Ensure it's an array
            imageUrl: result.secure_url,
        });

        await newBlog.save();
        res.status(201).json({ message: "Blog created successfully", blog: newBlog });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Fetch all blogs
const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 }); // Fetch blogs in descending order
        res.status(200).json(blogs);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Delete a blog
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        await blog.deleteOne();
        res.status(200).json({ message: "Blog deleted successfully" });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

// Fetch blog by ID
const getBlogById = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const updateBlog = async (req, res) => {
    try {
        console.log("Update request received:", req.body);  // Log request data

        const { title, description, content, authorName, category, tags } = req.body;
        const blog = await Blog.findById(req.params.id);

        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }

        // Ensure tags is always an array
        blog.title = title;
        blog.description = description;
        blog.content = content;
        blog.authorName = authorName;
        blog.category = category;
        blog.tags = Array.isArray(tags) ? tags : (typeof tags === "string" ? tags.split(",") : []);
        blog.updatedAt = new Date();

        await blog.save();
        res.status(200).json({ message: "Blog updated successfully", blog });

    } catch (error) {
        console.error("Error updating blog:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};


module.exports = { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };