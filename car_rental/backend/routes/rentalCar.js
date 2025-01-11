const express = require("express");
const userAuth = require("../middlewares/auth");
const RentCars = require("../models/rentCars");
const {validateCarsInfo} = require("../utils/validation");
const rentalCarRouter = express.Router();
const { GridFsStorage } = require("multer-gridfs-storage");
const multer = require("multer");
const path = require("path");
const moment = require("moment");
const dotenv = require("dotenv");
dotenv.config();
// Configure GridFS storage
const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  file: (req, file) => {
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype==="image/webp" || file.mimetype === "application/pdf") {
      return {
        bucketName: "carImages", // Custom bucket name for car images
        filename: `${Date.now()}_${file.originalname}`,
      };
    } else {
      return null; // Reject files that are not images
    }
  },
});

// Set multer storage engine
const upload = multer({ storage });

// Create a new rental car
rentalCarRouter.post("/rentCar", userAuth, upload.single("carImage"), async (req, res) => {
  try {
    const {
      carName,
      pricePerDay,
      carLocation,
      description,
      availabilityFrom,
      availabilityTo,
      contactNumber,
    } = req.body;
    const carImageId = req.file ? req.file.id : null; // Save the file ID from GridFS

    // Validate car information
    const error  = validateCarsInfo(req);
    if (error) {
      return res.status(400).json({ message: error.message });
    }

    // Parse date fields using moment.js
    const parsedAvailabilityFrom = moment(availabilityFrom, "DD/MM/YYYY").toDate();
    const parsedAvailabilityTo = moment(availabilityTo, "DD/MM/YYYY").toDate();

    // Check if dates are valid
    if (isNaN(parsedAvailabilityFrom) || isNaN(parsedAvailabilityTo)) {
      return res.status(400).json({ message: "Invalid date format" });
    }
  

    // Create a new rental car
    const newCar = new RentCars({
      carName,
      pricePerDay,
      carLocation,
      description,
      availabilityFrom:parsedAvailabilityFrom,
      availabilityTo:parsedAvailabilityTo,
      contactNumber,
      carImage: carImageId, // Save the GridFS file ID
    });

    // Save the car to the database
    await newCar.save();

    res.status(201).json({ message: "Car created successfully", car: newCar });
  } catch (err) {
    console.error("Error creating car:", err);
    res.status(500).json({ message: "Internal server error", error: err.message });
  }
});

module.exports = rentalCarRouter;