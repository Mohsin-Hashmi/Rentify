const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const authRoutes = require("./routes/auth.js");
const rentalCarRouter = require("./routes/rentalCar.js");
const profileRouter= require('./routes/profile.js');
const bookCarRouter= require('./routes/bookCar.js');
const contactUsRoute= require('./routes/contactUs.js');
const cookieParser = require("cookie-parser");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(
  cors({
    origin: "http://localhost:3000" /**Frontend origin */,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/", authRoutes);
app.use("/", rentalCarRouter);
app.use("/", profileRouter);
app.use("/", bookCarRouter);
app.use("/", contactUsRoute);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("MongoDB connection error:", err);
  }
};

// Start the server and connect to MongoDB
app.listen(PORT, () => {
  connect();
  console.log(`Server running on port ${PORT}`);
});
