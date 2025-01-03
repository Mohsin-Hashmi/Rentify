
const express= require('express');
const bookCarRouter= express.Router();
const userAuth= require('../middlewares/auth');
const Car= require('../models/cars');


/**
 * Search car based on location and date API
 */

bookCarRouter.post('/cars/available',userAuth, async(req,res)=>{
    try{
        const {location, pickupDate, returnDate}= req.body;

        const cars= await Car.find({
            location,
            'availability.date':{
                $gte: new Date(pickupDate),
                $lte: new Date(returnDate)
            },
            'availability.isAvailable': true
        });
        res.send(400).json({
            message: 'Available cars',
            cars
        });
    }catch(err){
        res.status(400).json({
            message: err.message
        });
    }
});


/**
 * Book a car API
 */
bookCarRouter.post('/car/booking', userAuth, async(req,res)=>{
    try{
        const userId= req.user._id;
        const {carId, pickupDate, returnDate}= req.body;
        if(!carId || !pickupDate || !returnDate){
            return res.status(400).json({
                message: "All fields are required"
            });
        }
        const car= await Car.findById(carId);
        if(!car){
            return res.status(400).json({
                message: "Car not found"
            });
        }
        // Check Availability of car
    }catch(err){
        res.status(400).json({
            message: err.message
        })
    }
})

module.exports= bookCarRouter;