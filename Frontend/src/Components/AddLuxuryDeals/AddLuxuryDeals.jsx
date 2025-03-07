import React, { useState, useEffect } from 'react';
import { FaPlane, FaHelicopter, FaAmbulance, FaPlaneDeparture, FaUpload, FaTrash } from 'react-icons/fa';
import './AddLuxuryDeals.css';
import axiosInstance from '../../Utils/Api';

const AddLuxuryDeals = () => {
  const categories = [
    { name: 'Business Jet', icon: <FaPlane /> },
    { name: 'Private Helicopter', icon: <FaHelicopter /> },
    { name: 'Air Ambulance', icon: <FaAmbulance /> },
    { name: 'Private Jet Charter', icon: <FaPlaneDeparture /> },
  ];

  const [images, setImages] = useState([]);
  const [luxuryData, setLuxuryData] = useState(
    categories.reduce((acc, category) => {
      acc[category.name] = { price: '', number: '', seats: '' };
      return acc;
    }, {})
  );

  // Fetch images from the backend on component mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axiosInstance.get('/images/images'); 
        setImages(response.data); // Axios returns data directly
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axiosInstance.post('/images/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.image) {
        setImages((prev) => [...prev, { _id: response.data.image._id, url: response.data.image.url }]);
      } else {
        console.error('Upload failed:', response.data.error || 'Unexpected error');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleImageDelete = async (imageId) => {
    try {
      await axiosInstance.delete(`/images/delete/${imageId}`);
      setImages((prev) => prev.filter((image) => image._id !== imageId));
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  const handleChange = (category, field, value) => {
    setLuxuryData((prev) => ({
      ...prev,
      [category]: { ...prev[category], [field]: value },
    }));
  };

  const handleUpdate = async (category) => {
    const { price, number, seats } = luxuryData[category];

    try {
      const response = await axiosInstance.post('/luxury-deals/add-or-update', {
        category,
        price,
        number,
        seats,
      });

      alert(response.data.message);
    } catch (error) {
      console.error('Error updating luxury deal:', error);
    }
  };

  return (
    <div className="add-luxury-container">
      <h2 className="add-luxury-header">Add Luxury Deals</h2>

      {/* Luxury Deals Grid */}
      <div className="add-luxury-grid">
        {categories.map(({ name, icon }) => (
          <div className="add-luxury-box" key={name}>
            <h3 className="add-luxury-title">
              {icon} <span>{name}</span>
            </h3>
            <div className="add-luxury-options">
              <input
                type="text"
                placeholder="Update Price"
                className="add-luxury-input"
                value={luxuryData[name].price}
                onChange={(e) => handleChange(name, 'price', e.target.value)}
              />
              <input
                type="text"
                placeholder="Update No."
                className="add-luxury-input"
                value={luxuryData[name].number}
                onChange={(e) => handleChange(name, 'number', e.target.value)}
              />
              <input
                type="text"
                placeholder="Update Seats"
                className="add-luxury-input"
                value={luxuryData[name].seats}
                onChange={(e) => handleChange(name, 'seats', e.target.value)}
              />
            </div>
            <button className="update-button" onClick={() => handleUpdate(name)}>
              Update
            </button>
          </div>
        ))}
      </div>

      {/* Media Upload Section */}
      <div className="add-luxury-media">
        <h3 className="add-luxury-media-title">
          <FaUpload /> Upload Media
        </h3>
        <label className="add-luxury-upload-btn">
          Choose Images
          <input type="file" accept="image/*" multiple onChange={handleImageUpload} hidden />
        </label>
        <div className="add-luxury-images">
          {images.map((image) => (
            <div key={image._id} className="uploaded-image-container">
              <img src={image.url} alt="Uploaded" className="add-luxury-image" />
              <button className="delete-btn" onClick={() => handleImageDelete(image._id)}>
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddLuxuryDeals;
