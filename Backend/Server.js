const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/Db/Db'); // Database connection
const bodyParser = require('body-parser');
const cors = require('cors');
const blogRoutes = require("./Routes/BlogRoutes/blogRoutes");
const updatenewsRoutes = require("./Routes/UpdateNewsRoutes/UpdateNewsRoutes");
const categoryRoutes = require("./Routes/Category/categoryRoutes");
const bookingRoutes = require("./Routes/BookingRoutes/bookingRoutes");
const travelbookingRoutes = require("./Routes/TravelBookingRoutes/TravelBookingRoutes");
const luxuryDealsRoutes = require(".//Routes/luxuryDealRoutes/luxuryDealRoutes");
const imageRoutes = require("./Routes/imageRoutes/imageRoutes");


dotenv.config();
connectDB();

const app = express(); 

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());
app.use(bodyParser.json());

// Basic Route
app.get('/', (req, res) => {
  res.send('Server is running...');
});

app.use("/api/blogs", blogRoutes);
app.use("/api/updatenews", updatenewsRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/travelbookings", travelbookingRoutes);
app.use("/api/luxury-deals", luxuryDealsRoutes);
app.use("/api/images", imageRoutes);




// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
