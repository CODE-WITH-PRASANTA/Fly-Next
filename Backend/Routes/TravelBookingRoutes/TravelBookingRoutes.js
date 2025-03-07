const express = require("express");
const router = express.Router();
const { createTravelBooking, getAllTravelBookings, getTravelBookingById, deleteTravelBooking } = require("../../Controller/TravelBookingController/TravelBookingController");

router.post("/create", createTravelBooking);
router.get("/all", getAllTravelBookings);
router.get("/:id", getTravelBookingById);
router.delete("/:id", deleteTravelBooking);

module.exports = router;
