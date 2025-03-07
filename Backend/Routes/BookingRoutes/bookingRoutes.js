const express = require("express");
const router = express.Router();
const bookingController = require("../../Controller/BookingController/bookingController");
const upload = require("../../Config/Multer-config/Multer-config");

router.post("/add", upload.single("icon"), bookingController.addBooking);
router.get("/all", bookingController.getBookings);
router.delete("/delete/:id", bookingController.deleteBooking);

module.exports = router;
