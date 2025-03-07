const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  airline: String,
  operatedBy: String,
  date: String,
  time: String,
  arrivalTime: String,
  stopages: String,
  from: String,
  to: String,
  price: String,
  airlineNo: String,
  licenceNo: String,
  freeLuggage: String,
  flightDuration: String,
  seatClass: String,
  iconUrl: String, // Cloudinary Image URL
});

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
