
const express= require('express');
const userAuth= require('../middlewares/auth');
const User = require('../models/User');
const profileRouter= express.Router();
const mongoose= require('mongoose');


// View Profile API
profileRouter.get('/profile/view', userAuth, async(req,res)=>{
    try{
        const loggedInUser= req.user;
        if(!loggedInUser){
            throw new Error("Invalid User");
        }
        res.send(loggedInUser);
    }catch(err){
        res.status(400).send("ERROR: " + err.message);
    }
});

// Update Profile API
profileRouter.post('/profile/create/:id', userAuth, async(req,res)=>{
    try{
        const loggedInUser= req.user;
        const userId= req.params.id;
        if(!loggedInUser || !mongoose.Types.ObjectId.isValid(userId)){
            throw new Error("Invalid User");
        }
        
        const user= await User.findById(userId);
        if(!user){
            return res.status(400).json({message: "User Not Found"});
        }
        const{firstName, lastName, profileImage, about}= req.body;

        const userProfile= await User.findByIdAndUpdate(userId,{
            firstName,
            lastName,
            profileImage,
            about
        },{new:true});
    
        res.status(200).json({
            message: "Profile Updated Succcessfully"
        });
    }catch(err){
        res.status(400).send("ERROR: " + err.message);
    }
});

// Forget Password API
profileRouter.post('/profile/forget-password', async(req,res)=>{
    try{
        
    }catch(err){
        res.status(400).send("ERROR: " + err.message);
    }
})

module.exports= profileRouter;