import React, { Suspense, lazy, useState } from "react";
import "./CreateUpdate.css";
import axios from "axios";
import UpdateForm from "../UpdateForm/UpdateForm";
import axiosInstance from '../../Utils/Api';


// Lazy load TinyMCE Editor for better performance
const Editor = lazy(() => import("@tinymce/tinymce-react").then((module) => ({ default: module.Editor })));

const CreateUpdate = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    authorName: "",
    category: "",
    tags: [],
  });
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Handle file drop for drag and drop image upload
  const handleDrop = (event) => {
    event.preventDefault();
    const uploadedFile = event.dataTransfer.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setPreviewUrl(URL.createObjectURL(uploadedFile));
    }
  };

  // Handle file selection via input field
  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setPreviewUrl(URL.createObjectURL(uploadedFile));
    }
  };

  const handleFormData = (data) => {
    setFormData((prevData) => ({
      ...prevData,
      ...data, // Merge new data with existing formData
    }));
  };
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting Form Data:", formData); // Debugging Step
    setIsLoading(true);
    setError(null);
    setSuccess(false);
  
    if (!file) {
      setError("Please select an image.");
      setIsLoading(false);
      return;
    }
  
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title || "Untitled");
    formDataToSend.append("description", formData.description || "No description provided");
    formDataToSend.append("content", formData.content || "");
    formDataToSend.append("authorName", formData.authorName || "Anonymous");
    formDataToSend.append("category", formData.category.trim() ? formData.category : "Uncategorized");
    formDataToSend.append("tags", formData.tags.length > 0 ? formData.tags.join(",") : "General");
    formDataToSend.append("image", file);
  
    try {
      const response = await axiosInstance.post("/updatenews/create", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      if (response.status === 201) {
        console.log("News successfully posted:", response.data);
        setSuccess(true);
      }
    } catch (error) {
      console.error("Error submitting news:", error.response?.data);
      setError(error.response?.data?.message || "Failed to post news.");
    } finally {
      setIsLoading(false);
    }
  };
  
  

  return (
    <>
      <div className="UpdateForm-create-wrapper">
        <div className="UpdateForm-create-container">
          <h2 className="UpdateForm-create-title">Create a News</h2>

          <div className="UpdateForm-create-breadcrumb">
            <span className="UpdateForm-create-link">Dashboard</span> &gt;
            <span className="UpdateForm-create-link"> News</span> &gt;
            <span className="UpdateForm-create-current"> Create</span>
          </div>

          <div className="UpdateForm-create-section">
            <h3 className="UpdateForm-create-subtitle">Post Details</h3>
            <p className="UpdateForm-create-description">
              Add a title, short description, and a featured image.
            </p>

            <div className="UpdateForm-create-field">
              <label className="UpdateForm-create-label">Post Title</label>
              <input
                type="text"
                className="UpdateForm-create-input"
                placeholder="Enter post title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>

            <div className="UpdateForm-create-field">
              <label className="UpdateForm-create-label">Description</label>
              <textarea
                className="UpdateForm-create-textarea"
                placeholder="Enter a short description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              ></textarea>
            </div>
          </div>

          <div className="UpdateForm-create-section">
            <h3 className="UpdateForm-create-subtitle">Post Content</h3>
            <div className="UpdateForm-create-editor">
              <Suspense fallback={<div>Loading editor...</div>}>
                <Editor
                  apiKey="8sl9chfze59agsxpq14ietvz7vwda392prc4ofiuwpxb9u42"
                  init={{
                    plugins: [
                      "anchor",
                      "autolink",
                      "charmap",
                      "codesample",
                      "emoticons",
                      "image",
                      "link",
                      "lists",
                      "media",
                      "searchreplace",
                      "table",
                      "visualblocks",
                      "wordcount",
                      "paste",
                      "textcolor",
                    ],
                    toolbar:
                      "undo redo | bold italic underline | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image media ",
                    menubar: false,
                    branding: false,
                    height: 400,
                    content_style: "body { font-family:Arial, sans-serif; font-size:14px; }",
                    statusbar: false,
                    remove_linebreaks: false,
                  }}
                  initialValue="Write your content here..."
                  onEditorChange={(content) =>
                    setFormData((prevData) => ({ ...prevData, content }))
                  }
                  
                />
              </Suspense>
            </div>
          </div>
        </div>
      </div>

      <div className="UpdateForm-create-wrapper">
        <div className="UpdateForm-create-upload-container">
          <label className="UpdateForm-create-upload-label">Cover</label>
          <div
            className="UpdateForm-create-upload-box"
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            {previewUrl ? (
              <div className="UpdateForm-create-upload-preview">
                <img src={previewUrl} alt="Preview" className="UpdateForm-create-upload-preview-image" />
              </div>
            ) : (
              <div className="UpdateForm-create-upload-placeholder">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3616/3616729.png"
                  alt="Upload Illustration"
                  className="UpdateForm-create-upload-icon"
                />
                <p className="UpdateForm-create-upload-text">Drop or select file</p>
              </div>
            )}
            <input
              type="file"
              className="UpdateForm-create-upload-input"
              onChange={handleFileChange}
              accept="image/*"
            />
          </div>
        </div>
      </div>

      <UpdateForm onFormDataChange={handleFormData} />

      <div className="UpdateForm-create-wrapper">
        <button
          type="submit"
          className="UpdateForm-editing-sec-submit-btn"
          onClick={handleFormSubmit}
          disabled={isLoading}
        >
          {isLoading ? "Publishing..." : "PUBLISH"}
        </button>

        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">News Updated successfully!</div>}
      </div>
    </>
  );
};

export default CreateUpdate;
