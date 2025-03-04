import React from "react";
import { FaUser, FaCheckCircle, FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaWheelchair, FaUtensils } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import "./BookingCoustmerDetails.css";
import dotIcon from "../../assets/customer_det_icon.jpg";

const BookingCustomerDetails = () => {
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
          <form className="customer-form">
            <label className="form-label">Select Travellers from your Favourites List</label>
            <select className="form-select">
              <option>Select One...</option>
            </select>

            <div className="form-row">
              <select className="form-select-title">
                <option>Mr.</option>
                <option>Ms.</option>
              </select>
              <input type="text" className="booking-form-input" placeholder="First Name *" required />
              <input type="text" className="booking-form-input" placeholder="Last Name *" required />
            </div>

            <label className="form-label">Select Your Gender*</label>
            <div className="gender-options">
              <input type="radio" id="male" name="gender" className="gender-radio" />
              <label htmlFor="male" className="gender-label">Male</label>
              <input type="radio" id="female" name="gender" className="gender-radio" />
              <label htmlFor="female" className="gender-label">Female</label>
            </div>

            <div className="form-row">
              <MdPhone className="input-icon" />
              <input type="tel" className="booking-form-input" placeholder="Mobile Number *" required />
            </div>

            <div className="form-row">
              <MdLocationOn className="input-icon" />
              <input type="text" className="booking-form-input" placeholder="Post Code *" required />
            </div>

            <div className="form-row">
              <MdEmail className="input-icon" />
              <input type="email" className="booking-form-input" placeholder="Email *" required />
            </div>

            <div className="form-row">
              <FaCalendarAlt className="input-icon" />
              <input type="date" className="booking-form-input" required />
            </div>

            <select className="form-select">
              <option>Select meal type (optional)</option>
            </select>

            <select className="form-select">
              <option>Request wheelchair (optional)</option>
            </select>
          </form>
        </div>

        {/* Booking Information Sidebar */}
        <aside className="booking-info">
          <div className="info-box">
            <h3 className="info-title">Booking Info</h3>
            <p className="info-text"><FaPlaneDeparture className="info-icon" /> Departure: 12-00 (DEK) - Dubai</p>
            <p className="info-text"><FaPlaneArrival className="info-icon" /> Arrival: 16-30 (DEK) - Istanbul</p>
          </div>

          <div className="info-box">
            <h3 className="info-title">Return Date</h3>
            <input type="date" className="booking-form-input" required />
          </div>

          <div className="info-box">
            <h3 className="info-title">Additional Services</h3>
            <label className="info-checkbox">
              <input type="checkbox" /> Travel Insurance (+$10)
            </label>
            <label className="info-checkbox">
              <input type="checkbox" /> Extra Baggage (+$20)
            </label>
            <label className="info-checkbox">
              <input type="checkbox" /> Priority Boarding (+$15)
            </label>
          </div>

          {/* Confirm Booking Button */}
          <div className="booking-footer">
            <button className="confirm-btn">Confirm Booking</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BookingCustomerDetails;