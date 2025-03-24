import React, { useState, useEffect } from "react";
import axiosInstance from "../../Utils/Api"; // Update the path as per your project structure
import "./AdminUpdateContact.css";

const AdminUpdateContact = () => {
  const [contactDetails, setContactDetails] = useState({
    phone: "",
    email: "",
    address1: "",
    address2: "",
    address3: "",
  });

  const [savedContact, setSavedContact] = useState(null);
  const [editing, setEditing] = useState(false);
  const [contactId, setContactId] = useState(null);

  useEffect(() => {
    fetchContact();
  }, []);

  const fetchContact = async () => {
    try {
      const response = await axiosInstance.get("/contacts");
      if (response.data.length > 0) {
        const contact = response.data[0];
        setSavedContact(contact);
        setContactId(contact._id);
        setContactDetails(contact);
      }
    } catch (error) {
      console.error("Error fetching contact:", error);
    }
  };

  const handleChange = (e) => {
    setContactDetails({ ...contactDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editing) {
        const response = await axiosInstance.put(`/contacts/${contactId}`, contactDetails);
        setSavedContact(response.data.contact);
      } else {
        const response = await axiosInstance.post("/contacts", contactDetails);
        setSavedContact(response.data.contact);
        setContactId(response.data.contact._id);
      }
      setEditing(false);
      setContactDetails({ phone: "", email: "", address1: "", address2: "", address3: "" });
    } catch (error) {
      alert(error.response?.data?.message || "Error processing request");
    }
  };

  const handleEdit = () => {
    setContactDetails(savedContact);
    setEditing(true);
  };

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`/contacts/${contactId}`);
      setSavedContact(null);
      setContactId(null);
      setContactDetails({ phone: "", email: "", address1: "", address2: "", address3: "" });
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };
  return (
    <div className="admin-update-contact">
      <h2 className="admin-update-contact-title">Manage Website Contact Details</h2>
      <div className="admin-update-contact-container">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="admin-update-contact-form">
          <label className="admin-update-contact-label">Phone No.</label>
          <input type="text" name="phone" value={contactDetails.phone} onChange={handleChange} required className="admin-update-contact-input" maxLength="10" />

          <label className="admin-update-contact-label">Mail ID</label>
          <input type="email" name="email" value={contactDetails.email} onChange={handleChange} required className="admin-update-contact-input" />

          <label className="admin-update-contact-label">Address 1</label>
          <input type="text" name="address1" value={contactDetails.address1} onChange={handleChange} required className="admin-update-contact-input" />

          <label className="admin-update-contact-label">Address 2</label>
          <input type="text" name="address2" value={contactDetails.address2} onChange={handleChange} className="admin-update-contact-input" />

          <label className="admin-update-contact-label">Address 3</label>
          <input type="text" name="address3" value={contactDetails.address3} onChange={handleChange} className="admin-update-contact-input" />

          <button type="submit" className="admin-update-contact-submit-btn">{editing ? "Update" : "Submit"}</button>
        </form>

        {/* Display Contact Details */}
        <div className="admin-update-contact-saved">
          <h3 className="admin-update-contact-saved-title">Saved Contact Details</h3>
          {savedContact ? (
            <div className="admin-update-contact-card">
              <p><strong>Phone:</strong> {savedContact.phone}</p>
              <p><strong>Email:</strong> {savedContact.email}</p>
              <p><strong>Address 1:</strong> {savedContact.address1}</p>
              <p><strong>Address 2:</strong> {savedContact.address2}</p>
              <p><strong>Address 3:</strong> {savedContact.address3}</p>
              <div className="admin-update-contact-actions">
                <button onClick={handleEdit} className="admin-update-contact-edit-btn">Edit</button>
                <button onClick={handleDelete} className="admin-update-contact-delete-btn">Delete</button>
              </div>
            </div>
          ) : (
            <p className="admin-update-contact-no-data">No contact details added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminUpdateContact;
