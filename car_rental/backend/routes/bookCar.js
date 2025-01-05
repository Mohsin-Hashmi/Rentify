const express = require("express");
const bookCarRouter = express.Router();
const userAuth = require("../middlewares/auth");
const Car = require("../models/cars");

/**
 * Search car based on location and date API
 */

bookCarRouter.post("/cars/available", userAuth, async (req, res) => {
  try {
    const { location, pickupDate, returnDate } = req.body;

    const cars = await Car.find({
      location,
      "availability.date": {
        $gte: new Date(pickupDate),
        $lte: new Date(returnDate),
      },
      "availability.isAvailable": true,
    });
    res.send(400).json({
      message: "Available cars",
      cars,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

/**
 * Book a car API
 */
bookCarRouter.post("/car/booking", userAuth, async (req, res) => {
  try {
    const userId = req.user._id;
    const { carId, pickupDate, returnDate } = req.body;
    if (!carId || !pickupDate || !returnDate) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(400).json({
        message: "Car not found",
      });
    }
    // Check Availability of car
    // Check availability
    const isAvailable = car.availability.every((slot) => {
      const date = new Date(slot.date);
      return (
        date < new Date(pickupDate) ||
        date > new Date(returnDate) ||
        slot.isAvailable
      );
    });

    if (!isAvailable) {
      return res
        .status(400)
        .json({ error: "Car is not available for the selected dates." });
    }

    // Calculate total price
    const days =(new Date(returnDate) - new Date(pickupDate)) / (1000 * 60 * 60 * 24);
    const totalPrice = car.pricePerDay * Math.ceil(days);

    // Create new booking
    const booking = new Booking({
      user: userId,
      car: carId,
      pickupDate,
      returnDate,
      totalPrice,
    });

    await booking.save();

    // Update car availability
    car.availability = car.availability.map((slot) => {
      const date = new Date(slot.date);
      if (date >= new Date(pickupDate) && date <= new Date(returnDate)) {
        return { ...slot, isAvailable: false };
      }
      return slot;
    });
    await car.save();

    res.json({ message: "Booking created successfully.", booking });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

module.exports = bookCarRouter;
