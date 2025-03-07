const TravelBooking = require("../../Model/TravelBookingModel/TravelBookingModel");

// Create Travel Booking
exports.createTravelBooking = async (req, res) => {
  try {
    const newTravelBooking = new TravelBooking(req.body);
    await newTravelBooking.save();
    res.status(201).json({ success: true, message: "Travel booking saved successfully", data: newTravelBooking });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error saving travel booking", error: error.message });
  }
};

// Get All Travel Bookings
exports.getAllTravelBookings = async (req, res) => {
  try {
    const travelBookings = await TravelBooking.find();
    res.status(200).json({ success: true, data: travelBookings });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching travel bookings", error: error.message });
  }
};

// Get Single Travel Booking
exports.getTravelBookingById = async (req, res) => {
  try {
    const travelBooking = await TravelBooking.findById(req.params.id);
    if (!travelBooking) return res.status(404).json({ success: false, message: "Travel booking not found" });
    res.status(200).json({ success: true, data: travelBooking });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching travel booking", error: error.message });
  }
};

// Delete Travel Booking
exports.deleteTravelBooking = async (req, res) => {
  try {
    const deletedTravelBooking = await TravelBooking.findByIdAndDelete(req.params.id);
    if (!deletedTravelBooking) return res.status(404).json({ success: false, message: "Travel booking not found" });
    res.status(200).json({ success: true, message: "Travel booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting travel booking", error: error.message });
  }
};
