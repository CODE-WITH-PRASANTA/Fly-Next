const Booking = require("../../Model/Booking/Booking");
const cloudinary = require("../../Config/cloudinaryConfig/cloudinaryConfig");
const fs = require("fs");
const upload = require("../../Config/Multer-config/Multer-config");


const addBooking = async (req, res) => {
    try {
      console.log("File received:", req.file); // Debugging log
  
      let iconUrl = "";
      if (req.file) {
        const result = await cloudinary.uploader.upload(req.file.path);
        iconUrl = result.secure_url;
        console.log("Uploaded icon URL:", iconUrl); // Debugging log
        fs.unlinkSync(req.file.path); // Remove file after upload
      } else {
        console.log("No file received");
      }
  
      const newBooking = new Booking({ ...req.body, iconUrl });
      await newBooking.save();
      res.status(201).json({ success: true, message: "Booking added successfully", data: newBooking });
    } catch (error) {
      console.error("Error adding booking:", error.message); // Debugging log
      res.status(500).json({ success: false, message: "Error adding booking", error: error.message });
    }
  };
  
// Get all bookings
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching bookings", error: error.message });
  }
};

// Delete a booking
const deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    if (!booking) {
      return res.status(404).json({ success: false, message: "Booking not found" });
    }
    if (booking.iconUrl) {
      const publicId = booking.iconUrl.split("/").pop().split(".")[0];
      await cloudinary.uploader.destroy(publicId);
    }
    await Booking.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Booking deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error deleting booking", error: error.message });
  }
};

module.exports = { addBooking, getBookings, deleteBooking };