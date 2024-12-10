import express from "express";
import userAuth from "../middlewares/auth";
import RentCars from "../models/rentCars";
import validateCarsInfo from "../utils/validation"

const rentalCarRouter = express.Router();

rentalCarRouter.post("/rentCar", userAuth, async (req, res) => {
    
  try {
   
    const {
      carName,
      carImage,
      pricePerDay,
      carLocation,
      description,
      availabilityFrom,
      availabilityTo,
      contactNumber,
    } = req.body;
     validateCarsInfo(req);
    const carInfo= await new RentCars({
      carName,
      carImage,
      pricePerDay,
      carLocation,
      description,
      availabilityFrom,
      availabilityTo,
      contactNumber
    });

    carInfo.save();
    res.send({
        message: "submitted successfully"
    })
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default rentalCarRouter;
