import React, { useState } from 'react';
import './FlightDetailsPage.css';
import bookingIcon from '../../assets/booking_icon01.jpg';
import { FaPlane } from 'react-icons/fa';

const FlightDetailsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (

    <>

<div className="flight-detail-container">
      <div className="flight-detail-header">
        <h1> Booking detail's</h1>
        <p>Home &gt; <span>Booking-list</span></p>
      </div>
    </div>

    <div className="flight-details-container">
      <div className="flight-summary">
        <div className="airline-logo">
          <img src={bookingIcon} alt="Airline Logo" />
        </div>
        <div className="flight-info">
          <h3 className="airline-name">Etihad Airway</h3>
          <p className="operated-by">Operated by Emirates</p>
          <div className="flight-meta">
            <div className="flight-date">Thursday, Jun 16</div>
            <div className="departure-time">12:55 DAC</div>
            <div className="flight-duration">22h | 2 Stops</div>
          </div>
        </div>
        <div className="flight-price">
          <span className="price-amount">US$ 1,056.40</span>
          <button className="select-button">
            Select <FaPlane />
          </button>
        </div>
      </div>

      <div className="toggle-details" onClick={toggleDetails}>
        <span className="toggle-text">{isOpen ? 'Hide' : 'Show'} Flight Details</span>
      </div>

      <div className={`flight-details ${isOpen
        ? 'details-open' : 'details-closed'}`}>
        <div className="segment">
          <h4 className="segment-date">Thursday, Jun 16</h4>
          <p className="airport">IST - Istanbul Airport, Turkish</p>
          <div className="segment-details">
            <span className="segment-time">Thursday, Jun 16 - 23:20</span>
            <span className="flight-duration">22h 50m</span>
            <span className="arrival-time">Friday, Jun 17 - 03:20</span>
          </div>
          <div className="flight-description">
            <p>
              <b className="airline-code">Tpm Line</b>
              <br />
              Operated by Airlines | Flight EK585 | Aircraft BOEING 777-300ER
              <br />
              Adult(s): 25KG luggage free
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default FlightDetailsPage;
