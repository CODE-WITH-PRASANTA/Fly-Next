import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPlane, FaClock, FaMapMarkerAlt, FaRupeeSign, FaSuitcase } from "react-icons/fa";
import "./AddBookingDeatils.css";
import axiosInstance from '../../Utils/Api';


const AddBookingDetails = () => {
  const [timeFormat, setTimeFormat] = useState("AM");
  const [formData, setFormData] = useState({
    airline: "",
    operatedBy: "",
    date: "",
    time: "",
    arrivalTime: "",
    stopages: "",
    from: "",
    to: "",
    price: "",
    airlineNo: "",
    licenceNo: "",
    freeLuggage: "",
    flightDuration: "",
    seatClass: "Economy",
    icon: null,
  });
  const [bookings, setBookings] = useState([]);

  // Fetch all bookings from backend
  useEffect(() => {
    axiosInstance
      .get("/bookings/all")
      .then((response) => {
        setBookings(response.data.data);
      })
      .catch((error) => console.error("Error fetching bookings:", error));
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    if (e.target.name === "icon") {
      setFormData({ ...formData, icon: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }

    try {
      const response = await axiosInstance.post("/bookings/add", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      console.log("Booking Response:", response.data); // Debugging log
      alert("Booking added successfully!");
      setBookings([...bookings, response.data.data]);

      setFormData({
        airline: "",
        operatedBy: "",
        date: "",
        time: "",
        arrivalTime: "",
        stopages: "",
        from: "",
        to: "",
        price: "",
        airlineNo: "",
        licenceNo: "",
        freeLuggage: "",
        flightDuration: "",
        seatClass: "Economy",
        icon: null,
      });
    } catch (error) {
      console.error("Error adding booking:", error.response?.data || error.message);
    }
  };
  

  return (
    <div className="add-booking-container">


     <form className="add-booking-form-grid" onSubmit={handleSubmit}>
  <div className="add-booking-form-column">
    <label className="add-booking-label">
      Upload Icon:
      <input type="file" name="booking-icon" className="add-booking-input" onChange={handleChange} />
    </label>
    <label className="add-booking-label">
      <FaPlane className="booking-icon" /> Name Of the Airline:
      <input type="text" name="airline" className="add-booking-input" value={formData.airline} onChange={handleChange} />
    </label>
    <label className="add-booking-label">
      Operated By:
      <input type="text" name="operatedBy" className="add-booking-input" value={formData.operatedBy} onChange={handleChange} />
    </label>
    <label className="add-booking-label">
      Available Date:
      <input type="date" name="date" className="add-booking-input" value={formData.date} onChange={handleChange} />
    </label>
    <label className="add-booking-label">
      <FaClock className="booking-icon" /> Available Time:
      <div className="time-picker">
        <input type="time" name="time" className="add-booking-input" value={formData.time} onChange={handleChange} />
        <select className="am-pm-selector" value={timeFormat} onChange={(e) => setTimeFormat(e.target.value)}>
          <option value="AM">AM</option>
          <option value="PM">PM</option>
        </select>
      </div>
    </label>
    <label className="add-booking-label">
      <FaClock className="booking-icon" /> Time To Arrive:
      <input type="time" name="arrivalTime" className="add-booking-input" value={formData.arrivalTime} onChange={handleChange} />
    </label>
    <label className="add-booking-label">
      Stopages:
      <input type="text" name="stopages" className="add-booking-input" value={formData.stopages} onChange={handleChange} />
    </label>
  </div>
  <div className="add-booking-form-column">
    <label className="add-booking-label">
      Airline No:
      <input type="text" name="airlineNo" className="add-booking-input" value={formData.airlineNo} onChange={handleChange} />
    </label>
    <label className="add-booking-label">
      Licence No:
      <input type="text" name="licenceNo" className="add-booking-input" value={formData.licenceNo} onChange={handleChange} />
    </label>
    <label className="add-booking-label">
      <FaSuitcase className="booking-icon" /> Free Luggage:
      <input type="text" name="freeLuggage" className="add-booking-input" value={formData.freeLuggage} onChange={handleChange} />
    </label>
    <label className="add-booking-label">
      <FaMapMarkerAlt className="booking-icon" /> From:
      <input type="text" name="from" className="add-booking-input" value={formData.from} onChange={handleChange} />
    </label>
    <label className="add-booking-label">
      <FaMapMarkerAlt className="booking-icon" /> To:
      <input type="text" name="to" className="add-booking-input" value={formData.to} onChange={handleChange} />
    </label>
    <label className="add-booking-label">
      <FaRupeeSign className="booking-icon" /> Price:
      <input type="text" name="price" className="add-booking-input" value={formData.price} onChange={handleChange} />
    </label>
    <label className="add-booking-label">
      Flight Duration:
      <input type="text" name="flightDuration" className="add-booking-input" value={formData.flightDuration} onChange={handleChange} />
    </label>
    <label className="add-booking-label">
      Seat Class:
      <select name="seatClass" className="add-booking-input" value={formData.seatClass} onChange={handleChange}>
        <option>Economy</option>
        <option>Business</option>
        <option>First Class</option>
      </select>
    </label>
  </div>

  {/* Submit button inside form */}
  <button type="submit" className="add-booking-button">Add Booking</button>
</form>


      <aside className="add-booking-aside">
        <h3 className="add-booking-aside-title">Created Booking Details</h3>
        <ul className="add-booking-list">
          {bookings.map((booking, index) => (
            <li key={booking._id} className="add-booking-item">
              <strong className="add-booking-item-title">{index + 1}. {booking.airline}</strong> ({booking.from} → {booking.to})
              <p><FaPlane className="booking-icon" /> <b>Airline No:</b> {booking.airlineNo} | <b>Licence No:</b> {booking.licenceNo}</p>
              <p><FaRupeeSign className="booking-icon" /> <b>Price:</b> {booking.price} | <FaSuitcase className="booking-icon" /> <b>Free Luggage:</b> {booking.freeLuggage}</p>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default AddBookingDetails;
