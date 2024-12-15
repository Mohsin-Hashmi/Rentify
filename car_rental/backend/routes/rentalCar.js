const express = require("express");
const userAuth = require("../middlewares/auth");
const RentCars = require("../models/rentCars");
const validateCarsInfo = require("../utils/validation");
const rentalCarRouter = express.Router();
const multer = require("multer");

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
  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "application/pdf",
  ];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(
      new Error(
        "Invalid file type. Only JPEG, PNG, WebP images and PDFs are allowed."
      ),
      false
    );
  }
};

const upload = multer({ storage, fileFilter });

// API endpoint to handle form submission
rentalCarRouter.post(
  "/rentCar",
  userAuth,
  upload.single("carImage"),
  (req, res) => {
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
      const carFile = req.file;

      if (!carFile) {
        return res.status(400).json({
          message: "File upload failed. Please upload an image or PDF.",
        });
      }

      // Mock saving the data (replace with your database logic)
      const response = {
        carName,
        pricePerDay,
        carLocation,
        description,
        availabilityFrom,
        availabilityTo,
        contactNumber,
        filePath: carFile.path, // Path to the uploaded file
        fileType: carFile.mimetype,
      };

      res.status(200).json({
        message: "Car rental data submitted successfully",
        data: response,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

module.exports = rentalCarRouter;
