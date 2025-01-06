const express = require("express");
const userAuth = require("../middlewares/auth");
const RentCars = require("../models/rentCars");
const validateCarsInfo = require("../utils/validation");
const rentalCarRouter = express.Router();
const multer = require("multer");
const path = require("path");

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to save the uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// File filter to allow only images and PDFs
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG, PNG, WEBP, and PDF files are allowed."), false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

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
    const carImage = req.file ? req.file.path : null;

    // Validate car information
    const { error } = validateCarsInfo({
      carName,
      pricePerDay,
      carLocation,
      description,
      availabilityFrom,
      availabilityTo,
      contactNumber,
    });
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    // Create a new rental car
    const newCar = new RentCars({
      carName,
      pricePerDay,
      carLocation,
      description,
      availabilityFrom,
      availabilityTo,
      contactNumber,
      carImage,
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