const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  phone: {
    type: String,
    required: true,
    unique: true, // Ensures no duplicate phone numbers
    match: [/^\d{10}$/, "Phone number must be exactly 10 digits"], // Ensures exactly 10 digits
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"], // Basic email format validation
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
  },
  address3: {
    type: String,
  },
});

const Contact = mongoose.model("Contact", contactSchema);
module.exports = Contact;
