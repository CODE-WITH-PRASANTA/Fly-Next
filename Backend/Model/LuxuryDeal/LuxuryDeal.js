const mongoose = require("mongoose");

const LuxuryDealSchema = new mongoose.Schema(
  {
    category: { type: String, required: true, unique: true },
    price: { type: String, required: true },
    number: { type: String, required: true },
    seats: { type: String, required: true },
  },
  { timestamps: true }
);

const LuxuryDeal = mongoose.model("LuxuryDeal", LuxuryDealSchema);

module.exports = LuxuryDeal;
