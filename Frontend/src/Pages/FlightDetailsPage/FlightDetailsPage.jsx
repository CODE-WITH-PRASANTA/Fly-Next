import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FlightDetailsPage.css';
import { useNavigate } from "react-router-dom";
import { FaPlane, FaClock, FaSuitcase, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import axiosInstance from '../../Utils/Api';


const FlightDetailsPage = () => {
  const [bookings, setBookings] = useState([]);
  const [isOpen, setIsOpen] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    fetchBookings();
  }, []);
  
  const fetchBookings = async () => {
    try {
      const response = await axiosInstance.get('/bookings/all'); // Base URL is already set in axiosInstance
      setBookings(response.data.data);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };
  

  const toggleDetails = (index) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <>
      <div className="Flight-Details-Container">
        <div className="Flight-Details-Header">
          <h1>Booking Details</h1>
          <p>Home &gt; <span>Booking List</span></p>
        </div>
      </div>

      <div className="Flight-Details-Content">
        {bookings.map((booking, index) => (
          <div key={booking._id} className="Flight-Details-Card">
            <div className="Flight-Details-Airline">
              <img src={booking.iconUrl} alt="Airline Logo" className="Flight-Details-Logo" />
              <h3 className="Flight-Details-Airline-Name">{booking.airline}</h3>
            </div>
            <p className="Flight-Details-Operated">Operated by {booking.operatedBy}</p>
            <div className="Flight-Details-Meta">
              <span className="Flight-Details-Date">{booking.date}</span>
              <span className="Flight-Details-Departure"><FaPlane /> {booking.time} - {booking.from}</span>
              <span className="Flight-Details-Duration"><FaClock /> {booking.flightDuration} | {booking.stopages} Stops</span>
            </div>
            <div className="Flight-Details-Price">
              <span className="Flight-Details-Amount">Price : ₹{booking.price} /--</span>
              <button
                className="Flight-Details-Select"
                onClick={() => navigate("/book-now")}
              >
                Select <FaPlane />
              </button>
            </div>
            <div className="Flight-Details-Toggle" onClick={() => toggleDetails(index)}>
              <span className="Flight-Details-Toggle-Text">
                {isOpen === index ? 'Hide' : 'Show'} Flight Details {isOpen === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>

            {isOpen === index && (
              <div className="Flight-Details-Expanded">
                <div className="Flight-Details-Segment">
                  <h4 className="Flight-Details-Segment-Date">{booking.date}</h4>
                  <p className="Flight-Details-Airports">{booking.from} - {booking.to}</p>
                  <div className="Flight-Details-Segment-Meta">
                    <span className="Flight-Details-Segment-Time">Departure: {booking.time}</span>
                    <span className="Flight-Details-Segment-Duration">Duration: {booking.flightDuration}</span>
                    <span className="Flight-Details-Segment-Arrival">Arrival: {booking.arrivalTime}</span>
                  </div>
                  <div className="Flight-Details-Description">
                    <p>
                      <b className="Flight-Details-Airline-Code">{booking.airlineNo}</b>
                      <br />
                      Operated by : {booking.operatedBy} || Flight No. : {booking.airlineNo} || Licence : {booking.licenceNo}
                      <br />
                      <FaSuitcase /> Baguage Allow : {booking.freeLuggage} luggage free
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default FlightDetailsPage;