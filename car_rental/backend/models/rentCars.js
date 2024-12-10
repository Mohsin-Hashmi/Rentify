import mongoose from "mongoose";
const rentCars = new mongoose.Schema({
  carName: {
    type: String,
    required: true,
  },
  carImage: {
    type: String,
    required: true,
  },
  pricePerDay: {
    type: Number,
    required: true,
    min: 0, // Ensure the price is non-negative
  },
  carLocation: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default: "Describe your car...", 
  },
  availabilityFrom: {
    type: Date,
    required: true,
  },
  availabilityTo: {
    type: Date,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10,15}$/, // Validate phone number format (10 to 15 digits)
  },
});

const RentCars = mongoose.model("RentCars", rentCars);

export default RentCars;
