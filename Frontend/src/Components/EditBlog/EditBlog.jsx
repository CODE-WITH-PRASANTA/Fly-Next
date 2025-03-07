import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaTimes, FaCheck } from 'react-icons/fa';
import './EditBlog.css';
import axiosInstance from '../../Utils/Api';

const EditBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axiosInstance.get('/blogs/getblogs');
      setBlogs(response.data.map(blog => ({ ...blog, expanded: false }))); 
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axiosInstance.get('/categories/all');
      const data = await response.data;
      setCategories(data); // Categories should be an array of objects with "name" property
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const deleteBlog = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        await axiosInstance.delete(`/blogs/blogs/${id}`);
        setBlogs(blogs.filter(blog => blog._id !== id));
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    }
  };


  const updateBlog = async () => {
    console.log("Updating Blog with ID:", editingBlog._id);
    
    const updatedData = {
        title: editingBlog.title,
        description: editingBlog.description || "",
        content: editingBlog.content || "",
        authorName: editingBlog.authorName,
        category: editingBlog.category,
        tags: Array.isArray(editingBlog.tags) ? editingBlog.tags : editingBlog.tags.split(","),
        createdAt: editingBlog.createdAt,
    };

    try {
        const response = await axiosInstance.put(`/blogs/blogs/${editingBlog._id}`, updatedData);
        console.log("Blog updated successfully:", response.data);
    } catch (error) {
        console.error("Error updating blog:", error.response?.data || error.message);
    }
};

  

  const addCategory = async () => {
    if (newCategory.trim()) {
      try {
        const response = await axiosInstance.post('/categories/add', {
          name: newCategory
        });

        const data = await response.data;

        if (response.status === 200) {
          setCategories([...categories, data.category]); 
          setNewCategory("");
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.error("Error adding category:", error);
      }
    }
  };

  const startEditing = (blog) => {
    setEditingBlog(blog);
  };

  const filteredBlogs = selectedCategory === "All" ? blogs : blogs.filter(blog => blog.category === selectedCategory);
  return (
    <div className="manage-blog-container">
      {/* Blog Management Section */}
      <div className="manage-blog-table-wrapper">
        <h2 className="manage-blog-section-title">Blog Management</h2>
        <div className="manage-blog-category-filter">
          <label className="manage-blog-filter-label">Filter by Category:</label>
          <select className="manage-blog-category-select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="All">All</option>
            {categories.map((category, index) => (
              <option key={index} value={category.name}>{category.name}</option>
            ))}
          </select>
        </div>
        <table className="manage-blog-table">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Image</th>
              <th>Title</th>
              <th>Date</th>
              <th>Author</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBlogs.map((blog, index) => (
              <tr key={blog._id}>
                <td>{index + 1}</td>
                <td><img src={blog.imageUrl} alt={blog.title} className="manage-blog-thumbnail" /></td>
                <td>{blog.title}</td>
                <td>{blog.createdAt}</td>
                <td>{blog.authorName}</td>
                <td>{blog.category}</td>
                <td>
                  <button className="manage-blog-action-btn manage-blog-edit-btn" onClick={() => startEditing(blog)}><FaEdit /></button>
                  <button className="manage-blog-action-btn manage-blog-delete-btn" onClick={() => deleteBlog(blog._id)}><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

   {/* Edit Blog Section */}
{editingBlog && (
  <div className="manage-blog-edit-form">
    <h2 className="manage-blog-section-title">Edit Blog Post</h2>
    <input 
      type="text" 
      className="manage-blog-input-field"
      value={editingBlog.title} 
      onChange={(e) => setEditingBlog({ ...editingBlog, title: e.target.value })} 
      placeholder="Blog Title"
    />
    <select 
      className="manage-blog-input-field"
      value={editingBlog.category} 
      onChange={(e) => setEditingBlog({ ...editingBlog, category: e.target.value })}
    >
      {categories.map((category, index) => (
        <option key={index} value={category.name}>{category.name}</option>
      ))}
    </select>
    <input 
      type="text" 
      className="manage-blog-input-field"
      value={editingBlog.authorName} 
      onChange={(e) => setEditingBlog({ ...editingBlog, authorName: e.target.value })} 
      placeholder="Author Name"
    />
    <input 
      type="date" 
      className="manage-blog-input-field"
      value={editingBlog.createdAt} 
      onChange={(e) => setEditingBlog({ ...editingBlog, createdAt: e.target.value })} 
    />
    <button onClick={updateBlog} className="manage-blog-btn manage-blog-save-btn">
      <FaCheck /> Save
    </button>
    <button onClick={() => setEditingBlog(null)} className="manage-blog-btn manage-blog-cancel-btn">
      <FaTimes /> Cancel
    </button>
  </div>
)}

      {/* Category Management */}
      <aside className="manage-blog-category-section">
        <h2 className="manage-blog-section-title">Manage Categories</h2>
        <ul className="manage-blog-category-list">
          {categories.map((category, index) => (
            <li key={index} className="manage-blog-category-item">{category.name}</li>
          ))}
        </ul>
        <div className="manage-blog-add-category-wrapper">
          <input 
            type="text" 
            className="manage-blog-input-field"
            placeholder="New Category" 
            value={newCategory} 
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button onClick={addCategory} className="manage-blog-btn manage-blog-add-category-btn">
            <FaPlus /> Category
          </button>
        </div>
      </aside>


      
    </div>
  );
};

export default EditBlog;
