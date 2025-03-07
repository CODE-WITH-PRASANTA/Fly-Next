import { useState, useEffect } from "react";
import axios from "axios";
import "./UpdateForm.css";
import axiosInstance from '../../Utils/Api';


const UpdateForm = ({ onFormDataChange }) => {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [postingDate, setPostingDate] = useState("");
  const [blogDescription, setBlogDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]); // ✅ Moved to correct place
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axiosInstance.get("/categories/all");
        setCategories(response.data.data || response.data); // Ensure correct data extraction
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
  
    fetchCategories();
  }, []); // Runs only on mount

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
    <div className="UpdateForm-create-wrapper">
      <div className="UpdateForm-editing-sec-container">
        <form className="UpdateForm-editing-sec-form">
          <div className="UpdateForm-editing-sec-form-group">
            <label htmlFor="authorName" className="UpdateForm-editing-sec-label">
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              className="UpdateForm-editing-sec-input"
              placeholder="Enter Author Name"
              value={authorName}
              onChange={(e) => {
                setAuthorName(e.target.value);
                handleInputChange();
              }}
            />
          </div>

          <div className="UpdateForm-editing-sec-form-group">
            <label htmlFor="postingDate" className="UpdateForm-editing-sec-label">
              Posting Date
            </label>
            <input
              type="date"
              id="postingDate"
              className="UpdateForm-editing-sec-input"
              value={postingDate}
              onChange={(e) => {
                setPostingDate(e.target.value);
                handleInputChange();
              }}
            />
          </div>

          <div className="UpdateForm-editing-sec-form-group">
            <label htmlFor="blogDescription" className="UpdateForm-editing-sec-label">
              News Description
            </label>
            <textarea
              id="blogDescription"
              className="UpdateForm-editing-sec-textarea"
              placeholder="Enter News Description"
              value={blogDescription}
              onChange={(e) => {
                setBlogDescription(e.target.value);
                handleInputChange();
              }}
            ></textarea>
          </div>

          <div className="UpdateForm-editing-sec-form-group">
            <label htmlFor="categories" className="UpdateForm-editing-sec-label">
              Categories
            </label>
            <select
              id="categories"
              className="UpdateForm-editing-sec-select"
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

          <div className="UpdateForm-editing-sec-form-group UpdateForm-editing-sec-tags">
            <label className="UpdateForm-editing-sec-label">Tags</label>
            <div className="UpdateForm-editing-sec-tags-input">
              <input
                type="text"
                className="UpdateForm-editing-sec-input"
                placeholder="Enter a tag"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
              />
              <button
                type="button"
                className="UpdateForm-editing-sec-add-tag-btn"
                onClick={handleAddTag}
              >
                Add
              </button>
            </div>
            <div className="UpdateForm-editing-sec-tags-list">
              {tags.map((tag, index) => (
                <div key={index} className="UpdateForm-editing-sec-tag">
                  {tag}
                  <button
                    type="button"
                    className="UpdateForm-editing-sec-remove-tag-btn"
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

export default UpdateForm;
