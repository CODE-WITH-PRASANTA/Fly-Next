import React, { useState } from "react";
import axios from "axios";
import { FaUser, FaCheckCircle, FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaWheelchair, FaUtensils } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import "./BookingCoustmerDetails.css";
import dotIcon from "../../assets/customer_det_icon.jpg";
import { useLocation } from "react-router-dom";
import axiosInstance from '../../Utils/Api';



const BookingCustomerDetails = () => {
  const location = useLocation();
  const bookingData = location.state || {}; // Ensure bookingData is defined before using it
  
  const [formData, setFormData] = useState({
      travelerType: "Me",
      title: "Mr.",
      firstName: "",
      lastName: "",
      gender: "",
      phone: "",
      postCode: "",
      email: "",
      birthDate: "",
      mealPreference: "No",
      wheelchairRequest: "No",
      from: bookingData.from || "", 
      to: bookingData.to || "",
      departureDate: bookingData.departureDate || "",
      returnDate: bookingData.returnDate || "",
      adults: bookingData.adults || 1,
      children: bookingData.children || 0,
      travelInsurance: false,
      extraBaggage: false,
      priorityBoarding: false,
  });
  

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post('/travelbookings/create', formData); // Use axiosInstance
      alert(response.data.message);
    } catch (error) {
      console.error('Error submitting form', error);
    }
  };
  

  return (
    <div className="booking-container">
     {/* Header Section */}
     <div className="booking-header">
        <img src={dotIcon} alt="logo" className="booking-logo" />
        <h2 className="booking-title">Customer Details: Please fill in with valid information.</h2>
        <div className="progress-bar">
          <div className="step active">
            <FaUser className="step-icon" />
            <span className="step-label">Guest Information</span>
          </div>
          <div className="step">
            <FaCheckCircle className="step-icon" />
            <span className="step-label">Confirmation</span>
          </div>
        </div>
      </div>


      {/* Main Content Section */}
      <div className="booking-main">
        {/* Booking Form */}
        <div className="booking-form">
          <div className="form-header">Passenger 1: Ms (Primary Contact)</div>
          <form className="customer-form"  onSubmit={handleSubmit}>
            <label className="form-label">Who Have To travel ?</label>
            <select name="travelerType" value={formData.travelerType} onChange={handleChange} className="form-select">
              <option>Me</option>
              <option>Family</option>
              <option>Other</option>
            </select>

            <div className="form-row">
              <select name="title" value={formData.title} onChange={handleChange} className="form-select-title">
                <option>Mr.</option>
                <option>Ms.</option>
              </select>


              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="booking-form-input" placeholder="First Name *" required />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="booking-form-input" placeholder="Last Name *" required />
            </div>

            <label className="form-label">Select Your Gender*</label>
            <div className="gender-options">
            <input type="radio" id="male"  name="gender"  value="Male" checked={formData.gender === "Male"} onChange={handleChange} className="gender-radio" />
              <label htmlFor="male"  className="gender-label">Male</label>
              <input type="radio" id="female" name="gender"  value="Female" checked={formData.gender === "Female"} onChange={handleChange} className="gender-radio" />
              <label htmlFor="female" className="gender-label">Female</label>
            </div>

            <div className="form-row">
              <MdPhone className="input-icon" />
              <input type="tel" name="phone" className="booking-form-input" value={formData.phone} onChange={handleChange} placeholder="Mobile Number *" required />
            </div>

            <div className="form-row">
              <MdLocationOn className="input-icon" />
              <input type="text" name="postCode" value={formData.postCode} onChange={handleChange} className="booking-form-input" placeholder="Post Code *" required />
            </div>

            <div className="form-row">
              <MdEmail className="input-icon" />
              <input type="email"  name="email" value={formData.email} onChange={handleChange} className="booking-form-input" placeholder="Email *" required />
            </div>

            <div className="form-row">
              <FaCalendarAlt className="input-icon" />
              <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} className="booking-form-input" required />
            </div>

            <select name="mealPreference" value={formData.mealPreference} onChange={handleChange} className="form-select">
              <option>Select meal type (optional)</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <select name="wheelchairRequest" value={formData.wheelchairRequest} onChange={handleChange} className="form-select">
              <option>Request wheelchair (optional)</option>
              <option>Yes</option>
              <option>No</option>
            </select>

            <div className="booking-footer">
          <button className="confirm-btn" type="submit">Confirm Booking</button>
          </div>
          
          </form>
        </div>

        {/* Booking Information Sidebar */}
        <aside className="booking-info">
        <div className="info-box">
          <h3 className="info-title">Booking Information</h3>
          
          <p className="info-text">
            <FaPlaneDeparture className="info-icon" /> 
            <strong>Departure: </strong> {bookingData.from} 
             <span> ({bookingData.departureDate})</span>
          </p>

          <p className="info-text">
            <FaPlaneArrival className="info-icon" /> 
            <strong>Destination:</strong> {bookingData.to}
          </p>

          <p className="info-text">
            <FaUser className="info-icon" /> 
            <strong>Adults:</strong> {bookingData.adults} ||  
            <FaUser className="info-icon" style={{ color: "#ff9800" }} /> 
            <strong>Children:</strong> {bookingData.children}
          </p>

          <p className="info-text">
            <FaCalendarAlt className="info-icon" /> 
            <strong>Return Date:</strong> {bookingData.returnDate || "N/A"}
          </p>
        </div>


          <div className="info-box">
            <h3 className="info-title">Return Date</h3>
            <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange}  className="booking-form-input" required />
          </div>

          <div className="info-box">
            <h3 className="info-title" >Additional Services</h3>
            <label className="info-checkbox">
            <input type="checkbox" name="travelInsurance" checked={formData.travelInsurance} onChange={handleChange} />
            Travel Insurance (+$10)
            </label>
            <label className="info-checkbox">
            <input type="checkbox" name="extraBaggage" checked={formData.extraBaggage} onChange={handleChange} /> Extra Baggage (+$20)
            </label>
            <label className="info-checkbox">
            <input type="checkbox" name="priorityBoarding" checked={formData.priorityBoarding} onChange={handleChange} /> Priority Boarding (+$15)
            </label>
          </div>

          {/* Confirm Booking Button */}
        
        </aside>
      </div>



    </div>
  );
};

export default BookingCustomerDetails;