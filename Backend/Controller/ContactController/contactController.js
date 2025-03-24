const Contact = require("../../Model/ContactModel/ContactModel"); // Ensure correct path

// Maximum allowed contact entries
const MAX_CONTACTS = 1;

// Get all contact details
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message || "Error fetching contacts" });
  }
};

// Add a new contact (only if previous one is deleted)
exports.addContact = async (req, res) => {
  try {
    const existingContacts = await Contact.find();
    
    if (existingContacts.length >= MAX_CONTACTS) {
      return res.status(400).json({ message: "Maximum contact limit reached. Delete first before adding a new one." });
    }

    const { phone, email, address1 } = req.body;
    
    if (!phone || !email || !address1) {
      return res.status(400).json({ message: "Phone, Email, and Address1 are required fields." });
    }

    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: "Contact added successfully", contact: newContact });

  } catch (error) {
    res.status(500).json({ error: error.message || "Error adding contact" });
  }
};

exports.updateContact = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedContact = await Contact.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

    if (!updatedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact updated successfully", contact: updatedContact });

  } catch (error) {
    res.status(500).json({ error: error.message || "Error updating contact" });
  }
};


// Delete a contact
exports.deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.status(200).json({ message: "Contact deleted successfully" });

  } catch (error) {
    res.status(500).json({ error: error.message || "Error deleting contact" });
  }
};
