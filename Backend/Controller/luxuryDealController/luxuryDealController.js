const LuxuryDeal = require("../../Model/LuxuryDeal/LuxuryDeal");

// Create or Update Luxury Deal
const addOrUpdateLuxuryDeal = async (req, res) => {
  try {
    const { category, price, number, seats } = req.body;

    if (!category || !price || !number || !seats) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if the deal already exists
    let luxuryDeal = await LuxuryDeal.findOne({ category });

    if (luxuryDeal) {
      // Update existing deal
      luxuryDeal.price = price;
      luxuryDeal.number = number;
      luxuryDeal.seats = seats;
      await luxuryDeal.save();
      return res.status(200).json({ message: "Luxury deal updated successfully", luxuryDeal });
    } else {
      // Create new deal
      luxuryDeal = new LuxuryDeal({ category, price, number, seats });
      await luxuryDeal.save();
      return res.status(201).json({ message: "Luxury deal added successfully", luxuryDeal });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Get all Luxury Deals
const getLuxuryDeals = async (req, res) => {
  try {
    const luxuryDeals = await LuxuryDeal.find();
    return res.status(200).json(luxuryDeals);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addOrUpdateLuxuryDeal, getLuxuryDeals };
