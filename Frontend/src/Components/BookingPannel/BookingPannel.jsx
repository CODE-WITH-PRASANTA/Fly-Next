import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import { FaPlaneDeparture } from "react-icons/fa";
import "./BookingPannel.css";
import axiosInstance from '../../Utils/Api';



const BookingPannel = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [locations, setLocations] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  
  const navigate = useNavigate(); // Initialize useNavigate

  
  useEffect(() => {
    axiosInstance
      .get('/bookings/all') // Use axiosInstance
      .then((response) => {
        if (response.data.success) {
          const uniqueFrom = [...new Set(response.data.data.map((item) => item.from))];
          const uniqueTo = [...new Set(response.data.data.map((item) => item.to))];
          setLocations({ from: uniqueFrom, to: uniqueTo });
        }
      })
      .catch((error) => console.error('Error fetching locations:', error));
  }, []);

  
  const handleBooking = () => {
    navigate("/book-now", {
      state: {
        from,
        to,
        adults,
        children,
        departureDate: document.getElementById("departure-date").value,
        returnDate: document.getElementById("return-date").value,
      },
    });
  };

  return (
    <div className="booking-pannel-container">
      <div className="booking-overlay"></div>
      <div className="booking-content-wrapper">
        <h2 className="booking-title">FLY<span>NEXT</span> BOOK</h2>
        <h1 className="booking-subtitle">Book A Personal Flight & Helicopter</h1>
        <div className="booking-form-wrapper">
          {/* From Field */}
          <div className="form-group">
            <label htmlFor="from" className="form-label">From</label>
            <select id="from" className="form-control" value={from} onChange={(e) => setFrom(e.target.value)}>
              <option value="">Select Departure</option>
              {locations.from?.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>

          {/* To Field */}
          <div className="form-group">
            <label htmlFor="to" className="form-label">To</label>
            <select id="to" className="form-control" value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="">Select Destination</option>
              {locations.to?.map((location, index) => (
                <option key={index} value={location}>{location}</option>
              ))}
            </select>
          </div>

          {/* Departure Date */}
          <div className="form-group">
            <label htmlFor="departure-date" className="form-label">Departure Date</label>
            <input type="date" id="departure-date" className="form-control" />
          </div>

          {/* Return Date */}
          <div className="form-group">
            <label htmlFor="return-date" className="form-label">Return Date (Optional)</label>
            <input type="date" id="return-date" className="form-control" />
          </div>

          {/* Passenger Section */}
          <div className="form-group passenger-group">
            <label className="form-label">Passengers</label>
            <div className="passenger-controls-wrapper">
              {/* Adults */}
              <div className="passenger-type">
                <span className="passenger-label">Adults</span>
                <div className="passenger-controls">
                  <button className="passenger-btn" onClick={() => setAdults(adults > 0 ? adults - 1 : 0)}>-</button>
                  <input type="text" className="passenger-input" value={adults} readOnly />
                  <button className="passenger-btn" onClick={() => setAdults(adults + 1)}>+</button>
                </div>
              </div>

              {/* Children */}
              <div className="passenger-type">
                <span className="passenger-label">Children</span>
                <div className="passenger-controls">
                  <button className="passenger-btn" onClick={() => setChildren(children > 0 ? children - 1 : 0)}>-</button>
                  <input type="text" className="passenger-input" value={children} readOnly />
                  <button className="passenger-btn" onClick={() => setChildren(children + 1)}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <button className="booking-btn" onClick={handleBooking}>
          <FaPlaneDeparture className="booking-pannel-icon" />
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingPannel;
