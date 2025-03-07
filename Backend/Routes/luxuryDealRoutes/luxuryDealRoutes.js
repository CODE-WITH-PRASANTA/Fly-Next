const express = require("express");
const router = express.Router();
const { addOrUpdateLuxuryDeal, getLuxuryDeals } = require("../../Controller/luxuryDealController/luxuryDealController");

// Route to Add or Update a Luxury Deal
router.post("/add-or-update", addOrUpdateLuxuryDeal);

// Route to Get All Luxury Deals
router.get("/all", getLuxuryDeals);

module.exports = router;
