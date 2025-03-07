const mongoose = require("mongoose");

const TravelBookingSchema = new mongoose.Schema({
  travelerType: { type: String, required: true },
  title: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  phone: { type: String, required: true },
  postCode: { type: String, required: true },
  email: { type: String, required: true },
  birthDate: { type: Date, required: true },
  mealPreference: { type: String, default: "No" },
  wheelchairRequest: { type: String, default: "No" },
  from: { type: String, required: true },
  to: { type: String, required: true },
  departureDate: { type: Date, required: true },
  returnDate: { type: Date },
  adults: { type: Number, required: true },
  children: { type: Number, required: true },
  travelInsurance: { type: Boolean, default: false },
  extraBaggage: { type: Boolean, default: false },
  priorityBoarding: { type: Boolean, default: false }
}, { timestamps: true });

// Prevent multiple model compilation
const TravelBooking = mongoose.models.TravelBooking || mongoose.model("TravelBooking", TravelBookingSchema);

module.exports = TravelBooking;
