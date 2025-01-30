import React, { useState } from 'react';
import { FaPlaneDeparture } from 'react-icons/fa'; // Importing flight icon
import './BookingPannel.css';

const BookingPannel = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const incrementAdults = () => setAdults(adults + 1);
  const decrementAdults = () => setAdults(adults > 0 ? adults - 1 : 0);

  const incrementChildren = () => setChildren(children + 1);
  const decrementChildren = () => setChildren(children > 0 ? children - 1 : 0);

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
            <select id="from" className="form-control">
              <option>Dhaka</option>
              <option>New York</option>
              <option>Tokyo</option>
            </select>
          </div>

          {/* To Field */}
          <div className="form-group">
            <label htmlFor="to" className="form-label">To</label>
            <select id="to" className="form-control">
              <option>London</option>
              <option>Paris</option>
              <option>Sydney</option>
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
                  <button className="passenger-btn" onClick={decrementAdults}>-</button>
                  <input type="text" className="passenger-input" value={adults} readOnly />
                  <button className="passenger-btn" onClick={incrementAdults}>+</button>
                </div>
              </div>

              {/* Children */}
              <div className="passenger-type">
                <span className="passenger-label">Children</span>
                <div className="passenger-controls">
                  <button className="passenger-btn" onClick={decrementChildren}>-</button>
                  <input type="text" className="passenger-input" value={children} readOnly />
                  <button className="passenger-btn" onClick={incrementChildren}>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Book Now Button */}
        <button className="booking-btn">
          <FaPlaneDeparture className="booking-icon" />
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookingPannel;
