import { useState, useEffect } from "react";
import axios from "axios";
import "./BlogForm.css";
import axiosInstance from '../../Utils/Api';


const BlogForm = ({ onFormDataChange }) => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [postingDate, setPostingDate] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]); // ✅ Moved to correct place

  
  useEffect(() => {
    // Fetch categories from backend
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get('/categories/all'); // Use axiosInstance
        setCategories(response.data); // Assuming response.data is an array of categories
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleAddTag = () => {
    if (newTag.trim() && !tags.includes(newTag.trim())) {
      const updatedTags = [...tags, newTag.trim()];
      setTags(updatedTags);
      setNewTag("");
      onFormDataChange({
        authorName,
        postingDate,
        blogDescription,
        category,
        tags: updatedTags,
      });
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    onFormDataChange({
      authorName,
      postingDate,
      blogDescription,
      category,
      tags: updatedTags,
    });
  };

  const handleInputChange = () => {
    onFormDataChange({
      authorName,
      postingDate,
      blogDescription,
      category,
      tags,
    });
  };

  return (
    <div className="Blog-create-wrapper">
      <div className="blog-editing-sec-container">
        <form className="blog-editing-sec-form">
          <div className="blog-editing-sec-form-group">
            <label htmlFor="authorName" className="blog-editing-sec-label">
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              className="blog-editing-sec-input"
              placeholder="Enter Author Name"
              value={authorName}
              onChange={(e) => {
                setAuthorName(e.target.value);
                handleInputChange();
              }}
            />
          </div>

          <div className="blog-editing-sec-form-group">
            <label htmlFor="postingDate" className="blog-editing-sec-label">
              Posting Date
            </label>
            <input
              type="date"
              id="postingDate"
              className="blog-editing-sec-input"
              value={postingDate}
              onChange={(e) => {
                setPostingDate(e.target.value);
                handleInputChange();
              }}
            />
          </div>

          <div className="blog-editing-sec-form-group">
            <label htmlFor="blogDescription" className="blog-editing-sec-label">
              Blog Description
            </label>
            <textarea
              id="blogDescription"
              className="blog-editing-sec-textarea"
              placeholder="Enter Blog Description"
              value={blogDescription}
              onChange={(e) => {
                setBlogDescription(e.target.value);
                handleInputChange();
              }}
            ></textarea>
          </div>

          <div className="blog-editing-sec-form-group">
            <label htmlFor="categories" className="blog-editing-sec-label">
              Categories
            </label>
            <select
              id="categories"
              className="blog-editing-sec-select"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                handleInputChange();
              }}
            >
              <option value="">Select a Category</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <div className="blog-editing-sec-form-group blog-editing-sec-tags">
            <label className="blog-editing-sec-label">Tags</label>
            <div className="blog-editing-sec-tags-input">
              <input
                type="text"
                className="blog-editing-sec-input"
                placeholder="Enter a tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
              <button
                type="button"
                className="blog-editing-sec-add-tag-btn"
                onClick={handleAddTag}
              >
                Add
              </button>
            </div>
            <div className="blog-editing-sec-tags-list">
              {tags.map((tag, index) => (
                <div key={index} className="blog-editing-sec-tag">
                  {tag}
                  <button
                    type="button"
                    className="blog-editing-sec-remove-tag-btn"
                    onClick={() => handleRemoveTag(tag)}
                  >
                    ✖
                  </button>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogForm;
